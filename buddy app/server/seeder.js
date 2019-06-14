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
    description:
      "Macbeth van Shakespeare is ongetwijfeld het meest demonische werk van Giuseppe Verdi. De focus ligt op de vergankelijkheid van de macht. We zijn getuige hoe er een ketting van geweld, terreur en paranoia ontstaat waarbij Macbeth, Lady Macbeth en de heksen op een fatale en destructieve manier aan elkaar zijn overgeleverd.",
    date: "2019-07-06 19:30:00",
    category: "Opera",
    length: "180"
  },
  {
    title: "Rasa",
    description:
      "De Argentijnse choreograaf Daniel Proietto onderzoekt in zijn hedendaagse interpretatie van het beroemde La Bayadère de kolonialistische blik op het Verre Oosten die dit 19de-eeuwse Russische sprookje domineert. Hij verbindt dit met filosofieën uit de Indische cultuur en de rijkdom van het Indische culturele erfgoed.",
    date: "2020-01-25 20:00:00",
    category: "Ballet",
    length: "105"
  }
].map(item => ({ ...item, _id: mongoose.Types.ObjectId() }));

const characters = [
  {
    name: "Macbeth",
    traits: ["Man", "Tiran", "Lady Macbeth"],
    personality: "Macbeth heeft veel ambitie en veel moed.",
    story:
      "Mactbeth krijgt de voorspelling van drie heksen dat hij op een dag koning van Schotland zal zijn. Hij heeft koning Duncan vermoord.",
    summary: ["moedig", "Schotse generaal", "Koning Duncan vermoord"],
    quote: "Zoek geen ruzie met mij, want er is een kans dat ik je vermoord.",
    show_id: shows[0]._id
  },
  {
    name: "Koning Duncan",
    traits: ["Man", "Koning", "2 zonen"],
    personality: "Koning Duncan is een genereuze, vriendelijke vader.",
    story:
      "Koning Duncan wordt vermoord door zijn de generaal die hij volledig vertrouwde, Macbeth.",
    summary: ["Vriendelijk", "Koning", "Vermoord door Macbeth"],
    quote: "Ik ben een vaderfiguur, maar wel wat naïef.",
    show_id: shows[0]._id
  },
  {
    name: "Lady Macbeth",
    traits: ["Vrouw", "Sluw", "Macbeth"],
    personality:
      "Lady Macbeth is egoïstisch, maar er zit toch wat goeds diep vanbinnen.",
    story:
      "Ze overtuigt haar man, Macbeth om de koning te vermoorden. Zo wordt zij koningin van Schotland.",
    summary: ["Egoïstisch", "Vrouw van Macbeth", "Zelfmoord"],
    quote: "Mijn man heeft mij de dood ingeleid.",
    show_id: shows[0]._id
  },
  {
    name: "Macduff",
    traits: ["Man", "Rechtvaardig", "Warm gezin"],
    personality: "Macduff strijdt voor rechtvaardigheid.",
    story:
      "Macduff gaat naar Engeland om een vriend te helpen. Macbeth komt daar achter en laat het achtergebleven gezin van Macduff uitmoorden. Macduff is degene die Macbeth dood.",
    summary: ["Rechtvaardig", "Gezin uitgemoord", "Held"],
    quote: "Voor mijn gezin moet je door mij.",
    show_id: shows[0]._id
  },
  {
    name: "Banquo",
    traits: ["Man", "Geest", "Zoon Fleance"],
    personality: "Banquo komt terug als een geest.",
    story:
      "Banquo is een veldheer van koning Duncan, hij is er bij wanneer Macbeth de voorspelling van de heksen ontvangt. Zij voorspellen dat hij koningen gaat voortbrengen. Macbeth ziet dit als een dreigement voor zijn koningschap en besluit Banquo te vermoorden.",
    summary: ["Geest", "Zoon wordt koning", "Veldheer"],
    quote: "Van mij raak je nog niet zo makkelijk af.",
    show_id: shows[0]._id
  },
  {
    name: "Nikaya",
    traits: ["Vrouw", "Trouw", "Impulsief"],
    personality: "Trouw tot aan de dood",
    story:
      "Nikaya is een tempeldanseres die eeuwige liefde en trouw beloofd heeft aan Solor. Ze doet een impulsieve moordpoging op haar rivale. Later in het verhaal wordt ze tijdens een valstrik gebeten door een giftige slang.",
    summary: ["Trouw", "Moordpoging", "Gebeten door slang"],
    quote: "In het hiernamaals kunnen we wel samen zijn.",
    show_id: shows[1]._id
  },
  {
    name: "Solor",
    traits: ["Man", "Krijger", "Verloofd met dochter Radja"],
    personality: "Kan zijn eeuwige liefde niet vergeten.",
    story:
      "Solor is een veldheer die eeuwige liefde en trouw beloofd heeft aan Nikaya. Hij is echter verloofd met Gamzatti, de dochter van de Radja. Zij willen Nikaya dood. Na een valstrik met een slang slager ze hierin en belandt Solor in een depressie. Bij het huwelijk tussen Solor en Gamzatti nemen de goden wraak.",
    summary: ["Trouw", "Depressie", "Beroofd van eeuwige liefde"],
    quote: "Liefde kan pijn doen.",
    show_id: shows[1]._id
  }
].map(item => ({ ...item, _id: mongoose.Types.ObjectId() }));

const chats = [].map(item => ({ ...item, _id: mongoose.Types.ObjectId() }));

const connections = [].map(item => ({
  ...item,
  _id: mongoose.Types.ObjectId()
}));

data[0].documents = shows;
data[1].documents = characters;

seeder.connect(process.env.DB_URL, function() {
  seeder.loadModels([
    "./app/models/show.model.js",
    "./app/models/character.model.js",
    "./app/models/connection.model.js",
    "./app/models/chat.model.js"
  ]);

  seeder.clearModels(["Show", "Character", "Connection", "Chat"], () => {
    seeder.populateModels(data, () => {
      seeder.disconnect();
    });
  });
});
