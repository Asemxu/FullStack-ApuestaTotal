async function get(req, res, next) {
  try {
    res.json("ahaol")
    //   res.json(await programmingLanguages.getMultiple(req.query.page));
  } catch (err) {
    //   console.error(`Error while getting programming languages`, err.message);
      next(err);
  }
}


module.exports = {
  get,
};