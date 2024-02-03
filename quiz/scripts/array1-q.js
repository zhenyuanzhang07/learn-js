window.onload = function() {
    const list = document.getElementById('Top5');
    const inp = document.getElementById('inp');
    const btn = document.getElementById('btn');
    const myHistory = [];
    const MAX_HISTORY = 5;

    function updateDisplay() {
        // Sort the array by the length of each item
        myHistory.sort((a, b) => a.length - b.length);

        // Empty the list
        list.innerHTML = '';

        // Loop through the sorted array and display all items in the list
        for (const itemText of myHistory) {
            const li = document.createElement('li');
            li.textContent = itemText;
            list.appendChild(li);
        }
    }

    btn.onclick = () => {
        const inputText = inp.value.trim();

        // Only allow non-empty input
        if (inputText !== '') {
            // Add the entered text to the array
            myHistory.push(inputText);

            // If the array length is 5 or more, remove the oldest item
            if (myHistory.length > MAX_HISTORY) {
                myHistory.shift(); // Remove the first item
            }

            // Update the display
            updateDisplay();

            // Clear the input box and focus it
            inp.value = '';
            inp.focus();
        }
    }
}
