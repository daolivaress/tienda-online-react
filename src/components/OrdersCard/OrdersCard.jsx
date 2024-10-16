import { ChevronRightIcon, ShoppingBagIcon } from '@heroicons/react/24/solid'
import { CalendarDaysIcon } from '@heroicons/react/24/outline';
import { priceFormatter } from '../../utils/functions';



function OrdersCard({ order }) {
  return (
    <div className="flex justify-between items-center gap-1 border border-black rounded-lg px-3 py-4 transition-all hover:scale-105">
        <div className='flex flex-col gap-1'>
          <div className='flex gap-2'>
            <CalendarDaysIcon className="h-6 w-6 text-black cursor-pointer" />
            <p>{order.date}</p>
          </div>
          <div className='flex gap-2'>
            <ShoppingBagIcon className="h-6 w-6 text-black cursor-pointer" />
            {order.totalProducts === 1 ? <p>{order.totalProducts} articles</p> : <p>{order.totalProducts} articles</p>}
          </div>
        </div>
        <div className='flex gap-1'>
          <p className='font-semibold'>{priceFormatter(order.totalPrice)}</p>
          <ChevronRightIcon className="h-6 w-6 text-black cursor-pointer" />
        </div>
    </div>
  );
}

export default OrdersCard;