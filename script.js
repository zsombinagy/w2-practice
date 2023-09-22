let rootElement = document.querySelector("#root");

/* 
let htmlContent = "<h2>Hello world my name is Zsombor</h2>";

rootElement.insertAdjacentHTML("beforeend", htmlContent); */

/* let counter = 0;

while (counter < 10) {
    rootElement.insertAdjacentHTML("beforeend", htmlContent);
    counter = counter + 1; 
} */
/* let array = ["alma", "körte", "szilva", "eper", 'eper', "birs", "vegyes"]

for (let index = 1; index < array.length; index++) {
    rootElement.insertAdjacentHTML("beforeend", `<h2> ${array[0]} </h2>`);


} */

fetch("https://restcountries.com/v3.1/all")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
    for (let index = 0; index < data.length; index++) {
      let countryName = data[index].name.common;
      let countryPopulation = data[index].population;
      let countryArea = data[index].area;

      console.log(data[index].name.common);
      rootElement.insertAdjacentHTML(
        "beforeend",
        `
            <div class="country">
                <h2> ${countryName} </h2>
                <p> ${countryPopulation} </p>
                <p> ${countryArea}km2 </p>
            </div>
        
        `
      );
    }
  });
