import { FaShoppingBag } from "react-icons/fa";
import { useSelector } from "react-redux";

export default function Header() {
  const { amount } = useSelector((state) => state.cart);
  return (
    <nav className="flex justify-between items-center px-[4%] lg:px-[8%] bg-[#1E2A5E] h-20 text-white">
      <h1 className="text-3xl font-bold tracking-widest">Redux ToolKit</h1>

      <div className="relative">
        <FaShoppingBag className="text-3xl" />
        <div className="absolute -top-2 -right-3  bg-[#7C93C3] text-white rounded-full w-6 h-6 flex justify-center items-center font-semibold leading-none">
          {amount}
        </div>
      </div>
    </nav>
  );
}
