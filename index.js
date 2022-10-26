const beerNameDetail = document.querySelector('#brewery-detail-name')
const breweryTypeDetail = document.querySelector('#brewery-detail-type')
const breweryPhoneDetail = document.querySelector('#phone-number')
const breweryAddressDetail = document.querySelector("#brewery-detail-address")
const detailImage = document.querySelector('#beer-detail-image')
const form = document.querySelector('#find-brewery')
const favMenu = document.querySelector('#faves-menu')
const h2 = document.querySelector("#faveH2")

const matchingBreweries = document.querySelector('#matching-breweries')
const breweryList = document.querySelector('#brewery-list')
const breweryDetails = document.querySelector('#brewery-details')
let currentData

fetch("http://localhost:3000/breweries")
    .then(response => response.json())
    .then (data => renderData(data))
    


function renderData(data){
    currentData = data
    //changed this to currentData to test
    renderingBreweriesByInfo(currentData);
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
    document.addEventListener('keydown', (e) => {
        e.preventDefault()
         if (e.key === " "){
        const newObject ={
            name: currentData.name,
            brewery_type: currentData.brewery_type,
            address: currentData.street,
            postal_code: currentData.postal_code,
            }
            fetch("http://localhost:3000/breweries", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newObject)
            })
            .then(response => response.json())
            .then(data => {
               favMenu.append(newObject)
                
            })
            const faveName = document.createElement('p')
            faveName.textContent = beerNameDetail.textContent
            const faveType = document.createElement('p')
            faveType.textContent = breweryTypeDetail.textContent
            const faveNumber = document.createElement('p')
            faveNumber.textContent = breweryPhoneDetail.textContent
            const faveAddress = document.createElement('p')
            faveAddress.textContent = breweryAddressDetail.textContent
            
            h2.append(faveName)
            h2.append(faveType)
            h2.append(faveNumber)
            h2.append(faveAddress)
     }
    }


)}
 


function renderingBreweriesByInfo(data) {
    form.addEventListener('submit', e => {
    e.preventDefault();
    const filteredBreweriesByZipCode = data.filter(breweries => e.target.code.value === breweries.postal_code)
    const filteredBreweriesByBreweryType = data.filter(breweries => e.target.type.value === breweries.brewery_type)
    filteredBreweriesByZipCode.forEach(brewery => renderingMatchedBreweries(brewery))
    filteredBreweriesByBreweryType.forEach(brewery => renderingMatchedBreweries(brewery))
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
    }
    
    )}


function renderingMatchedBreweries(brewery) {
    const filteredBreweryName = document.createElement('h3')
    filteredBreweryName.textContent = `Brewery Name: ${brewery.name}`
    matchingBreweries.append(filteredBreweryName) 
    const filteredBreweryType = document.createElement('h5')
    filteredBreweryType.textContent = `Brewery Type: ${brewery.brewery_type}`
    matchingBreweries.append(filteredBreweryType)  
    const filteredBreweryPhoneNumber = document.createElement('h5')
    filteredBreweryPhoneNumber.textContent = `Brewery Phone Number: ${brewery.phone}`
    matchingBreweries.append(filteredBreweryPhoneNumber)  
    const filteredBreweryAddress = document.createElement('h5')
    filteredBreweryAddress.textContent = `Brewery Address: ${brewery.street}`
    matchingBreweries.append(filteredBreweryAddress)  
}



// breweryDetails.addEventListener('keydown', e => {
//         if(e.key === " " ) {
//             const breweryFav = document.createElement('h5')
//             breweryFav.textContent = 
//             favMenu.append(breweryFav)
//         }
// })

// beerNameDetail.addEventListener('keydown', e => {
//     console.log(e.target)
        
//     }
    
// )




