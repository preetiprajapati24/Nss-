window.onload = function() {
  // Show loading screen for 2 seconds
  setTimeout(function() {
      document.getElementById('loading').style.display = 'none';
  }, 1500); // 2000 milliseconds = 2 seconds
}

var swiper = new Swiper(".slide-content", {
    slidesPerView: 3,
    spaceBetween: 25,
    loop: true,
    centerSlide: 'true',
    fade: 'true',
    grabCursor: 'true',
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    breakpoints:{
        0: {
            slidesPerView: 1,
        },
        520: {
            slidesPerView: 2,
        },
        950: {
            slidesPerView: 3,
        },
    },
  });
  



  
// home page event section horizontal scrollbar

document.addEventListener('DOMContentLoaded', () => {
    // Select all left and right buttons
    const leftBtns = document.querySelectorAll('.left-btn');
    const rightBtns = document.querySelectorAll('.right-btn');
    const scrollContainers = document.querySelectorAll('.events-scroll-container');
    
    // Function to check the visibility of buttons
    const updateButtonVisibility = (containerId) => {
        const container = document.getElementById(containerId);
        const leftBtn = document.querySelector(`.left-btn[data-target="${containerId}"]`);
        const rightBtn = document.querySelector(`.right-btn[data-target="${containerId}"]`);
        
        // Check if the container is scrolled to the left
        if (container.scrollLeft === 0) {
            leftBtn.style.visibility = 'hidden';  // Hide left button
        } else {
            leftBtn.style.visibility = 'visible';  // Show left button
        }
        
        // Check if the container is scrolled to the right
        if (container.scrollLeft + container.clientWidth >= container.scrollWidth) {
            rightBtn.style.visibility = 'hidden';  // Hide right button
        } else {
            rightBtn.style.visibility = 'visible';  // Show right button
        }
    };

    // Initial check for button visibility
    scrollContainers.forEach(container => {
        updateButtonVisibility(container.id);  // Initial button visibility update
    });

    // Add event listeners for left buttons
    leftBtns.forEach(button => {
        button.addEventListener('click', () => {
            const targetId = button.getAttribute('data-target');
            const scrollContainer = document.getElementById(targetId);
            scrollContainer.scrollBy({
                left: -300, // Scroll left by 300px
                behavior: 'smooth',
            });
        });
    });

    // Add event listeners for right buttons
    rightBtns.forEach(button => {
        button.addEventListener('click', () => {
            const targetId = button.getAttribute('data-target');
            const scrollContainer = document.getElementById(targetId);
            scrollContainer.scrollBy({
                left: 300, // Scroll right by 300px
                behavior: 'smooth',
            });
        });
    });

    // Listen for scroll events to update button visibility
    scrollContainers.forEach(container => {
        container.addEventListener('scroll', () => {
            updateButtonVisibility(container.id);  // Update button visibility on scroll
        });
    });
});




// collaboration section infinite scroll
const scrollers = document.querySelectorAll(".scroller");

if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    addAnimation();
}

function addAnimation() {
    scrollers.forEach((scroller) => {
        scroller.setAttribute("data-animated", true );
        const innerScroller = scroller.querySelector(".inner_scroller");
        const scrollerContent = Array.from(innerScroller.children);

        scrollerContent.forEach((item) => {
            const duplicateItem = item.cloneNode(true);
            duplicateItem.setAttribute("aria-hidden", true);
            innerScroller.appendChild(duplicateItem);
        })
    });
}