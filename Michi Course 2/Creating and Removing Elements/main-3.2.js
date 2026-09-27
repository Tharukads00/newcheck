// ===== YOUR TASK =====
// Build the tag input: add a tag when the button is clicked, and remove a
// tag when it is clicked. Full details are in the problem description.
//
const input = document.querySelector("input#tag-input");
const btn = document.querySelector("#add-tag-btn");
const container = document.querySelector("div#tag-container");

function addTag() {
  if (input.value == "" || input.value.trim().includes(" ")) {
    input.value = "";
    return;
  }

  const spn = document.createElement("span");
  spn.textContent = input.value.trim();
  spn.classList.add("tag-item");
  container.append(spn);
  input.value = "";
  input.focus();

  function removeTag() {
    spn.remove();
  }

  spn.addEventListener("click", removeTag);
}

btn.addEventListener("click", addTag);
