import {
  Form,
  Button,
  Stack,
  Nav,
  InputGroup,
  FloatingLabel,
} from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { WheelOption } from "../components/WheelOption";
import { useWheelOption } from "../context/WheelOptionContext";

export function Options() {
  const { addDefaultOption, getOptions, getPrompt, updatePrompt } =
    useWheelOption();
  const wheelOptions = getOptions();
  const wheelPrompt = getPrompt();

  return (
    <Stack className="col-xs-12 mx-auto text-center">
      <h1>Ask the Wheel</h1>
      <p>
        Got a choice to make but you just can't decide? Why not take the
        WHEEL-O-RAMA for a ride?
      </p>
      <p>
        Feed it a prompt and some options to pick, then give it a spin to find
        your answer real quick!
      </p>

      <Form.Group className="mb-3 align-items-center">
        <InputGroup>
          <FloatingLabel
            controlId="floatingInput"
            label={"What question do you have for the WHEEL?"}
          >
            <Form.Control
              placeholder={"What question do you have for the WHEEL?"}
              value={wheelPrompt}
              onChange={(e) => updatePrompt(e.target.value)}
              autoFocus
            />
          </FloatingLabel>
        </InputGroup>
      </Form.Group>

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
          Ask the Wheel!
        </Nav.Link>
      </Button>
    </Stack>
  );
}
