const leftArrow = document.querySelector(".project-arrow-left");
const rightArrow = document.querySelector(".project-arrow-right");
const boxContainer = document.querySelector(".project-wheel");
const boxes = boxContainer.querySelectorAll(".project-box");

let boxesScrolled = 0;
const boxWidth = parseInt(
	getComputedStyle(boxContainer).getPropertyValue("--box-width")
);
const visibleBoxes = parseInt(
	getComputedStyle(boxContainer).getPropertyValue("--visible-boxes")
);

const margin = parseInt(
    getComputedStyle(boxContainer).getPropertyValue("--inline-margin")
)

rightArrow.addEventListener("click", () => {
	if (((boxes.length - boxesScrolled) / visibleBoxes) > 1) {
		const currentScroll = parseInt(
			getComputedStyle(boxContainer).getPropertyValue("--box-scroll")
		);
		boxContainer.style.setProperty(
			"--box-scroll",
			`${currentScroll - (boxWidth * visibleBoxes + margin)}px`
		);
		boxesScrolled += visibleBoxes;
	}
});

leftArrow.addEventListener("click", () => {
	if (boxesScrolled > 0) {
		const currentScroll = parseInt(
			getComputedStyle(boxContainer).getPropertyValue("--box-scroll")
		);
		boxContainer.style.setProperty(
			"--box-scroll",
			`${currentScroll + (boxWidth * visibleBoxes + margin)}px`
		);
		boxesScrolled -= visibleBoxes;
	}
});



function toggleArrowsVisibility() {
	if (boxes.length <= visibleBoxes) {
	  leftArrow.style.display = "none";
	  rightArrow.style.display = "none";
	} else {
	  leftArrow.style.display = "block";
	  rightArrow.style.display = "block";
	}
}
	toggleArrowsVisibility();


// Function to filter the about-text sections based on the selected category
function filterAboutText(category) {
    var aboutTextSections = document.getElementsByClassName("about-text");
  
    // Show the selected category and hide others
    for (var i = 0; i < aboutTextSections.length; i++) {
      var section = aboutTextSections[i];
      if (section.classList.contains(category)) {
        section.style.display = "block";
      } else {
        section.style.display = "none";
      }
    }
  }
  
  // Show the "Studier" section by default
  document.addEventListener("DOMContentLoaded", function () {
    var defaultCategory = "about-studier";
    var defaultCategoryLink = document.querySelector(
      '.about-categories a[data-category="' + defaultCategory + '"]'
    );
  
    // Add 'active' class to the default category link
    defaultCategoryLink.classList.add("active");
  
    // Show the default category's section
    filterAboutText(defaultCategory);
  
    // Add click event listener to category links
    var categoryLinks = document.querySelectorAll(".about-categories a");
    categoryLinks.forEach(function (link) {
      link.addEventListener("click", function () {
        var selectedCategory = this.getAttribute("data-category");
  
        // Remove 'active' class from all category links
        categoryLinks.forEach(function (categoryLink) {
          categoryLink.classList.remove("active");
        });
  
        // Add 'active' class to the selected category link
        this.classList.add("active");
  
        // Filter the about-text sections based on the selected category
        filterAboutText(selectedCategory);
      });
    });
  });


