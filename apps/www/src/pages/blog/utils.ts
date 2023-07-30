function addZero(num: number) {
  return num < 10 ? `0${num}` : num;
}

export function toDate(dateNum: number) {
  const year = Math.floor(dateNum / 10000);
  const month = Math.floor((dateNum % 10000) / 100);
  const day = dateNum % 100;

  return new Date(2000 + year, month - 1, day);
}

export function formatDate(date: Date) {
  return `${date.getFullYear()}-${addZero(date.getMonth() + 1)}-${addZero(
    date.getDate(),
  )}`;
}

export function stripSlug(slug: string) {
  return slug.split("-").slice(1).join("-");
}
