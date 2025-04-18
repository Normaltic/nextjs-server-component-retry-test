export interface RandomNumberProps {
  className?: string;
}

export async function fetching() {
  await new Promise<void>((res) => {
    setTimeout(() => res(), 1500);
  });

  const rand = Math.floor(Math.random() * 10);
  if (rand > 4) return rand;
  else throw new Error("error");
}

export default async function RandomNumber({ className }: RandomNumberProps) {
  const number = await fetching();

  return <div className={className}>{number}</div>;
}
