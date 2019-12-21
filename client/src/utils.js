export const maxSynopsisLength = 200;

export const trim = (string, maxLength) => {
  const length = string.length;
  if (length <= maxLength) {
    return string;
  }
  return `${string.slice(0, maxLength - 3)}...`;
}