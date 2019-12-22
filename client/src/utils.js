export const maxSynopsisLength = 200;

export const trim = (string, maxLength) => {
  const length = string.length;
  if (length <= maxLength) {
    return string;
  }
  const trimmedString = string.slice(0, maxLength - 3);
  const lastSpaceIndex = trimmedString.lastIndexOf(" ");
  return `${trimmedString.slice(0, lastSpaceIndex)} ...`;
}