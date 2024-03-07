export const getAllProducts = async () => {
  const response = await (
    await fetch("http://localhost:3001/api/product/")
  )
    .json()
    .then((data) => {
      console.log("SERVICE - Get all products:", data);
      return data;
    })
    .catch((error: any) =>
      console.log("SERVICE - Get all products error:", error)
    );
  return response;
};
