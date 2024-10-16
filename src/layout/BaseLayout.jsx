import NavBar from "../components/common/NavBar/NavBar";
import ProductDetail from "../components/ProductDetail/ProductDetail";
import CheckoutSideMenu from "../components/CheckoutSideMenu/CheckoutSideMenu";

function BaseLayout({ children }) {
  return (
    <>
      <NavBar />
      <ProductDetail/>
      <CheckoutSideMenu/>
      <main className="flex flex-col items-center my-28">{children}</main>
    </>
  );
}

export default BaseLayout;
