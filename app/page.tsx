import AboutUs from "@/components/main/AboutUs";
import Encryption from "@/components/main/Encryption";
import Footer from "@/components/main/Footer";
import Hero from "@/components/main/Hero";
import Solutions from "@/components/main/Solutions";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20">
        <Hero />
        <Encryption />
        <Solutions />
        <AboutUs />
        <Footer />
      </div>
    </main>
  );
}
