import {
  Col,
  Form,
  Row,
  InputGroup,
  Button,
  FloatingLabel,
} from "react-bootstrap";
import wheelOptions from "../data/options.json";
import { WheelOption } from "../components/WheelOption";

export function Options() {
  return (
    <>
      <h1>Wheel Options</h1>
      <Row md={1}>
        <Form>
          {wheelOptions.map((item) => (
            <Form.Group className="mb-3" controlId="formGroup">
              <InputGroup className="mb-3">
                <InputGroup.Checkbox aria-label="Checkbox for following text input" />
                <FloatingLabel
                  controlId="floatingInput"
                  label={`Option #${item.id}`}
                >
                  <Form.Control
                    disabled={item.disabled}
                    defaultValue={item.name}
                    placeholder={`Option #${item.id}`}
                  />
                </FloatingLabel>
                <Button variant="outline-secondary" id="button-addon2">
                  Button
                </Button>
              </InputGroup>
            </Form.Group>
            // <Col key={item.id} class="col-12">
            //   <WheelOption {...item} />
            // </Col>
          ))}
        </Form>
      </Row>
    </>
  );
}
