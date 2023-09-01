import { habilities } from "../data";

function createAllHabilities() {
  const habilitiesList = getHabilitiesList();

  habilities.forEach((hability) => {
    const habilityElement = createHabilityElement(hability);
    habilitiesList.appendChild(habilityElement);
  });
}

function createHabilityElement(hability) {
  const li = document.createElement("li");
  const div = document.createElement("div");
  const h4 = document.createElement("h4");
  const p = document.createElement("p");

  li.classList = `align-center color-grey-4 flex hability space-between radius-1 ${hability.category}`;
  h4.classList = "flex gap-10";
  p.classList = "color-grey-1";

  h4.textContent = hability.category;
  p.innerHTML = `<span class="bold">${hability.score}</span>/100`;

  div.appendChild(h4);
  li.appendChild(div);
  li.appendChild(p);

  return li;
}

function getHabilitiesList() {
  const habilitiesList = document.getElementById("habilities-list");

  return habilitiesList;
}

createAllHabilities();
