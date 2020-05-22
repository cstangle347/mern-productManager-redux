const mongoose = require("mongoose");
const dbName = "products";

mongoose.connect(`'mongodb://localhost/${dbName}'`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    })
    .then(() => { console.log(`'Established a connection to ${dbName}'`);
    })
    .catch(err => { console.log("Mongoose connection failed", err);
    });