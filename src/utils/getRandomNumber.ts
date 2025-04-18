export async function getRandomNumber() {
  await new Promise<void>((res) => {
    setTimeout(() => res(), 1500);
  });

  const rand = Math.floor(Math.random() * 10);
  if (rand > 4) return rand;
  else throw new Error("error");
}
