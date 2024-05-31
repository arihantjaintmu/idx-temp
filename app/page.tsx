import { fetchFood } from "@/api/fetchFood";

export default async function Home() {
  const result = await fetchFood();
  return (
    <>
      {result.results.map((data: any) => (
        <>
          <div key={data.id}>
            <img src={data.thumbnail_url} alt={""} className="h-[200px] w-[200px]" />
            <p>{data.name}</p>
            <p>{data.description}</p>
          </div>
        </>
      ))}
      <main className="text-blue-500 text-center text-3xl mt-5">
        Hello This is done from Google Idx
      </main>
    </>
  );
}
