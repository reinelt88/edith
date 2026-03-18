import fs from "fs";
import path from "path";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Gallery from "@/components/Gallery";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

function getGalleryImages(): string[] {
  const galleryDir = path.join(process.cwd(), "public", "gallery");
  try {
    const files = fs.readdirSync(galleryDir);
    return files
      .filter((file) => /\.(jpg|jpeg|png|webp)$/i.test(file))
      .sort()
      .map((file) => `/gallery/${file}`);
  } catch {
    return [];
  }
}

export default function Home() {
  const images = getGalleryImages();

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <Gallery images={images} />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
