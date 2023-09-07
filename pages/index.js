import { Inter } from "next/font/google";
import Navigation from "@/components/navigation/navigation";
import Header from "@/components/header/header";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Navigation />
      <Header />
    </>
  );
}
