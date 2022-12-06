import { useEffect, useState } from "react";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import About from "./About";
import Blobs from "./Blobs";
import FAQ from "./FAQ";
import MainSection from "./MainSection";

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    setIsMobile(
      window.matchMedia("only screen and (max-width: 760px)").matches
    );
  }, []);
  return (
    <>
      <div
        style={{
          backgroundColor: "#e1d7d5",
        }}
      >
        {isMobile ? (
          <Navbar />
        ) : (
          <>
            <Navbar />
            <MainSection />
          </>
        )}
      </div>
      {isMobile ? <MainSection /> : <></>}
      <Blobs />
      <About />
      <FAQ />
      <Footer />
    </>
  );
}
