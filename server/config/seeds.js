const db = require("./connection");
const { User, Activity, Category } = require("../models");

db.once("open", async () => {
  await Category.deleteMany();

  const categories = await Category.insertMany([
    { name: "Beach" },
    { name: "Adventure" },
    { name: "Rentals" },
    { name: "Spa" },
  ]);

  console.log("categories seeded");

  await Activity.deleteMany();

  const activities = await Activity.insertMany([    
    {
      name: "Massage",
      category: categories[3]._id,
      description:
        "Relax and let go with our special massage packages. Our service includes ice-cold and hot sauna, green detoxing tea, finishing with our award winning massage with hot stones.",
      image: "spa1.png",
      price: 95.0,
      place: "ACAPULCO",
      quantity: 1,
    },
    {
      name: "Aromatherapy",
      category: categories[3]._id,
      description:
        "Let go of your crowded mind, with the relaxing and healing power of aromatherapy, with our combination of organic oils.",
      image: "spa2.png",
      price: 70.0,
      place: "CANCUN",
      quantity: 1,
    },
    {
      name: "Surfing",
      category: categories[0]._id,
      description: "Are you an adrenaline junkie? Enjoy the powerful waves and relax in the calm waters",
      image: "beach2.png",
      place: "PUERTO VALLARTA",
      price: 45,
      quantity: 20,
    },
    {
      name: "Piramids",
      category: categories[1]._id,
      description: "Visit wonderful locations ",
      image: "adventure1.png",
      place: "ACAPULCO",
      price: 45,
      quantity: 50,
    },
    {
      name: "Cenotes",
      category: categories[1]._id,
      description: "Inmerse yourself in a wonderful adventure undergroud.",
      image: "adventure2.png",
      place: "CANCUN",
      price: 45,
      quantity: 50,
    },
    {
      name: "Thermal strings",
      category: categories[1]._id,
      description: "Enjoy the healing power of nature",
      image: "adventure4.png",
      place: "CANCUN",
      price: 45,
      quantity: 50,
    },
    {
      name: "Water scooter",
      category: categories[2]._id,
      description:
        "Like speed in the water? Rent a water scooter and go full speed enjoying the ocean.",
      image: "beach4.png",
      place: "CABO",
      price: 45,
      quantity: 10,
    },
    {
      name: "Snorkeling",
      category: categories[0]._id,
      description:
        "Look at the sea creatures while snorkeling, is like a living museum!",
      image: "beach3.png",
      place: "HUATULCO",
      price: 45,
      quantity: 10,
    },
    {
      name: "Mindfulness and Yoga",
      category: categories[3]._id,
      description:
        "Relax and breathe, let go of your busy mind and connect with your body with our yoga packages",
      image: "spa3.png",
      place: "PUERTO VALLARTA",
      price: 35,
      quantity: 15,
    },
    {
      name: "Cold bath",
      category: categories[3]._id,
      description:
        "You will feel energized! An ice bath will immediately reduce swelling while flushing lactic acid out of your body. Enjoy your bath!",
      image: "spa4.png",
      place: "PUERTO VALLARTA",
      price: 25,
      quantity: 5,
    },
  ]);

  console.log("activities seeded");

  await User.deleteMany();

  await User.create({
    firstName: "Juanita",
    lastName: "Tequilera",
    email: "juanita@prueba.com",
    password: "password12345",
    orders: [
      {
        activities: [activities[0]._id, activities[0]._id, activities[1]._id],
      },
    ],
  });

  await User.create({
    firstName: "Fausto",
    lastName: "Kim",
    email: "fkim@prueba.com",
    password: "password12345",
  });

  console.log("users seeded");

  process.exit();
});
