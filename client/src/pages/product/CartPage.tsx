// React and libs
import React from "react";
import { useSelector } from "react-redux";

// Components
import { CustomList, CustomText } from "../../components";
import { TextButton } from "../../components/buttons";
import { ItemCart, LocationPick } from "../../features/carts";
import AddressModel from "../../models/AddressModel";
import { addressFormat, priceFormat } from "../../utils/Utilities";
import { ProductModel } from "../../models";
import themes from "../../preferences/theme/themes";

const CartPage = () => {
  const userCart = useSelector((store: any) => store.user.carts);
  const userTheme:keyof typeof themes = useSelector((store: any) => store.user.curTheme)
  const [totalPrice, setTotalPrice] = React.useState(0);

  const [showLocationPicker, setShowLocationPicker] = React.useState(false);
  const [delivery, setDelivery] = React.useState(0)
  const [address, setAddress] = React.useState<AddressModel>();

  const onChooseAddress = () => {
    setShowLocationPicker(true);
  };

  const onAddressPicked = (action: string) => {
    if (action == "CLOSE") {
      setShowLocationPicker(false);
    }
  };

  React.useEffect(()=>{
    setTotalPrice(0)
    var total = 0
    if (userCart.length > 0) {
      userCart.map((item:ProductModel) => {total += item.price})
    }
    setTotalPrice(total)
  },[])

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
              <TextButton
                style={{ width: "fit-content", paddingInline: 8 }}
                onClicked={onChooseAddress}
              >
                {address ? addressFormat(address) :'Choose Address'}
              </TextButton>
            </div>
            {/* Price */}
            <div style={styles.row}>
              <CustomText fontWeight={'bold'} color={themes[userTheme].error}>Price: </CustomText>
              <CustomText fontWeight={'bold'} color={themes[userTheme].error}>{priceFormat(totalPrice)}</CustomText>
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
                    onChange={(event) => setDelivery(Number(event.target.value))}
                    value={50000}
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
                  onChange={(event) => setDelivery(Number(event.target.value))}
                  value={100000}
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
                  onChange={(event) => setDelivery(Number(event.target.value))}
                  value={150000}
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
            <div style={{display:"flex", justifyContent:'space-between'}}>
            <CustomText preset={"title"} color={themes[userTheme].error} fontWeight={'bold'} marginBottom={8}>
              Total price:
            </CustomText>
            <CustomText preset={'title'} color={themes[userTheme].error}>{priceFormat(totalPrice + delivery)}</CustomText>
            </div>
            {/* Payment Method */}
            <CustomText preset={"title"}>Payment</CustomText>
            <label>
              <input
                type="radio"
                name="payment_group"
                checked
                style={{ marginRight: 4, marginBottom: 20 }}
              />
              Cash
            </label>
            <div>
              <TextButton style={{ width: "40%" }}>Order</TextButton>
            </div>
          </div>
        </div>
      </div>
      <LocationPick
        onSelect={(action) => onAddressPicked(action)}
        maxHeight={showLocationPicker ? 1000 : 0}
        onSelectPressed={(address) => {
          setAddress(address);
          setShowLocationPicker(false)
        }}
      />
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
    marginBottom: 8,
  },
};
