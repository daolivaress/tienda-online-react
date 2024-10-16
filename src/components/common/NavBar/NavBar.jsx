import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { ShoppingCartContext } from "../../../context/Context";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";

function NavBar() {
  const activeStyle = 'underline underline-offset-4';
  const context = useContext(ShoppingCartContext);
  return (
    <nav className="flex justify-between items-center fixed top-0 w-full font-light py-5 px-8 bg-white shadow-sm z-50">
      <ul className="flex gap-4 items-center">
        <li className="font-semibold text-xl">
          <NavLink to="/" onClick={() => context.setSearchByCategory()}>Shopi</NavLink>
        </li>
        <li>
          <NavLink to="/" onClick={() => context.setSearchByCategory()}>All</NavLink>
        </li>
        <li>
          <NavLink to="/tv" onClick={() => context.setSearchByCategory('tv')}>TV</NavLink>
        </li>
        <li>
          <NavLink to="/audio" onClick={() => context.setSearchByCategory('audio')}>Audio</NavLink>
        </li>
        <li>
          <NavLink to="/laptop" onClick={() => context.setSearchByCategory('laptop')}>Laptop</NavLink>
        </li>
        <li>
          <NavLink to="/mobile" onClick={() => context.setSearchByCategory('mobile')}>Mobile</NavLink>
        </li>
        <li>
          <NavLink to="/gaming" onClick={() => context.setSearchByCategory('gaming')}>Gaming</NavLink>
        </li>
        <li>
          <NavLink to="/appliances" onClick={() => context.setSearchByCategory('appliances')}>Appliances</NavLink>
        </li>
      </ul>

      <ul className="flex gap-4 items-center">
        <li className="text-black/60">
          <p>daolivaresrodelo@gmail.com</p>
        </li>
        <li>
          <NavLink to="/" className={({isActive}) => isActive ? activeStyle : undefined}>Home</NavLink>
        </li>
        <li>
          <NavLink to="/my-orders" className={({isActive}) => isActive ? activeStyle : undefined}>My Orders</NavLink>
        </li>
        <li>
          <NavLink to="/my-account" className={({isActive}) => isActive ? activeStyle : undefined}>My Account</NavLink>
        </li>
        <li>
          <NavLink to="/sign-in" className={({isActive}) => isActive ? activeStyle : undefined}>Sign In</NavLink>
        </li>
        <li>
          {context.count > 0 && <span className="flex items-center absolute bg-red-500 text-white px-1.5 py-0.5 rounded-full text-xs font-semibold right-[22px] top-[14px]">{context.count}</span>}
          <ShoppingCartIcon onClick={() => context.openCheckoutSideMenu()} className="size-6 text-black"/>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
