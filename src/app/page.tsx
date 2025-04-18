import RandomNumber from "@/components/RandomNumber";

export default async function Home() {
  return (
    <div>
      <main className="grid grid-cols-2 gap-4 h-80 p-4">
        <div className="col-span-2 bg-green-400"></div>
        <div className="col-span-1 bg-green-400"></div>
        <div className="col-span-1 border-1">
          <RandomNumber className="w-full h-full flex justify-center items-center border-1" />
        </div>
      </main>
    </div>
  );
}
