const express = require("express");
const dotenv = require("dotenv");

dotenv.config({ path: "./config/config.env" });
const app = express();
// Datebase
const connectDB = require("./config/connectDB");
connectDB();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use("/admin", require("./routes/admin"));
app.use("/profs", require("./routes/prof"));

app.listen(process.env.PORT, () => {
    console.log(
        `Server listning in ${process.env.NODE_ENV} mode on port ${process.env.PORT}`
    );
});
