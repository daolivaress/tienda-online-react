import { TrashIcon } from "@heroicons/react/16/solid";
import { priceFormatter } from "../../../utils/functions";

function OrderCard({ product, handleDelete }) {
  return (
    <div className="flex justify-between items-center gap-4">
      <div className="flex items-center gap-2">
        <figure className="w-20 h-20 flex flex-shrink-0">
          <img
            className="w-full h-full object-cover rounded-lg"
            src={product.image}
            alt="product"
          />
        </figure>
        <p className="text-sm font-light overflow-hidden">{product.title}</p>
      </div>
      <div className="flex gap-2">
        <p className="text-md font-bold">{priceFormatter(product.price)}</p>
        {handleDelete && (
          <TrashIcon
            onClick={() => handleDelete(product.id)}
            className="size-6 cursor-pointer hover:text-red-600"
          />
        )}
      </div>
    </div>
  );
}

export default OrderCard;
