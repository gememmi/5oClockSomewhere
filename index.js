const URL = "http//api.openbrewerydb.org/breweries?by_city=new_york"
// var item = items[Math.floor(Math.random()*items.length)];

fetch("https://api.openbrewerydb.org/breweries?by_city=new_york")
    .then(response => response.json())
    .then (data => renderData(data))

const beerNameDetail = document.querySelector('#brewery-detail-name')
const breweryTypeDetail = document.querySelector('#brewery-detail-type')
const breweryPhoneDetail = document.querySelector('#phone-number')
const breweryAddressDetail = document.querySelector("#brewery-detail-address")
const detailImage = document.querySelector('#beer-detail-image')
const form = document.querySelector('#find-brewery')
const favMenu = document.querySelector('#faves-menu')
const matchingBreweries = document.querySelector('#matching-breweries')


function renderData(data){
    data.forEach(data => {
        let breweryLi = document.createElement('h5')
        breweryLi.textContent = data.name
        document.querySelector('#brewery-list').append(breweryLi)
        
    
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

form.addEventListener('submit', e => {
    e.preventDefault();
    console.log(e.target)
    const h5 = document.createElement('h5')
    h5.textContent = e.target[type].value
    matchingBreweries.append(h5)
})

document.addEventListener('keydown', e => {
        // console.log(e)
        if(e.key === " " ) {
            const breweryFav = document.createElement('img')
            breweryFav.src = detailImage
            favMenu.append(breweryFav)
        }
})


