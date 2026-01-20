import Hello from "@/app/components/hello";

const Home = () => {
    return (
        <main className={"flex flex-col items-center justify-center min-h-screen w-full"}>
          <div className={"text-5xl underline mb-5"}>Welcome to Next.js ! (v16)</div>
          <Hello />
        </main>
    )
}
export default Home
