const lists = document.querySelectorAll(".list")
// console.log(lists);
const hidden = document.querySelectorAll(".list .hidden")
// console.log(hidden);

const listarray = lists
const hiddenarray = hidden

for (let i = 0; i < listarray.length; i++) {
    listarray[i].addEventListener("click", function () {
        hiddenarray[i].classList.toggle("unvisible")
    })

}