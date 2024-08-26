const { addData, getData } = require("../firebase/db/dbService");
const { db } = require("../firebase/config");

const handleDataAdd = async (req, res) => {
  try {
    const { slug } = req.params;
    const { data } = req.body;
    const resData = await getData(slug);
    const d = { data, slug };
    console.log(d);
    if (!resData.error) {
      const docRef = db.collection("Data").doc(resData.id);
      await docRef.update(d);
      return res.json({
        success: "successfull",
      });
    }

    await addData(d);
    res.json({
      success: "successfull",
    });
  } catch (error) {
    console.log(error);
    res.json({
      error,
    });
  }
};

const handleDataRetrive = async (req, res) => {
  try {
    const { slug } = req.params;
    const resData = await getData(slug);
    if (!resData.error) {
      return res.json(resData);
    } else {
      return res.json({
        error: "no data",
      });
    }
  } catch (error) {
    console.log("error in getting the data");
  }
};

module.exports = {
  handleDataAdd,
  handleDataRetrive,
};
