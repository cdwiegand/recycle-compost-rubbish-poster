(function () {
  window.rcr_items = [];

  function pushrcr(image, title, compost, recycle) {
    window.rcr_items.push({
      icon: image,
      title: title,
      compost_details: compost,
      recycle_details: recycle,
    });
  }

  pushrcr(
    "fixme",
    "Cooked Meat",  
    { capable: true, preferred: true, description: "Note that raw or uncooked meats are NOT compostable." }
  );
  pushrcr(
    "fixme",
    "Cardboard (clean)",
    { capable: true, preferred: true, description: "Cardboard must be clean, and not greasy or water-soaked." }
  );
  pushrcr(
    "fixme",
    "Cardboard (greasy)",
    { capable: true, preferred: true, description: "Cut or tear it into hand-sized pieces before putting into composting." }
  );
})();
