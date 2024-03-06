// React and libs
import React from "react";

// Models
import { ProductModel } from "../../models";
import CustomList from "../../components/CustomList";
import ItemProduct from "../../features/products/ItemProduct";
import { CustomImage, CustomText } from "../../components";
import OptionBox from "../../features/products/OptionBox";
import PaginationTab from "../../features/products/PaginationTab";
import themes from "../../preferences/theme/themes";
import FilterOption from "../../features/products/FilterOption";

const ExplorePage = () => {
  const [listProducts, setListProducts] = React.useState<Array<ProductModel>>(
    []
  );
  const [itemPerPage, setItemPerPage] = React.useState(12);
  const [page, setPage] = React.useState(1);
  const [gridDisplay, setGridDisplay] = React.useState(true);
  const [sort, setSort] = React.useState("");
  const [search, setSearch] = React.useState("");

  React.useEffect(() => {
    setListProducts([]);

    // Products
    var testItem = new ProductModel(
      1,
      "test product 1",
      "https://images.pexels.com/photos/18022560/pexels-photo-18022560/free-photo-of-close-up-of-a-raccoon.jpeg",
      50000,
      29,
      "",
      false
    );
    setListProducts((prev) => [...prev, testItem]);

    var testItem1 = new ProductModel(
      2,
      "test product 2",
      "https://images.pexels.com/photos/18178746/pexels-photo-18178746/free-photo-of-jellyfish-in-nature.jpeg",
      63000,
      254,
      "60",
      false
    );
    setListProducts((prev) => [...prev, testItem1]);
    var testItem2 = new ProductModel(
      3,
      "test product 3",
      "https://images.pexels.com/photos/18189033/pexels-photo-18189033/free-photo-of-meerkat.jpeg",
      36000,
      154,
      "",
      false
    );
    setListProducts((prev) => [...prev, testItem2]);
    var testItem3 = new ProductModel(
      4,
      "test product 4",
      "https://images.pexels.com/photos/18004061/pexels-photo-18004061/free-photo-of-scott-en-la-playa.jpeg",
      24000,
      63,
      "",
      false
    );
    setListProducts((prev) => [...prev, testItem3]);
    var testItem4 = new ProductModel(
      5,
      "test product 5",
      "https://images.pexels.com/photos/18175117/pexels-photo-18175117/free-photo-of-closeup-of-a-yawning-lioness.jpeg",
      26000,
      95,
      "5",
      false
    );
    setListProducts((prev) => [...prev, testItem4]);
    setListProducts((prev) => [...prev, testItem4]);
    setListProducts((prev) => [...prev, testItem4]);
    setListProducts((prev) => [...prev, testItem4]);
    setListProducts((prev) => [...prev, testItem4]);
    setListProducts((prev) => [...prev, testItem4]);
    setListProducts((prev) => [...prev, testItem4]);
    setListProducts((prev) => [...prev, testItem4]);
    setListProducts((prev) => [...prev, testItem4]);
    setListProducts((prev) => [...prev, testItem4]);
    setListProducts((prev) => [...prev, testItem4]);
    setListProducts((prev) => [...prev, testItem4]);
    setListProducts((prev) => [...prev, testItem4]);
    setListProducts((prev) => [...prev, testItem4]);
    setListProducts((prev) => [...prev, testItem4]);
    setListProducts((prev) => [...prev, testItem4]);
    setListProducts((prev) => [...prev, testItem4]);
    setListProducts((prev) => [...prev, testItem4]);
    setListProducts((prev) => [...prev, testItem4]);
    setListProducts((prev) => [...prev, testItem4]);
    setListProducts((prev) => [...prev, testItem4]);
    setListProducts((prev) => [...prev, testItem4]);
    setListProducts((prev) => [...prev, testItem4]);
    setListProducts((prev) => [...prev, testItem4]);
    setListProducts((prev) => [...prev, testItem4]);
    setListProducts((prev) => [...prev, testItem4]);
    setListProducts((prev) => [...prev, testItem4]);
    setListProducts((prev) => [...prev, testItem4]);
    setListProducts((prev) => [...prev, testItem4]);
    setListProducts((prev) => [...prev, testItem4]);
    setListProducts((prev) => [...prev, testItem4]);
    setListProducts((prev) => [...prev, testItem4]);
    setListProducts((prev) => [...prev, testItem4]);
    setListProducts((prev) => [...prev, testItem4]);
    setListProducts((prev) => [...prev, testItem4]);
    setListProducts((prev) => [...prev, testItem4]);
    setListProducts((prev) => [...prev, testItem4]);
    setListProducts((prev) => [...prev, testItem4]);
    setListProducts((prev) => [...prev, testItem4]);
    setListProducts((prev) => [...prev, testItem4]);
    setListProducts((prev) => [...prev, testItem4]);
    setListProducts((prev) => [...prev, testItem4]);
    setListProducts((prev) => [...prev, testItem4]);
    setListProducts((prev) => [...prev, testItem4]);
    setListProducts((prev) => [...prev, testItem4]);
    setListProducts((prev) => [...prev, testItem4]);
    setListProducts((prev) => [...prev, testItem4]);
    setListProducts((prev) => [...prev, testItem4]);
    setListProducts((prev) => [...prev, testItem4]);
    setListProducts((prev) => [...prev, testItem4]);
    setListProducts((prev) => [...prev, testItem4]);
    setListProducts((prev) => [...prev, testItem4]);
    setListProducts((prev) => [...prev, testItem4]);
    setListProducts((prev) => [...prev, testItem4]);
    setListProducts((prev) => [...prev, testItem4]);
    setListProducts((prev) => [...prev, testItem4]);
    setListProducts((prev) => [...prev, testItem4]);
    setListProducts((prev) => [...prev, testItem4]);
    setListProducts((prev) => [...prev, testItem4]);
    setListProducts((prev) => [...prev, testItem4]);
    setListProducts((prev) => [...prev, testItem4]);
    setListProducts((prev) => [...prev, testItem4]);
    setListProducts((prev) => [...prev, testItem4]);
    setListProducts((prev) => [...prev, testItem4]);
    setListProducts((prev) => [...prev, testItem4]);
    setListProducts((prev) => [...prev, testItem4]);
    setListProducts((prev) => [...prev, testItem4]);
    setListProducts((prev) => [...prev, testItem4]);
    setListProducts((prev) => [...prev, testItem4]);
    setListProducts((prev) => [...prev, testItem4]);
    setListProducts((prev) => [...prev, testItem4]);
    setListProducts((prev) => [...prev, testItem4]);
    setListProducts((prev) => [...prev, testItem4]);
    setListProducts((prev) => [...prev, testItem4]);
    setListProducts((prev) => [...prev, testItem4]);
    setListProducts((prev) => [...prev, testItem4]);
    setListProducts((prev) => [...prev, testItem4]);
    setListProducts((prev) => [...prev, testItem4]);
    setListProducts((prev) => [...prev, testItem4]);
    setListProducts((prev) => [...prev, testItem4]);
    setListProducts((prev) => [...prev, testItem4]);
    setListProducts((prev) => [...prev, testItem4]);
    setListProducts((prev) => [...prev, testItem4]);
    setListProducts((prev) => [...prev, testItem4]);
    setListProducts((prev) => [...prev, testItem4]);
    setListProducts((prev) => [...prev, testItem4]);
    setListProducts((prev) => [...prev, testItem4]);
    setListProducts((prev) => [...prev, testItem4]);
    setListProducts((prev) => [...prev, testItem4]);
    setListProducts((prev) => [...prev, testItem4]);
    setListProducts((prev) => [...prev, testItem4]);
    setListProducts((prev) => [...prev, testItem4]);
    setListProducts((prev) => [...prev, testItem4]);
    setListProducts((prev) => [...prev, testItem4]);
    setListProducts((prev) => [...prev, testItem4]);
    setListProducts((prev) => [...prev, testItem4]);
    setListProducts((prev) => [...prev, testItem4]);
    setListProducts((prev) => [...prev, testItem4]);
    setListProducts((prev) => [...prev, testItem4]);
    setListProducts((prev) => [...prev, testItem4]);
    setListProducts((prev) => [...prev, testItem4]);
    setListProducts((prev) => [...prev, testItem4]);
    setListProducts((prev) => [...prev, testItem4]);
    setListProducts((prev) => [...prev, testItem4]);
    setListProducts((prev) => [...prev, testItem4]);
    setListProducts((prev) => [...prev, testItem4]);
    setListProducts((prev) => [...prev, testItem4]);
    setListProducts((prev) => [...prev, testItem4]);
    setListProducts((prev) => [...prev, testItem4]);
    setListProducts((prev) => [...prev, testItem4]);
    setListProducts((prev) => [...prev, testItem4]);
    setListProducts((prev) => [...prev, testItem4]);
    setListProducts((prev) => [...prev, testItem4]);
    setListProducts((prev) => [...prev, testItem4]);
    setListProducts((prev) => [...prev, testItem4]);
    setListProducts((prev) => [...prev, testItem4]);
    setListProducts((prev) => [...prev, testItem4]);
    setListProducts((prev) => [...prev, testItem4]);
    setListProducts((prev) => [...prev, testItem4]);
    setListProducts((prev) => [...prev, testItem4]);
    setListProducts((prev) => [...prev, testItem4]);
    setListProducts((prev) => [...prev, testItem4]);
    setListProducts((prev) => [...prev, testItem4]);
    setListProducts((prev) => [...prev, testItem4]);
    setListProducts((prev) => [...prev, testItem4]);
    setListProducts((prev) => [...prev, testItem4]);
    setListProducts((prev) => [...prev, testItem4]);
    setListProducts((prev) => [...prev, testItem4]);
    setListProducts((prev) => [...prev, testItem4]);
    setListProducts((prev) => [...prev, testItem4]);
    setListProducts((prev) => [...prev, testItem4]);
    setListProducts((prev) => [...prev, testItem4]);
    setListProducts((prev) => [...prev, testItem4]);
    setListProducts((prev) => [...prev, testItem4]);
    setListProducts((prev) => [...prev, testItem4]);
    setListProducts((prev) => [...prev, testItem4]);
    setListProducts((prev) => [...prev, testItem4]);
    setListProducts((prev) => [...prev, testItem4]);
    setListProducts((prev) => [...prev, testItem4]);
    setListProducts((prev) => [...prev, testItem4]);
    setListProducts((prev) => [...prev, testItem4]);
    setListProducts((prev) => [...prev, testItem4]);
    setListProducts((prev) => [...prev, testItem4]);
    setListProducts((prev) => [...prev, testItem4]);
    setListProducts((prev) => [...prev, testItem4]);
    setListProducts((prev) => [...prev, testItem4]);
    setListProducts((prev) => [...prev, testItem4]);
    setListProducts((prev) => [...prev, testItem4]);
    setListProducts((prev) => [...prev, testItem4]);
    setListProducts((prev) => [...prev, testItem4]);
    setListProducts((prev) => [...prev, testItem4]);
    setListProducts((prev) => [...prev, testItem4]);
    setListProducts((prev) => [...prev, testItem4]);
    setListProducts((prev) => [...prev, testItem4]);
    setListProducts((prev) => [...prev, testItem4]);
    setListProducts((prev) => [...prev, testItem4]);
    setListProducts((prev) => [...prev, testItem4]);
    setListProducts((prev) => [...prev, testItem4]);
    setListProducts((prev) => [...prev, testItem4]);
    setListProducts((prev) => [...prev, testItem4]);
    setListProducts((prev) => [...prev, testItem4]);
  }, []);

  React.useEffect(() => {
    console.log("List products:", listProducts);
  }, [listProducts]);

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <main style={{ width: "90%", paddingTop: 20 }}>
       

        <FilterOption
          search={search}
          currentView={gridDisplay}
          currentSort={sort}
          currentItemPerPage={itemPerPage}
          onViewChanged={(status) => setGridDisplay(status)}
          onSearchChange={(text) => console.log(text)}
          onSortChange={(text) => console.log("sort")}
          onItemPerPageChange={(number) => setItemPerPage(number)}
        />

        <CustomList
          list={listProducts.slice(
            (page - 1) * itemPerPage,
            itemPerPage * page
          )}
          render={(data) => <ItemProduct data={data} />}
        />

        <PaginationTab
          data={listProducts}
          itemPerPage={itemPerPage}
          numOfTabs={Math.ceil(listProducts.length / itemPerPage)}
          currentPage={page}
          pageChanged={(number) => setPage(number)}
        />
      </main>
    </div>
  );
};

export default ExplorePage;
