
/* Adding a add event listener to cause an event in DOM manipulation */

document.getElementById('area-triangle').addEventListener('click', function () {
    // Now, we are getting the input value using getElementById().value

    let firstInput = document.getElementById('first-input-triangle').value;
    let secondInput = document.getElementById('second-input-triangle').value;
    let shapeName = document.getElementById('triangle').innerText;
    let area = 0.5 * firstInput * secondInput;
    firstInput.value = '';
    secondInput.value = '';
    displayData(firstInput, secondInput, area, shapeName);
})

/* Calculating area of a Rectangle */

document.getElementById('area-rectangle').addEventListener('click', function () {

    // Now, we are getting the input value using getElementById().value
    let firstInput = document.getElementById('first-input-rectangle').value;
    let secondInput = document.getElementById('second-input-rectangle').value;
    let shapeName = document.getElementById('rectangle').innerText;
    let area = firstInput * secondInput;
    displayData(firstInput, secondInput, area, shapeName);
})

/* Calculating area of Parallelogram */

document.getElementById('area-parallelogram').addEventListener('click', function () {

    // Now, we are getting the input value using getElementById().value
    let firstInput = document.getElementById('first-input-parallelogram').value;
    let secondInput = document.getElementById('second-input-parallelogram').value;
    let shapeName = document.getElementById('parallelogram').innerText;
    let area = firstInput * secondInput;
    displayData(firstInput, secondInput, area, shapeName);
})

/* Calculating area of Rhombus */
document.getElementById('area-rhombus').addEventListener('click', function () {

    // Now, we are getting the input value using getElementById().value
    let firstInput = document.getElementById('first-input-rhombus').value;
    let secondInput = document.getElementById('second-input-rhombus').value;
    let shapeName = document.getElementById('rhombus').innerText;
    let area = 0.5 * firstInput * secondInput;
    displayData(firstInput, secondInput, area, shapeName);
})

/* Calculating area of Pentagon */
document.getElementById('area-pentagon').addEventListener('click', function () {

    // Now, we are getting the input value using getElementById().value
    let firstInput = document.getElementById('first-input-pentagon').value;
    let secondInput = document.getElementById('second-input-pentagon').value;
    let shapeName = document.getElementById('pentagon').innerText;
    let area = 0.5 * firstInput * secondInput;
    displayData(firstInput, secondInput, area, shapeName);
})

/* Calculating area of ellips */
document.getElementById('area-ellips').addEventListener('click', function () {

    // Now, we are getting the input value using getElementById().value
    let firstInput = document.getElementById('first-input-ellips').value;
    let secondInput = document.getElementById('second-input-ellips').value;
    let shapeName = document.getElementById('ellips').innerText;
    let area = 3.14 * firstInput * secondInput;
    displayData(firstInput, secondInput, area, shapeName);
})


/* Following function named "displayData" is showing area of geometrical shap on the result board */

function displayData(firstInput, secondInput, area, shapeName) {
    const container = document.getElementById('table-container');
    const tr = document.createElement('tr');
    tr.innerHTML = `
        <td>${1}</td>
        <td>${shapeName}</td>
        <td>${area}</td>
        <td><p>cm<sup>2</sup></p></td>
        <td><button class="btn bg-sky-600 text-white font-bold rounded">Convert to m<sup>2</sup></button></td>
    `
    container.appendChild(tr);
    console.log(container);
}

/* Applying random color onmouseover event */
