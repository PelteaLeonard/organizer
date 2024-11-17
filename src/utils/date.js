export const formatDateTime = (dateTime) => {
  const yyyy = dateTime.getFullYear().toString();
  const MM = (dateTime.getMonth() + 1).toString().padStart(2, "0");
  const dd = dateTime.getDate().toString().padStart(2, "0");
  const hh = dateTime.getHours().toString().padStart(2, "0");
  const mm = dateTime.getMinutes().toString().padStart(2, "0");
  return `${yyyy}-${MM}-${dd}T${hh}:${mm}`;
};
