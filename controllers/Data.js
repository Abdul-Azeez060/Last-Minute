const { addData, getData } = require("../firebase/db/dbService");

const handleDataAdd = async (req, res) => {
  try {
    const { slug } = req.params;
    const { data } = req.body;
    const resData = await getData(slug);
    if (!resData.error) {
      return res.json(resData);
    }
    const d = { data, slug };
    console.log(d);

    const response = await addData(d);
    res.json({
      success: "successfull",
    });
  } catch (error) {
    res.json({
      error,
    });
  }
};

module.exports = {
  handleDataAdd,
};
