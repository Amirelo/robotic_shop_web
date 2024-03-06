// React and libs
import React from "react";

// Models
import { ProductModel } from "../../models";
import CustomList from "../../components/CustomList";
import ItemProduct from "../../features/products/ItemProduct";
import { CustomImage, CustomText } from "../../components";
import OptionBox from "../../features/products/OptionBox";
import themes from "../../preferences/theme/themes";
import { ic_chevron_left, ic_chevron_right } from "../../assets/icons";

const ExplorePage = () => {
  const [listProducts, setListProducts] = React.useState<Array<ProductModel>>(
    []
  );
  const [itemPerPage, setItemPerPage] = React.useState(12);
  const [page, setPage] = React.useState(1);

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
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            paddingBlock: 12,
            alignItems: "center",
          }}
        >
          <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
            <CustomText>View as</CustomText>
            <CustomImage src={"/icons/ic_grid_view.svg"} />
            <CustomImage src={"/icons/ic_list.svg"} />
          </div>

          <OptionBox title="Sort by">
            <option value="">Popularity</option>
            <option value="">Ratings</option>
            <option value="">Date</option>
            <option value="">Price: Low to high</option>
            <option value="">Price: High to low</option>
          </OptionBox>

          <OptionBox title="Show">
            <option value="12">12/pages</option>
            <option value="16">16/pages</option>
            <option value="20">20/pages</option>
          </OptionBox>
        </div>

        <CustomList
          list={listProducts.slice(
            (page - 1) * itemPerPage,
            itemPerPage * page
          )}
          render={(data) => <ItemProduct data={data} />}
        />

        <div
          style={{
            display: "flex",
            gap: 8,
            justifyContent: "center",
            marginBottom: 20,
          }}
        >
          <CustomImage src={ic_chevron_left} preset={"box"} />


          {listProducts.length / itemPerPage >= 1 ? (
            [Array.from(
              Array(Math.ceil(listProducts.length / itemPerPage)).slice(0,3),
              (e, k) => {
                return (
                  k + 1 +(page-2) > 0 ?
                  <CustomText preset={"box"} onClick={() => setPage(k + 1 +(page-2))}>
                    {(k + 1 +(page-2)).toString()}
                  </CustomText>
                  :<></>
                );
              }
            ),

            listProducts.length / itemPerPage >3 ?
            <CustomText preset={'box'}>..........</CustomText> :<></>,

            listProducts.length /itemPerPage > 6 ?
            Array.from(
              Array(Math.ceil(listProducts.length / itemPerPage)).slice(Math.ceil(listProducts.length / itemPerPage )-3,Math.ceil(listProducts.length / itemPerPage)),
              (e, k) => {
                return (
                  <CustomText preset={"box"} onClick={() => setPage(Math.ceil(listProducts.length / itemPerPage )-3 + k + 1)}>
                    {(Math.ceil(listProducts.length / itemPerPage )-3 + k + 1).toString()}
                  </CustomText>
                );
              }
            )
            :<></>
          ]

              
              

          ) : (
            <></>
          )}

          <CustomImage src={ic_chevron_right} preset={"box"} />
        </div>
      </main>
    </div>
  );
};

export default ExplorePage;
