import axios from "axios";

export const post = async (url, data) => {
  try {
    const response = await axios.post(url, data);
    if (response.status === 200) {
      return {
        success: response.status,
        data: response.data,
      };
    } else {
      return {
        success: response.status,
        data: response.data,
      };
    }
  } catch (error) {
    return {
      success: false,
      data: []
    };
  }
};

export const get = async (url) => {
  try {
    const response = await axios.get(url);
    console.log("res",response);
    if (response.status === 200) {
      return {
        success: response.status,
        data: response.data,
      };
    } else {
      return {
        success: response.status,
        data: response.data,
      };
    }
  } catch (error) {
    return {
      success: false,
      data: []
    };
  }
};

