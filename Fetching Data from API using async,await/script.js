// Function to fetch data from the API using async/await
async function fetchPosts() {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      if (!response.ok) {
        throw new Error('Network response was not ok.');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error:', error);
      return []; // Return an empty array in case of error
    }
  }
  
  // Function to display the posts on the webpage
  function displayPosts(posts) {
    const postList = document.getElementById('postList');
    posts.forEach(post => {
      const listItem = document.createElement('li');
      listItem.textContent = post.title;
      postList.appendChild(listItem);
    });
  }
  
  // Asynchronous function to fetch and display posts
  async function fetchAndDisplayPosts() {
    const posts = await fetchPosts(); // Fetch posts (awaits the resolution of fetchPosts Promise)
    displayPosts(posts); // Display the fetched posts
  }
  
  fetchAndDisplayPosts(); // Call the async function to start the process
  