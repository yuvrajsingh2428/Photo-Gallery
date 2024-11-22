import axios from "axios";

const API_KEY = process.env.REACT_APP_UNSPLASH_API_KEY;
const BASE_URL = "https://api.unsplash.com";

export const fetchPhotos = async (page) => {
  try {
    const response = await axios.get(`${BASE_URL}/photos`, {
      params: { page, per_page: 6 },
      headers: {
        Authorization: `Client-ID ${API_KEY}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching photos:", error);
    throw error;
  }
};



