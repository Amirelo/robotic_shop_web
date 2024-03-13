// React and libs
import React from "react";

// Models
import { CategoryModel, ProductModel } from "../models";

// Services
import {
  getAllProducts,
  getProductsByCategoryID,
} from "../services/ProductServices";
import { getAllCategories } from "../services/CategoryServices";

// Components
import { CustomList } from "../components";
import { ItemCategory } from "../features/categories";
import { ItemBanner, ItemProduct } from "../features/products";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  // Fields
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

  const getData = async () => {
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
        <ItemBanner
          marginBottom={20}
          title="Buy some stuff"
          src="https://images.pexels.com/photos/20222375/pexels-photo-20222375/free-photo-of-scruffy-dog-in-meadow.jpeg"
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </ItemBanner>

        {/* Category */}
        <CustomList
          title="Find product by Category"
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
          list={listProducts
            .sort((a, b) => a.totalRating - b.totalRating)
            .slice(0, 8)}
          render={(data) => <ItemProduct data={data} />}
        />

        <CustomList
          title="Kits"
          list={listProductKit}
          render={(data) => <ItemProduct data={data} />}
        />

        <CustomList
          title="Arduino"
          list={listProductArduino}
          render={(data) => <ItemProduct data={data} />}
        />

        <CustomList
          title="Parts"
          list={listProductParts}
          render={(data) => <ItemProduct data={data} />}
        />
      </main>
    </div>
  );
};

export default HomePage;
