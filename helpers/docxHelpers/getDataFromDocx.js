import mammoth from "mammoth";
import fs from "fs";

export async function getDataFromDocx(filePath) {
  try {
    const data = fs.readFileSync(filePath);
    const result = await mammoth.extractRawText({ buffer: data });

    return result.value;
  } catch (error) {
    console.error("Error reading .docx file:", error);
  }
}
