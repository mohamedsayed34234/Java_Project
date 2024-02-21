const navList = document.getElementById("navbar__list");

const sections = Array.from(document.querySelectorAll("section"));

//createElement li and link data-nav and menu__link

function createListItems() {
  for (section in sections) {
    listItems = document.createElement("li");
    listItems.innerHTML = `<li><a href="#${sections[section].id}" data-nav="${sections[section].id}" class="menu__link">${sections[section].dataset.nav}</a>`;
    navList.appendChild(listItems);

  }

}

//calling function


createListItems();


//put the properties of animation on the page and click section appear properties active-link 

window.onscroll = function() {
	document.querySelectorAll("section").forEach(function(active) {
    const activeLink = navList.querySelector(`[data-nav=${active.id}]`);
	if(active.getBoundingClientRect().top >= -100 &&

  active.getBoundingClientRect().top <= 50){

    active.classList.add("your-active-class");


    activeLink.classList.add("active-link");

    }
    else{
         active.classList.remove("your-active-class");


         activeLink.classList.remove("active-link");
    }
	});
}

//make function to be when I click a section in navlist going paragraph section and going smooth


navList.addEventListener("click", (sec) => {
  sec.preventDefault();
  if (sec.target.dataset.nav) {
    const activeSection = Array.from(document.getElementsByClassName('your-active-class'));
    activeSection.forEach(s => {
      s.classList.remove('your-active-class');
    })
    const mySec = document.getElementById(`${sec.target.dataset.nav}`);
    mySec.classList.add('your-active-class');
    mySec.scrollIntoView({ behavior: "smooth" });
    //determining speed go to page
    setTimeout(() => {

      location.hash = `${sec.target.dataset.nav}`;
    }, 250);
  }
});
