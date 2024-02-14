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
