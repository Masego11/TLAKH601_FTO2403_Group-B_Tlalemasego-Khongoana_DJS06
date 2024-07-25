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

// Logging each name in the console 
names.forEach(name => console.log(name));

// Logging each province in the console
provinces.forEach(province => console.log(province));

// Logging each name with a matching province 
names.forEach((name, index) => {
  console.log(`${name} - ${provinces[index]}`); // The template literal combines the current name with the province in the same index in the province array. 
});

// 
const upperCaseProvinces = provinces.map(province => province.toUpperCase());
console.log(upperCaseProvinces)

