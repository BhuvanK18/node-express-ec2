// Simply connecting the mongodb server to our project using Mongoose
const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://Bhuvan123:Bhuvan123@cluster0.ggrfg.mongodb.net/?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log(`connection successful`);

}).catch((e) => {
    console.log(e);
})

