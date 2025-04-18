"use client";

import { useEffect, useState } from "react";
import { getRandomNumber } from "@/utils/getRandomNumber";

import Number from "./Number";

export interface ClientRandomNumberProps {
  className?: string;
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
      const response = await getRandomNumber();
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

  return <Number className={className} number={number} />;
}
