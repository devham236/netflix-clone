const getCollection = async (req, res) => {
  const { url } = req.query;
  const result = await fetch(url);
  const data = await result.json();
  if (data) {
    return res.status(200).json({ data });
  }
  res.status(404).json({ message: "Something went wrong" });
};

module.exports = getCollection;
