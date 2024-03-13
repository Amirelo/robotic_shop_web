// Components
import { useLocation } from "react-router-dom"
import { CustomText } from "../components"
import React from "react"
import { ProductModel } from "../models"

const ProductDetailPage = () => {
    const location = useLocation()
    const [product, setProduct] = React.useState<ProductModel>(location.state.product)


    return (
        <div>
            <img src={product.images[0]} alt="" />
            <CustomText>Product Detail Page</CustomText>
        </div>
    )
}

export default ProductDetailPage