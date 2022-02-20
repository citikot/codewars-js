function killer(suspectInfo, dead) {

  let peoplesMet;
  let intersection = [];

  for (const key in suspectInfo) {
    intersection = suspectInfo[key].concat(dead);
    intersection = [...new Set(intersection)];
    peoplesMet = suspectInfo[key].length;
    if (intersection.length === peoplesMet) return key;
  }
}
