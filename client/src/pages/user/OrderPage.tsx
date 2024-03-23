import React from "react";
import { CustomList, CustomText } from "../../components";

const OrderPage = () => {
  const [listOrders, setListOrders] = React.useState([]);

  return (
    <div>
      <CustomText>My Orders</CustomText>
      {listOrders.length > 0 ? 
      <CustomList
        list={listOrders}
        render={(data) => <CustomText>1</CustomText>}
      />
      :<CustomText>No Order</CustomText>}
    </div>
  );
};

export default OrderPage;
