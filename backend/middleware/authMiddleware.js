const auth = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (token) {
    if (blacklist.includes(token)) {
      res.json({ msg: "Please login again....." });
    }
    try {
      const decoded = jwt.verify(token, "masai");
      if (decoded) {
        next();
      } else {
        res.json({ msg: "Token Not Found......!!" });
      }
    } catch (error) {
      res.json({ error: error.message });
    }
  } else {
    res.json({ msg: "Please Login.....!!" });
  }
};

module.exports = {
  auth,
};
