// Function to deeply copy and sort a matrix
function copyAndSortMatrix(matrix) {
    // Deep copy and sort each row of the matrix
    const copiedMatrix = matrix.map(row => [...row].sort((a, b) => a - b));
    return copiedMatrix;
}

// Example usage:
window.onload = function() {
    // Example matrix
    const originalMatrix = [
        [3, 1, 4],
        [1, 5, 9],
        [2, 6, 5]
    ];

    // Create a deep copy of the matrix and sort each row
    const sortedMatrix = copyAndSortMatrix(originalMatrix);

    // Log the original and sorted matrices
    console.log('Original Matrix:', originalMatrix);
    console.log('Sorted Matrix:', sortedMatrix);

    // Modify the original matrix to demonstrate that the sortedMatrix remains unaffected
    originalMatrix[0][0] = 99;
    console.log('Modified Original Matrix:', originalMatrix);
    console.log('Sorted Matrix After Original Modification:', sortedMatrix);

    // Optionally, display the matrices on the webpage
    displayMatrix('Original Matrix', originalMatrix);
    displayMatrix('Sorted Matrix', sortedMatrix);
};

// Function to display a matrix on the webpage
function displayMatrix(title, matrix) {
    const root = document.getElementById('root');
    const matrixTitle = document.createElement('h3');
    matrixTitle.textContent = title;
    root.appendChild(matrixTitle);

    const table = document.createElement('table');
    matrix.forEach(row => {
        const tr = document.createElement('tr');
        row.forEach(cell => {
            const td = document.createElement('td');
            td.textContent = cell;
            tr.appendChild(td);
        });
        table.appendChild(tr);
    });
    root.appendChild(table);
}
