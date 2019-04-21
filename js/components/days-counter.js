/**
 * Days Counter
 */

let daysCounter = () => {

  let module = {},

    init = () => {

      /**
       * Convert date to Date format
       */
      function getDate(str) {
        let d = str.split('/');
        return new Date(d[2], d[1], d[0]);
      }

      /**
       * Get difference between two dates
       */
      function getDaysDiff(date1, date2) {
        const ms = 86400000; //millisecondsPerDay 1000 * 60 * 60 * 24;
        let diff = (date1 - date2) / ms;
        return Math.floor(diff); // Round down.
      }

      /**
       * Calculate difference between two dates
       */
      let date1 = new Date(); // Todays date;
      let date2 = '10/09/1981';
      date2 = getDate(date2);
      let diffDate = getDaysDiff(date1, date2);

      /**
       * Show Date
       */
      let counter = document.getElementById('days');
      counter.innerHTML = diffDate;


    };

  module.init = init;

  return module;

};

export default daysCounter();