import ErrorBoundary from "@/components/ErrorBoundary";
import RandomNumber from "@/components/RandomNumber";

export default async function Home() {
  return (
    <div>
      <main className="grid grid-cols-2 gap-4 h-80 p-4">
        <div className="col-span-2 bg-green-400"></div>
        <div className="col-span-1 bg-green-400"></div>
        <div className="col-span-1 border-1">
          <ErrorBoundary
            fallback={
              <div className="w-full h-full flex justify-center items-center bg-red-400">
                Error
              </div>
            }
          >
            <RandomNumber className="w-full h-full flex justify-center items-center border-1" />
          </ErrorBoundary>
        </div>
      </main>
    </div>
  );
}
