import { Form, Button, Stack, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { WheelOption } from "../components/WheelOption";
import { useWheelOption } from "../context/WheelOptionContext";

export function Options() {
  const { addDefaultOption, getOptions } = useWheelOption();
  const wheelOptions = getOptions();

  return (
    <Stack>
      <h1>Wheel Options</h1>

      <Form>
        {wheelOptions.map((item) => (
          <WheelOption {...item} key={item.id} />
        ))}
      </Form>
      <Button className="mb-3" onClick={() => addDefaultOption()}>
        Add New Option
      </Button>

      <Button variant="success">
        <Nav.Link to="/wheely-cool-app/wheel" as={NavLink}>
          Spin the Wheel!
        </Nav.Link>
      </Button>
    </Stack>
  );
}
