export const getTravelDistanceInformation = async (origin, destination) => {
  const data = fetch(
    `https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=${origin.description}&destinations=${destination.description},${destination.location.lng}&key=AIzaSyCh07Xx1h5-SiFb9OrA_d8I5KApcdAAN_I`
  )
    .then((res) => res.json())
    .then((data) => {
      return data.rows[0].elements[0];
    })
    .catch((err) => {
      console.log(err, "Error");
    });
  console.log(data, "data");
  return data;
};
