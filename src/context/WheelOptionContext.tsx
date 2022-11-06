import { createContext, ReactNode, useContext, useState } from "react";
import { generateRandomColourHex } from "../utilities/randomGeneratorUtils";

type WheelOptionProviderProps = {
  children: ReactNode;
};

type WheelOption = {
  id: number;
  name: string;
  colour: string;
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
};

const WheelOptionContext = createContext({} as WheelOptionContext);

export function useWheelOption() {
  return useContext(WheelOptionContext);
}

export function WheelOptionProvider({ children }: WheelOptionProviderProps) {
  const [wheelOptions, setWheelOptions] = useState<WheelOption[]>([
    { id: 1, name: "", colour: "red" },
  ]);

  function getOptions() {
    return wheelOptions;
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
    console.log(colour);

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
      }}
    >
      {children}
    </WheelOptionContext.Provider>
  );
}
