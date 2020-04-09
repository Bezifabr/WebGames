var values = [1,2,3,1,2,4,5,6,6,3,4,5];

function Flip(cardId) {
    var elem = document.querySelector(".card-" + cardId);
    elem.classList.toggle("flip");

    elem.lastElementChild.lastElementChild.innerHTML = "";
    if (elem.classList.contains("flip")) {
        elem.lastElementChild.lastElementChild.innerHTML = values[cardId-1];
    }
}