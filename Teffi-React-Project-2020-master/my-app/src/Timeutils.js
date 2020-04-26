//Function to convert timer to string!
export const secondsToString = (interval) => {
    var minutes = Math.floor(interval / (60));
    var seconds = Math.floor(interval % (60));
    return `${minutes} : ${seconds < 10 ? "0" + seconds : seconds}`
}