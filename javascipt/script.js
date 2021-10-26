const input = document.getElementById("searchBar");
const button = document.getElementById("button");
var index = 0;


//Get the data from the JSON file
fetch('../json/baguio-list.json')
    .then(function (resp) {
        return resp.json();
    })
    .then(function (data) {
        console.log(data.records[0].barangay)
        let records = data.records;
        createChart(records)

    })




//Creation of infographic by chart
function createChart(records) {
    console.log(index)
    document.getElementById("barangay").innerHTML = `${records[index].barangay}`;
    document.getElementById("population").innerHTML = `Total Population: ${records[index].population}`

    //Initialized data from JSON for the chart
    let astraZeneca = records[index].AstraZeneca;
    let janssen = records[index].Janssen;
    let moderna = records[index].Moderna;
    let pfizer = records[index].Pfizer;
    let sinovac = records[index].Sinovac;
    let sputnikv = records[index].Sputnikv;

    //Creation of chart
    let ctx = document.getElementById('mychart').getContext('2d');
    const chartData = {
        type: 'pie',
        labels: [
            'AstraZeneca',
            'Janssen',
            'Moderna',
            'Pfizer',
            'Sinovac',
            'Sputnikv'
        ],
        datasets: [{
            label: 'My First Dataset',
            data: [astraZeneca, janssen, moderna, pfizer, sinovac, sputnikv],
            backgroundColor: [
                'red',
                'blue',
                'green',
                'yellow',
                'purple',
                'orange'
            ],
            hoverOffset: 10,
            responsive: true
        }]
    };

    const config = {
        type: 'pie',
        data: chartData,
    };
    const myChart = new Chart(ctx, config);

    //Next Function for chart
    button.onclick = function () {
        if (index > records.length) {

        } else {
            myChart.destroy();
            index++
            console.log(index)
            createChart(records, index)
        }
    }
    //Previous Function for chart
    button2.onclick = function () {
        if (index < 0) {

        } else {
            myChart.destroy();
            index--
            console.log(index)
            createChart(records, index)
        }
    }
}
