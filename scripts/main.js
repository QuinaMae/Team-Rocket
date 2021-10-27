//A product of Team Rocket
//JavaScript written by: Quina Mae C. Charopang, X, X ,X , X ,X

//This method requests to the server to load the information in the web
fetch('data.json', {
    method: 'GET',
    mode: 'no-cors',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    }   
}).then(function(res){
    console.log(res);
});

//The onload event gets executed when all other resources or objects has been loaded
window.onload = userOption();

//This function fills in data of drop down list with 'barangay' 
function userOption(){
    var option = new XMLHttpRequest(),
        method = 'GET',
        overrideMimeType = 'application/json',
        url = '../scripts/data.json';

    option.onreadystatechange = function() {
            
            //this will parse json into jscript type 
            var baguio = JSON.parse(option.responseText);
            var showBrgy = document.getElementById('brgy-dropdown');
            for (var i = 0; i < baguio.length; i++){
                
                //this formats the result of userOption
                showBrgy.innerHTML = showBrgy.innerHTML 
                + '<option value= "' +''+ baguio[i]['population'] + '<br>'
                                        + 'AstraZeneca: '+ baguio[i].AstraZeneca + '<br>'
                                        + 'Janssen: ' + baguio[i].Janssen+ '<br>'
                                        + 'Moderna: ' + baguio[i].Moderna+ '<br>'
                                        + 'Pfizer: ' + baguio[i].Pfizer+ '<br>'
                                        + 'Sinovac: ' + baguio[i].Sinovac+ '<br>'
                                        + 'SputnikV: ' + baguio[i].SputnikV+ '<br>'
                                        + '' + '">' + baguio[i]['barangay']
                + '</option>';
            }
        // }
    };
    option.open(method, url, true);
    option.send();
}

//This function displays information of per barangay 
function display(displayBrgy){
    var display = document.getElementById('res');
    display.innerHTML = '<b>Barangay: </b>' + displayBrgy.options[displayBrgy.selectedIndex].text + '<br>' 
        + '<b>Population: </b>' + displayBrgy.value + '</br>';
}

