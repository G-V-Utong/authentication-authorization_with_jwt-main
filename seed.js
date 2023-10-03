const seeder = require("mongoose-seed");
// require("dotenv").config();
const path = require("path")

const data = [
  {
    model: "admin",
    documents: [
      {
        email: "gvutong@gmail.com",
        firstName: "Godswill",
        lastName: "Utong",
      },
      {
        email: "daniel@gmail.com",
        firstName: "Daniel",
        lastName: "Edet",
      },
      {
        email: "peter@gmail.com",
        firstName: "Peter",
        lastName: "Eze",
      },
    ],
  },
];


const filePath = path.join(__dirname, "models", "admin.js")

seeder.connect(process.env.DB_URL, () => {
  seeder.loadModels([filePath]);
  seeder.clearModels(["user"]);
  seeder.populateModels(data, (err, done) => {
    if (err) {
      console.log("seed err", err);
    }
    if (done) {
      console.log("seed done", done);
    }
    seeder.disconnect();
  });
});

