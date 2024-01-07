import { siteVisits } from "./webRequest";

const getUserLocation = () => {
  navigator.geolocation.getCurrentPosition(success, error, {
    enableHighAccuracy: true,
    timeout: 5000,
  });

  function success(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    console.log(latitude, longitude);
    localStorage.setItem(
      "location",
      JSON.stringify({ latitude: latitude, longitude: longitude })
    );
    siteVisits({ latitude: latitude, longitude: longitude });
  }

  function error(error) {
    console.log(error);
  }
};

export default getUserLocation;
