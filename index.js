const titleRef = document.querySelectorAll(".main-title");
const skillsRef = document.querySelectorAll(".skill-items");
const cardRef = document.querySelectorAll(".card");
const contactRef = document.querySelectorAll(".refs");

const sidemenuRef = document.querySelector("#side-nav-id");
const profileRef = document.querySelector("#profile-block");
const titleBlockRef = document.querySelector("#title-block");
const toolsBlockRef = document.querySelector("#tools-block");
const projectsBlockRef = document.querySelector("#projects-block");
const contactBlockRef = document.querySelector("#contact-block");
const topButtonRef = document.querySelector("#arrow-top-id");

let activeChevron = null;
let activeParagraph = null;

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.2
});

const observer2 = new IntersectionObserver((entries) => {
	entries.forEach(entry => {
        if (entry.isIntersecting) {
            if (entry.target === projectsBlockRef || entry.target === contactBlockRef){
				topButtonRef.classList.add("appear");
				observer2.unobserve(projectsBlockRef);
				observer2.unobserve(contactBlockRef);
			}
			
			if (entry.target === profileRef){
				topButtonRef.classList.remove("appear");
				observer2.observe(projectsBlockRef);
				observer2.observe(contactBlockRef);
			}
        }
    });
}, {
    threshold: 0.1
});

titleRef.forEach(element => observer.observe(element));
skillsRef.forEach(element => observer.observe(element));
cardRef.forEach(element => observer.observe(element));
contactRef.forEach(element => observer.observe(element));

observer2.observe(profileRef);
observer2.observe(projectsBlockRef);
observer2.observe(contactBlockRef);



function openLink(element) {
    const url = element.dataset.url;

    if (url) {
        window.open(url, "_blank");
    }
}

function openSideMenu() {
	sidemenuRef.classList.add("open");
}

function closeSideMenu() {
	sidemenuRef.classList.remove("open");
}

function scrollToSection(sectionId) {
    const target = document.getElementById(sectionId);

    if (target) {
        target.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    }
}

function scrollToTop() {
	 window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

function openDetails(arrowId, paragraphId){
	const arrow = document.getElementById(arrowId);
	const paragraph = document.getElementById(paragraphId);
	
	if (arrow && paragraph){
		
		if (!paragraph.classList.contains("open")){
			//At opening paragraph
			
				//If we already have an opened paragraph
				if(activeParagraph && activeChevron){
					activeParagraph.classList.remove("open");
					activeChevron.classList.remove("open");
				}
				
			paragraph.classList.add("open");
			arrow.classList.add("open");
			
			activeParagraph = paragraph;
			activeChevron = arrow;
		} else {
			paragraph.classList.remove("open");
			arrow.classList.remove("open");
			
			activeParagraph = null;
			activeChevron = null;
		}
		
	}
}