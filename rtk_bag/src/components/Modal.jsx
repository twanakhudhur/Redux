import { useDispatch } from "react-redux";
import { clearCart } from "../features/cart/cartSlice";
import { closeModal } from "../features/modal/modalSlice";

export default function Modal() {
  const dispatch = useDispatch();
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-70 tracking-widest">
      <div className="bg-white rounded-lg p-8">
        <h2 className="text-xl font-bold mb-4">
          Remove all items from your shopping cart?
        </h2>
        <div className="flex justify-center items-center gap-4 mt-10 font-semibold">
          <button
            type="button"
            className="border border-red-600 text-red-600 px-4 py-2 rounded-md hover:bg-red-300"
            onClick={() => {
              dispatch(clearCart());
              dispatch(closeModal());
            }}
          >
            confirm
          </button>
          <button
            type="button"
            className="border border-[#1E2A5E] text-[#1E2A5E] px-4 py-2 rounded-md hover:bg-[#1E2A5E] hover:bg-opacity-40"
            onClick={() => {
              dispatch(closeModal());
            }}
          >
            cancel
          </button>
        </div>
      </div>
    </div>
  );
}
