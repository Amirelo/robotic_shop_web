// React and libs
import React from "react";
import { useSelector } from "react-redux";

// Components
import { CustomList, CustomText } from "../../components";
import { TextButton } from "../../components/buttons";
import { ItemCart } from "../../features/carts";

const CartPage = () => {
  const userCart = useSelector((store: any) => store.user.carts);
  const [totalPrice, setTotalPrice] = React.useState(0);
  return (
    <div>
      <div style={styles.body}>
        {/* Cart item */}
        <div style={styles.cardItems}>
          {userCart.length > 0 ? (
            <CustomList
              list={userCart}
              render={(data) => <ItemCart data={data} />}
            />
          ) : (
            <CustomText>Empty</CustomText>
          )}
        </div>
        {/* Cart Detail */}
        <div style={styles.cardInfo}>
          <div>
            <CustomText preset={"title"}>Cart Info</CustomText>
            {/* Address */}
            <div style={styles.row}>
              <CustomText>Deliver to: </CustomText>
              <TextButton style={{ width: "fit-content", paddingInline: 8 }}>
                Choose Address
              </TextButton>
            </div>
            {/* Price */}
            <div style={styles.row}>
              <CustomText>Price: </CustomText>
              <CustomText>{totalPrice.toString()}</CustomText>
            </div>

            {/* Delivery methods */}
            <CustomText>Giao hàng:</CustomText>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                paddingLeft: 20,
                paddingBottom: 10,
              }}
            >
              <div style={styles.row}>
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
              <div style={styles.row}>
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
              <div style={styles.row}>
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

            {/* Divider */}
            <div
              style={{ borderBottom: "1px solid lightgray", marginBottom: 20 }}
            ></div>

            {/* Total */}
            <CustomText preset={"subTitle"} marginBottom={8}>
              Total price:
            </CustomText>

            {/* Payment Method */}
            <CustomText preset={"title"}>Payment</CustomText>
            <label>
              <input
                type="radio"
                name="payment_group"
                checked
                style={{ marginRight: 4 ,marginBottom:20}}
              />
              Cash
            </label>
            {/* Button: Add Coupon & Orders */}
            <div style={styles.row}>
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

const styles: { [key: string]: React.CSSProperties } = {
  body: {
    display: "flex",
    width: "90%",
  },
  cardInfo: {
    border: "1px solid black",
    borderRadius: 4,
    padding: 12,
    flex: 1,
    height: "fit-content",
  },
  cardItems: {
    flex: 3,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  row: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom:8
  },
};
