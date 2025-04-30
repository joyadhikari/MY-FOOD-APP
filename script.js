document.addEventListener("DOMContentLoaded", () => {
    const searchInput = document.querySelector(".search-bar input");
    const searchBtn = document.querySelector(".search-bar button");
  
    searchBtn.addEventListener("click", async () => {
      const query = searchInput.value.trim();
      if (!query) return;
  
      try {
        const res = await fetch(`/api/recipes/search?q=${query}`);
        const recipes = await res.json();
  
        console.log("Search Results:", recipes);
        // You can display recipes here dynamically!
      } catch (err) {
        console.error("Error fetching recipes:", err);
      }
    });
  });

  


const background = document.querySelector(".background");

if (background) {
    const video = document.createElement("video");
    image.src = "/path/to/your/image.jpg"; // Replace with your image file path
    video.src = "/path/to/your/video.mp4"; // Replace with your video file path
    video.autoplay = true;
    video.loop = true;
    video.muted = true;
    video.style.width = "100%";
    video.style.height = "100%";
    video.style.objectFit = "cover";
    video.style.position = "absolute";
    video.style.top = "0";
    video.style.left = "0";
    video.style.zIndex = "-1";

    background.appendChild(video);
} else {
    console.warn("Background element not found.");
}