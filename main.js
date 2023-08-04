// Import reports module elements
import { projectProfit, productionData, techDeptEmployees } from "./reports.js";

// Creating a Reports class for interacting with elements from the reports file and generating tables
class Reports {
    constructor(reportsData) {
        this.header = reportsData.header;
        this.data = reportsData.data;
    }

    generateTable() {
        const table = document.createElement("table");
        const thead = document.createElement("thead");
        const tbody = document.createElement("tbody");

        // Generate table header
        const headerRow = document.createElement("tr");
        this.header.forEach((column) => {
            const th = document.createElement("th");
            th.textContent = column.caption;
            headerRow.appendChild(th);
        });
        thead.appendChild(headerRow);
        table.appendChild(thead);

        // Generate table rows
        this.data.forEach((rowData) => {
            const row = this.createTableRow(rowData);
            tbody.appendChild(row);
        });
        table.appendChild(tbody);

        return table;
    }

    createTableRow(rowData) {
        const row = document.createElement("tr");
        rowData.forEach((cellData, index) => {
            const cell = document.createElement("td");
            if (Array.isArray(cellData)) {
                cell.textContent = cellData.join(", ");
            } else if (cell.d && Array.isArray(cell.d)) {
                cell.textContent = cellData.d.join(", ");
            } else if (typeof cellData === "object" && cellData !== null) {
                cell.textContent = cellData.d;
            } else {
                cell.textContent = cellData;
            }
            this.alignCell(cell, cellData, index);
            row.appendChild(cell);
        });
        return row;
    }
    alignCell(cell, cellData, columnIndex) {
        const column = this.header[columnIndex];
        if (column && column.align) {
            cell.style.textAlign = column.align;
        } else {
            switch (column.type) {
                case "string":
                    cell.style.textAlign = "left";
                    break;
                case "int":
                case "float":
                    cell.style.textAlign = "right";
                    break;
                case "bool":
                    cell.style.textAlign = "center";
                    break;
                default:
                    cell.style.textAlign = "left";
            }
        }
    }
}

// Access to table-container and select dropdown
const tableContainer = document.getElementById("table-container");
const selectDropdown = document.getElementById("dropdown");

// Function to generate and append a table based on the selected option
function generateAndAppendTable(data) {
    const reports = new Reports(data);
    const table = reports.generateTable();
    tableContainer.appendChild(table);
}

// Initial data and table generation
generateAndAppendTable(projectProfit);

// Listening change of select element
selectDropdown.addEventListener("change", function () {
    const selectedOption = this.value;

    // Clear the content of table-container
    while (tableContainer.firstChild) {
        tableContainer.removeChild(tableContainer.firstChild);
    }

    if (selectedOption === "option1") {
        generateAndAppendTable(projectProfit);
    } else if (selectedOption === "option2") {
        generateAndAppendTable(productionData);
    } else if (selectedOption === "option3") {
        generateAndAppendTable(techDeptEmployees);
    }
});
