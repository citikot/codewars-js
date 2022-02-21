function starSign(date) {
  let sign = "";
  let day = date.getDate();
  let month = date.getMonth();

  if ((day >= 21 && month === 0) || (day <= 19 && month === 1)) {
    sign = "Aquarius"; // 21 January - 19 February
  } else if ((day >= 20 && month === 1) || (day <= 20 && month === 2)) {
    sign = "Pisces"; // --------- 20 February - 20 March
  } else if ((day >= 21 && month === 2) || (day <= 20 && month === 3)) {
    sign = "Aries"; // ---------- 21 March - 20 April
  } else if ((day >= 21 && month === 3) || (day <= 21 && month === 4)) {
    sign = "Taurus"; // -------- 21 April - 21 May
  } else if ((day >= 22 && month === 4) || (day <= 21 && month === 5)) {
    sign = "Gemini"; // -------- 22 May - 21 June
  } else if ((day >= 22 && month === 5) || (day <= 22 && month === 6)) {
    sign = "Cancer"; // -------- 22 June - 22 July
  } else if ((day >= 23 && month === 6) || (day <= 23 && month === 7)) {
    sign = "Leo"; // ------------- 23 July - 23 August
  } else if ((day >= 24 && month === 7) || (day <= 23 && month === 8)) {
    sign = "Virgo"; // ----------- 24 August - 23 September
  } else if ((day >= 24 && month === 8) || (day <= 23 && month === 9)) {
    sign = "Libra"; // ----------- 24 September - 23 October
  } else if ((day >= 24 && month === 9) || (day <= 22 && month === 10)) {
    sign = "Scorpio"; // -------- 24 October - 22 November
  } else if ((day >= 23 && month === 10) || (day <= 21 && month === 11)) {
    sign = "Sagittarius"; // ---- 23 November - 21 December
  } else if ((day >= 22 && month === 11) || (day <= 20 && month === 0)) {
    sign = "Capricorn"; // ----- 22 December - 20 January
  }

  return sign;
}
