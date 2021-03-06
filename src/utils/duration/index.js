/**
 * Formats a number of minutes as 'mm:00'.
 *
 * For example,
 *    minutesToDuration(3) = '03:00'
 *    minutesToDuration(45) = '45:00'
 * 
 * for duration components display
 *
 * @param givenMinutes
 *    the number of minutes in the duration
 * @returns {string}
 *    the given minutes formatted as 'mm:00'
 */

function minutesToDuration(givenMinutes) {
  const minutes = Math.floor(givenMinutes).toString().padStart(2, "0");
  return `${minutes}:00`;
}

/**
 * Formats a number of seconds as 'mm:ss'.
 *
 * For example,
 *    secondsToDuration(305) = '05:05'
 *    secondsToDuration(930) = '15:30'
 * 
 * for timer !! main display countdown
 *
 * @param givenSeconds
 *    the number of seconds in the duration
 * @returns {string}
 *    the given seconds formatted as 'mm:ss'
 */

function secondsToDuration(givenSeconds) {
  const minutes = Math.floor((givenSeconds % 3600) / 60)
    .toString()
    .padStart(2, "0");
  const seconds = Math.round(givenSeconds % 60)
    .toString()
    .padStart(2, "0");
  return `${minutes}:${seconds}`;
}

export {minutesToDuration, secondsToDuration};