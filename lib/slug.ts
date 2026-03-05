export const slugify = (text: string) =>
  text
    .toLowerCase()
    .trim()
    .replace(/:/g, "") // remove colons
    .replace(/\s+/g, "-") // replace spaces with -
    .replace(/[^\w-]+/g, ""); // remove special chars
