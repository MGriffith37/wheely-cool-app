import {
  Col,
  Form,
  Row,
  InputGroup,
  Button,
  FloatingLabel,
} from "react-bootstrap";
import { useWheelOption } from "../context/WheelOptionContext";

type WheelOptionProps = {
  id: number;
  name: string;
};

export function WheelOption({ id }: WheelOptionProps) {
  const {
    getOptionName,
    getOptionColour,
    getOptionIndex,
    addDefaultOption,
    updateOption,
    updateOptionColour,
    removeOption,
  } = useWheelOption();

  const option = getOptionName(id);
  const optionColour = getOptionColour(id);
  const optionNumber = getOptionIndex(id) + 1;

  // TODO: Need to reduce size of component and store child components as their own components
  return (
    <Form.Group as={Row} key={id} className="mb-3 align-items-center">
      <Col xs={2} md={1} align="left">
        <Form.Control
          type="color"
          size="lg"
          id={`colorInput${id}`}
          title="Choose this option's colour for the wheel"
          value={optionColour}
          onChange={(e) => updateOptionColour(id, e.target.value)}
        ></Form.Control>
      </Col>
      <Col xs={10} md={11}>
        <InputGroup>
          <FloatingLabel
            controlId="floatingInput"
            label={`Option #${optionNumber}`}
          >
            <Form.Control
              placeholder={`Option #${optionNumber}`}
              value={option}
              onChange={(e) => updateOption(id, e.target.value)}
              autoFocus
              onKeyDown={(event) => {
                if (event.key === "Enter") {
                  addDefaultOption();
                } else if (
                  // TODO - autofocus back up the chain, so can backspace the whole lot easily
                  (event.key === "Backspace" || event.key === "Delete") &&
                  !option
                ) {
                  removeOption(id);
                }
              }}
            />
          </FloatingLabel>
          <Button onClick={() => removeOption(id)} variant="outline-danger">
            Remove
          </Button>
        </InputGroup>
      </Col>
    </Form.Group>
  );
}
