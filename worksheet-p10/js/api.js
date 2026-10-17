
const URL = 'https://jsonplaceholder.typicode.com/posts';

export async function fetchBooks() {
  try {
    const response = await fetch(URL);

    if (!response.ok) {
      throw new Error(`HTTP Error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('API Fetching Error:', error.message);
    throw error; 
  }
}