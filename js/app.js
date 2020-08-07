// get elements
const itemForm = document.getElementById("itemForm");
const itemInput = document.getElementById("itemInput");
const itemList = document.querySelector(".item-list");
const clearBtn = document.getElementById("clear-list");
const feedback = document.querySelector(".feedback");

let itemData = [];

// form submission
itemForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const textValue = itemInput.value;

  if (textValue === "") {
    showFeedback("please enter a valid value", "danger");
  } else {
    // add item
    addItem(textValue);

    // clear the form
    itemInput.value = "";

    // add to item array
    itemData.push(textValue);

    // localStorage

    // add event listeners
    handleItem(textValue);
  }
});

// show feedback
function showFeedback(text, action) {
  feedback.classList.add("showItem", `alert-${action}`);
  feedback.innerHTML = `<p> ${text} </p>`;

  setTimeout(function () {
    feedback.classList.remove("showItem", `alert-${action}`);
  }, 3000);
}

// add item
function addItem(value) {
  const div = document.createElement("div");
  div.classList.add("item", "my-3");
  div.innerHTML = `
    <h5 class="item-name text-capitalize"> ${value} </h5>
      <div class="item-icons">
        <a href="#" class="complete-item mx-2 item-icon"><i class="far fa-check-circle"></i></a>
        <a href="#" class="edit-item mx-2 item-icon"><i class="far fa-edit"></i></a>
        <a href="#" class="delete-item item-icon"><i class="far fa-times-circle"></i></a>
      </div>
  `;
  itemList.appendChild(div);
}

function handleItem(textValue) {
  const items = itemList.querySelectorAll(".item");
  items.forEach(function (item) {
    if (item.querySelector(".item-name").textContent === textValue) {
      // complete event listener
      item
        .querySelector(".complete-item")
        .addEventListener("click", function () {
          item.querySelector(".item-name").classList.toggle(".completed");
        });
    }
  });
}
