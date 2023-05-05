export const generateDate = () => {
	const today = new Date();
	return `${today.getDay()}/${today.getMonth() + 1}/${today.getFullYear()}`;
};
