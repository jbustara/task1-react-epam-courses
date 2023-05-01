export const pipeDuration = (durationMin) => {
	const hours = Math.floor(durationMin / 60);
	const minutes = durationMin % 60;
	const formattedHours = hours <= 9 ? `0${hours}` : hours;
	const formattedMinutes = minutes <= 9 ? `0${minutes}` : minutes;
	return `${formattedHours}:${formattedMinutes}`;
};
