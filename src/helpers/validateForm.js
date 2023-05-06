export const validateForm = (title, duration, description, authors) => {
	if (
		title === '' ||
		duration === '' ||
		description === '' ||
		authors.length === 0
	) {
		alert('Please, fill in all fields');
		return false;
	} else if (title.length < 2) {
		alert('Title must have at least 2 characters');
		return false;
	} else if (parseInt(duration) < 1) {
		alert('Duration must last at least 1 minute');
		return false;
	} else return true;
};
