"use client";

import { useState } from "react";

export default function ClientRender<T>({
  fetcher,
  render
}: {
  fetcher: () => Promise<T>;
  render: (data: T) => React.ReactNode;
}) {
  const [data, setData] = useState<T | undefined>(undefined);
  const [error, setError] = useState<Error | undefined>(undefined);
  const [loading, setLoading] = useState(false);

  const fetch = async () => {
    try {
      setLoading(true);
      setError(undefined);
      const response = await fetcher();
      setData(response);
    } catch (e) {
      setError(e as Error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!data || error) {
    return (
      <div className="w-full h-full flex justify-center items-center">
        <button type="button" onClick={fetch}>
          Refresh
        </button>
      </div>
    );
  }

  return render(data);
}
