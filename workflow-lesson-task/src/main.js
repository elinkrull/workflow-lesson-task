import "./style.css";

const app = document.querySelector("#app");

app.innerHTML = `
  <h1>Hello Vite!</h1>
  <p>Fetching posts...</p>
`;

// Get API
const apiUrl = import.meta.env.VITE_API_URL;
console.log("API URL:", apiUrl);

fetch(apiUrl)
  .then((res) => res.json())
  .then((data) => {
    // Display first five posts
    app.innerHTML = `
      <h1>Posts from API</h1>
      <ul>
        ${data
          .slice(0, 5)
          .map((post) => `<li>${post.title}</li>`)
          .join("")}
      </ul>
    `;
  })
  .catch((err) => {
    console.error("Error fetching:", err);
    app.innerHTML = `<p style="color:red;">Could not fetch posts</p>`;
  });
