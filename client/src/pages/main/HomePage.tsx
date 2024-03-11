// React and libs
import React from "react";

// Models
import { CategoryModel, ProductModel } from "../../models";

// Services
import { getAllProducts } from "../../services/ProductServices";
import { getAllCategories } from "../../services/CategoryServices";

// Components
import { ItemBanner } from "../../features/products";
import ItemProduct from "../../features/products/ItemProduct";
import ItemCategory from "../../features/categories/ItemCategory";
import CustomList from "../../components/CustomList";

const HomePage = () => {
  // Fields
  const [listProducts, setListProducts] = React.useState<Array<ProductModel>>(
    []
  );
  const [listCategories, setListCategories] = React.useState<
    Array<CategoryModel>
  >([]);

  const getData = async () => {
    // Get all products
    const products: Array<ProductModel> = await getAllProducts();
    setListProducts(products);

    // Get all categories
    const categories: Array<CategoryModel> = await getAllCategories();
    setListCategories(categories);
  };

  React.useEffect(() => {
    setListProducts([]);
    setListCategories([]);
    getData();
  }, []);

  React.useEffect(() => {
    console.log("List products:", listProducts);
  }, [listProducts]);

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
          render={(data) => <ItemCategory data={data} />}
        />

        {/* <CustomList
          title="New Arrivals"
          list={listProducts}
          render={(data) => <ItemProduct data={data} />}
        /> */}

        <CustomList
          title="Populars"
          list={listProducts.sort((a, b) =>  a.totalRating - b.totalRating).slice(0,8)}
          render={(data) => <ItemProduct data={data} />}
        />

        {/* <CustomList
          title="Kits"
          list={listProducts}
          render={(data) => <ItemProduct data={data} />}
        />

        <CustomList
          title="Parts"
          list={listProducts}
          render={(data) => <ItemProduct data={data} />}
        />

        <CustomList
          title="Robots"
          list={listProducts}
          render={(data) => <ItemProduct data={data} />}
        /> */}
      </main>
    </div>
  );
};

export default HomePage;
