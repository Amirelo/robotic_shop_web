// React and libs
import React from "react";

// Models
import { CategoryModel, ProductModel } from "../models";

// Services
import { getAllProducts } from "../services/ProductServices";

// Components
import { CustomList } from "../components";
import {
  ItemProduct,
  PaginationTab,
  FilterOption,
  AdvanceFilterOption,
} from "../features/products";
import {
  SORT_POPULAR,
  SORT_PRICE_HL,
  SORT_PRICE_LH,
  SORT_RATING,
} from "../constants/AppConstant";
import { getAllCategories } from "../services/CategoryServices";

const ExplorePage = () => {
  const [listProducts, setListProducts] = React.useState<Array<ProductModel>>(
    []
  );
  const [listProdsFiltered, setListProdsFiltered] = React.useState<
    Array<ProductModel>
  >([]);

  const [listCategories, setListCategories] = React.useState<Array<CategoryModel>>(
    []
  );

  const [itemPerPage, setItemPerPage] = React.useState(12);
  const [page, setPage] = React.useState(1);
  const [gridDisplay, setGridDisplay] = React.useState(true);
  const [sort, setSort] = React.useState("");
  const [search, setSearch] = React.useState("");
  const [dataChanged, setDataChanged] = React.useState(false);

  const getData = async () => {
    const products: Array<ProductModel> = await getAllProducts();
    setListProducts(products);
    setListProdsFiltered(products);

    const categories: Array<CategoryModel> = await getAllCategories();
    setListCategories(categories)
  };

  React.useEffect(() => {
    getData();
  }, []);

  React.useEffect(() => {
    console.log("Sort changed:", sort);
    switch (sort) {
      case SORT_POPULAR:
        listProducts.sort((a, b) => b.sold - a.sold);
        break;
      case SORT_RATING:
        setListProdsFiltered((prev) =>
          prev.sort((a, b) => b.totalRating - a.totalRating)
        );
        break;
      case SORT_PRICE_HL:
        setListProdsFiltered((prev) => prev.sort((a, b) => b.price - a.price));
        break;
      case SORT_PRICE_LH:
        console.log("Change price");
        setListProdsFiltered((prev) => prev.sort((a, b) => a.price - b.price));
        break;
    }
    setDataChanged(!dataChanged);
  }, [sort]);

  React.useEffect(() => {
    console.log("Searching...");
    const filteredList = listProducts.filter((item) =>
      item.name.toLowerCase().includes(search.toLowerCase())
    );
    setListProdsFiltered(filteredList);
    setDataChanged(!dataChanged);
  }, [search]);

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <main style={{ width: "90%", paddingTop: 20 }}>
        <FilterOption
          search={search}
          currentView={gridDisplay}
          currentSort={sort}
          currentItemPerPage={itemPerPage}
          onViewChanged={(status) => setGridDisplay(status)}
          onSearchChange={(text) => setSearch(text)}
          onSortChange={(text) => setSort(text)}
          onItemPerPageChange={(number) => setItemPerPage(number)}
        />
        <div style={{ display: "flex" }}>

          <AdvanceFilterOption 
            style={{ flex: 2 }} 
            categories={listCategories}
          />

          <div style={{ flex: 8 }}>
            <CustomList
              list={listProdsFiltered.slice(
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
          </div>
        </div>
      </main>
    </div>
  );
};

export default ExplorePage;
