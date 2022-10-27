const beerNameDetail = document.querySelector("#brewery-detail-name");
const breweryTypeDetail = document.querySelector("#brewery-detail-type");
const breweryPhoneDetail = document.querySelector("#phone-number");
const breweryAddressDetail = document.querySelector("#brewery-detail-address");
const detailImage = document.querySelector("#beer-detail-image");
const form = document.querySelector("#find-brewery");
const favMenu = document.querySelector("#faves-menu");
// const h2 = document.querySelector("#faveH2");

const matchingBreweries = document.querySelector("#matching-breweries");
const breweryList = document.querySelector("#brewery-list");
const breweryDetails = document.querySelector("#brewery-details");
let currentData;

fetch("http://localhost:3000/breweries")
  .then((response) => response.json())
  .then((data) => renderData(data));

function renderData(data) {
  // currentData = data
  renderingBreweriesByInfo(currentData);

  data.forEach((brewery) => {
    let breweryLi = document.createElement("h5");
    breweryLi.textContent = brewery.name;
    breweryList.append(breweryLi);

    breweryLi.addEventListener("click", () => {
        //console.log(brewery.name)
      beerNameDetail.textContent = brewery.name;
      breweryTypeDetail.textContent = brewery.brewery_type;
      breweryPhoneDetail.textContent = brewery.phone;
      breweryAddressDetail.textContent = brewery.street;

      const imageArray = [
        "./images/alphabet-city-beer-company.jpeg",
        "./images/b9 beverages.webp",
        "./images/birreriaEataly.jpeg",
        "./images/deathave.jpeg",
        "./images/empire city .jpeg",
        "./images/harlembluebeer.jpg",
        "./images/harlembrewery.jpeg",
        "./images/heartland.jpg",
        "./images/owlsBrew.jpeg",
        "./images/radiantPig.webp",
        "./images/ruckusco.jpeg",
        "./images/ruckusco.jpeg",
        "./images/thirdRail.jpeg",
        "./images/toastAle.jpeg",
      ];

      let randomImage =
        imageArray[Math.floor(Math.random() * imageArray.length)];
      detailImage.src = randomImage;
    });
    document.addEventListener("keydown", renderFav);
        function renderFav(){
            fetch('http://localhost:3000/favorites', {
                method:"POST",
                headers:{
                    "Content-Type":'application/json'
                },
                body: JSON.stringify({
                   name:brewery.name,
                   brewery_type:brewery.brewery_type,
                   address:brewery.street,
                   postal_code:brewery.postal_code,
                })
            })

            // beerNameDetail.textContent = brewery.name;
            // breweryTypeDetail.textContent = brewery.brewery_type;
            // breweryPhoneDetail.textContent = brewery.phone;
            // breweryAddressDetail.textContent = brewery.street;

            favMenu.append(brewery.name)
            favMenu.append(brewery.brewery_type)
            favMenu.append(brewery.street)
            favMenu.append(brewery.postal_code)

            // alert("added to favorites")
        }
  });
}


function renderingBreweriesByInfo(data) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const filteredBreweriesByZipCode = data.filter(
      (breweries) => e.target.code.value === breweries.postal_code
    );
    const filteredBreweriesByBreweryType = data.filter(
      (breweries) => e.target.type.value === breweries.brewery_type
    );
    filteredBreweriesByZipCode.forEach((brewery) =>
      renderingMatchedBreweries(brewery)
    );
    filteredBreweriesByBreweryType.forEach((brewery) =>
      renderingMatchedBreweries(brewery)
    );
    // const filteredBreweriesByBreweryTypeAndZipCode = data.filter(breweries => {
    //    return e.target.code.value === breweries.postal_code && e.target.type.value === breweries.brewery_type
    // })
    // if (filteredBreweriesByBreweryTypeAndZipCode.length === 1) {
    //     filteredBreweriesByBreweryTypeAndZipCode.forEach(brewery => renderingMatchedBreweries(brewery))
    // }
    // else if (filteredBreweriesByZipCode.length === 1) {
    //     filteredBreweriesByZipCode.forEach(brewery => renderingMatchedBreweries(brewery))
    // }
    // else if (filteredBreweriesByBreweryType.length > 0) {
    //     filteredBreweriesByBreweryType.forEach(brewery => renderingMatchedBreweries(brewery))
    // }
  });
}
renderingBreweriesByInfo();

function renderingMatchedBreweries(brewery) {
  const filteredBreweryName = document.createElement("h3");
  filteredBreweryName.textContent = `Brewery Name: ${brewery.name}`;
  matchingBreweries.append(filteredBreweryName);
  const filteredBreweryType = document.createElement("h5");
  filteredBreweryType.textContent = `Brewery Type: ${brewery.brewery_type}`;
  matchingBreweries.append(filteredBreweryType);
  const filteredBreweryPhoneNumber = document.createElement("h5");
  filteredBreweryPhoneNumber.textContent = `Brewery Phone Number: ${brewery.phone}`;
  matchingBreweries.append(filteredBreweryPhoneNumber);
  const filteredBreweryAddress = document.createElement("h5");
  filteredBreweryAddress.textContent = `Brewery Address: ${brewery.street}`;
  matchingBreweries.append(filteredBreweryAddress);
}






    // function renderFav(e) {
    //   console.log(currentData.name);
    //   if (e.key === " ") {
    //     newObject = {
    //       name: currentData.name,
    //       brewery_type: currentData.brewery_type,
    //       address: currentData.street,
    //       postal_code: currentData.postal_code,
    //     };
    //   }

    //   fetch("http://localhost:3000/favorites", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(newObject),
    //   });
    // }