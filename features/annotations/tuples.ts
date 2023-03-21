const drink = {
  color: "brown",
  carbonated: true,
  sugar: 40,
};

//Creating a tuple by specifying the type & order of elements
const pepsi: [string, boolean, number] = ["brown", true, 40];
pepsi[0] = 40;

//OR
//Define structure of Drink
type Drink = [string, boolean, number];
const sprite: Drink = ['clear', true, 40]

