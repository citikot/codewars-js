function fridayTheThirteenths(start, end) {

let dates = "";
let y = start;
  
do {
  for (let i = 0; i < 12; i++) {
  let d = new Date(y, i, 13);
  let day = d.getDay()
  if (day === 5) {
    dates = dates + (d.getMonth()+1) + "/" + "13" + "/" + d.getFullYear() + " ";
    }
  }
  if (end) {
    y++;
  } else {
    break;
  }
} while (y <= end); 
  
 return dates.trim();
}
