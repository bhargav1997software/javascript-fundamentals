/**
 * Description: javascript Dates
 */

function monthDiff(dt1, dt2) {

   var years = dt2.getFullYear() - dt1.getFullYear();
   var Month = (dt2.getMonth() + 1) - (dt1.getMonth() + 1);
   var diffMonth = years * 12 + Month;
   return diffMonth;

}

