/**
 * Utility functions for API calls
 */

/**
 * Send data to a local API endpoint
 * @param endpoint - The API endpoint path (e.g., '/api/post')
 * @param data - The data to send in the request body
 * @returns Promise with the API response
 */
export async function postToLocalhost(endpoint: string, data: any) {
  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error('API call failed:', error);
    throw error;
  }
} 