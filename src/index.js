import { URL_BASE } from "./Api/Apis";
import { formatPrice } from "./appNode";

const appNode = document.querySelector("#app");

async function getAvo() {
  try {
    const render = [];
    const response = await fetch(`${URL_BASE}/api/avo`);
    const data = await response.json();
    data.data.forEach((avo) => {
      const container = document.createElement("article");
      const btnAddToCar = document.createElement("button");
      btnAddToCar.textContent = "Add to cart";
      btnAddToCar.id = avo.id;
      btnAddToCar.className =
        "bg-white hover:bg-cyan-600 rounded w-24 p-2 font-normal cursor-pointer transition duration-700 ease-in-out";
      container.classList.add("card");
      appNode.addEventListener("click", (event) => {
        if (event.target.id === avo.id) {
          console.info(`avocat success add : ${avo.name}`);
        }
      });
      const img = document.createElement("img");
      img.src = URL_BASE + avo.image;
      img.alt = avo.name;
      img.classList.add("card__image");
      const title = document.createElement("h3");
      title.textContent = avo.name;
      title.classList.add("card__title");
      const price = document.createElement("span");
      price.textContent = formatPrice(avo.price);
      price.classList.add("card__price");
      container.append(img, title, price, btnAddToCar);
      render.push(container);
    });
    appNode.append(...render);
  } catch (error) {
    console.error(error);
  }
}

export default getAvo();
