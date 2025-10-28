document.addEventListener("DOMContentLoaded", function () {
    // ----- Services Section -----
    const services = [
      {
        service: "Standard Tuning",
        price: "$150",
        description:
          "3 hr session.<br>Piano Tuning to standard pitch, Light Cleaning and Inspection for any potential repairs. <br>This option is for instruments that have been tuned within the last year.",
      },
      {
        service: "Pitch Raise",
        price: "$250",
        description:
          "4 hr session.<br>The piano technician requires extra time and work to perform a rough tuning allowing the instrument to settle, then go back and fine tune each string. <br>This is for instruments that have not been tuned or serviced in a long time. ",
      },
      {
        service: "Piano Diagnostic (Repair/Purchasing)",
        price: "$50",
        description:
          "1 hr session. <br>Technician will assess the needs of the piano and provide recommendations for repairs and quotes for future service.",
      },
    ];
  
    const list = document.getElementById("service-list");
    const descBox = document.getElementById("service-description");
  
    if (list && descBox && services.length > 0) {
      // Initial description
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
    }
  
    function matchDescriptionHeight() {
      const pricingMenu = document.querySelector(".pricing-menu");
      const description = document.querySelector("#service-description");
  
      if (!pricingMenu || !description) return;
  
      if (window.innerWidth >= 768) {
        description.style.height = pricingMenu.offsetHeight + "px";
      } else {
        description.style.height = "auto";
      }
    }
  
    window.addEventListener("load", matchDescriptionHeight);
    window.addEventListener("resize", matchDescriptionHeight);
  
    // ----- Reviews Section -----
    const reviewsData = [
      {
        name: "Lee F.",
        review:
          "Very thorough and excellent tunings. Weeks later and my Steinway baby grand sounds great! Reasonable too!!",
        rating: 5,
      },{
        name: "Julia M.",
        review:
          "I’ve had the pleasure of knowing Eric for a long time. We have shared many musical notes together on stage. He is a fantastic pianist and his passion for music is very strong. Which is why he is such a talented piano technician. He came to my house and spent time getting to know my piano and really paid special attention to the details of getting not only a gorgeous sound, but also to feel and play like it was brand new! I have had this piano for several years and it has been moved a few times. I have always found it to be a little stiff for a Yamaha. However after Eric’s magical touch, she plays effortlessly. I highly recommend Eric to tune or service your piano. He takes extra special care, and it shows.",
        rating: 5,
      },
      {
        name: "Mollie W.",
        review:
          "Eric fixed up our piano that hadn’t been repaired in many decades and was in very poor condition. He was extremely professional and stayed for 4 hours to ensure that he got it in great shape and at reasonable rate too. I highly recommend him if you need your piano tuned or repaired!",
        rating: 5,
      },
    ];
  
    function displayReviews() {
      const reviewsList = document.getElementById("reviews-list");
      if (!reviewsList) return;
  
      reviewsData.forEach((review) => {
        reviewsList.innerHTML += `
          <div class="col-md-4 mb-4">
            <div class="card p-3 shadow-sm h-100">
              <h5>${review.name}</h5>
              <p>"${review.review}"</p>
              <p>${"⭐️".repeat(review.rating)}</p>
            </div>
          </div>
        `;
      });
    }
  
    displayReviews();
  });
  
  // ----- Scroll Arrow -----
  document.addEventListener("DOMContentLoaded", function () {
    const scrollArrow = document.getElementById("scroll-arrow");
    const pricingSection = document.getElementById("pricing");
  
    if (!scrollArrow || !pricingSection) return;
  
    function isSmoothScrollSupported() {
      return "scrollBehavior" in document.documentElement.style;
    }
  
    scrollArrow.addEventListener("click", function (e) {
      e.preventDefault();
      if (isSmoothScrollSupported()) {
        pricingSection.scrollIntoView({ behavior: "smooth", block: "start" });
      } else {
        // Fallback for smooth scroll
        let targetPosition = pricingSection.offsetTop;
        let currentPosition = window.pageYOffset;
  
        const scrollInterval = setInterval(function () {
          if (currentPosition < targetPosition) {
            currentPosition += 10;
            if (currentPosition >= targetPosition) {
              clearInterval(scrollInterval);
              window.scrollTo(0, targetPosition);
            } else {
              window.scrollTo(0, currentPosition);
            }
          } else {
            currentPosition -= 10;
            if (currentPosition <= targetPosition) {
              clearInterval(scrollInterval);
              window.scrollTo(0, targetPosition);
            } else {
              window.scrollTo(0, currentPosition);
            }
          }
        }, 10);
      }
    });
  });
  
  // ----- Add-on Toggle (if used elsewhere) -----
  function toggleAddon(card) {
    card.classList.toggle("selected");
  }
  