let names = ["Lotus","Zaika","Bade Miya","Sai Chaap","Saras","Dialog","Crazy Chef","Dev Snacks","Kebab Nation","Tea Tradition","Havmor","China Town","Italian Oven","Nescafe","Lets Go Live"];

let sortedNames = names.sort();

let input = document.getElementById("input");

input.addEventListener("keyup", (e) => {
  removeElements();
  for (let i of sortedNames) {
    if (
      i.toLowerCase().startsWith(input.value.toLowerCase()) &&
      input.value != ""
    ) {
      let listItem = document.createElement("a");
      listItem.setAttribute("href","https://www.google.com");
      listItem.classList.add("list-items");
      listItem.style.cursor = "pointer";
      listItem.setAttribute("onclick", "displayNames('" + i + "')");
      let word = "<b>" + i.substr(0, input.value.length) + "</b>";
      word += i.substr(input.value.length);
      listItem.innerHTML = "<li>"+word+"</li>";
      document.querySelector(".list").appendChild(listItem);
    }
  }
});

function displayNames(value) {
  input.value = value;
  removeElements();
}
function removeElements() {
  //clear all the item
  let items = document.querySelectorAll(".list-items");
  items.forEach((item) => {
    item.remove();
  });
}
