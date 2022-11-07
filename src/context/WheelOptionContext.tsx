import { createContext, ReactNode, useContext, useState } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { generateRandomColourHex } from "../utilities/randomGeneratorUtils";

// @ts-ignore
import { db } from "../data/firebase-config.js";
import { collection, getDocs, addDoc, setDoc, doc } from "firebase/firestore";

type WheelOptionProviderProps = {
  children: ReactNode;
};

type WheelOption = {
  id: number;
  name: string;
  colour: string;
};

type WheelPrompt = {
  name: string;
};

type WheelOptionContext = {
  getOptions: () => WheelOption[];
  getOptionIndex: (id: number) => number;
  getOptionName: (id: number) => string;
  getOptionColour: (id: number) => string;
  addDefaultOption: () => void;
  updateOption: (id: number, name: string) => void;
  updateOptionColour: (id: number, colour: string) => void;
  removeOption: (id: number) => void;
  getPrompt: () => string;
  updatePrompt: (name: string) => void;
  loadOptions: () => void;
  saveOptions: () => void;
};

const WheelOptionContext = createContext({} as WheelOptionContext);
const wheelOptionsCollectionRef = collection(db, "wheelOptions");

export function useWheelOption() {
  return useContext(WheelOptionContext);
}

// TODO: needs cleaning up, too many duplicate objects being passed around
//TODO: Better persistent data than just hooks and local storage (works for demo)
export function WheelOptionProvider({ children }: WheelOptionProviderProps) {
  const [wheelOptions, setWheelOptions] = useLocalStorage<WheelOption[]>(
    "wheel-options",
    [{ id: 1, name: "", colour: generateRandomColourHex() }]
  );

  const [wheelPrompt, setWheelPrompt] = useLocalStorage<WheelPrompt>(
    "wheel-prompt",
    { name: "" }
  );

  function getOptions() {
    return wheelOptions;
  }

  function getPrompt() {
    return wheelPrompt.name;
  }

  function updatePrompt(name: string) {
    setWheelPrompt({ name: name });
  }

  function getOptionIndex(id: number) {
    return wheelOptions.findIndex((item) => item.id === id);
  }

  function getOptionName(id: number) {
    return wheelOptions?.find((item) => item.id === id)?.name || "";
  }

  function getOptionColour(id: number) {
    return wheelOptions?.find((item) => item.id === id)?.colour || "";
  }

  function updateOption(id: number, name: string) {
    setWheelOptions((currItems) => {
      return currItems.map((item) => {
        //inefficient loop
        if (item.id === id) {
          return { ...item, name: name };
        } else {
          return item;
        }
      });
    });
  }

  function updateOptionColour(id: number, colour: string) {
    setWheelOptions((currItems) => {
      return currItems.map((item) => {
        //inefficient loop
        if (item.id === id) {
          return { ...item, colour: colour };
        } else {
          return item;
        }
      });
    });
  }

  function addDefaultOption() {
    setWheelOptions((currItems) => {
      return [
        ...currItems,
        {
          id: (wheelOptions.at(-1)?.id || 0) + 1,
          name: "",
          colour: generateRandomColourHex(),
        },
      ];
    });
  }

  function removeOption(id: number) {
    setWheelOptions((currItems) => {
      return currItems.filter((item) => item.id !== id);
    });
  }

  function loadOptions() {
    const getWheelOptions = async () => {
      const data = await getDocs(wheelOptionsCollectionRef);
      const latestDoc = data.docs[data.docs.length - 1].data();
      setWheelOptions(latestDoc.options as any);
      setWheelPrompt({ name: latestDoc.prompt as any });
    };

    getWheelOptions();
  }

  function saveOptions() {
    const addWheelOptions = async () => {
      await setDoc(doc(db, "wheelOptions", Date.now().toString()), {
        prompt: wheelPrompt.name,
        options: wheelOptions,
      });
    };

    addWheelOptions();
  }

  return (
    <WheelOptionContext.Provider
      value={{
        getOptions,
        getOptionName,
        getOptionColour,
        getOptionIndex,
        addDefaultOption,
        updateOption,
        updateOptionColour,
        removeOption,
        getPrompt,
        updatePrompt,
        loadOptions,
        saveOptions,
      }}
    >
      {children}
    </WheelOptionContext.Provider>
  );
}
