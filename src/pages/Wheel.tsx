// @ts-ignore
import WheelComponent from "react-wheel-of-prizes";
import { useWheelOption } from "../context/WheelOptionContext";
import { Container, Stack, Nav, Col } from "react-bootstrap";

export function Wheel() {
  const { getOptions } = useWheelOption();

  const segments = getOptions().map((e) => e.name);
  const segmentColours = getOptions().map((e) => e.colour);

  const onFinished = (winner: string) => {
    console.log(winner);
  };

  return (
    <Stack gap={2} className="col-xs-12 mx-auto text-center">
      <h1>Spin the Wheel</h1>
      <Col xs={12}>
        <WheelComponent
          style={"width : 160%"}
          segments={segments}
          segColors={segmentColours}
          onFinished={(winner: string) => onFinished(winner)}
          primaryColor="black"
          contrastColor="white"
          buttonText="Spin"
          isOnlyOnce={false}
          size={200}
          upDuration={100}
          downDuration={1000}
          fontFamily="Arial"
        />
      </Col>
    </Stack>
  );
}
