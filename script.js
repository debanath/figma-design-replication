var modal = document.getElementById("bookForm");
var btn1 = document.getElementById("bookBtn");
var btn2 = document.getElementById("startBtn");
var span1 = document.getElementsByClassName("form-close");

btn1.onclick = function () {
    modal.style.display = "flex";
};

btn2.onclick = function () {
    modal.style.display = "flex";
};

span1.onclick = function () {
    modal.style.display = "none";
};
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};
