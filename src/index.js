/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/
import { URL_BASE } from "./Api/Apis";

async function getAvo() {
  try {
    const render = [];
    const response = await fetch(`${URL_BASE}/api/avo`);
    const data = await response.json();
    data.data.forEach((avo, index) => {
      const container = document.createElement("article");
      const img = document.createElement("img");
      img.src = URL_BASE + avo.image;
      const title = document.createElement("h3");
      title.textContent = avo.name;
      const price = document.createElement("span");
      price.textContent = avo.price;
      container.append(img, title, price);
      render.push(container);
    });
    document.body.append(...render);
    console.log(data.data, "data");
  } catch (error) {
    console.error(error);
  }
}

export default getAvo();
