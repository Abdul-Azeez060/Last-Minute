const { db } = require("../config");

const addData = async (data) => {
  try {
    return await db.collection("Data").add(data);
  } catch (error) {
    throw new Error("error occured in adding data to db");
  }
};

const getData = async (slug) => {
  console.log("this is getDAta");
  try {
    const querySnapshot = await db
      .collection("Data")
      .where("slug", "==", slug)
      .get();

    console.log(querySnapshot);
  } catch (error) {
    throw error;
  }
};

module.exports = {
  addData,
  getData,
};
