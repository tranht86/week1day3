var salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

var companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ]
  }
];



// function calculateSalesTax(salesData, taxRates) {
//   // Implement your code here
//   var summed = 0
//   var bomsales = companySalesData[1].sales
//   for (var i = bomsales.length; !!i--;){
//     summed += bomsales[i];
//   }
//   return summed
// }

function calculateSalesTax(salesData, taxRates) {
  var totalSales = 0
  var totalTaxes = 0
  var bomSales = companySalesData[1].sales
  var telSales = companySalesData[0].sales
  var telSales2 = companySalesData[2].sales
  var bomTotal = 0
  var telTotal = 0

  if (companySalesData.name = "Bombardier") {
    for (var i = bomSales.length; !!i--;) {
      bomTotal += bomSales[i];
    }
  } return bomTotal

}
console.log(calculateSalesTax())
//var results = calculateSalesTax(companySalesData, salesTaxRates);

/* Expected Results:
{
  Telus: {
    totalSales: 1300
    totalTaxes: 144
  },
  Bombardier: {
    totalSales: 800,
    totalTaxes: 40
  }
}
*/
// console.log(results)