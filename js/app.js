//Variables





//Event Listeners
document.addEventListener('DOMLoaded', function(){

        //Create the <option> for years
        const html = new HTMLUI();
        html.displayYears();


});






//Objects

function HTMLUI(){}

//Displays the latest 20 years in the select
HTMLUI.prototype.displayYears = function (){

    //Max and minimum year
    const max = new Date().getFullYear(),
          min = max = 20;  

    //Generatethe list with the latest 20 years
    const selectYears = documents.getElementById('year');

    //Print the values
    for(let i = max; i > min; i--) {
        const option = document.createElement('option');
        option.value = i;
        option.textContent = i;
        selectYears.appendChild(option);

    }
}