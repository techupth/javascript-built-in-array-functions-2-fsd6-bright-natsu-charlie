// solution
// ต้องการเขียนฟังก์ชั่นเพิ่มข้อมูลรถยี่ห้อใหม่ถ้าไม่มี
// ถ้ามียี่ห้อนี้เเล้วในcarCollection จะมีข้อความเตือนว่ามีรถยี่ห้อนี้เเล้วในลำดับที่...
// ใช้ push ในการจะเพิ่มยี่ห้อรถ
// ใช้ loop ตรวจหาว่ายี่ห้อรถที่เพิ่มเข้ามาใหม่ซ้ำกับของเดิมไหม ในตำแหน่งไหน
const carCollection = ["toyota", "fiat", "honda", "bmw"];

function updateCarCollection(carBrand) {
  // Start coding here
  for (let i = 0; i < carCollection.length; i++) {
    if (carBrand.includes(carCollection[i])) {
      return `${carBrand} has already existed in the ${
        i + 1
      } position of car collection.`;
    }
  }
  carCollection.push(carBrand);
  return `new car collection is : ${carCollection}`;
}

//ผลลัพธ์ที่ควรได้จาก Example case
//ในกรณีที่ยังไม่มียี่ห้อรถใน carCollection
console.log(updateCarCollection("audi")); //new car collection is : toyota,fiat,honda,bmw,audi.

//ในกรณีที่มียี่ห้อรถใน carCollection
console.log(updateCarCollection("toyota")); //toyota has already existed in the 1 position of car collection.
// console.log(carCollection);
// console.log(updateCarCollection("ford"));
