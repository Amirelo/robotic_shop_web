// React and libs
import React from "react";

// Models
import { BannerModel, CategoryModel, ProductModel } from "../models";

// Services
import {
  getAllProducts,
  getProductsByCategoryID,
} from "../services/ProductServices";
import { getAllCategories } from "../services/CategoryServices";

// Components
import { CustomList, CustomText } from "../components";
import { ItemCategory } from "../features/categories";
import { ItemBanner, ItemProduct } from "../features/products";
import { useNavigate } from "react-router-dom";
import { getActiveBanner } from "../services/BannerServices";

const HomePage = () => {
  // Fields
  const [listBanners, setListBanners] = React.useState<Array<BannerModel>>([])
  const [listProducts, setListProducts] = React.useState<Array<ProductModel>>(
    []
  );
  const [listCategories, setListCategories] = React.useState<
    Array<CategoryModel>
  >([]);

  const [listProductKit, setListProductKit] = React.useState<
    Array<ProductModel>
  >([]);
  const [listProductArduino, setListProductArduino] = React.useState<
    Array<ProductModel>
  >([]);
  const [listProductParts, setListProductParts] = React.useState<
    Array<ProductModel>
  >([]);

  const navigate =useNavigate()

    const onSeemoreClicked = () => {
      navigate('/explore')
    }

  const getData = async () => {
    // Get Active banners
    const banners: Array<BannerModel> = await getActiveBanner()
    setListBanners(banners)

    // Get all products
    const products: Array<ProductModel> = await getAllProducts();
    setListProducts(products);

    // Get all categories
    const categories: Array<CategoryModel> = await getAllCategories();
    setListCategories(categories);
    console.log("Categories:", categories);

    // Get kit product
    const cateKit: CategoryModel = categories.filter((item) =>
      item.name.toLowerCase().includes("kit")
    )[0];
    console.log("Kit category:", cateKit);
    const prodsKit = await getProductsByCategoryID(cateKit.id, 8);
    setListProductKit(prodsKit);
    console.log("Products - kit:", prodsKit);

    // Get arduino product
    const cateArduino: CategoryModel = categories.filter((item) =>
      item.name.toLowerCase().includes("arduino")
    )[0];
    console.log("arduino category:", cateKit);
    const prodsArduino = await getProductsByCategoryID(cateArduino.id, 8);
    setListProductArduino(prodsArduino);
    console.log("Products - arduino:", prodsArduino);

    // Get parts product
    const cateParts: CategoryModel = categories.filter((item) =>
      item.name.toLowerCase().includes("điện tử")
    )[0];
    console.log("part category:", cateKit);
    const prodsParts = await getProductsByCategoryID(cateParts.id, 8);
    setListProductParts(prodsParts);
    console.log("Products - parts:", prodsParts);
  };

  // On Category clicked
  const onCategoryClicked = (data:CategoryModel) => {
    navigate('/explore', {state:{category: data}})
  }

  React.useEffect(() => {
    setListProducts([]);
    setListCategories([]);
    getData();
  }, []);

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <main style={{ width: "90%" }}>
        {listBanners.length > 0 ?
        <ItemBanner
        data={listBanners[0]}
          marginBottom={20}/>
          :<></>}

        {/* Category */}

        <CustomList
          title="Find product by Category"
          onSeeMoreClicked={onSeemoreClicked}
          list={listCategories.slice(0, 6)}
          render={(data) => <ItemCategory data={data} onClicked={()=>onCategoryClicked(data)} />}
        />

        {/* <CustomList
          title="New Arrivals"
          list={listProducts}
          render={(data) => <ItemProduct data={data} />}
        /> */}

        <CustomList
          title="Populars"
          onSeeMoreClicked={onSeemoreClicked}
          list={listProducts
            .sort((a, b) => a.totalRating - b.totalRating)
            .slice(0, 8)}
          render={(data) => <ItemProduct data={data} />}
        />

        <CustomList
          title="Kits"
          onSeeMoreClicked={onSeemoreClicked}
          list={listProductKit}
          render={(data) => <ItemProduct data={data} />}
        />

        <CustomList
          title="Arduino"
          onSeeMoreClicked={onSeemoreClicked}
          list={listProductArduino}
          render={(data) => <ItemProduct data={data} />}
        />

        <CustomList
          title="Parts"
          onSeeMoreClicked={onSeemoreClicked}
          list={listProductParts}
          render={(data) => <ItemProduct data={data} />}
        />
      </main>
    </div>
  );
};

export default HomePage;
