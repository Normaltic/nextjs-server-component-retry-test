"use client";

import { useRouter } from "next/navigation";
import { startTransition, useState } from "react";

export interface FallbackProps {
  reset: () => void;
  error: Error;
}

export default function Fallback({ reset, error }: FallbackProps) {
  const router = useRouter();
  const [refreshing, setRefreshing] = useState(false);

  function retry() {
    setRefreshing(true);
    startTransition(() => {
      router.refresh();
      reset();
      setRefreshing(false);
    });
  }

  return (
    <div className="w-full h-full flex justify-center items-center bg-red-400">
      {refreshing ? (
        <div>loading</div>
      ) : (
        <button type="button" onClick={retry}>
          Retry
        </button>
      )}
    </div>
  );
}
