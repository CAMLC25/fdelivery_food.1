/* ========== Get Testimonials =========== */
const getTestimonials = async () => {
    try {
      const results = await fetch('./data/testimonials.json');
      const data = await results.json();
      const testimonials = data.testimonials;
      return testimonials;
    } catch (err) {
      console.log(err);
    }
  };
  
  const testimonialsWrapper = document.querySelector('.test-wrapper');
  const cards = [...document.querySelectorAll('.testimonials .card')];
  
  window.addEventListener('DOMContentLoaded', async function () {
    const testimonials = await getTestimonials();
    displayTestimonials(testimonials);
    filter();
  });
  

/* ========== Display Testimonials =========== */
const displayTestimonials = (items) => {
    let testimonials = items.map(
      (
        item
      ) => `<div class="testimonial" data-id="${item.firstName}">
              <div class="d-flex">
                <div>
                  <h4>${item.name}</h4>
                  <span>${item.position}</span>
                </div>
  
                <div class="rating">
                  <span><i class="bx bxs-star"></i></span>
                  <span><i class="bx bxs-star"></i></span>
                  <span><i class="bx bxs-star"></i></span>
                  <span><i class='bx bxs-star-half' ></i></i></span>
                  <span><i class='bx bxs-star-half' ></i></i></span>
                </div>
              </div>
  
              <p id="p-tes">
               ${item.info}
              </p>
            </div>`
    );
  
    testimonials = testimonials.join('');
    testimonialsWrapper.innerHTML = testimonials;
  };
  

/* ========== Filter Testimonials =========== */
function filter() {
  const cards = [...document.querySelectorAll('.card')];
  const testimonials = [...document.querySelectorAll('.testimonial')];
  
  // Ensure there's at least one card and testimonial
  if (cards.length === 0 || testimonials.length === 0) return;

  // Set the first card and testimonial as active initially
  cards[0].classList.add('active');
  testimonials[0].classList.add('active');

  // Loop through all cards and set up the click event
  for (let i = 0; i < cards.length; i++) {
    cards[i].onclick = function () {
      // Remove 'active' class from all cards
      for (let x = 0; x < cards.length; x++) {
        cards[x].classList.remove('active');
      }
      // Add 'active' class to the clicked card
      this.classList.add('active');
      
      const filter = this.getAttribute('data-filter');
      
      // Loop through all testimonials
      for (let z = 0; z < testimonials.length; z++) {
        // Hide all testimonials
        testimonials[z].style.bottom = '-80%';
        testimonials[z].style.opacity = 0;

        // Show the testimonial matching the filter
        if (testimonials[z].getAttribute('data-id') === filter) {
          testimonials[z].style.bottom = '0%';
          testimonials[z].style.opacity = 1;
        }
      }
    };
  }
}

// Initialize the filter function
filter();
