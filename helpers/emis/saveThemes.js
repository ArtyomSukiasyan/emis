import sendData from "../sendData.js";

export async function saveThemes({ plans, themes }) {
  const addThemeDetailsUrl =
    "https://api.emis.am/V2/teacherThematicPlans/add_theme_details/";

  for (let i = 0; i < plans.length; i++) {
    const plan = plans[i];

    for (const theme of plan.themes) {
      const themePayload = {
        class_problems: ".",
        class_purpose: plan.goalsStartText,
        class_time_desc: plan.finalResultText,
        class_time_title: theme,
        theme_id: themes[i],
      };

      await sendData({ url: addThemeDetailsUrl, payload: themePayload });
    }
  }
}
