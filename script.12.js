const date = "29/02/2000";

function isValidDate(date) {
  const maxDays = {
    01: 31,
    02: 28,
    03: 31,
    04: 30,
    05: 31,
    06: 30,
    07: 31,
    08: 31,
    09: 30,
    10: 31,
    11: 30,
    12: 31,
  };

  const separateDate = date.split("/");
  let valid = true;

  const day = separateDate[0];
  const month = separateDate[1];
  const year = separateDate[2];

  if (month < 1 || month > 12) {
    valid = false;
  }
  if (year < 0) {
    valid = false;
  }
  if (day < 1 || day > 31) {
    valid = false;
  }
  let max = maxDays[month];
  if (month == 2) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
      max = 29;
    }
  }
  if(day > max){
      valid = false;
  }
  return valid;
}

console.log(isValidDate(date));
