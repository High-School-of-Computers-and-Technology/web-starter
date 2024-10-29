function storeTableRows() {
    const table = document.getElementById("carTable");
    const rows = table.getElementsByTagName("tr");
    const carList = [];

    // Loop through rows and store each row in the list
    for (let i = 1; i < rows.length; i++) {
        const cells = rows[i].getElementsByTagName("td");
        const carData = {
            character: cells[0].innerText,
            votes: cells[1].innerText
        };
        carList.push(carData);
    }

    // Display the result in JSON format
    document.getElementById("output").textContent = JSON.stringify(carList, null, 2);
}
