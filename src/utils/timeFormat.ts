const millisecondsPerMinute = 60000;
const minutesPerHour = 60;

export const dateFormat = (date: string | number) => {
  const dateObject = new Date(date);
  const hours = dateObject.getHours();
  const minutes = dateObject.getMinutes();
  const formatedDate = `${hours < 10 ? `0${hours}` : hours}:${
    minutes < 10 ? `0${minutes}` : minutes
  }`;
  return formatedDate;
};

export const addDurationInMinToDate = (date: string, duration: number) => {
  const dateObject = new Date(date);
  const timeWithDuration =
    dateObject.getTime() + duration * millisecondsPerMinute;
  return dateFormat(timeWithDuration);
};

export const durationFormat = (duration: number) => {
  const hours = Math.floor(duration / minutesPerHour);
  const minutes = duration - hours * minutesPerHour;
  return `${hours}ч${minutes}м`;
};
