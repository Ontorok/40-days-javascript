console.log("Day-15: Javascript Array Mastery");
const master = [
  "Rose",
  "Tulip",
  "Daisy",
  "Sunflower",
  "Lily",
  "Orchid",
  "Carnation",
  "Chrysanthemum",
  "Daffodil",
  "Hyacinth",
  "Iris",
  "Peony",
  "Lavender",
  "Jasmine",
  "Marigold",
  "Poppy",
  "Gerbera",
  "Zinnia",
  "Hibiscus",
  "Lotus",
];
const arr = new Array("Rose", "Tulip", "Daisy", "Sunflower", "Lily", "Orchid");

const flowers = ["Rose", "Tulip", "Daisy", "Sunflower", "Lily", "Orchid"];
flowers.shift();
flowers.pop();
console.log(flowers); // [ "Tulip", "Daisy", "Sunflower", "Lily"]

const foods = [
  "Pizza",
  "Burger",
  "Sushi",
  "Pasta",
  "Biryani",
  "Fried Chicken",
  "Tacos",
  "Ramen",
  "Butter Chicken",
  "Falafel",
];
const [, , , , , friedChicken] = foods;
console.log(friedChicken);
