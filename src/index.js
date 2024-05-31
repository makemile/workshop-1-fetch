import { URL_BASE } from "./Api/Apis";

const appNode = document.querySelector('#app')
const formatPrice = (price) =>   {
 const newPrice = new window.Intl.NumberFormat('en-En', {
  style: "currency",
  currency: "USD"
 }).format(price);
 return newPrice;
}
async function getAvo() {
  try {
    const render = [];
    const response = await fetch(`${URL_BASE}/api/avo`);
    const data = await response.json();
    data.data.forEach((avo, index) => {
      const container = document.createElement("article");
      const btnAddToCar = document.createElement("button");
      btnAddToCar.textContent = "Add to cart"
      btnAddToCar.id = avo.id;
      btnAddToCar.className = "bg-white hover:bg-cyan-600 rounded w-24 p-2 font-normal cursor-pointer transition duration-700 ease-in-out"
      container.classList.add("card");
      const img = document.createElement("img");
      img.src = URL_BASE + avo.image;
      img.alt = avo.name;
      img.classList.add("card__image")
      const title = document.createElement("h3");
      title.textContent = avo.name;
      title.classList.add("card__title");
      // title.className = "text-2xl";
      const price = document.createElement("span");
      price.textContent = formatPrice(avo.price);
      price.classList.add("card__price");
      // price.className = "text-2xl";
      container.append(img, title, price, btnAddToCar);
      render.push(container);
    });
    appNode.append(...render);
    console.log(data.data, "data");
  } catch (error) {
    console.error(error);
  }
}

export default getAvo();
