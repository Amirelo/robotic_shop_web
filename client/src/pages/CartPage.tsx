// Components
import React from "react";
import { CustomList, CustomText } from "../components";
import { TextButton } from "../components/buttons";
import { useSelector } from "react-redux";
import { ItemProduct } from "../features/products";

const CartPage = () => {
  const userCart = useSelector((store: any) => store.user.carts);
  const [totalPrice, setTotalPrice] = React.useState(0);
  return (
    <div>
      <div
        style={{
          display: "flex",
          width: "90%",
          justifySelf: "center",
          alignSelf: "center",
        }}
      >
        <div
            style={{
              flex: 3,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
        {userCart.length > 0 ? (
          <CustomList
            list={userCart}
            render={(data) => <ItemProduct data={data} />}
          />
        ) : (
          
            <CustomText>Empty</CustomText>
            )}
            </div>
        <div
          style={{
            border: "1px solid black",
            borderRadius: 4,
            padding: 12,
            flex:1
          }}
        >
          <div>
            <CustomText preset={"title"}>Cart Info</CustomText>
            <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
              <CustomText>Deliver to: </CustomText>
              <TextButton style={{ width: "fit-content", paddingInline: 8 }}>
                Choose Address
              </TextButton>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
              <CustomText>Price: </CustomText>
              <CustomText>{totalPrice.toString()}</CustomText>
            </div>
            <CustomText>Giao hàng:</CustomText>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                paddingLeft: 20,
                paddingBottom: 10,
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <label>
                  <input
                    type="radio"
                    name="delivery_group"
                    style={{ marginRight: 4 }}
                  />
                  Cost-effective delivery (4-10 days)
                </label>
                <CustomText>+50.000d</CustomText>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <label>
                  <input
                    type="radio"
                    name="delivery_group"
                    style={{ marginRight: 4 }}
                  />
                  Normal delivery (1-3 days)
                </label>
                <CustomText>+100.000d</CustomText>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <label>
                  <input
                    type="radio"
                    name="delivery_group"
                    style={{ marginRight: 4 }}
                  />
                  Quick delivery (1h)
                </label>
                <CustomText>+150.000d</CustomText>
              </div>
            </div>
            <div
              style={{ borderBottom: "1px solid lightgray", marginBottom: 20 }}
            ></div>
            <CustomText preset={"subTitle"} marginBottom={8}>
              Total price:
            </CustomText>
            <CustomText preset={"title"}>Payment</CustomText>
            <label>
              <input
                type="radio"
                name="payment_group"
                checked
                style={{ marginRight: 4 }}
              />
              Cash
            </label>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <TextButton style={{ width: "40%" }}>Add Coupon</TextButton>
              <TextButton style={{ width: "40%" }}>Order</TextButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
