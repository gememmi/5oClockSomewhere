const beerNameDetail = document.querySelector('#brewery-detail-name')
const breweryTypeDetail = document.querySelector('#brewery-detail-type')
const breweryPhoneDetail = document.querySelector('#phone-number')
const breweryAddressDetail = document.querySelector("#brewery-detail-address")
const detailImage = document.querySelector('#beer-detail-image')
const form = document.querySelector('#find-brewery')
const favMenu = document.querySelector('#faves-menu')
const matchingBreweries = document.querySelector('#matching-breweries')
const breweryList = document.querySelector('#brewery-list')
const breweryDetails = document.querySelector('#brewery-details')

fetch("http://localhost:3000/breweries")
    .then(response => response.json())
    .then (data => renderData(data))


function renderData(data){
    renderingBreweriesByInfo(data);
    data.forEach(data => {
        let breweryLi = document.createElement('h5')
        breweryLi.textContent = data.name
        breweryList.append(breweryLi)
        
    
    breweryLi.addEventListener('click', (e) => {            
        beerNameDetail.textContent = data.name
        breweryTypeDetail.textContent = data.brewery_type
        breweryPhoneDetail.textContent = data.phone
        breweryAddressDetail.textContent = data.street
  
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
            "./images/toastAle.jpeg"
            ]
            

        let randomImage = imageArray[Math.floor(Math.random()*imageArray.length)];
        detailImage.src = randomImage;
            
            
            
        }
        )      
    })
}

function renderingBreweriesByInfo(data) {
    form.addEventListener('submit', e => {
    e.preventDefault();
    const filteredBreweriesByZipCode = data.filter(breweries => e.target.code.value === breweries.postal_code)
    const filteredBreweriesByBreweryType = data.filter(breweries => e.target.type.value === breweries.brewery_type)
    const filteredBreweriesByZipCodeAndBreweryType = data.filter(breweries => {
        return e.target.code.value === breweries.postal_code && e.target.type.value === breweries.brewery_type
    })
    if (e.target.code.value && e.target.type.value) {
        return filteredBreweriesByZipCodeAndBreweryType.forEach(brewery => renderingMatchedBreweries(brewery))  
    } else if (e.target.code.value) {
        return filteredBreweriesByZipCode.forEach(brewery => renderingMatchedBreweries(brewery))
    } else if (e.target.type.value) {
        return filteredBreweriesByBreweryType.forEach(brewery => renderingMatchedBreweries(brewery))
    }
    
} 
)
}


function renderingMatchedBreweries(brewery) {
    const filteredBreweryName = document.createElement('h3')
    filteredBreweryName.textContent = `Brewery/Cidery Name: ${brewery.name}`
    matchingBreweries.append(filteredBreweryName) 
    const filteredBreweryType = document.createElement('h5')
    filteredBreweryType.textContent = `Brewery/Cidery Type: ${brewery.brewery_type}`
    matchingBreweries.append(filteredBreweryType)  
    const filteredBreweryPhoneNumber = document.createElement('h5')
    filteredBreweryPhoneNumber.textContent = `Brewery/Cidery Phone Number: ${brewery.phone}`
    matchingBreweries.append(filteredBreweryPhoneNumber)  
    const filteredBreweryAddress = document.createElement('h5')
    filteredBreweryAddress.textContent = `Brewery/Cidery Address: ${brewery.street}`
    matchingBreweries.append(filteredBreweryAddress)  
}



breweryDetails.addEventListener('keydown', e => {
        if(e.key === " " ) {
            const breweryFav = document.createElement('h5')
            breweryFav.textContent = 
            favMenu.append(breweryFav)
        }
})

beerNameDetail.addEventListener('keydown', e => {
    console.log(e.target)
        
    }
    
)




