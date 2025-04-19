import { getRandomNumber } from "@/utils/getRandomNumber";
import ClientRandomNumber from "./ClientRandomNumber";
import Number from "./Number";

export interface ServerRandomNumberProps {
  className?: string;
}

export default async function ServerRandomNumber({
  className
}: ServerRandomNumberProps) {
  let number: Awaited<ReturnType<typeof getRandomNumber>> | undefined;

  try {
    number = await getRandomNumber();
  } catch {
    return <ClientRandomNumber className={className} />;
  }

  return <Number className={className} number={number} />;
}
