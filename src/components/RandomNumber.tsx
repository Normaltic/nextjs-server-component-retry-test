import Number from "./Number";

import { getRandomNumber } from "@/utils/getRandomNumber";

export interface RandomNumberProps {
  className?: string;
}

export default async function RandomNumber({ className }: RandomNumberProps) {
  const number = await getRandomNumber();

  return <Number className={className} number={number} />;
}
