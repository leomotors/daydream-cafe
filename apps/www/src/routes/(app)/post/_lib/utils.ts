function l(s: string | number) {
  return s.toString().padStart(2, "0");
}

export function getDate(title: string | number) {
  const date = title.toString().split("-")[0];

  const yy = +date.slice(0, 2);
  const mm = +date.slice(2, 4);
  const dd = +date.slice(4, 6);

  if (isNaN(yy) || isNaN(mm) || isNaN(dd)) {
    throw new Error(`Failed to parse ${title}`);
  }

  return `20${yy}-${l(mm)}-${l(dd)}`;
}
