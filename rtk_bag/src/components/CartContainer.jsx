import { useSelector } from "react-redux";
import Cartitem from "./Cartitem";
import Loading from "./Loading";
import Footer from "./Footer";

export default function CartContainer() {
  const { amount, cartItems, isLoading } = useSelector((state) => state.cart);

  if (isLoading) {
    return <Loading />;
  }

  if (amount <= 0) {
    return (
      <div className="px-[4%] lg:px-[15%] mt-8 text-center pb-10">
        <h1 className="text-4xl font-bold uppercase tracking-widest mb-8">
          Your Bag
        </h1>
        <h2 className="text-xl tracking-widest font-semibold text-gray-600 mt-10">
          Is currently empty
        </h2>
      </div>
    );
  }

  return (
    <div className="px-[4%] lg:px-[15%] mt-8 text-center pb-10">
      <h1 className="text-4xl font-bold uppercase tracking-widest mb-8">
        Your Bag
      </h1>
      <>
        {cartItems.map((item) => {
          return <Cartitem key={item.id} {...item} />;
        })}
        <Footer />
      </>
    </div>
  );
}
