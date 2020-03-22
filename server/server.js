const express = require("express");
const dotenv = require("dotenv");

dotenv.config({ path: "./config/config.env" });
const app = express();

app.listen(process.env.PORT, () => {
    console.log(
        `Server listning in ${process.env.NODE_ENV} mode on port ${process.env.PORT}`
    );
});
