import axios from "axios";

const TOKEN = process.env.TOKEN;

export default async function sendData({ url, payload }) {
  try {
    const response = await axios.post(url, payload, {
      headers: {
        Authorization: `${TOKEN}`,
        "Content-Type": "application/json",
      },
    });
    console.log("Success:", response.data);
    return response.data;
  } catch (error) {
    console.error(
      "Error:",
      error.response ? error.response.data : error.message
    );
  }
}
