const URL = "http//api.openbrewerydb.org/breweries?by_city=new_york"

fetch("https://api.openbrewerydb.org/breweries?by_city=new_york")
    .then(response => response.json())
    .then (data => renderData(data))

function renderData(data){
    console.log(data)
    data.forEach(data => {
        let breweryLi = document.createElement('li')
        breweryLi.textContent = data.name
        console.log(breweryLi) 
        document.querySelector('#brewery-list').append(breweryLi)       
    })
}