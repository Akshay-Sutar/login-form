const dotenv = require("dotenv");
const path = require("path");

dotenv.config({ path: path.join(__dirname, "..", "..", ".env") });
module.exports = {
  SERVER: {
    PORT_NO: process.env.PORT_NO,
  },
  DATABASE: {
    MONGOOSE: {
      CONNECTION_STRING: process.env.CONNECTION_STRING,
      OPTIONS: {},
    },
  },
};
