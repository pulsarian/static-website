
document.getElementById("myBtn")?.addEventListener("click", clickHandler);
function clickHandler() {
    console.log('button clicked');
}

var node = document.createElement("li");
var textNode = document.createTextNode("Water");
node.appendChild(textNode);
document.getElementById("container").appendChild(node);
