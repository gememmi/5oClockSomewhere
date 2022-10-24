
const URL = "http//api.openbrewerydb.org/breweries?by_city=new_york"

fetch("https://api.openbrewerydb.org/breweries?by_city=new_york")
    .then(response => response.json())
    .then (data => renderData(data))

const breweryImage = document.querySelector('#beer-detail-image')
const breweryName = document.querySelector('#brewery-detail-name')
const breweryType = document.querySelector('#brewery-detail-type')
const breweryPhoneNumber = document.querySelector('#')

function renderData(data){
    console.log(data)
    data.forEach(data => {
        let breweryLi = document.createElement('li')
        breweryLi.textContent = data.name
        console.log(breweryLi) 
        document.querySelector('#brewery-list').append(breweryLi) 
        breweryLi.addEventListener('click', e => {
            
        })      
    })
}