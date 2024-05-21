const carCollection = ["toyota", "fiat", "honda", "bmw"];

function updateCarCollection(carBrand) {
  const found = carCollection.filter((brand) => brand === carBrand);
  if (found.length > 0) {
    return `${carBrand} already exists in position ${
      carCollection.indexOf(carBrand) + 1
    } of the car collection.`;
  } else {
    return `New car collection is ${carBrand}`;
  }
}

console.log(updateCarCollection("audi")); //new car collection is : toyota,fiat,honda,bmw,audi.

console.log(updateCarCollection("toyota")); //toyota has already existed in the 1 position of car collection.
