const URL = "http//api.openbrewerydb.org/breweries?by_city=new_york"
// var item = items[Math.floor(Math.random()*items.length)];

const imageArray = [
    "/Users/emilydaniels/Development/code/phase-1-project/images/alphabet-city-beer-company.jpeg",
 "/Users/emilydaniels/Development/code/phase-1-project/images/b9 beverages.webp",
    "/Users/emilydaniels/Development/code/phase-1-project/images/birreriaEataly.jpeg",
    "/Users/emilydaniels/Development/code/phase-1-project/images/deathave.jpeg",
    "/Users/emilydaniels/Development/code/phase-1-project/images/empire city .jpeg",
    "/Users/emilydaniels/Development/code/phase-1-project/images/harlembluebeer.jpg",
  "/Users/emilydaniels/Development/code/phase-1-project/images/harlembrewery.jpeg", "/Users/emilydaniels/Development/code/phase-1-project/images/heartland.jpg", "/Users/emilydaniels/Development/code/phase-1-project/images/owlsBrew.jpeg","/Users/emilydaniels/Development/code/phase-1-project/images/radiantPig.webp","/Users/emilydaniels/Development/code/phase-1-project/images/ruckusco.jpeg","/Users/emilydaniels/Development/code/phase-1-project/images/ruckusco.jpeg", "/Users/emilydaniels/Development/code/phase-1-project/images/thirdRail.jpeg", "/Users/emilydaniels/Development/code/phase-1-project/images/toastAle.jpeg"
]
fetch("https://api.openbrewerydb.org/breweries?by_city=new_york")
    .then(response => response.json())
    .then (data => renderData(data))

function renderData(data){
    console.log(data)
    data.forEach(data => {
        let breweryLi = document.createElement('h5')
        breweryLi.textContent = data.name
        document.querySelector('#brewery-list').append(breweryLi)
        
    
        breweryLi.addEventListener('click', (e) => {
            beerNameDetail = document.querySelector('#brewery-detail-name')
            beerNameDetail.textContent = data.name

        // let randomImage = imageArray[Math.floor(Math.random()*imageArray.length)];
        // detailImage = document.querySelector('#beer-detail-image')
        // detailImage.src = randomImage
            
        }
        )      
    })
}

