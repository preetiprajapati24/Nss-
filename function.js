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
  const leftBtn = document.querySelector('.left-btn');
  const rightBtn = document.querySelector('.right-btn');
  const scrollContainer = document.querySelector('.events-scroll-container');
  
  // Function to handle scrolling left
  leftBtn.addEventListener('click', () => {
      scrollContainer.scrollBy({
          left: -300, // Scroll left by 300px
          behavior: 'smooth',
      });
  });
  
  // Function to handle scrolling right
  rightBtn.addEventListener('click', () => {
      scrollContainer.scrollBy({
          left: 300, // Scroll right by 300px
          behavior: 'smooth',
      });
  });
  
  // Function to update button visibility based on scroll position
  scrollContainer.addEventListener('scroll', () => {
      // Hide left button when at the start
      if (scrollContainer.scrollLeft <= 0) {
          leftBtn.style.display = 'none'; // Hide the left button
      } else {
          leftBtn.style.display = 'block'; // Show the left button
      }
  
      // Hide right button when at the end
      if (scrollContainer.scrollLeft + scrollContainer.clientWidth >= scrollContainer.scrollWidth) {
          rightBtn.style.display = 'none'; // Hide the right button
      } else {
          rightBtn.style.display = 'block'; // Show the right button
      }
  });
  
  // Initial check to hide/show buttons when page is loaded
  window.addEventListener('load', () => {
      if (scrollContainer.scrollLeft <= 0) {
          leftBtn.style.display = 'none'; // Hide the left button
        }
        
        if (scrollContainer.scrollLeft + scrollContainer.clientWidth >= scrollContainer.scrollWidth) {
        rightBtn.style.display = 'none'; // Hide the right button
      }
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