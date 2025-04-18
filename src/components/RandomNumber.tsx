export interface RandomNumberProps {
  className?: string;
  number: number;
}

export default function RandomNumber({ className, number }: RandomNumberProps) {
  return <div className={className}>{number}</div>;
}
