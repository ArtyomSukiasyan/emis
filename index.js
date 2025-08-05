import { getDataFromDocx } from "./helpers/docxHelpers/getDataFromDocx.js";
import { getDataFromDocxValues } from "./helpers/docxHelpers/getDataFromDocxValue.js";
import { getThemesIds } from "./helpers/emis/getThemesIds.js";
import { savePlans } from "./helpers/emis/savePlans.js";
import { saveThemes } from "./helpers/emis/saveThemes.js";

const ID = process.env.ID;

const readDocxFile = async (filePath) => {
  const value = await getDataFromDocx(filePath);
  const plans = getDataFromDocxValues(value);

  await savePlans(plans, ID);

  const themes = await getThemesIds(ID);
  await saveThemes({ plans, themes });
};

readDocxFile("./file.docx");
