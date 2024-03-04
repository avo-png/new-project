import Link from "next/link";

export default function Home() {
  return (
    <>
      <main>
        <header className="flex justify-between items-center mb-4">
          <h1>Todo App</h1>
          <Link href="/new">New App</Link>
        </header>
      </main>
    </>
  );
}
