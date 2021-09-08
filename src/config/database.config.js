const mongoose = require("mongoose");
const { DATABASE } = require("./index");

(async () => {
  try {
    await mongoose.connect(
      DATABASE.MONGOOSE.CONNECTION_STRING,
      DATABASE.MONGOOSE.OPTIONS
    );
  } catch (err) {
    console.log(err);
  }
})();
