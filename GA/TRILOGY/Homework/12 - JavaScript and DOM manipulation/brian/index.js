var $tbody = document.querySelector("tbody");
var $button = document.querySelector("#searchButton");
var $input = document.querySelector("#searchInput");

var UFOsightings = dataSet;

//https://www.w3schools.com/jsref/met_tablerow_insertcell.asp
function renderTable() {
    $tbody.innerHTML = "";
    for (var i =0; i < UFOsightings.length; i++){
        var $row = $tbody.insertRow(i)
        $cell = $row.insertCell(0);
        $cell.innerText = UFOsightings[i].datetime;
        $cell = $row.insertCell(1);
        $cell.innerText = UFOsightings[i].city;
        $cell = $row.insertCell(2);
        $cell.innerText = UFOsightings[i].state;
        $cell = $row.insertCell(3);
        $cell.innerText = UFOsightings[i].country;
        $cell = $row.insertCell(4);
        $cell.innerText = UFOsightings[i].UFOshape;
        $cell = $row.insertCell(5);
        $cell.innerText = UFOsightings[i].durationMinutes;     
        $cell = $row.insertCell(6);
        $cell.innerText = UFOsightings[i].comment;       
    }
}

$button.addEventListener("click", handleSearchButtonClick);

function handleSearchButtonClick(){
    var filterDate = $input.value;
    UFOsightings = dataSet.filter(function(dataSet) {
        var originalDate = dataSet.datetime;
        return originalDate === filterDate;
    });
    renderTable();
};

renderTable();