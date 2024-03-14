// React and libs
import React from "react";

// Models
import { CategoryModel, ProductModel } from "../models";

// Services
import {
  getAllProducts,
  getProductsByCategoryID,
  getProductsBySubCategoryID,
} from "../services/ProductServices";

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
import ItemProductList from "../features/products/ItemProductList";
import { useLocation } from "react-router-dom";

const ExplorePage = () => {
  const [listProducts, setListProducts] = React.useState<Array<ProductModel>>(
    []
  );
  const [listProdsFiltered, setListProdsFiltered] = React.useState<
    Array<ProductModel>
  >([]);

  const [listCategories, setListCategories] = React.useState<
    Array<CategoryModel>
  >([]);
  const location = useLocation();

  const [itemPerPage, setItemPerPage] = React.useState(12);
  const [page, setPage] = React.useState(1);
  const [gridDisplay, setGridDisplay] = React.useState(true);
  const [sort, setSort] = React.useState("");
  const [search, setSearch] = React.useState("");
  const [dataChanged, setDataChanged] = React.useState(false);

  const [selcetedCategory, setSelectedCategory] = React.useState("");
  const [minPrice, setMinPrice] = React.useState<number>();
  const [maxPrice, setMaxPrice] = React.useState<number>();

  const [showAvailableStock, setShowAvailableStock] = React.useState(true)
  const [selectedSubCategory, setSelectedSubCategory] = React.useState('')

  const getData = async () => {
    const products: Array<ProductModel> = await getAllProducts();
    setListProducts(products);
    setListProdsFiltered(products);

    const categories: Array<CategoryModel> = await getAllCategories();
    setListCategories(categories);

    if (location.state?.category) {
      console.log("Received category:", location.state.category);
      setSelectedCategory(location.state.category.id);
    }
  };

  const onCategoryClicked = (id: string) => {
    console.log("Category ID:", id);
    setSelectedCategory(id);
  };

  const onSubCategoryClicked = (id:string) => {
    setSelectedCategory('')
    setSelectedSubCategory(id)
  }

  const onPriceApplied = () => {
    console.log(
      "apply price click, maxprice: " + maxPrice + ", minprice:" + minPrice
    );
    var products = listProdsFiltered;
    if (minPrice) {
      products = products.filter((item) => item.price > minPrice);
    }
    if (maxPrice) {
      products = products.filter((item) => item.price < maxPrice);
    }
    console.log("Filtered list:", products);

    setListProdsFiltered(products);
    setDataChanged(!dataChanged);
  };

  React.useEffect(() => {
    getData();
  }, []);

  const getDataAgain = async () => {
    console.log("Get data again");
    var products: Array<ProductModel> = listProducts;
    if (selcetedCategory.length > 0) {
      console.log('category selected:', selectedSubCategory)
      products = await getProductsByCategoryID(selcetedCategory, 50);
      setListProdsFiltered(products);
      console.log("New product", products);
    } else {
      console.log("category empty");
    }

    if (selectedSubCategory.length > 0) {
      console.log('sub category selected:', selectedSubCategory)
      products = await getProductsBySubCategoryID(selectedSubCategory, 50);
      setListProdsFiltered(products);
      console.log("New product", products);
    } else {
      console.log("category empty");
    }

    if(!showAvailableStock){
      console.log("Available status deactivate")
      products = products.filter(item => item.quantity <= 0)
      setListProdsFiltered(products)
    }

    switch (sort) {
      case SORT_POPULAR:
        setListProdsFiltered(products.sort((a, b) => b.sold - a.sold));
        break;
      case SORT_RATING:
        setListProdsFiltered(
          products.sort((a, b) => b.totalRating - a.totalRating)
        );
        break;
      case SORT_PRICE_HL:
        setListProdsFiltered(products.sort((a, b) => b.price - a.price));
        break;
      case SORT_PRICE_LH:
        console.log("Change price");
        setListProdsFiltered(products.sort((a, b) => a.price - b.price));
        break;
    }
    setListProdsFiltered(products)
    setDataChanged(!dataChanged);
  };

  React.useEffect(() => {
    getDataAgain();
  }, [sort, selcetedCategory, selectedSubCategory, showAvailableStock]);

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
          onItemPerPageChange={(number) => {setItemPerPage(number)}}
        />
        <div style={{ display: "flex" }}>
          <AdvanceFilterOption
            onCategoryClicked={(id: string) => onCategoryClicked(id)}
            onSubCategoryClicked={(id:string) => onSubCategoryClicked(id)}
            style={{ flex: 2 }}
            categories={listCategories}
            setMinPrice={(amount: number) => setMinPrice(amount)}
            setMaxPrice={(amount: number) => setMaxPrice(amount)}
            onApplyClicked={onPriceApplied}
            onAvailableChecked={(status)=>{setShowAvailableStock(status); console.log("Changed:", status)}}
          />

          <div style={{ flex: 8 }}>
            <CustomList
              list={listProdsFiltered.slice(
                (page - 1) * itemPerPage,
                itemPerPage * page
              )}
              render={(data) =>
                gridDisplay ? (
                  <ItemProduct data={data} />
                ) : (
                  <ItemProductList data={data} />
                )
              }
            />

            {listProdsFiltered.length / itemPerPage > 1 ? (
              <PaginationTab
                data={listProdsFiltered}
                itemPerPage={itemPerPage}
                numOfTabs={Math.ceil(listProdsFiltered.length / itemPerPage)}
                currentPage={page}
                pageChanged={(number) => setPage(number)}
              />
            ) : (
              <></>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default ExplorePage;
