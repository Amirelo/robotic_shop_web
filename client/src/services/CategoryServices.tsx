export const getAllCategories = async () => {
  const res = (await fetch("http://localhost:3001/api/category"))
    .json()
    .then((data) => {
      console.log("SERVICE - Get all categories:", data);
      return data;
    })
    .catch((error: any) =>
      console.log("SERVICE - Get all categories error:", error)
    );
  return res;
};
