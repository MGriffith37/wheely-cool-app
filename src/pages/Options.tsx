import { Form, Button, Stack, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { WheelOption } from "../components/WheelOption";
import { useWheelOption } from "../context/WheelOptionContext";

export function Options() {
  const { addDefaultOption, getOptions } = useWheelOption();
  const wheelOptions = getOptions();

  return (
    <Stack gap={2} className="col-xs-12 mx-auto text-center">
      <h1>Wheel Options</h1>

      <Button className="mb-3" onClick={() => addDefaultOption()}>
        Add New Option
      </Button>

      <Form>
        {wheelOptions.map((item) => (
          <WheelOption {...item} key={item.id} />
        ))}
      </Form>
      <Button className="mb-3" variant="success">
        <Nav.Link to="/wheely-cool-app/wheel" as={NavLink}>
          Go to Wheel!
        </Nav.Link>
      </Button>
    </Stack>
  );
}
