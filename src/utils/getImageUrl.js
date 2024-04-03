/**
 * Returns the image URL based on the provided item.
 * If the item has a file property, it returns a base64 image URL.
 * If the item has a gender property and it is "Male", it returns the URL for a dummy man image.
 * Otherwise, it returns the URL for a dummy woman image.
 *
 * @param {Object} item - The item object.
 * @returns {string} The image URL.
 */
const getImageUrl = (item) => {
  if (item.file) {
    return `data:image/jpeg;base64,` + item.file;
  } else if (
    item.PersonalDetails &&
    item.PersonalDetails.gender &&
    item.PersonalDetails.gender == "Male"
  )
    return process.env.PUBLIC_URL + "/dummy-man.png";
  else return process.env.PUBLIC_URL + "/dummy-woman.png";
};

export { getImageUrl };
