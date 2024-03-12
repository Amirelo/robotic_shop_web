// React and libs
import React from "react";

// Models
import { ProductModel } from "../models";

// Services
import { getAllProducts } from "../services/ProductServices";

// Components
import { CustomList } from "../components";
import { ItemProduct, PaginationTab, FilterOption } from "../features/products";
import { SORT_POPULAR, SORT_PRICE_HL, SORT_PRICE_LH, SORT_RATING } from "../constants/AppConstant";

const ExplorePage = () => {
  const [listProducts, setListProducts] = React.useState<Array<ProductModel>>(
    []
  );
  const [itemPerPage, setItemPerPage] = React.useState(12);
  const [page, setPage] = React.useState(1);
  const [gridDisplay, setGridDisplay] = React.useState(true);
  const [sort, setSort] = React.useState("");
  const [search, setSearch] = React.useState("");
  const [dataChanged, setDataChanged] = React.useState(false)

  const getData = async () => {
    const products: Array<ProductModel> = await getAllProducts();
    setListProducts(products);
  };

  React.useEffect(() => {
    setListProducts([]);

    getData();
  }, []);

  React.useEffect(()=>{
    console.log("Sort changed:", sort)
    switch(sort){
      case SORT_POPULAR:
        listProducts.sort((a,b) => b.sold - a.sold)
        break
      case SORT_RATING:
        setListProducts(prev => prev.sort((a,b) => b.totalRating - a.totalRating))
        break
      case SORT_PRICE_HL:
        setListProducts(prev => prev.sort((a,b) => b.price - a.price))
        break
      case SORT_PRICE_LH:
        console.log("Change price")
        setListProducts(prev => prev.sort((a,b) => a.price - b.price))
        break
    }
    setDataChanged(!dataChanged)
  },[sort])

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
          onSortChange={(text) => setSort(text)}
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
