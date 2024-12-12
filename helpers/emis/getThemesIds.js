import sendData from "../sendData.js";

export async function getThemesIds(id) {
  const themesUrl = "https://api.emis.am/V2/teacherThematicPlans/get_themes/";
  const payload = { id };

  const themesRes = await sendData({ url: themesUrl, payload });

  return themesRes.data.themes.map((el) => el.id);
}
