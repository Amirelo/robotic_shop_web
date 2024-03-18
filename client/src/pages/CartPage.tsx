// Components
import React from "react";
import { CustomText } from "../components";
import { TextButton } from "../components/buttons";

const CartPage = () => {
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
        <div style={{ flex: 2 }}>Cart</div>
        <div
          style={{
            border: "1px solid black",
            borderRadius: 4,
            width: "30%",
            padding: 12,
            flex: 1,
          }}
        >
          <div>
            <CustomText preset={"title"}>Cart Info</CustomText>
            <CustomText>Deliver to: </CustomText>
            <CustomText>Price: </CustomText>
            <CustomText>Giao hàng:</CustomText>
            <div style={{ display: 'flex', flexDirection:'column', paddingLeft:20, paddingBottom:10 }}>
              <label>
                <input type="radio" name="delivery_group" style={{ marginRight: 4 }} />
                Quick delivery
              </label>
              <label>
                <input type="radio" name="delivery_group" style={{ marginRight: 4 }} />
                Normal delivery
              </label>
              <label>
                <input type="radio" name="delivery_group" style={{ marginRight: 4 }} />
                Cost-effective delivery
              </label>
            </div>
            <div style={{borderBottom: '1px solid lightgray', marginBottom:20}}></div>
            <CustomText>Total price:</CustomText>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <TextButton style={{ width: "40%" }}>Add Coupon</TextButton>
              <TextButton style={{ width: "40%" }}>To Payment</TextButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
