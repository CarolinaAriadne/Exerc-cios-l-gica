var customers = [
	{
		id: 1,
		name: "Jão",
		admissionDate: new Date(2022,03,11)
	},
	{
		id: 2,
		name: "Carol",
		admissionDate: new Date (Date.UTC(2021,08,11, 3,0,0))
	},
	{
		id: 3,
		name: "Rafael",
		admissionDate: new Date(2021,05,03)
	}
];

let filteredCustomers = customers.filter((customer) => {
   return  customer.admissionDate.getMonth() === 8;
});

console.log(filteredCustomers);