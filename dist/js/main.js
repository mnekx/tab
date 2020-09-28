function funcguaYaliyomo(e, id) {
  let tabLinks, tabYaliyomos;

  tabLinks = document.getElementsByClassName("tablink");
  tabYaliyomos = document.getElementsByClassName("yaliyomo-tab");

  //   Remove the active class
  for (let index = 0; index < tabLinks.length; index++) {
    const tabLink = tabLinks[index];
    tabLink.className = tabLink.className.replace(" active", "");
  }

  // Ficha yaliyomo yote kabla ya yote
  for (let index = 0; index < tabYaliyomos.length; index++) {
    const yaliyomo = tabYaliyomos[index];
    yaliyomo.style.display = "none";
  }

  // Sasa, onyesha iliyochaguliwa
  document.getElementById(id).style.display = "block";
  e.currentTarget.className += " active";
}
