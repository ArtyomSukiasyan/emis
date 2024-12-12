import { FINAL_RESULT, GOALS, THEME, THEME_START_VALUE } from "../../constants/keywords.js";

export function getDataFromDocxValues(value) {
  const plans = [];

  let i = 10;

  while (true) {
    const themeStartIdx = value.indexOf(THEME, i);
    const goalsStartIdx = value.indexOf(GOALS, themeStartIdx);
    const finalResultStartIdx = value.indexOf(FINAL_RESULT, goalsStartIdx);

    if (
      themeStartIdx === -1 ||
      goalsStartIdx === -1 ||
      finalResultStartIdx === -1
    ) {
      break;
    }

    const themeCountStartIdx = value.indexOf(
      THEME_START_VALUE,
      finalResultStartIdx
    );
    const nextThemeStartIdx = value.indexOf(THEME, themeCountStartIdx);

    const themeStartText = value.slice(themeStartIdx, goalsStartIdx).trim();
    const goalsStartText = value
      .slice(goalsStartIdx, finalResultStartIdx)
      .trim();
    const finalResultText = value
      .slice(
        finalResultStartIdx,
        themeCountStartIdx !== -1 ? themeCountStartIdx : value.length
      )
      .trim();

    const themesStr = value.slice(
      themeCountStartIdx,
      nextThemeStartIdx !== -1 ? nextThemeStartIdx : value.length
    );
    const themes = themesStr
      .split(/\d+\./)
      .filter(Boolean)
      .map((item) => item.trim());

    i = nextThemeStartIdx !== -1 ? nextThemeStartIdx : value.length;

    plans.push({ themeStartText, goalsStartText, finalResultText, themes });

    if (nextThemeStartIdx === -1) {
      break;
    }
  }

  return plans;
}
