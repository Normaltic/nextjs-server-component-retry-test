import ClientRender from "./ClientRender";

export default async function ServerRender<T>({
  fetcher,
  render
}: {
  fetcher: () => Promise<T>;
  render: (data: T) => React.ReactNode;
}) {
  let data: T | undefined = undefined;

  try {
    data = await fetcher();
  } catch {
    return <ClientRender fetcher={fetcher} render={render} />;
  }

  return render(data);
}
