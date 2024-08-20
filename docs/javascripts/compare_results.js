var drawCharts = drawCompareCharts;

function construct_table(scenario, models, data1, data2, isPower, results1, results2) {
    let html = ``;
    html += `<thead><tr>`;
    let tableHeader = `
        <th>Model</th>
        <th>${data1}</th>
        <th>${data2}</th>
        <th>Performance Delta</th>`;

    if (isPower) {
        tableHeader += `
        <th>Power 1</th>
        <th>Power 2</th>
        <th>Power Delta</th>
        <th>Power Efficiency 1</th>
        <th>Power Efficiency 2</th>
        <th>Power Efficiency Delta</th>`;
    }
    tableHeader += `</tr>`;
    html += tableHeader + "</thead>";
    html += `<tfoot><tr>${tableHeader}</tr></tfoot>`;

    models.forEach((row) => {
        html += "<tr>";
        html += `<td class='model'>${row}</td>`;
        const perf1 = Math.round(results1[row].Performance_Result, 1);
        const perf2 = Math.round(results2[row].Performance_Result, 1);
        let perfdelta = 0;
        if (perf2) {
            perfdelta = Math.round((1 - perf1 / perf2) * 10000) / 100;
        }
        html += `<td class="col-result">${perf1}</td>`;
        html += `<td class="col-result">${perf2}</td>`;
        html += `<td class="col-result">${perfdelta}%</td>`;

        if (isPower) {
            const pow1 = results1[row].Power_Result;
            const pow2 = results2[row].Power_Result;
            let powdelta = 0;
            let peff1 = "";
            let peff2 = "";
            let peffdelta = "";

            if (pow2) {
                powdelta = Math.round((1 - pow1 / pow2) * 10000) / 100;
            }
            if (pow1) {
                peff1 = Math.round((perf1 / pow1) * 100000) / 100000;
            }
            if (pow2) {
                peff2 = Math.round((perf2 / pow2) * 100000) / 100000;
            }
            if (peff2) {
                peffdelta = Math.round((1 - peff1 / peff2) * 10000) / 100;
            }
            html += `<td class="col-result">${pow1}</td>`;
            html += `<td class="col-result">${pow2}</td>`;
            html += `<td class="col-result">${powdelta}%</td>`;
            html += `<td class="col-result">${peff1}</td>`;
            html += `<td class="col-result">${peff2}</td>`;
            html += `<td class="col-result">${peffdelta}%</td>`;
        }
        html += "</tr>";
    });

    html += "";
    return html;
}






var scenarios = [ "Offline", "Server", "SingleStream", "MultiStream" ];
var charts1 = {};
var charts2 = {};
var charts3 = {};
function drawCompareCharts() {
    drawCompareCharts_("Offline");
    drawCompareCharts_("Server");
    drawCompareCharts_("SingleStream");
    drawCompareCharts_("MultiStream");
}
function drawCompareCharts_(scenario) {
    var chartdata1a = [], chartdata2a = [];	
    var chartdata1b = [], chartdata2b = [];	
    var chartdata1c = [], chartdata2c = [];	
    var models = [], val1a=[], val2a=[], val1b=[], val2b=[], val1c=[], val2c=[];

    var tableid = "#results_"+scenario;
    if(! ($(tableid).length)) return;

    $(tableid +" tbody tr td:nth-child(1)").each( function(){
        if (!($(this).is(":hidden")) ) {
            models.push( $(this).text() );
        }
    });

    $(tableid + " tbody tr td:nth-child(2)").each( function(){
        if (!($(this).is(":hidden")))
            val1a.push( $(this).text() );       
    });
    $(tableid + " tbody tr td:nth-child(3)").each( function(){
        if (!($(this).is(":hidden")))
            val2a.push( $(this).text() );       
    });
    $(tableid + " tbody tr td:nth-child(5)").each( function(){
        if (!($(this).is(":hidden")))
            val1b.push( $(this).text() );       
    });
    $(tableid + " tbody tr td:nth-child(6)").each( function(){
        if (!($(this).is(":hidden")))
            val2b.push( $(this).text() );       
    });
    $(tableid + " tbody tr td:nth-child(8)").each( function(){
        if (!($(this).is(":hidden")))
            val1c.push( $(this).text() );       
    });
    $(tableid + " tbody tr td:nth-child(9)").each( function(){
        if (!($(this).is(":hidden")))
            val2c.push( $(this).text() );       
    });
    var count=0;
    for(var i = 0; i < models.length; i++) {
        chartdata1a.push({
            x: count,
            y: parseFloat(val1a[i]),
            label: models[i]
        });
        chartdata2a.push({
            x: count,
            y: parseFloat(val2a[i]),
            label: models[i]
        });

        chartdata1b.push({
            x: count,
            y: parseFloat(val1b[i]),
            label: models[i]
        });
        chartdata2b.push({
            x: count,
            y: parseFloat(val2b[i]),
            label: models[i]
        });
        chartdata1c.push({
            x: count,
            y: parseFloat(val1c[i]),
            label: models[i]
        });
        chartdata2c.push({
            x: count,
            y: parseFloat(val2c[i]),
            label: models[i]
        });
        count++;
    }
    charts1[scenario] = new CanvasJS.Chart("chartContainer"+scenario+"1", {
        title: {
            text: "Performance Comparison"
        },
        subtitles: [{
            text: "",
            fontSize: 40,
            verticalAlign: "center",
            dockInsidePlotArea: true,
            fontColor: "rgba(0,0,0,0.1)"
        }],

        legend: {
            cursor: "pointer",
            //itemclick: toggleDataSeries,
        },
        axisX:{
            intervalType: String,
            valueFormatString: " ",
            labelAngle: 0,
            labelTextAlign: "center",
            labelMaxWidth: 60,
            labelFormatter: function(e) {
                return (""+e.label).substring(0,75);
            },
        },
        axisY: {
            crosshair: {
                enabled: true
            },
            minimum: 0,
            title: ytitle[scenario],
        },
        data: [
            {
                showInLegend: true,
                type: "column",
                name: data1[scenario],
                dataPoints: chartdata1a
            },
            {
                showInLegend: true,
                type: "column",
                name: data2[scenario],
                dataPoints: chartdata2a
            },

        ]
    });
    charts1[scenario].render();

    if(draw_power[scenario]) {	
        charts2[scenario] = new CanvasJS.Chart("chartContainer"+scenario+"2", {

            title: {
                text: "Power Comparison"
            },
            subtitles: [{
                text: "",
                fontSize: 40,
                verticalAlign: "center",
                dockInsidePlotArea: true,
                fontColor: "rgba(0,0,0,0.1)"
            }],

            legend: {
                cursor: "pointer",
                //itemclick: toggleDataSeries,
            },
            axisX:{
                intervalType: String,
                valueFormatString: " ",
                labelAngle: 0,
                labelTextAlign: "center",
                labelMaxWidth: 60,
                labelFormatter: function(e) {
                    return (""+e.label).substring(0,75);
                },
            },
            axisY: {
                crosshair: {
                    enabled: true
                },
                title: "Average Power (Watts)",
            },
            data: [
                {
                    showInLegend: true,
                    type: "column",
                    name: data1[scenario],
                    dataPoints: chartdata1b
                },
                {
                    showInLegend: true,
                    type: "column",
                    name: data2[scenario],
                    dataPoints: chartdata2b
                },

            ]
        });
        charts2[scenario].render();
    }

    if(draw_power_efficiency[scenario]) {

        charts3[scenario] = new CanvasJS.Chart("chartContainer"+scenario+"3", {

            title: {
                text: "Power Efficiency"
            },
            subtitles: [{
                text: "",
                fontSize: 40,
                verticalAlign: "center",
                dockInsidePlotArea: true,
                fontColor: "rgba(0,0,0,0.1)"
            }],

            legend: {
                cursor: "pointer",
                //itemclick: toggleDataSeries,
            },
            axisX:{
                intervalType: String,
                valueFormatString: " ",
                labelAngle: 0,
                labelTextAlign: "center",
                labelMaxWidth: 60,
                labelFormatter: function(e) {
                    return (""+e.label).substring(0,75);
                },
            },
            axisY: {
                crosshair: {
                    enabled: true
                },
                title: "Samples per Joule",
            },
            data: [
                {
                    showInLegend: true,
                    type: "column",
                    name: data1[scenario],
                    dataPoints: chartdata1c
                },
                {
                    showInLegend: true,
                    type: "column",
                    name: data2[scenario],
                    dataPoints: chartdata2c
                },

            ]
        });
        charts3[scenario].render();
    }
}


if($("#printChartOffline1").length)
    document.getElementById("printChartOffline1").addEventListener("click",function(){
        charts1["Offline"].exportChart({format: "png"});
    }); 

if($("#printChartServer1").length)
    document.getElementById("printChartServer1").addEventListener("click",function(){
        charts1["Server"].exportChart({format: "png"});
    }); 
if($("#printChartSingleStream1").length)
    document.getElementById("printChartSingleStream1").addEventListener("click",function(){
        charts1["SingleStream"].exportChart({format: "png"});
    }); 
if($("#printChartMultiStream1").length)
    document.getElementById("printChartMultiStream1").addEventListener("click",function(){
        charts1["MultiStream"].exportChart({format: "png"});
    }); 

if(draw_power["Offline"]) {
    if( $("#printChartOffline2").length)
        document.getElementById("printChartOffline2").addEventListener("click",function(){
            charts2["Offline"].exportChart({format: "png"});
        }); 
}
if(draw_power["Server"]) {
    if( $("#printChartServer2").length)
        document.getElementById("printChartServer2").addEventListener("click",function(){
            charts2["Server"].exportChart({format: "png"});
        }); 
}
if(draw_power["SingleStream"]) {
    if( $("#printChartSingleStream2").length)
        document.getElementById("printChartSingleStream2").addEventListener("click",function(){
            charts2["SingleStream"].exportChart({format: "png"});
        }); 
}
if(draw_power["MultiStream"]) {
    if( $("#printChartMultiStream2").length)
        document.getElementById("printChartMultiStream2").addEventListener("click",function(){
            charts2["MultiStream"].exportChart({format: "png"});
        }); 
}

if(draw_power_efficiency["Offline"]) {
    if( $("#printChartOffline3").length)
        document.getElementById("printChartOffline3").addEventListener("click",function(){
            charts3["Offline"].exportChart({format: "png"});
        });
}
if(draw_power_efficiency["Server"]) {
    if( $("#printChartServer3").length)
        document.getElementById("printChartServer3").addEventListener("click",function(){
            charts3["Server"].exportChart({format: "png"});
        });
}
if(draw_power_efficiency["SingleStream"]) {
    if( $("#printChartSingleStream3").length)
        document.getElementById("printChartSingleStream3").addEventListener("click",function(){
            charts3["SingleStream"].exportChart({format: "png"});
        });
}
if(draw_power_efficiency["MultiStream"]) {
    if( $("#printChartMultiStream3").length)
        document.getElementById("printChartMultiStream3").addEventListener("click",function(){
            charts3["MultiStream"].exportChart({format: "png"});
        });
}

$( document ).on( "click", "#results_Offline thead th", function() {
    drawCompareCharts_("Offline");
});
$( document ).on( "click", "#results_Server thead th", function() {
    drawCompareCharts_("Server");
});
$( document ).on( "click", "#results_SingleStream thead th", function() {
    drawCompareCharts_("SingleStream");
});
$( document ).on( "click", "#results_MultiStream thead th", function() {
    drawCompareCharts_("MultiStream");
});


$(document).ready(function() {
    $('#compareform').submit(function(event) {
        event.preventDefault(); // This will cancel the form submission

        // Your custom logic here
        console.log('Form submission canceled.');
        var system1 = $('#system1 option:selected').text();
        var system2 = $('#system2 option:selected').text();
        var models = $('#models option:selected').map(function() {
            return $(this).text();
        }).get();

        console.log(system1);
        console.log(system2);
        console.log(models);
        scenario = "Offline";
        //getSummaryData();
        /*   constructTable(scenario, models, system1, system2, False, results1, results2) {

        // Optionally, you can handle the form data yourself
        */
        var data;
        readAllData().then(function(allData) {
            console.log(allData);
            sysversion1 = "v4.0";
            sysversion2 = "v4.0";
            reConstructTables(system1, sysversion1, system2, sysversion2, allData);
        }).catch(function(error) {
            console.error(error);
        });
      }
    );

        fetchSummaryData();
});

function fetchSummaryData() {
    // Open (or create) the database
    var request = indexedDB.open("MyDatabase", 1);

    request.onupgradeneeded = function(event) {
        var db = event.target.result;

        // Create an object store named "myStore" with "Location" as the keyPath
        if (!db.objectStoreNames.contains("myStore")) {
            var objectStore = db.createObjectStore("myStore", { autoIncrement: true });
        }
        fetchAndStoreData(db);
    };

    request.onsuccess = function(event) {
        var db = event.target.result;

        // Fetch the JSON data from the URL and store it in IndexedDB
        //fetchAndStoreData(db);
    };

    request.onerror = function(event) {
        console.log("Error opening IndexedDB: " + event.target.errorCode);
    };
}





function fetchAndStoreData(db) {
    $.getJSON("https://raw.githubusercontent.com/GATEOverflow/inference_results_v4.0/docs/summary.json", function(data) {
        // Begin a transaction to save data in IndexedDB
        var transaction = db.transaction(["myStore"], "readwrite");
        var objectStore = transaction.objectStore("myStore");

        var count = 0;
        for(i = 0; i < data.length; i++) {
            item = data[i];
            var request = objectStore.add(item);
            request.onsuccess = function(event) {
                if(i % 1000 === 0)
                console.log("Data has been added to your database, record:", i+1);
            };

            request.onerror = function(event) {
                //console.error("Error adding data: " + event.target.errorCode+ event.target);
                //console.log(item);
            };
        }
        /*
        // Iterate through the JSON array and save each item
        data.forEach(function(item) {
            var request = objectStore.add(item);
            count++;
            if(count >= 5) return false;

            request.onsuccess = function(event) {
                console.log("Data has been added to your database:", item.Location);
            };

            request.onerror = function(event) {
                console.error("Error adding data: " + event.target.errorCode+ event.target);
                console.log(item);
            };
        });
        */

        transaction.oncomplete = function() {
            console.log("All data has been successfully added to IndexedDB.");
        };

        transaction.onerror = function(event) {
           // console.error("Transaction error: " + event.target.errorCode);
        };
    }).fail(function(jqxhr, textStatus, error) {
        console.error("Request Failed: " + textStatus + ", " + error);
    });
}



function readAllData() {
    return new Promise((resolve, reject) => {
        // Open the database
        var request = indexedDB.open("MyDatabase", 1);

        request.onsuccess = function(event) {
            var db = event.target.result;
            var transaction = db.transaction(["myStore"], "readonly");
            var objectStore = transaction.objectStore("myStore");

            // Open a cursor to iterate through all records
            var data = [];
            var cursorRequest = objectStore.openCursor();

            cursorRequest.onsuccess = function(event) {
                var cursor = event.target.result;
                if (cursor) {
                    data.push(cursor.value); // Push each record to the data array
                    cursor.continue(); // Move to the next record
                } else {
                    resolve(data); // Resolve the promise with the data array when done
                }
            };

            cursorRequest.onerror = function(event) {
                reject("Error reading data: " + event.target.errorCode);
            };
        };

        request.onerror = function(event) {
            reject("Error opening IndexedDB: " + event.target.errorCode);
        };
    });
}

// Assume the following variables and functions are defined elsewhere in your code:
// scenarios, system1, sysversion1, system2, sysversion2, data, ytitle_scenarios
// Also assume that `filterdata` and `construct_table` are JavaScript functions that work similarly to their Python counterparts
function reConstructTables(system1, sysversion1, system2, sysversion2, data) {
    scenarios = [ "Offline", "Server", "SingleStream", "MultiStream"];
scenarios.forEach(function(scenario) {
    let keys = ["Scenario", "Platform", "version"];
    let values = [scenario, system1, sysversion1];

    let result1 = filterdata(data, keys, values);
    if (result1.length === 0) {
        return; // Continue to the next scenario
    }

    values = [scenario, system2, sysversion2];
    let result2 = filterdata(data, keys, values);
    if (result2.length === 0) {
        return; // Continue to the next scenario
    }

    let is_power = result2[0]['has_power'];
    let power_string = is_power ? "true" : "false";

    let data1_str = `${sysversion1}: ${system1}`;
    let data2_str = `${sysversion2}: ${system2}`;
    //let ytitle = ytitle_scenarios[scenario];

    let models = [];
    let result2_models = result2.map(row => row['Model']);

    result1.forEach(function(row) {
        if (!models.includes(row['Model']) && result2_models.includes(row['Model'])) {
            models.push(row['Model']);
        }
    });

    let results1 = {};
    let results2 = {};

    models.forEach(function(model) {
        results1[model] = result1.find(row => row['Model'] === model);
        results2[model] = result2.find(row => row['Model'] === model);
    });

    //console.log(results1);
    //console.log(results2);
    //let html = `<h3>Comparing ${scenario} scenario for ${data1_str} and ${data2_str}</h3>` + tableposthtml;
    let htmltable = construct_table(scenario, models, data1_str, data2_str, is_power, results1, results2);
    html = htmltable;
    //console.log(html);

    // Assuming you want to append this HTML to a specific element on your page
    var elemId = "results_" + scenario
    console.log(elemId);
    document.getElementById(elemId).innerHTML = html;
    $('table').tablesorter();
    var resort = true, // re-apply the current sort
        callback = function() {
          // do something after the updateAll method has completed
        };

      // let the plugin know that we made a update, then the plugin will
      // automatically sort the table based on the header settings
      $("table").trigger("updateAll", [ resort, callback ]);
    drawCompareCharts();
});
}

function filterdata(data, keys, values) {
    let filtered_data = [];
    if (!data) return filtered_data;

    data.forEach(function(item) {
        let mismatch = false;

        for (let i = 0; i < keys.length; i++) {
            let key = keys[i];
            let value = values[i];

            if (item[key] !== value) {
                mismatch = true;
                break;
            }
        }

        if (!mismatch) {
            filtered_data.push(item);
        }
    });

    return filtered_data;
}


