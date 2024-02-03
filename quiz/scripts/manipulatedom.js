window.onload = function() {
  document.getElementById('addTableBtn').addEventListener('click', addTable);
}

function createTRNode(colNodes) {
  let trNode = document.createElement("tr");
  colNodes.forEach(function(colNode) {
    trNode.appendChild(colNode);
  });
  return trNode;
}

function createTDNode(childNode) {
  let tdNode = document.createElement("td");
  tdNode.appendChild(childNode);
  return tdNode;
}

function createEditLink() {
  let editLink = document.createElement("a");
  editLink.href = "#";
  editLink.textContent = "Edit text";
  editLink.addEventListener('click', function(event) {
    event.preventDefault();
    let parentCell = event.target.parentNode;
    let input = document.createElement("input");
    input.type = "text";
    input.placeholder = "Enter Cell (x,y) ...";
    parentCell.innerHTML = ""; // Clear the cell
    parentCell.appendChild(input);
    parentCell.appendChild(createEditLink()); // Add another edit link
  });
  return editLink;
}

function createTxtNode(txt) {
  return document.createTextNode(txt);
}

function addTable() {
  const tableNode = document.createElement("table");
  for(let i = 0; i < 3; i++) {
    let txtNode = createTxtNode("Cell (" + i + ", 0)");
    let editLink = createEditLink();
    let col1 = createTDNode(txtNode);
    let col2 = createTDNode(editLink);
    tableNode.appendChild(createTRNode([col1, col2]));
  }
  document.getElementById("root").appendChild(tableNode);
}
