import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

export default function RootLayout() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col justify-start items-center w-fit md:w-[50%] mx-auto text-slate-300">
        <Outlet />
      </main>
    </>
  );
}
