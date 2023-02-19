
/* Adding a add event listener to cause an event in DOM manipulation */

document.getElementById('area-calculation').addEventListener('click', function(){
    
    // Now, we are getting the input value using getElementById().value

    const firstInput = document.getElementById('first-input').value;
    
    const secondInput = document.getElementById('second-input').value;

    const area = 0.5*firstInput*secondInput; 

    displayData(firstInput, secondInput, area)

})

/* Following function named "displayData" is showing area of geometrical shap on the result board */

function displayData(firstInput, secondInput, area){
    const container = document.getElementById('table-container');

    const tr = document.createElement('tr');
    
    tr.innerHTML = `
        <td>${1}</td>
        <td>${area}</td>
        <td><button class="btn bg-sky-600 text-white font-bold rounded">Convert to m<sup>2</sup></button></td>
    `
    container.appendChild(tr);
    console.log(container);
}

