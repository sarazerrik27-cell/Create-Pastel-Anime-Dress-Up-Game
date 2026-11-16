
const outfit = document.getElementById("outfit");
const hairBack = document.querySelector("#hair-back path");
const hairFront = document.querySelector("#hair-front path");
const shoes = document.querySelectorAll("#shoes ellipse");
const accessory = document.querySelector("#accessory path");
const message = document.getElementById("message");

const defaults = {
  dress: "#F4AFCB",
  hair: "#A879C9",
  shoes: "#F1A7C8",
  accessory: "#FF8FB8"
};

let currentStyle = { ...defaults };

function changeStyle(type, color) {
  currentStyle[type] = color;

  if (type === "dress") {
    outfit.querySelector("path").setAttribute("fill", color);
  }

  if (type === "hair") {
    hairBack.setAttribute("fill", color);
    hairFront.setAttribute("fill", color);
  }

  if (type === "shoes") {
    shoes.forEach(shoe => {
      shoe.setAttribute("fill", color);
    });
  }

  if (type === "accessory") {
    accessory.setAttribute("fill", color);
  }

  message.textContent = "Your style looks amazing! ♡";
}

document.querySelectorAll("[data-type]").forEach(button => {
  button.addEventListener("click", () => {
    const type = button.dataset.type;
    const color = button.dataset.color;

    changeStyle(type, color);
  });
});

function resetStyle() {
  Object.keys(defaults).forEach(type => {
    changeStyle(type, defaults[type]);
  });

  message.textContent = "Your original style is back! ♡";
}

document.getElementById("resetBtn")
  .addEventListener("click", resetStyle);

document.getElementById("randomBtn")
  .addEventListener("click", () => {

    document.querySelectorAll("[data-type]")
      .forEach(button => {
        if (Math.random() > 0.5) {
          changeStyle(
            button.dataset.type,
            button.dataset.color
          );
        }
      });

    message.textContent = "A magical new outfit! ✨";
  });

document.getElementById("saveBtn")
  .addEventListener("click", () => {

    const svg = document.getElementById("character");
    const clone = svg.cloneNode(true);

    clone.setAttribute("xmlns", "http://www.w3.org/2000/svg");

    const data = new XMLSerializer().serializeToString(clone);
    const blob = new Blob([data], {
      type: "image/svg+xml;charset=utf-8"
    });

    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");

    link.href = url;
    link.download = "my-anime-style.svg";
    link.click();

    URL.revokeObjectURL(url);

    message.textContent = "Your anime style is saved! 💖";
  });

// Initialize the default outfit
resetStyle();
