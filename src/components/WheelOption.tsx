import { useState } from "react";
import {
  Col,
  Form,
  Row,
  InputGroup,
  Button,
  FloatingLabel,
  Container,
  FormControl,
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
  console.log(
    `option: ${option} and id: ${id} and optionNumber: ${optionNumber}`
  );
  return (
    <Form.Group as={Row} key={id} className="mb-3 align-items-center">
      <Col xs={2}>
        <Form.Control
          type="color"
          size="lg"
          id={`colorInput${id}`}
          title="Choose this option's colour for the wheel"
          value={optionColour}
          onChange={(e) => updateOptionColour(id, e.target.value)}
        ></Form.Control>
      </Col>
      <Col xs={10}>
        <InputGroup>
          <FloatingLabel
            controlId="floatingInput"
            label={`Option #${optionNumber}`}
          >
            <Form.Control
              // disabled={item.disabled}
              placeholder={`Option #${optionNumber}`}
              value={option}
              onChange={(e) => updateOption(id, e.target.value)}
              autoFocus
              onKeyDown={(event) => {
                console.log(event.key);
                console.log(option);
                if (event.key === "Enter") {
                  addDefaultOption();
                } else if (
                  // To Do - autofocus back up the chain, so can backspace the whole lot easily
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
