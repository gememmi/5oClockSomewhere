const URL = https://api.openbrewerydb.org/breweries?by_city=new_york

function onload() {
fetch("https://api.openbrewerydb.org/breweries?by_city=new_york")
.then(response => response.json())
.then (data => console.log(data))
}