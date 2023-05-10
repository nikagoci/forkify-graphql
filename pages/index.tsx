import Navbar from "@/components/navbar";
import Header from "@/components/shared/header";

export default function Home() {
  return (
    <main className="h-screen">
      <div className="w-full h-full bg-gray">
        <Navbar />
        <Header />
      </div>
    </main>
  )
}
