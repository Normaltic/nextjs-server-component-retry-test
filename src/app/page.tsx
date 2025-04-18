import RandomNumber from "@/components/RandomNumber";
import ServerRender from "@/components/ServerRender";

async function fetching() {
  await new Promise<void>((res) => {
    setTimeout(() => res(), 1500);
  });

  const rand = Math.floor(Math.random() * 10);
  if (rand > 4) return rand;
  else throw new Error("error");
}

export default async function Home() {
  return (
    <div>
      <main className="grid grid-cols-2 gap-4 h-80 p-4">
        <div className="col-span-2 bg-green-400"></div>
        <div className="col-span-1 bg-green-400"></div>
        <div className="col-span-1 border-1">
          <ServerRender
            fetcher={fetching}
            render={(data) => (
              <RandomNumber
                className="w-full h-full flex justify-center items-center"
                number={data}
              />
            )}
          />
        </div>
      </main>
    </div>
  );
}
