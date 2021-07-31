document.getElementById('main').remove();

let newHeader = document.createElement('h1');
newHeader.setAttribute("id","victory");
newHeader.innerHTML = "Barnes is the champion";
// innerText = document.createTextNode("LUKAAAAA is the champion");
// newHeader.appendChild(innerText);
document.body.appendChild(newHeader);