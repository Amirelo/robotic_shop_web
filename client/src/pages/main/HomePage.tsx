// React and libs
import React from "react";

// Components
import { CustomText } from "../../components";
import { ItemBanner } from "../../features/products";
import ItemProduct from "../../features/products/ItemProduct";
import { ProductModel } from "../../models";

const HomePage = () => {
  const [listProducts, setListProducts] = React.useState<Array<ProductModel>>(
    []
  );

  React.useEffect(() => {
    setListProducts([]);
    var testItem = new ProductModel(1, "test product 1", 50000, 29, "", false);
    setListProducts((prev) => [...prev, testItem]);

    var testItem1 = new ProductModel(
      2,
      "test product 2",
      63000,
      254,
      "60",
      false
    );
    setListProducts((prev) => [...prev, testItem1]);
    var testItem2 = new ProductModel(
      3,
      "test product 3",
      36000,
      154,
      "",
      false
    );
    setListProducts((prev) => [...prev, testItem2]);
    var testItem3 = new ProductModel(4, "test product 4", 24000, 63, "", false);
    setListProducts((prev) => [...prev, testItem3]);
    var testItem4 = new ProductModel(
      5,
      "test product 5",
      26000,
      95,
      "5",
      false
    );
    setListProducts((prev) => [...prev, testItem4]);
  }, []);

  React.useEffect(() => {
    console.log("List products:", listProducts);
  }, [listProducts]);

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <main style={{ width: "90%" }}>
        <ItemBanner
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
        <div
          style={{
            width: 200,
            height: 300,
            display: "flex",
            position: "relative",
            textAlign: "center",
            borderRadius: 4,
            overflow: "hidden",
          }}
        >
          <img
            style={{ width: "100%", position: "relative" }}
            src="https://images.pexels.com/photos/1476321/pexels-photo-1476321.jpeg"
            alt=""
          />
          <p
            style={{
              width: "100%",
              position: "absolute",
              bottom: 0,
              backgroundImage:
                "linear-gradient(to top,gold 20%, rgba(255,0,0,0))",
            }}
          >
            Robot parts
          </p>
        </div>

        <h2>New Products</h2>
        <section
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 16,
            justifyContent: "space-between",
            marginBottom: 20,
          }}
        >
          {listProducts.map((item, index) => (
            <ItemProduct marginRight={index == listProducts.length-1 ? 'auto' :''} data={item} />
          ))}
        </section>

        <h2>Robotics</h2>
        <section
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 16,
            justifyContent: "space-between",
            marginBottom: 20,
          }}
        >
          {listProducts.map((item) => (
            <ItemProduct data={item} />
          ))}
        </section>

        <h2>Kits</h2>
        <section
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 16,
            justifyContent: "space-between",
            marginBottom: 20,
          }}
        >
          {listProducts.map((item) => (
            <ItemProduct data={item} />
          ))}
        </section>

        <h2>Robots</h2>
        <section
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 16,
            justifyContent: "space-between",
            marginBottom: 20,
          }}
        >
         {listProducts.map((item) => (
            <ItemProduct data={item} />
          ))}
        </section>

        <h2>Parts</h2>
        <section
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 16,
            justifyContent: "space-between",
            marginBottom: 20,
          }}
        >
         {listProducts.map((item) => (
            <ItemProduct data={item} />
          ))}
        </section>
      </main>
    </div>
  );
};

export default HomePage;
