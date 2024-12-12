import axios from "axios";

const TOKEN =
  "e8e81c19a8837c981236bf743b6178b9a567760592661c4789d2a464943213098dd9bb0b66ca41b02c34f6928e781a028a88c0d80e0c7acc3deab22a1ba0525b";

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
