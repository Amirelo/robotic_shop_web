// Get all sub categories
export const getAllSubCategories = async () => {
    const response = await (
      await fetch("http://localhost:3001/api/sub_category")
    )
      .json()
      .then((data: Array<any>) => {
        console.log("SERVICE - Get all products:", data);
        // Map data to assign id
        data.map((item) => {
          var formatted = item;
          formatted.id = item._id;
          return formatted;
        });
        return data as Array<any>;
      })
      .catch((error: any) => {
        console.log("SERVICE - Get all products error:", error);
        return [];
      });
    return response;
  };

// Get sub categories by ID
export const getSubCategoriesByID = async (id: string) => {
  const data = { id: id };
  const fetchConfig = {
    method: "POST",
    headers: { Accept: "application/json", "Content-Type": "application/json" },
    body: JSON.stringify(data),
  };

  const res = (
    await fetch("http://localhost:3001/api/sub_category/getByID", fetchConfig)
  )
    .json()
    .then((data: Array<any>) => {
      console.log("SERVICE - Get sub categories by id:", data);
      data.map((item) => {
        var formatted = item;
        formatted.id = item._id;
        return formatted;
      });
      return data;
    })
    .catch((error: any) => {
      console.log("SERVICE - Get sub categories by id error:", error);
      return [];
    });
  return res;
};
