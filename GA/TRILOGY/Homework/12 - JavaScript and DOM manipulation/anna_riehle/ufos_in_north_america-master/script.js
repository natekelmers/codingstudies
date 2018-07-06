var filteredData = dataSet;

function writeData(dataset, i) {
    var datetime = dataset[i]["datetime"];
    var city = dataset[i]["city"];
    var state = dataset[i]["state"];
    var country = dataset[i]["country"];
    var shape = dataset[i]["shape"];
    var duration = dataset[i]["durationMinutes"];
    var comments = dataset[i]["comments"];
    trow = d3.select("tbody").append("tr");
    trow.append("td").text(datetime);
    trow.append("td").text(city);
    trow.append("td").text(state);
    trow.append("td").text(country);
    trow.append("td").text(shape);
    trow.append("td").text(duration);
    trow.append("td").text(comments);
}

function formatDate(userDate) {
  var parts = userDate.split('/');
  if (parts[0].length == 1) parts[0] = '0' + parts[0];
  if (parts[1].length == 1) parts[1] = '0' + parts[1];
  return parts[2] + "-" + parts[0] + "-" + parts[1];
}

function renderTable() {
  var numRecords = filteredData.length;
  var recordsPerPage = 250;
  var numPages = Math.ceil(numRecords/recordsPerPage)
  var table = d3.select("#summary-table");
  var tbody = table.select("tbody");
  var trow;
  for (var i = 0; i < recordsPerPage; i++) {
      writeData(filteredData, i);
  }


  i = 1
  while (i <= numPages) {
  var li = d3.select("ul").append("li")
  var a = li.append("a").attr("href", "#")
  a.text(i)
  i++
}
d3.select("li").attr("class", "active")
d3.selectAll("a").on("click", function(event) {
  pageNum = this.text
  d3.selectAll(".active").classed("active", false)
  d3.select(this.parentNode).classed("active", true)
  d3.select("tbody").remove()
  d3.select("table").append("tbody")
  var rec_start = ((pageNum - 1) * recordsPerPage) + 1
  var rec_end = pageNum * recordsPerPage
  i = rec_start
  while (i <= rec_end) {
    writeData(filteredData, i)
    i++
  }
})

}

renderTable();

d3.select("#submit").on("click", function(event) {
d3.event.preventDefault();
var state_input = d3.select("#state").node().value;
var city_input = d3.select("#city").node().value;
var country_sel = document.getElementById('country');
var country_input = country_sel.options[country_sel.selectedIndex].value
var shape_sel = document.getElementById('shape');
var shape_input = shape_sel.options[shape_sel.selectedIndex].value
var start_date = d3.select("#start_date").node().value;
var end_date = d3.select("#end_date").node().value;
d3.select("tbody").remove()
d3.select("table").append("tbody")
  var tbody = d3.select("tbody");
  var trow;
  var records = [];
  for (var i = 0; i < filteredData.length; i++) {
    var datetime = filteredData[i]["datetime"];
    var city = filteredData[i]["city"];
    var state = filteredData[i]["state"];
    var country = filteredData[i]["country"];
    var shape = filteredData[i]["shape"];
    var duration = filteredData[i]["durationMinutes"];
    var comments = filteredData[i]["comments"];
    if (start_date != "" && end_date != "" && city_input != "" && state_input != "" && country_input != "default" && shape_input != "default") {
      if (start_date <= formatDate(datetime) && end_date >= formatDate(datetime) && city_input.toLowerCase() == city && state_input.toLowerCase() == state && country_input == country && shape_input == shape) {
        records.push(filteredData[i]);
      }
    }
      else if (start_date != "" && end_date != "" && city_input != "" && state_input != "" && country_input != "default") {
      if (start_date <= formatDate(datetime) && end_date >= formatDate(datetime) && city_input.toLowerCase() == city && state_input.toLowerCase() == state && country_input == country) {
        records.push(filteredData[i]);
      }
    }
      else if (start_date != "" && end_date != "" && city_input != "" && state_input != "" && shape_input != "default") {
      if (start_date <= formatDate(datetime) && end_date >= formatDate(datetime) && city_input.toLowerCase() == city && state_input.toLowerCase() == state && shape_input == shape) {
        records.push(filteredData[i]);
      }
    }
      else if (start_date != "" && end_date != "" && city_input != "" && country_input != "default" && shape_input != "default") {
      if (start_date <= formatDate(datetime) && end_date >= formatDate(datetime) && city_input.toLowerCase() == city && country_input == country && shape_input == shape) {
        records.push(filteredData[i]);
      }
    }
      else if (start_date != "" && end_date != "" && city_input != "" && state_input != "" && shape_input != "default") {
      if (start_date <= formatDate(datetime) && end_date >= formatDate(datetime) && city_input.toLowerCase() == city && state_input.toLowerCase() == state && shape_input == shape) {
        records.push(filteredData[i]);
      }
    }
      else if (start_date != "" && end_date != "" && state_input != "" && state_input != "" && shape_input != "default") {
      if (start_date <= formatDate(datetime) && end_date >= formatDate(datetime) && state_input.toLowerCase() == state && state_input.toLowerCase() == state && shape_input == shape) {
        records.push(filteredData[i]);
      }
    }
      else if (start_date != "" && city_input != "" && state_input != "" && country_input != "default" && shape_input != "default") {
      if (start_date <= formatDate(datetime) && city_input.toLowerCase() == city && state_input.toLowerCase() == state && country_input == country && shape_input == shape) {
        records.push(filteredData[i]);
      }
    }
      else if (end_date != "" && city_input != "" && state_input != "" && country_input != "default" && shape_input != "default") {
      if (end_date >= formatDate(datetime) && city_input.toLowerCase() == city && state_input.toLowerCase() == state && country_input == country && shape_input == shape) {
        records.push(filteredData[i]);
      }
    }
      else if (start_date != "" && end_date != "" && city_input != "" && state_input != "") {
      if (start_date <= formatDate(datetime) && end_date >= formatDate(datetime) && city_input.toLowerCase() == city && state_input.toLowerCase() == state) {
        records.push(filteredData[i]);
      }
    }  
      else if (start_date != "" && end_date != "" && city_input != "" && country_input != "default") {
      if (start_date <= formatDate(datetime) && end_date >= formatDate(datetime) && city_input.toLowerCase() == city && country_input == country) {
        records.push(filteredData[i]);
      }
    }    
      else if (start_date != "" && end_date != "" && city_input != "" && shape_input != "default") {
      if (start_date <= formatDate(datetime) && end_date >= formatDate(datetime) && city_input.toLowerCase() == city && shape_input == shape) {
        records.push(filteredData[i]);
      }
    }  
      else if (start_date != "" && end_date != "" && state_input != "" && country_input != "default") {
      if (start_date <= formatDate(datetime) && end_date >= formatDate(datetime) && state_input.toLowerCase() == state && country_input == country) {
        records.push(filteredData[i]);
      }
    }    
      else if (start_date != "" && end_date != "" && state_input != "" && shape_input != "default") {
      if (start_date <= formatDate(datetime) && end_date >= formatDate(datetime) && state_input.toLowerCase() == state && shape_input == shape) {
        records.push(filteredData[i]);
      }
    } 
      else if (start_date != "" && end_date != "" && country_input != "default" && shape_input != "default") {
      if (start_date <= formatDate(datetime) && end_date >= formatDate(datetime) && country_input == country && shape_input == shape) {
        records.push(filteredData[i]);
      }
    } 
      else if (start_date != "" && city_input != "" && state_input != "" && country_input != "default") {
      if (start_date <= formatDate(datetime) && city_input.toLowerCase() == city && state_input.toLowerCase() == state && country_input == country) {
        records.push(filteredData[i]);
      }
    } 
      else if (start_date != "" && city_input != "" && state_input != "" && shape_input != "default") {
      if (start_date <= formatDate(datetime) && city_input.toLowerCase() == city && state_input.toLowerCase() == state && shape_input == shape) {
        records.push(filteredData[i]);
      }
    } 
      else if (start_date != "" && city_input != "" && country_input != "default" && shape_input != "default") {
      if (start_date <= formatDate(datetime) && city_input.toLowerCase() == city && country_input == country && shape_input == shape) {
        records.push(filteredData[i]);
      }
    } 
      else if (start_date != "" && state_input != "" && country_input != "default" && shape_input != "default") {
      if (start_date <= formatDate(datetime) && state_input.toLowerCase() == state && country_input == country && shape_input == shape) {
        records.push(filteredData[i]);
      }
    } 
      else if (end_date != "" && city_input != "" && state_input != "" && country_input != "default") {
      if (end_date >= formatDate(datetime) && city_input.toLowerCase() == city && state_input.toLowerCase() == state && country_input == country) {
        records.push(filteredData[i]);
      }
    } 
      else if (end_date != "" && city_input != "" && state_input != "" && shape_input != "default") {
      if (end_date >= formatDate(datetime) && city_input.toLowerCase() == city && state_input.toLowerCase() == state && shape_input == shape) {
        records.push(filteredData[i]);
      }
    } 
      else if (end_date != "" && city_input != "" && country_input != "default" && shape_input != "default") {
      if (end_date >= formatDate(datetime) && city_input.toLowerCase() == city && country_input == country && shape_input == shape) {
        records.push(filteredData[i]);
      }
    } 
      else if (end_date != "" && state_input != "" && country_input != "default" && shape_input != "default") {
      if (end_date >= formatDate(datetime) && state_input.toLowerCase() == state && country_input == country && shape_input == shape) {
        records.push(filteredData[i]);
      }
    } 
      else if (city_input != "" && state_input != "" && country_input != "default" && shape_input != "default") {
      if (city_input.toLowerCase() == city && state_input.toLowerCase() == state && country_input == country && shape_input == shape) {
        records.push(filteredData[i]);
      }
    } 
      else if (start_date != "" && end_date != "" && city_input != "") {
      if (start_date <= formatDate(datetime) && end_date >= formatDate(datetime) && city_input.toLowerCase() == city) {
        records.push(filteredData[i]);
      }
    }  
      else if (start_date != "" && end_date != "" && state_input != "") {
      if (start_date <= formatDate(datetime) && end_date >= formatDate(datetime) && state_input.toLowerCase() == state) {
        records.push(filteredData[i]);
      }
    }  
      else if (start_date != "" && end_date != "" && country_input != "default") {
      if (start_date <= formatDate(datetime) && end_date >= formatDate(datetime) && country_input == country) {
        records.push(filteredData[i]);
      }
    }
      else if (start_date != "" && end_date != "" && shape_input != "default") {
      if (start_date <= formatDate(datetime) && end_date >= formatDate(datetime) && shape_input == shape) {
        records.push(filteredData[i]);
      }
    }           
      else if (start_date != "" && city_input != "" && state_input != "") {
      if (start_date <= formatDate(datetime) && city_input.toLowerCase() == city && state_input.toLowerCase() == state) {
        records.push(filteredData[i]);
      }
    } 
      else if (start_date != "" && city_input != "" && country_input != "default") {
      if (start_date <= formatDate(datetime) && city_input.toLowerCase() == city && country_input == country) {
        records.push(filteredData[i]);
      }
    } 
      else if (start_date != "" && city_input != "" && shape_input != "default") {
      if (start_date <= formatDate(datetime) && city_input.toLowerCase() == city && shape_input == shape) {
        records.push(filteredData[i]);
      }
    } 
      else if (start_date != "" && state_input != "" && country_input != "default") {
      if (start_date <= formatDate(datetime) && state_input.toLowerCase() == state && country_input == country) {
        records.push(filteredData[i]);
      }
    } 
      else if (start_date != "" && state_input != "" && shape_input != "default") {
      if (start_date <= formatDate(datetime) && state_input.toLowerCase() == state && shape_input == shape) {
        records.push(filteredData[i]);
      }
    }
      else if (start_date != "" && country_input != "default" && shape_input != "default") {
      if (start_date <= formatDate(datetime) && country_input == country && shape_input == shape) {
        records.push(filteredData[i]);
      }
    }
      else if (end_date != "" && city_input != "" && state_input != "") {
      if (end_date >= formatDate(datetime) && city_input.toLowerCase() == city && state_input.toLowerCase() == state) {
        records.push(filteredData[i]);
      }
    } 
      else if (end_date != "" && city_input != "" && country_input != "default") {
      if (end_date >= formatDate(datetime) && city_input.toLowerCase() == city && country_input == country) {
        records.push(filteredData[i]);
      }
    } 
      else if (end_date != "" && city_input != "" && shape_input != "default") {
      if (end_date >= formatDate(datetime) && city_input.toLowerCase() == city && shape_input == shape) {
        records.push(filteredData[i]);
      }
    } 
      else if (end_date != "" && state_input != "" && country_input != "default") {
      if (end_date >= formatDate(datetime) && state_input.toLowerCase() == state && country_input == country) {
        records.push(filteredData[i]);
      }
    } 
      else if (end_date != "" && state_input != "" && shape_input != "default") {
      if (end_date >= formatDate(datetime) && state_input.toLowerCase() == state && shape_input == shape) {
        records.push(filteredData[i]);
      }
    }
      else if (end_date != "" && country_input != "default" && shape_input != "default") {
      if (end_date >= formatDate(datetime) && country_input == country && shape_input == shape) {
        records.push(filteredData[i]);
      }
    }
      else if (city_input != "" && state_input != "" && country_input != "default") {
      if (city_input.toLowerCase() == city && state_input.toLowerCase() == state && country_input == country) {
        records.push(filteredData[i]);
      }
    }
      else if (city_input != "" && state_input != "" && shape_input != "default") {
      if (city_input.toLowerCase() == city && state_input.toLowerCase() == state && shape_input == shape) {
        records.push(filteredData[i]);
      }
    }
      else if (city_input != "" && country_input != "default" && shape_input != "default") {
      if (city_input.toLowerCase() == city && country_input == country && shape_input == shape) {
        records.push(filteredData[i]);
      }
    } 
      else if (state_input != "" && country_input != "default" && shape_input != "default") {
      if (state_input.toLowerCase() == state && country_input == country && shape_input == shape) {
        records.push(filteredData[i]);
      }
    }     
      else if (start_date != "" && end_date != "") {
      if (start_date <= formatDate(datetime) && end_date >= formatDate(datetime)) {
        records.push(filteredData[i]);
      }
    }
      else if (start_date != "" && city_input != "") {
      if (start_date <= formatDate(datetime) && city_input.toLowerCase() == city) {
        records.push(filteredData[i]);
      }
    }
      else if (start_date != "" && state_input != "") {
      if (start_date <= formatDate(datetime) && state_input.toLowerCase() == state) {
        records.push(filteredData[i]);
      }
    } 
      else if (start_date != "" && country_input != "default") {
      if (start_date <= formatDate(datetime) && country_input == country) {
        records.push(filteredData[i]);
      }
    }  
      else if (start_date != "" && shape_input != "default") {
      if (start_date <= formatDate(datetime) && shape_input == shape) {
        records.push(filteredData[i]);
      }
    } 
      else if (end_date != "" && city_input != "") {
      if (end_date >= formatDate(datetime) && city_input.toLowerCase() == city) {
        records.push(filteredData[i]);
      }
    }
      else if (end_date != "" && state_input != "") {
      if (end_date >= formatDate(datetime) && state_input.toLowerCase() == state) {
        records.push(filteredData[i]);
      }
    } 
      else if (end_date != "" && country_input != "default") {
      if (end_date >= formatDate(datetime) && country_input == country) {
        records.push(filteredData[i]);
      }
    }  
      else if (end_date != "" && shape_input != "default") {
      if (end_date >= formatDate(datetime) && shape_input == shape) {
        records.push(filteredData[i]);
      }
    } 
      else if (city_input != "" && state_input != "") {
      if (city_input.toLowerCase() == city && state_input.toLowerCase() == state) {
        records.push(filteredData[i]);
      }
    }      
      else if (city_input != "" && country_input != "default") {
      if (city_input.toLowerCase() == city && country_input == country) {
        records.push(filteredData[i]);
      }
    }  
      else if (city_input != "" && shape_input != "default") {
      if (city_input.toLowerCase() == city && shape_input == shape) {
        records.push(filteredData[i]);
      }
    } 
      else if (state_input != "" && country_input != "default") {
      if (state_input.toLowerCase() == state && country_input == country) {
        records.push(filteredData[i]);
      }
    }  
      else if (state_input != "" && shape_input != "default") {
      if (state_input.toLowerCase() == state && shape_input == shape) {
        records.push(filteredData[i]);
      }
    }  
    else if (country_input != "default" && shape_input != "default") {
      if (country_input == country && shape_input == shape) {
        records.push(filteredData[i]);
      }
    } 
      else if (start_date != "") {
      if (start_date <= formatDate(datetime)) {
        records.push(filteredData[i]);
      }
    }
      else if (end_date != "") {
      if (end_date >= formatDate(datetime)) {
        records.push(filteredData[i]);
      }
    }
      else if (city_input != "") {
      if (city_input.toLowerCase() == city) {
        records.push(filteredData[i]);
      }
            }   
      else if (state_input != "") {
      if (state_input.toLowerCase() == state) {
        records.push(filteredData[i]);
      }
    }
    else if (country_input != "default") {
      if (country_input == country) {
        records.push(filteredData[i]);
      }
    }    
      else if (shape_input != "default") {
      if (shape_input == shape) {
        records.push(filteredData[i]);
      }
    } 
    else {
      records.push(filteredData[i]);
    }
    }
  d3.select("ul").remove()
  d3.select("nav").append("ul").attr("class", "pagination")
  var numRecords = records.length;
  if (numRecords > 10000) {
    recordsPerPage = 250
  }
  else if (numRecords > 5000) {
    recordsPerPage = 100
  }
  else {
    recordsPerPage = 50
  }
  var numPages = Math.ceil(numRecords/recordsPerPage)
    for (var i = 0; i < recordsPerPage; i++) {
      writeData(records, i);
  }
  i = 1
  while (i <= numPages) {
  var li = d3.select("ul").append("li")
  var a = li.append("a").attr("href", "#")
  a.text(i)
  i++
}
d3.select("li").attr("class", "active")
d3.selectAll("a").on("click", function(event) {
  pageNum = this.text
  d3.selectAll(".active").classed("active", false)
  d3.select(this.parentNode).classed("active", true)
  d3.select("tbody").remove()
  d3.select("table").append("tbody")
  var rec_start = ((pageNum - 1) * recordsPerPage) + 1
  var rec_end = pageNum * recordsPerPage
  i = rec_start
  while (i <= rec_end) {
    writeData(records, i)
    i++
  }
})
});

d3.select("#reset").on("click", function(event) {
  location.reload();
})

