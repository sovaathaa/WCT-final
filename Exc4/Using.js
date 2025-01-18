function fetchData(){
    return new Promise((resolve, reject) => {
      // Simulate data fetching with a timeout
      setTimeout(() => resolve('Data fetched! Student Name: Ly Sovatha'), 1000);
    });
  }
  
  async function fetchAndProcessData() {
    try {
      // Displaying student name
      console.log('Student Name: Ly Sovatha');
      console.log('Using async/await:');
      
      // Awaiting the fetchData call
      const data = await fetchData();
      console.log(data);
      
      // Processing data
      const processed = 'Processing data...';
      console.log(processed);
    } catch (error) {
      // Improved error handling
      console.error('Error fetching data:', error);
    }
  }
  
  // Call the function
  fetchAndProcessData();