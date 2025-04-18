export interface NumberProps {
  className?: string;
  number: number;
}

export default function Number({ className, number }: NumberProps) {
  return <div className={className}>{number}</div>;
}
