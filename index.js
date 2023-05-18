(function () {
  window.rcr_items = [];

  function cloneTemplate(elem, prefix, elemContextual) {
    if (elemContextual && !elemContextual.capable) return;
    let newDiv = document.getElementById("div_template").cloneNode(true);
    newDiv.setAttribute("id", "div_" + prefix + "_" + elem.id);
    let chk = newDiv.children.namedItem("chk_template_item");
    chk.setAttribute("id", "chk_" + prefix + "_" + elem.id);
    chk.setAttribute("title", elem.label);
    if (elemContextual && elemContextual.preferred) chk.setAttribute("checked", "checked");
    let label = newDiv.children.namedItem("label_template_item");
    label.setAttribute("id", "label_" + prefix + "_" + elem.id);
    label.innerText = elem.label;
    let desc = newDiv.children.namedItem("div_template_description");
    desc.setAttribute("id", "desc_" + prefix + "_" + elem.id);
    if (elemContextual) desc.innerText = elemContextual.description;
    return newDiv;
  }
  const section_composting = document.getElementById("items_composting");
  const section_recycling = document.getElementById("items_recycling");
  const section_rubbish = document.getElementById("items_rubbish");

  fetch("./items.json")
    .then((res) => res.json())
    .then((res) => {
      res.data.forEach((element) => {
        window.rcr_items.push(element);
        if (element.compost) {
          let newItem = cloneTemplate(element, "composting", element.compost);
          section_composting.appendChild(newItem);
        }
        if (element.recycling) {
          let newItem = cloneTemplate(element, "recycling", element.recycling);
          section_recycling.appendChild(newItem);
        }
        let newItem = cloneTemplate(element, "rubbish", element.rubbish);
        section_rubbish.appendChild(newItem);
      });

      // clean up template
      document.getElementById("div_template").remove();
    });
})();
