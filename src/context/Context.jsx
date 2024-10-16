import { createContext, useState, useEffect } from "react";
import { apiUrl } from "../api";

export const ShoppingCartContext = createContext();

export const ShoppingCartProvider = ({ children }) => {
  // count is a number that will store the number of products that the user has added to the cart.
  const [count, setCount] = useState(0);

  // isProductDetailOpen is a boolean that will determine if the product detail modal is open or not.
  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);

  // openProductDetail is a function that will set isProductDetailOpen to true.
  const openProductDetail = () => {
    setIsProductDetailOpen(true);
  };

  // closeProductDetail is a function that will set isProductDetailOpen to false.
  const closeProductDetail = () => {
    setIsProductDetailOpen(false);
  };

  // productToShow is an object that will store the product that the user has clicked on to see the details.
  const [productToShow, setProductToShow] = useState({});

  // cartProducts is an object that will store the products that the user has added to the cart.
  const [cartProducts, setCartProducts] = useState([]);

  // isCheckoutSideMenu is a boolean that will determine if the checkout side menu is open or not.
  const [isCheckoutSideMenu, setIsCheckoutSideMenuOpen] = useState(false);

  // openProductDetail is a function that will set isProductDetailOpen to true.
  const openCheckoutSideMenu = () => {
    setIsCheckoutSideMenuOpen(true);
  };

  // closeCheckoutSideMenu is a function that will set isCheckoutSideMenuOpen to false.
  const closeCheckoutSideMenu = () => {
    setIsCheckoutSideMenuOpen(false);
  };

  // order is an array that will store the products that the user has added to the cart.
  const [order, setOrder] = useState([]);

  // items is an array that will store the products that the user has added to the cart.
  const [items, setItems] = useState(null);

  // loading is a boolean that will determine if the products are being fetched or not.
  const [loading, setLoading] = useState(true);

  // searchByTitle is a string that will store the value of the input where the user will search for a product by title.
  const [searchByTitle, setSearchByTitle] = useState(null);

  // filteredItems is an array that will store the products that the user has searched for by title.
  const [filteredItems, setFilteredItems] = useState(null);

  // searchByCategory is a string that will store the value of the input where the user will search for a product by category.
  const [searchByCategory, setSearchByCategory] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        setItems(data.products);
      } catch (error) {
        console.error(`Oh no, ocurrió un error: ${error}`);
      }
    };
    fetchData();
  }, []);

  const FilteredItemsByTitle = (items, searchByTitle) => {
    return items?.filter((item) =>
      item.title.toLowerCase().includes(searchByTitle.toLowerCase())
    );
  };

  const FilteredItemsByCategory = (items, searchByCategory) => {
    if (searchByCategory) {
      return items?.filter((item) =>
        item.category.toLowerCase().includes(searchByCategory.toLowerCase())
      );
    }
  };



  const filterBy = (searchType, items, searchByTitle, searchByCategory) => {
    if ( searchType === 'BY_TITLE' ) {
      return FilteredItemsByTitle(items, searchByTitle)
    }

    if ( searchType === 'BY_CATEGORY' ) {
      return FilteredItemsByCategory(items, searchByCategory)
    }

    if ( searchType === 'BY_TITLE_AND_CATEGORY' ) {
      return FilteredItemsByCategory(items, searchByCategory).filter((item) =>
        item.title.toLowerCase().includes(searchByTitle.toLowerCase()));
    }

    if ( searchType === null ) {
      return items
    }
  }

  useEffect(() => {
    if (searchByTitle && searchByCategory) setFilteredItems(filterBy('BY_TITLE_AND_CATEGORY', items, searchByTitle, searchByCategory))
    if (searchByTitle && !searchByCategory) setFilteredItems(filterBy('BY_TITLE', items, searchByTitle, searchByCategory))
    if (!searchByTitle && searchByCategory) setFilteredItems(filterBy('BY_CATEGORY', items, searchByTitle, searchByCategory))
    if (!searchByTitle && !searchByCategory) setFilteredItems(filterBy(null, items, searchByTitle, searchByCategory))
    return () => {
      setSearchByTitle(null)
    }
  }, [items, searchByTitle, searchByCategory])
  

  return (
    <ShoppingCartContext.Provider
      value={{
        count,
        setCount,
        isProductDetailOpen,
        openProductDetail,
        closeProductDetail,
        productToShow,
        setProductToShow,
        cartProducts,
        setCartProducts,
        isCheckoutSideMenu,
        openCheckoutSideMenu,
        closeCheckoutSideMenu,
        order,
        setOrder,
        items,
        setItems,
        searchByTitle,
        setSearchByTitle,
        filteredItems,
        setFilteredItems,
        loading,
        setLoading,
        searchByCategory,
        setSearchByCategory
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};
