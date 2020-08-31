export function timestampToDate(ts) {
  // var ts_ms = ts * 1000;
// initialize new Date object
  var date_ob = new Date(ts);
// year as 4 digits (YYYY)
  var year = date_ob.getFullYear();
// month as 2 digits (MM)
  var month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
// date as 2 digits (DD)
  var date = ("0" + date_ob.getDate()).slice(-2);
// hours as 2 digits (hh)
  var hours = ("0" + date_ob.getHours()).slice(-2);
// minutes as 2 digits (mm)
  var minutes = ("0" + date_ob.getMinutes()).slice(-2);
// seconds as 2 digits (ss)
  var seconds = ("0" + date_ob.getSeconds()).slice(-2);
  return year + "-" + month + "-" + date + " " + hours + ":" + minutes + ":" + seconds;
}
