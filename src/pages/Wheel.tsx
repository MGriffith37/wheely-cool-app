// @ts-ignore
import WheelComponent from "react-wheel-of-prizes";
import { useWheelOption } from "../context/WheelOptionContext";
import { Container, Stack, Nav, Col, Row } from "react-bootstrap";
import { useState } from "react";

export function Wheel() {
  const { getOptions, getPrompt } = useWheelOption();

  const segments = getOptions().map((e) => e.name);
  const segmentColours = getOptions().map((e) => e.colour);
  const wheelPrompt = getPrompt();
  const [wheelWinner, setWheelWinner] = useState<string>();
  const onFinished = (winner: string) => {
    setWheelWinner(winner);
  };

  return (
    <Stack gap={2} className="col-xs-12 mx-auto text-center">
      <h1>Spin the Wheel</h1>
      <p>
        Cast your fate with the mystical WHEEL-O-RAMA, its location on this
        webpage is never center!
      </p>
      <h2>{wheelPrompt}</h2>
      <h1>{`${wheelWinner}!!!`}</h1>
      <Row>
        <WheelComponent
          segments={segments}
          segColors={segmentColours}
          onFinished={(winner: string) => onFinished(winner)}
          primaryColor="black"
          contrastColor="white"
          buttonText="Spin"
          isOnlyOnce={false}
          size={180}
          upDuration={100}
          downDuration={1000}
          fontFamily="Arial"
        />
      </Row>
    </Stack>
  );
}
