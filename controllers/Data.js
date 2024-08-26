const { addData, getData } = require("../firebase/db/dbService");
const { db } = require("../firebase/config");

const handleDataAdd = async (req, res) => {
  try {
    const { slug } = req.params;
    const { data } = req.body;
    const resData = await getData(slug);
    const d = { data, slug };

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
    res.json({
      error,
    });
  }
};

module.exports = {
  handleDataAdd,
  handleDataRetrive,
};
