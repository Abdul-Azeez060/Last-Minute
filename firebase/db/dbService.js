const { db } = require("../config");

const addData = async (data) => {
  try {
    return await db.collection("Data").add(data);
  } catch (error) {
    throw new Error("error occured in adding data to db");
  }
};

const getData = async (slug) => {
  try {
    const querySnapshot = await db
      .collection("Data")
      .where("slug", "==", slug)
      .get();
    if (querySnapshot.empty) {
      return { error: "could not find the slug" };
    } else {
      const doc = querySnapshot.docs[0];

      return { id: doc.id, ...doc.data() };
    }
  } catch (error) {
    throw new Error("error occured in retriving data from db");
  }
};

module.exports = {
  addData,
  getData,
};
