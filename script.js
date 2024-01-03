const req = new XMLHttpRequest();

req.open("GET", "https://restcountries.com/v2/all");

req.send();

req.onload = function () {
  let data = JSON.parse(req.response);

  //a. Get all the countries from the Asia continent/region using the Filter function
  let result = data.filter((countries) => {
    return countries.region === "Asia";
  });
  console.log(...result);

  //b. Get all the countries with a population of less than 2 lakhs using Filter function
  let pop = data.filter((ele) => {
    return ele.population < 200000;
  });
  console.log(...pop);

  //c. Print the following details name, capital, flag using forEach function
  data.forEach((ele) => {
    console.log(ele.name + "\t" + ele.capital + "\t" + ele.flag);
  });

  //d. Print the total population of countries using reduce function
  let total = data.reduce((acc, curr) => {
    return acc + curr.population;
  }, 0);
  console.log("Total Population: " + total);

  //e. Print the country which uses US Dollars as currency
  let currency = data.filter((ele) => {
    for (let key in ele.currencies) {
      if (ele.currencies[key].code === "USD") {
        return ele;
      }
    }
  });
  console.log(...currency);
};
