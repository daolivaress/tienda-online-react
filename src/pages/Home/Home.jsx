import React, { useContext } from "react";
import BaseLayout from "../../layout/BaseLayout";
import Card from "../../components/common/Card/Card";
import { ShoppingCartContext } from "../../context/Context";

function Home() {
  const context = useContext(ShoppingCartContext);

  const renderView = () => {
    if (context.filteredItems?.length > 0) {
      return context.filteredItems?.map((item) => (
        <Card key={item.id} item={item} />
      ));
    } else {
      return (
        <div className="flex items-center justify-center text-center absolute left-[94px]">
          No results found...
        </div>
      );
    }
  };

  return (
    <>
      <BaseLayout>
        <section>
          <div className="flex items-center justify-center relative mb-2">
            <h1 className="font-semibold text-xl">Exclusive Products</h1>
          </div>
          <div className="flex items-center justify-center px-4">
            <input
              type="text"
              placeholder="Search a product..."
              className="rounded-lg border-2 border-black py-4 px-12 mb-10 focus:outline-none"
              onChange={(event) => context.setSearchByTitle(event.target.value)}
            />
          </div>
          <div className="grid grid-cols-4 gap-10 w-full max-w-screen-lg relative">
            {renderView()}
          </div>
        </section>
      </BaseLayout>
    </>
  );
}

export default Home;
