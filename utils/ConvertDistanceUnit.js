export const convertKmToMiles = (km) => {
    const miles = km * 0.621371;
    return `${miles.toFixed(2)} miles`;
  };