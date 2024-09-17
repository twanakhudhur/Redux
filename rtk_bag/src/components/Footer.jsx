import { useDispatch, useSelector } from "react-redux";
import { openModal } from "../features/modal/modalSlice";

export default function Footer() {
  const { total } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  return (
    <footer className="border-t border-[#1E2A5E] px-6 py-3 mt-10 space-y-10">
      <div className="flex justify-between items-center">
        <h3 className="text-2xl font-semibold">Total</h3>
        <h3 className="text-2xl font-semibold">$ {total.toFixed(2)}</h3>
      </div>
      <button
        onClick={() => dispatch(openModal())}
        className=" border-2 border-red-600 rounde text-red-600 hover:bg-red-400 py-2 px-8 mt-5 rounded-md tracking-widest font-bold"
      >
        Clear Card
      </button>
    </footer>
  );
}
