import { Form, Button } from "react-bootstrap";
import { WheelOption } from "../components/WheelOption";
import { useWheelOption } from "../context/WheelOptionContext";

export function Options() {
  const { addDefaultOption, getOptions } = useWheelOption();
  const wheelOptions = getOptions();

  return (
    <>
      <h1>Wheel Options</h1>
      <Button className="mb-3" onClick={() => addDefaultOption()}>
        Add New Option
      </Button>

      <Form>
        {wheelOptions.map((item) => (
          <WheelOption {...item} key={item.id} />
        ))}
      </Form>
    </>
  );
}
