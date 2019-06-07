const seeder = require("mongoose-seed");
const path = require("path");
const mongoose = require("mongoose");

require("dotenv").config({ path: path.resolve(process.cwd(), ".env") });

const data = [
  {
    model: "Show",
    documents: []
  },
  {
    model: "Character",
    documents: []
  }
];

const shows = [
  {
    title: "Macbeth",
    description: "Lang leve de koning",
    date: "2019-07-16 16:00:00",
    category: "Opera",
    length: "180"
  },
  {
    title: "Het Zwanenmeer",
    description: "Dans, dans, dans...",
    date: "2019-08-05 20:00:00",
    category: "Ballet",
    length: "120"
  }
].map(item => ({ ...item, _id: mongoose.Types.ObjectId() }));

const characters = [
  {
    name: "Macbeth",
    traits: ["Schots", "Generaal", "moedig"],
    personality: "Macbeth heeft veel ambitie en veel moed.",
    story:
      "Mactbeth krijgt een voorspelling van drie heksen dat hij op een dag koning van Schotland zal zijn. Hij heeft koning Duncan vermoord.",
    summary: ["moedig", "Schotse generaal", "Koning Duncan vermoord"],
    quote: "Zoek geen ruzie met mij, want er is een kans dat ik je vermoord.",
    show_id: shows[0]._id
  },
  {
    name: "Koning Duncan",
    traits: ["Schots", "Koning", "2 zonen"],
    personality: "Koning Duncan is een genereuze, vriendelijke vader.",
    story:
      "Koning Duncan wordt vermoord door zijn de generaal die hij volledig vertrouwde, Macbeth.",
    summary: ["Vriendelijk", "Koning", "Vermoord door Macbeth"],
    quote: "Ik ben een vaderfiguur, maar wel wat naïef.",
    show_id: shows[0]._id
  },
  {
    name: "Lady Macbeth",
    traits: ["Schots", "Vrouw van Macbeth", "Zelfmoord"],
    personality:
      "Lady Macbeth is egoïstisch, maar er zit toch wat goeds diep vanbinnen.",
    story:
      "Ze overtuigt haar man, Macbeth om de koning te vermoorden. Zo wordt zij koningin van Schotland.",
    summary: ["Egoïstisch", "Vrouw van Macbeth", "Zelfmoord"],
    quote: "Mijn man heeft mij de dood ingeleid.",
    show_id: shows[0]._id
  },
  {
    name: "Prins Siegfried",
    traits: ["Pas meerderjarig", "Verliefd op Odette", "Held"],
    personality: "Siegfried is jong en verliefd.",
    story:
      "Siegfried is pas meerderjarig en moet trouwen van zijn moeder. Hij wordt verliefd op Odette.",
    summary: ["Pas meerderjarig", "Verliefd op Odette", "Held"],
    quote: "Ik zoek mijn ware liefde.",
    show_id: shows[1]._id
  }
].map(item => ({ ...item, _id: mongoose.Types.ObjectId() }));

data[0].documents = shows;
data[1].documents = characters;

seeder.connect(process.env.DB_URL, function() {
  seeder.loadModels([
    "./app/models/show.model.js",
    "./app/models/character.model.js"
  ]);

  seeder.clearModels(["Show", "Character"], () => {
    seeder.populateModels(data, () => {
      seeder.disconnect();
    });
  });
});
