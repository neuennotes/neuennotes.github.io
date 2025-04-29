document.addEventListener("DOMContentLoaded", function () {
    const services = [
        {
            service: "Standard Tuning",
            price: "$150",
            description: "3 hr session.<br>Includes: Piano Tuning to standard pitch, Light Cleaning, and Inspection for any potential repairs."
        },
        // {
        //     service: "Standard Tuning + Pitch Raise",
        //     price: "$200",
        //     description: "3 hr session.<br>Includes everything in the Standard Tuning plus pitch correction for pianos that have not been tuned for many years.<br>(Pitch correction could also be recommended on location after inspection.)"
        // },
        {
            service: "Piano Diagnostic (Repair/Purchasing)",
            price: "$50",
            description: "The technician will assess the needs of the piano and provide recommendations for repairs."
        }
    ];

    const list = document.getElementById("service-list");
    const descBox = document.getElementById("service-description");

  // Initial content
  descBox.innerHTML = `<h4>${services[0].service}</h4><p>${services[0].description}</p>`;

  services.forEach((item, index) => {
    const li = document.createElement("li");
    li.innerHTML = `
      <div class="name">${item.service}</div>
      <div class="price">${item.price}</div>
    `;
    li.addEventListener("mouseover", () => {
      descBox.innerHTML = `<h4>${item.service}</h4><p>${item.description}</p>`;
    });
    list.appendChild(li);
  });
  function matchDescriptionHeight() {
    const list = document.querySelector(".pricing-menu");
    const description = document.querySelector("#service-description");
  
    if (window.innerWidth >= 768) {
      const listHeight = list.offsetHeight;
      description.style.height = listHeight + "px";
    } else {
      description.style.height = "auto"; // Let it resize naturally on small screens
    }
  }
  
  // Run on load and resize
  window.addEventListener("load", matchDescriptionHeight);
  window.addEventListener("resize", matchDescriptionHeight);
  
    const reviewsData = [
        { name: "Alice M.", review: "Fantastic service! My piano sounds amazing.", rating: 5 },
        { name: "John D.", review: "Very professional and thorough. Highly recommended!", rating: 4 },
        { name: "Sarah K.", review: "Quick and efficient tuning. Great job!", rating: 5 }
    ];


    function displayReviews() {
        const reviewsList = document.getElementById("reviews-list");
        reviewsData.forEach(review => {
            reviewsList.innerHTML += `
                <div class="col-md-4">
                    <div class="card p-3 shadow-sm">
                        <h5>${review.name}</h5>
                        <p>"${review.review}"</p>
                        <p>⭐️ ${"⭐️".repeat(review.rating)}</p>
                    </div>
                </div>`;
        });
    }

    displayPricing();
    displayReviews();
});

  function toggleAddon(card) {
    card.classList.toggle('selected');
  }


// Wait for the document to be fully loaded
document.addEventListener('DOMContentLoaded', function () {
    // Get the scroll arrow element
    const scrollArrow = document.getElementById('scroll-arrow');

    // Function to detect if smooth scroll is supported
    function isSmoothScrollSupported() {
        return 'scrollBehavior' in document.documentElement.style;
    }

    // If smooth scroll is supported by the browser, use it
    if (isSmoothScrollSupported()) {
        scrollArrow.addEventListener('click', function (e) {
            e.preventDefault(); // Prevent default action
            // Scroll to the pricing section smoothly
            document.getElementById('pricing').scrollIntoView({
                behavior: 'smooth',   // Ensure smooth scrolling
                block: 'start'        // Align to the top of the section
            });
        });
    } else {
        // Fallback for browsers that do not support smooth scroll
        scrollArrow.addEventListener('click', function (e) {
            e.preventDefault(); // Prevent default action
            const pricingSection = document.getElementById('pricing');
            let targetPosition = pricingSection.offsetTop;

            // Smooth scroll using JavaScript (manual approach)
            let currentPosition = window.pageYOffset;
            let scrollInterval = setInterval(function () {
                if (currentPosition < targetPosition) {
                    currentPosition += 10; // Adjust speed of scroll here
                    if (currentPosition >= targetPosition) {
                        clearInterval(scrollInterval);
                        window.scrollTo(0, targetPosition);
                    } else {
                        window.scrollTo(0, currentPosition);
                    }
                } else {
                    currentPosition -= 10; // Adjust speed of scroll here
                    if (currentPosition <= targetPosition) {
                        clearInterval(scrollInterval);
                        window.scrollTo(0, targetPosition);
                    } else {
                        window.scrollTo(0, currentPosition);
                    }
                }
            }, 10);
        });
    }
});