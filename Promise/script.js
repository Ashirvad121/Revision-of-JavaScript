// Function to fetch data from the API
function fetchData() {
    return new Promise(function(resolve, reject) {
      // Simulating an API call with setTimeout
      setTimeout(function() {
        const data = [
          { id: 1, name: 'John', age: 30 },
          { id: 2, name: 'Alice', age: 25 },
          { id: 3, name: 'Bob', age: 35 },
        ];
  
        // Simulate an error condition
        const isError = false;
  
        if (!isError) {
          resolve(data); // Resolve with the fetched data
        } else {
          reject('Error fetching data.'); // Reject with an error message
        }
      }, 2000); // Simulating a delay of 2 seconds
    });
  }
  
  // Function to process the data
  function processData(data) {
    return new Promise(function(resolve) {
      // Simulating data processing with setTimeout
      setTimeout(function() {
        // Add "processed" property to each data item
        const processedData = data.map(item => ({ ...item, processed: true }));
  
        resolve(processedData);
      }, 1000); // Simulating a delay of 1 second
    });
  }
  
  // Function to display the data on the webpage
  function displayData(data) {
    const dataContainer = document.getElementById('dataContainer');
    dataContainer.innerHTML = JSON.stringify(data, null, 2);
  }
  
  // Fetch and process data using Promises
  fetchData()
    .then(processData)
    .then(displayData)
    .catch(function(error) {
      console.error('Error:', error);
    });
  