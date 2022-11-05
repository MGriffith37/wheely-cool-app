type WheelOptionProps = {
  id: number;
  name: string;
  disabled: boolean;
};

export function WheelOption({ id, name, disabled }: WheelOptionProps) {
  return <h1>{name}</h1>;
}
