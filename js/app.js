/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/
//all sections
const navItems = document.querySelectorAll('section');
//hold the navbar into variable 
let navbar  = document.querySelector('#navbar__list');


let p0 = performance.now();

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

//add list item and link to the navigation bar
function createNavList(){
    for (let i = 0; i < navItems.length; i++) {

        //create list item
        let li = document.createElement("li"); 
        //create a ref 
        let link = document.createElement("a"); 
        //get id for every section
        let sectionId = navItems[i].getAttribute("id"); 
        //set href attribute to the section
        link.setAttribute("href", `#${sectionId}`); 
        // set class attribute to the section
        link.setAttribute("class", "menu__link")

        let content = navItems[i].getAttribute("data-nav"); 
        link.textContent = content; 

        li.appendChild(link) ;

      
       
        navbar.appendChild(li) ;

    }

}


/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
createNavList();

let p1 = performance.now();
console.log("performance -> "+(p1-p0));

// add active class to the onClick event 
const navlinks = document.querySelectorAll("a");
for (link of navlinks){
link.addEventListener("click",scrollToSection);
}

function scrollToSection(a){
a.preventDefault() // prevent Default event

for(section of navItems){
    section.classList.remove("your-active-class");
}
// Add class 'active' to section when near top of viewport


let currentSection = document.querySelector(a.path[0].getAttribute("href"));
currentSection.setAttribute("class","your-active-class");
// Scroll to anchor ID using scrollTO event
currentSection.scrollIntoView({
    behavior: "smooth"
});

}



/**
 * End Main Functions
 * Begin Events
 * 
*/
//add scroll event to the DOM
document.addEventListener("scroll",function(){
    for(let i = 0 ; i< navItems.length; i++){
        if(navItems[i].getBoundingClientRect().y <200 && navItems[i].getBoundingClientRect().y >= -50){
            navItems[i].setAttribute("class","your-active-class");
            //set section as active
            navlinks[i].classList.add("activeLink");
        }
        else{
            //remove active class from the section
            navItems[i].classList.remove("your-active-class")
            navlinks[i].classList.remove("activeLink");
        }
    }
})

