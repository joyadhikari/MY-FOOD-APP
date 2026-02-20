// document.addEventListener("DOMContentLoaded", () => {
//     const searchInput = document.querySelector(".search-bar input");
//     const searchBtn = document.querySelector(".search-bar button");
  
//     searchBtn.addEventListener("click", async () => {
//       const query = searchInput.value.trim();
//       if (!query) return;
  
//       try {
//         const res = await fetch(`/api/recipes/search?q=${query}`);
//         const recipes = await res.json();
  
//         console.log("Search Results:", recipes);
//         // You can display recipes here dynamically!
//       } catch (err) {
//         console.error("Error fetching recipes:", err);
//       }
//     });
//   });

  


// const background = document.querySelector(".background");

// if (background) {
//     const video = document.createElement("video");
//     image.src = "/path/to/your/image.jpg"; // Replace with your image file path
//     video.src = "/path/to/your/video.mp4"; // Replace with your video file path
//     video.autoplay = true;
//     video.loop = true;
//     video.muted = true;
//     video.style.width = "100%";
//     video.style.height = "100%";
//     video.style.objectFit = "cover";
//     video.style.position = "absolute";
//     video.style.top = "0";
//     video.style.left = "0";
//     video.style.zIndex = "-1";

//     background.appendChild(video);
// } else {
//     console.warn("Background element not found.");
// }



document.addEventListener("DOMContentLoaded", function () {

  const hearts = document.querySelectorAll(".favorite-icon");

  hearts.forEach(function (heart) {

    heart.addEventListener("click", function () {

      const icon = heart.querySelector("i");

      if (icon.classList.contains("fa-regular")) {
        icon.classList.remove("fa-regular");
        icon.classList.add("fa-solid");
        icon.style.color = "red";
      } else {
        icon.classList.remove("fa-solid");
        icon.classList.add("fa-regular");
        icon.style.color = "#555";
      }

    });

  });

});




// ===============================
// 🔍 SEARCH FUNCTIONALITY
// ===============================

const searchInput = document.querySelector(".search-bar input");
const searchButton = document.querySelector(".search-bar button");
const recipeCards = document.querySelectorAll(".recipe-card");
const mainRecipe = document.querySelector(".main-featured");

function searchRecipes() {
  const searchValue = searchInput.value.toLowerCase();

  // Search main recipe
  const mainTitle = mainRecipe.querySelector("h3").innerText.toLowerCase();
  mainRecipe.style.display = mainTitle.includes(searchValue)
    ? "block"
    : "none";

  // Search other recipes
  recipeCards.forEach((card) => {
    const title = card.querySelector("h4").innerText.toLowerCase();
    card.style.display = title.includes(searchValue)
      ? "block"
      : "none";
  });
}

searchButton.addEventListener("click", searchRecipes);


// ===============================
// 🏷️ TAG CLICK AUTO SEARCH
// ===============================

const tags = document.querySelectorAll(".tags a");

tags.forEach((tag) => {
  tag.addEventListener("click", (e) => {
    e.preventDefault();
    searchInput.value = tag.innerText;
    searchRecipes();
  });
});


// ===============================
// 🍳 CATEGORY CLICK MESSAGE
// ===============================

const categories = document.querySelectorAll(".category");

categories.forEach((category) => {
  category.addEventListener("click", () => {
    alert("You selected: " + category.innerText);
  });
});

document.addEventListener("DOMContentLoaded", function () {

  const cartBtn = document.querySelector(".add-cart-btn");
  const cartCount = document.getElementById("cart-count");

  // Load saved cart count
  let count = localStorage.getItem("cartCount") 
              ? parseInt(localStorage.getItem("cartCount")) 
              : 0;

  cartCount.innerText = count;

  cartBtn.addEventListener("click", function () {
    count++;
    cartCount.innerText = count;
    localStorage.setItem("cartCount", count);
  });

});
