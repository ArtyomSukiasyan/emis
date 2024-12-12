import { getDataFromDocx } from "./helpers/docxHelpers/getDataFromDocx.js";
import { getDataFromDocxValues } from "./helpers/docxHelpers/getDataFromDocxValue.js";
import { getThemesIds } from "./helpers/emis/getThemesIds.js";
import { savePlans } from "./helpers/emis/savePlans.js";
import { saveThemes } from "./helpers/emis/saveThemes.js";

const ID =
  "7d72f234bc7b391779984e1327fe1925131443b19bece046cbd1f1730b5a0c39bdd849";

const readDocxFile = async (filePath) => {
  const value = await getDataFromDocx(filePath);
  const plans = getDataFromDocxValues(value);

  await savePlans(plans, ID);

  const themes = await getThemesIds(ID);
  await saveThemes({ plans, themes });
};

readDocxFile("./file.docx");
