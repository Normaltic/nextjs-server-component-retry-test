"use client";

import { useEffect, useState } from "react";

export interface ClientRandomNumberProps {
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

export default function ClientRandomNumber({
  className
}: ClientRandomNumberProps) {
  const [number, setNumber] = useState<number>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error>();

  const fetch = async () => {
    try {
      setLoading(true);
      setError(undefined);
      const response = await fetching();
      setNumber(response);
    } catch (e) {
      setError(e as Error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetch();
  }, []);

  if (loading) {
    return <div className={className}>Loading...</div>;
  }
  if (number === undefined || error) {
    return (
      <div className="w-full h-full flex justify-center items-center">
        <button type="button" onClick={fetch}>
          Refresh
        </button>
      </div>
    );
  }

  return <div className={className}>{number}</div>;
}
