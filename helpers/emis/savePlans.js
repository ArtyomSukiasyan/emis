import sendData from "../sendData.js";

export async function savePlans(plans, id) {
  for (const plan of plans) {
    const url = "https://api.emis.am/V2/teacherThematicPlans/add_theme/";

    const payload = {
      end_result: plan.finalResultText,
      plan_id: id,
      purpose: plan.goalsStartText,
      selectedSem: 1,
      title: plan.themeStartText,
    };

    await sendData({ url, payload });
  }
}
