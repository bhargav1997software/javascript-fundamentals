/**
 * Description: javascript Dates
 */


function monthDif(dateFrom, dateTo) {
  
    return dateTo.getMonth() - dateFrom.getMonth() +
      (12 * (dateTo.getFullYear() - dateFrom.getFullYear()))
   }
  