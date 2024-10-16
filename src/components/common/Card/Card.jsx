import { priceFormatter } from "../../../utils/functions";
import { useContext } from "react";
import { ShoppingCartContext } from "../../../context/Context";
import { PlusIcon } from "@heroicons/react/24/outline";
import { CheckIcon } from "@heroicons/react/24/solid";

function Card({ item }) {
  const context = useContext(ShoppingCartContext);

  const showProductDetail = (productDetail) => {
    context.setProductToShow(productDetail);
    context.closeCheckoutSideMenu();
    context.openProductDetail();
  };

  const addToCart = (event, product) => {
    event.stopPropagation();
    context.setCartProducts([...context.cartProducts, product]);
    context.setCount(context.count + 1);
    context.closeProductDetail();
    context.openCheckoutSideMenu();
  }

  const renderIcon = (id) => {
    const isItemInCart = context.cartProducts.filter((product) => product.id === id).length > 0;
    if (isItemInCart) {
      return (
        <button
          className="absolute top-0 right-0 flex justify-center items-center bg-black text-white w-6 h-6 rounded-full m-2 z-10">
          <CheckIcon className="size-4"></CheckIcon>
        </button>
      );
    } else {
      return (
        <button
          className="absolute top-0 right-0 flex justify-center items-center bg-neutral-200/70 w-6 h-6 rounded-full m-2 z-10 text-black transition-all hover:bg-black hover:text-white"
          onClick={() => addToCart(event, item)}>
          <PlusIcon className="size-4"></PlusIcon>
        </button>
      );
    }
    
  }

  return (
    <div className="relative cursor-pointer w-56 h-60 rounded-lg  transition-all hover:scale-105">
      {renderIcon(item.id)}
      <div className="h-full" onClick={() => showProductDetail(item)}>
        <figure className="relative mb-2 w-full h-4/5 ">
          <span className="absolute bottom-0 left-0 bg-neutral-200/70 rounded-lg text-xs m-2 px-3 py-0.5 font-medium">
            {item.category.charAt(0).toUpperCase() + item.category.slice(1)}
          </span>
          <img
            className="w-full h-full object-contain rounded-lg "
            src={item.image}
            alt="headphones"
          />
        </figure>
        <p className="flex justify-between gap-8 ">
          <span className="text-sm truncate">{item.title}</span>
          <span className="font-bold">{priceFormatter(item.price)}</span>
        </p>
      </div>
    </div>
  );
}

export default Card;
