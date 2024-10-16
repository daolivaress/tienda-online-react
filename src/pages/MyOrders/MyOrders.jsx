import BaseLayout from "../../layout/BaseLayout";
import { useContext } from "react";
import { ShoppingCartContext } from "../../context/Context";
import OrdersCard from "../../components/OrdersCard/OrdersCard";
import { Link } from "react-router-dom";

function MyOrders() {
  const context = useContext(ShoppingCartContext);
  return (
    <>
      <BaseLayout>
        <section>
          <div className="flex items-center justify-center relative w-80 mb-6">
            <h1 className="font-semibold text-xl">My Orders</h1>
          </div>
          <div className="flex flex-col gap-4">
            {context.order.length > 0 ? (
              context.order.map((order, index) => (
                <Link key={index} to={`/my-orders/${index}`}>
                  <OrdersCard order={order} />
                </Link>
              ))
            ) : (
              <p className="flex items-center justify-center relative w-80">
                No orders yet...
              </p>
            )}
          </div>
        </section>
      </BaseLayout>
    </>
  );
}

export default MyOrders;
