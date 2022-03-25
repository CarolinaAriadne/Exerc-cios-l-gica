const date = "28/02/2022";

function isValidDate(date) {
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
  if (month == 2) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
      if (day > 29) {
        valid = false;
      }
    } else {
      if (day > 28) {
        valid = false;
      }
    }
  } else {
    if ([1, 3, 5, 7, 8, 10, 12].indexOf(month) >= 0) {
      if (day > 31) {
        valid = false;
      }
    } else {
      if (day > 30) {
        valid = false;
      }
    }
  }
  return valid;
}

console.log(isValidDate(date));
