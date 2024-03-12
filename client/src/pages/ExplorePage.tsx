// React and libs
import React from "react";

// Models
import { ProductModel } from "../models";

// Services
import { getAllProducts } from "../services/ProductServices";

// Components
import { CustomList } from "../components";
import { ItemProduct, PaginationTab, FilterOption } from "../features/products";

const ExplorePage = () => {
  const [listProducts, setListProducts] = React.useState<Array<ProductModel>>(
    []
  );
  const [itemPerPage, setItemPerPage] = React.useState(12);
  const [page, setPage] = React.useState(1);
  const [gridDisplay, setGridDisplay] = React.useState(true);
  const [sort, setSort] = React.useState("");
  const [search, setSearch] = React.useState("");

  const getData = async () => {
    const products: Array<ProductModel> = await getAllProducts();
    setListProducts(products);
  };

  React.useEffect(() => {
    setListProducts([]);

    getData();
  }, []);

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
