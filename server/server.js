const express = require ("express");  
const cors = require ("cors");
const port = 8000;

const app = express();
app.use(cors());
app.use(express.json(), express.urlencoded({ extended: true }));


require("./config/mongoose.config");

const fruitRoutes = require("./routes/fruits.routes");
fruitRoutes(app);

app.listen(port, () => console.log("The server is all fired up on port 8000"));