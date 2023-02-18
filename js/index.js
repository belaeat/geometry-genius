document.getElementById('btn-triangle-area').addEventListener('click', function () {
    // Step1: Get input
    const firstInputValue = document.getElementById('first-input').value;

    const secondInputValue = document.getElementById('second-input').value;


    const container = document.getElementById('table-container');
    const tr = document.createElement('tr');
    tr.innerHTML = `
        <td>${1}</td>
    `;
    container.appendChild(tr);
})