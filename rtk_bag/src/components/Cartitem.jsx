import { FaChevronUp, FaChevronDown } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { decrease, increase, removeItem } from "../features/cart/cartSlice";

export default function Cartitem({ id, title, price, img, amount }) {
  const dispatch = useDispatch();

  return (
    <article className="flex items-center justify-between gap-3 mb-5 px-5">
      <img src={img} alt={title} className="size-20  object-cover " />
      <div className="flex-1 tracking-widest flex flex-col justify-between items-start">
        <h2 className="font-bold text-gray-800 ">{title}</h2>
        <p className="font-semibold text-sm text-gray-700">${price}</p>
        <button
          onClick={() => dispatch(removeItem(id))}
          className=" font-semibold text-[#1E2A5E] hover:text-white"
        >
          remove
        </button>
      </div>
      <div className="flex flex-col justify-between items-center text-[#1E2A5E]">
        <button
          className="hover:text-white"
          onClick={() => dispatch(increase({ id }))}
        >
          <FaChevronUp />
        </button>
        <p className=" font-semibold ">{amount}</p>
        <button
          className="hover:text-white"
          onClick={() => {
            if (amount === 1) {
              return dispatch(removeItem(id));
            }
            dispatch(decrease({ id }));
          }}
        >
          <FaChevronDown />
        </button>
      </div>
    </article>
  );
}
