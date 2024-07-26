// A list of provinces:
const provinces = ['Western Cape', 'Gauteng', 'Northern Cape', 'Eastern Cape', 'KwaZulu-Natal', 'Free State']

// A list of names:
const names = ['Ashwin', 'Sibongile', 'Jan-Hendrik', 'Sifso', 'Shailen', 'Frikkie']

// A list of products with prices:
const products = [
  { product: 'banana', price: "2" },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: "8" },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]


// EXERCISES

// Logging each name in the console 
names.forEach(name => console.log(name));

// Logging each province in the console
provinces.forEach(province => console.log(province));

// Logging each name with a matching province 
names.forEach((name, index) => {
  console.log(`${name} - ${provinces[index]}`); // The template literal combines the current name with the province in the same index in the province array. 
});

// Logging each province in uppercase. 
const upperCaseProvinces = provinces.map(province => province.toUpperCase());
console.log(upperCaseProvinces)

// Logging the length of each name 
const nameLength = names.map(name => name.length)
console.log(nameLength);

// Sorting the provinces in alphatecal order 
const alphabeticalOrder = provinces.sort();
console.log(alphabeticalOrder);

// Mapping through the names array for names with 'S'
const findingS = names.map(name => [...name].some(char => char === 'S'));
console.log(findingS);

// Transforming names array into an object mapping names to respective provinces. 
 const objectMapping = names.reduce((accumulator, name, province) => {  
  accumulator[name] =provinces[province];
  return accumulator;
 }, {});

 console.log(objectMapping);

 //ADVANCED EXCERCISES 

 // Iterating throught the products array to log each product name
 products.forEach(item => console.log(item.product));

 // Filtering out products with names longer than 5 characters 
 products.filter(item => item.product.length > 5) // The function checks if the length of the product name is greater than 5
 .forEach(item => console.log(item.product));

 // Filterng out products without prices, converting those with string numbers and calculating the total 
 const priceManipulation = products.filter(item => String(item.price).trim() !== '') // Filters products with valid prices
  .map(item => Number(item.price)) // Converts string prices to numbers 
  .reduce((accumulator, price) => accumulator + price); // calculates total price 
  console.log(priceManipulation)


  // Concatenated product names 
  const concatenatedProducts = products.reduce((accumulator, item) => 
    accumulator + item.product);
 
  console.log(concatenatedProducts)

  // Filtering Highest and lowest prices 
  const prices = products.filter(item => String(item.price).trim() !== '') // Filters products with valid prices
  .map(item => Number(item.price)) // Converts string prices to numbers
 
    const highestPrice = Math.max(...prices); // Finds the highest price item
    const lowestPrice = Math.min(...prices // Finds the lowest priced item
    );
    const result = `Highest: ${highestPrice}. Lowest: ${lowestPrice}.`;
    console.log(result)

  // Recreating the products object with keys 'name' and 'cost' 
  const keyChanges = products.map(productsObject => // Iterates over each product object
    Object.entries(productsObject).reduce((accumulator, [key, value]) => {  // Object entries converts each product object into an array of key, value pairs.  
      if (key === 'product') {  // Sets the name property 
        accumulator.name = value;
      } else if (key === 'price') {  // Converts the price to a number and sets the costs property 
        accumulator.cost = Number(value); 
      }
      return accumulator;
      }, {})
    );

    console.log(keyChanges)




