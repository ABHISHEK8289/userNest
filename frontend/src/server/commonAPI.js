import axios from "axios";

const commonAPI = async (httpMethod, url, reqBody = null, reqHeader = {}) => {
  try {
    const response = await axios({
      method: httpMethod,
      url,
      data: reqBody,
      headers: reqHeader,
    });

    return response;
  } catch (error) {
    throw error;
  }
};

export default commonAPI;