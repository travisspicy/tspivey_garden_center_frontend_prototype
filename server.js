const moment = require('moment')

const formats = ["MM/DD/YYYY", "MM-DD-YYYY", "YYYY-MM-DD", "DD-MM-YYYY", "MMM MMMM DD, YYYY"];

console.log(moment("04/18/2018", formats).isValid());
console.log(moment("04-18-2018", formats).isValid());
console.log(moment("2018-04-18", formats).isValid());
console.log(moment("18-04-2018", formats).isValid());
console.log(moment("April 18, 2018", formats.isValid()));

const isValidDate = (date) => {
	const formats = [
		"MM/DD/YYYY",
		...omitted for brevity,
		"MMMM DD, YYYY"
	]
	return moment(date, formats, true).isValid();
}