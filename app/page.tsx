import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <main className="flex flex-col items-center justify-center flex-1 px-20 text-center">
        <h1 className="text-6xl font-bold">
          Welcome to Gemini's Next.js App!
        </h1>

        <p className="mt-3 text-2xl">
          Get started by asking Gemini anything.
        </p>

        <div className="flex items-center justify-center mt-6">
          <button className="px-6 py-3 text-lg font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
            Ask Gemini
          </button>
        </div>
      </main>
    </div>
  );
}
