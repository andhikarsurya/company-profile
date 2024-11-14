import Footer from "./components/footer";
import Navbar from "./components/navbar";
import { ReactNode } from "react";

export default function LayoutHome({children}:{children:ReactNode})
{
  return (
    <main className="w-screen h-screen">
      <Navbar></Navbar>
      {children}
      <Footer></Footer>
    </main>
  );
}
