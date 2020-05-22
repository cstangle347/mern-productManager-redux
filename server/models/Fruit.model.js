const mongoose = require("mongoose");
const standardErrMsg = 'A {PATH} is needed.';

const FruitSchema = new mongoose.Schema(
    {
        type: {
            type: String,
            required: [true, standardErrMsg ],
            minlength: [3, '{PATH} must be at least {MINLENGTH} charaters long.' ]
        },

        price: {
            type: Number,
            required: [ true, standardErrMsg ],
            min: [1, '{PATH} must have a value greater that 1' ],
            max: [100, 'If there is fruit over  100 we dont sell it, sorry.' ]
        },

        detail: {
            type: String,
            required: [true, standardErrMsg],
            minlength: [10, '{PATH} must be {MINLENGTH} characters long.' ]
        },

        imageUrl: {
            type: String,
            minlength: [5, "Image must have 5 characheters."]
        }
    },
    { timestamps: true }
);

const Fruit = mongoose.model("Fruit", FruitSchema);

module.exports = Fruit;

