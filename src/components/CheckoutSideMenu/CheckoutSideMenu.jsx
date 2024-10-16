import { XMarkIcon } from "@heroicons/react/16/solid";
import { useContext } from "react";
import { ShoppingCartContext } from "../../context/Context";
import { priceFormatter, TotalPrice } from "../../utils/functions";
import OrderCard from "../common/OrderCard/OrderCard";
import { Link } from "react-router-dom";

function CheckoutSideMenu() {
  const context = useContext(ShoppingCartContext);

  const handleDelete = (id) => {
    const newCart = context.cartProducts.filter((product) => product.id !== id);
    context.setCartProducts(newCart);
    context.setCount(context.count - 1);
  };

  const handleCheckout = () => {
    const orderToAdd = {
      date: new Date().toLocaleDateString(),
      products: context.cartProducts,
      totalProducts: context.count,
      totalPrice: TotalPrice(context.cartProducts),
    };
    context.setOrder([...context.order, orderToAdd]);
    context.setCartProducts([]);
    context.setCount(0);
    context.closeCheckoutSideMenu();
  };

  return (
    <aside
      className={`${
        context.isCheckoutSideMenu ? "flex" : "hidden"
      } w-[360px] h-[calc(100vh-68px)] flex-col fixed bg-white z-20 right-0 top-[68px] border border-black rounded-s-lg px-5 py-6`}
    >
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-semibold">My Order</h2>
        <button onClick={context.closeCheckoutSideMenu}>
          <XMarkIcon className="size-6 cursor-pointer hover:text-red-600" />
        </button>
      </div>
      <div className="flex flex-col gap-4 overflow-y-auto scroll-m-0 h-[550px]">
        {context.cartProducts.length === 0 && (
          <div className="flex flex-col justify-center items-center my-auto">
            <p className="text-center font-light h-full">
              Try to add a product...
            </p>
          </div>
        )}
        {context.cartProducts.map((product) => (
          <OrderCard
            key={product.id}
            product={product}
            handleDelete={handleDelete}
          />
        ))}
      </div>
      {context.cartProducts.length > 0 && (
        <div className="absolute w-[calc(100%-40px)] bottom-0 mb-4">
          <div className="text-lg font-semibold mt-4 flex justify-between border-b pb-1">
            <p>Total</p>
            <p>{priceFormatter(TotalPrice(context.cartProducts))}</p>
          </div>
          <Link to="/my-orders/last">
            <button
              onClick={handleCheckout}
              className="w-full bg-black text-white text-lg font-semibold rounded-lg py-2 mt-4 transition-all hover:scale-105"
            >
              Checkout
            </button>
          </Link>
        </div>
      )}
    </aside>
  );
}

export default CheckoutSideMenu;
