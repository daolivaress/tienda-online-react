import BaseLayout from "../../layout/BaseLayout";
import { useContext } from "react";
import { ShoppingCartContext } from "../../context/Context";
import OrderCard from "../../components/common/OrderCard/OrderCard";
import { ChevronLeftIcon } from '@heroicons/react/24/solid'
import { Link } from "react-router-dom";


function MyOrder() {
  const context = useContext(ShoppingCartContext);
  let currentOrder = window.location.pathname.split("/").pop();
  if (currentOrder === "last") {
    currentOrder = context.order.length - 1;
  }
  return (
    <>
      <BaseLayout>
        <section>
          <div className="flex items-center justify-center relative mb-6">
            <Link to="/my-orders" className="absolute left-0">
              <ChevronLeftIcon className="h-6 w-6 text-black cursor-pointer" />
            </Link>
            <h1 className="font-semibold text-xl">My Order</h1>
          </div>
          <div className="flex flex-col gap-4">
            {context.order && context.order.length > 0 ? (
              context.order[currentOrder].products.map((product, index) => (
                  <OrderCard key={index} product={product} />
                ))
            ) : (
              <p>There are no products in the order...</p>
            )}
          </div>
        </section>
      </BaseLayout>
    </>
  );
}

export default MyOrder;
