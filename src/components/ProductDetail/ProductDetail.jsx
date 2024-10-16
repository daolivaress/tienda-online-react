import { XMarkIcon } from "@heroicons/react/16/solid";
import { useContext } from "react";
import { ShoppingCartContext } from "../../context/Context";
import { priceFormatter } from "../../utils/functions";

function ProductDetail() {
  const context = useContext(ShoppingCartContext);
  return (
    <aside className={`${context.isProductDetailOpen ? "flex" : "hidden" } w-[360px] h-[calc(100vh-68px)] flex-col fixed bg-white z-20 right-0 top-[68px] border border-black rounded-s-lg p-6 overflow-y-auto`}>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-semibold">Detail</h2>
        <button onClick={() => context.closeProductDetail()}>
          <XMarkIcon className="size-6 cursor-pointer hover:text-red-600" />
        </button>
      </div>
      <div>
        <figure className="mb-2">
          <img className="rounded-lg" src={context.productToShow.image} alt="product" />
        </figure>
        <p className="font-semibold text-lg">{context.productToShow.price ? priceFormatter(context.productToShow.price) : "N/A"}</p>
        <p className="font-semibold text-md">{context.productToShow.title}</p>
        <p>{context.productToShow.description}</p> 
      </div>
    </aside>
  );
}

export default ProductDetail;
