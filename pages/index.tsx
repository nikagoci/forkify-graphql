import Navbar from "@/components/navbar";
import Header from "@/components/shared/header";

export default function Home() {
  return (
    <main className="h-screen lg:pt-12">
      <div className="w-full h-full bg-gray lg:rounded-2xl lg:w-[90%] xl:w-[60%] lg:h-4/5 lg:mx-auto">
        <Navbar />
        <Header />
      </div>
    </main>
  )
}
