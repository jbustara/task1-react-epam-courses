export const generateDate = () => {
	const today = new Date();
	console.log(
		`${today.getDay()}/${today.getMonth() + 1}/${today.getFullYear()}`
	);
	return `${today.getDay()}/${today.getMonth() + 1}/${today.getFullYear()}`;
};
