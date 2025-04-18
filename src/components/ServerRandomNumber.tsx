import ClientRandomNumber from "./ClientRandomNumber";

export interface ServerRandomNumberProps {
  className?: string;
}

async function fetching() {
  await new Promise<void>((res) => {
    setTimeout(() => res(), 1500);
  });

  const rand = Math.floor(Math.random() * 10);
  if (rand > 4) return rand;
  else throw new Error("error");
}

export default async function ServerRandomNumber({
  className
}: ServerRandomNumberProps) {
  let number: Awaited<ReturnType<typeof fetching>> | undefined;

  try {
    number = await fetching();
  } catch {
    return <ClientRandomNumber className={className} />;
  }

  return <div className={className}>{number}</div>;
}
