const app = require("./app");
const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://intern:intern@cluster0.fr7px.mongodb.net/Cluster0?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useFindAndModify: false,
      useCreateIndex: true,
    }
  )
  .then(() => {
    console.log("DB connected");
  });

const port = 4000;
app.listen(process.env.port || port, (req, res) => {
  console.log(`App running at ${port}`);
});
