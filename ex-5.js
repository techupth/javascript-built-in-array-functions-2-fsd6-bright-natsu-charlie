// solution
// เขียนฟังก์ชั่นเช็คชื่อคนที่มีประวัติอาชญากรรมถ้าตรงกับฐานข้อมูลให้เเสดงผลลัพธ์ว่าเป็น อาชญากรรม ถ้าไม่ ให้เเสดงว่าไม่ได้เป็น
// ถ้ามีรายชื่อเข้ามาซ้ำกับcrimeRecordNames ให้เเจ้งว่าเป็นอาชญากรรม
// ถ้าซื้อไม่ซ้ำกับcrimeRecordNames ให้แจ้งว่าไม่ใช่อาชญากรรม
let crimeRecordNames = [
  "Theodora Milenko",
  "Tinashe Benigno",
  "Mahalia Priyanka",
  "Maisy Sudhir",
];

function searchCrimeRecord(name) {
  // Start coding here
  for (let i = 0; i < crimeRecordNames.length; i++) {
    if (name.includes(crimeRecordNames[i])) {
      return `${name} has a crime record!!!`;
    }
  }
  return `${name} has no crime record.`;
}

//ผลลัพธ์ที่ควรได้จาก Example case
//ในกรณีที่ไม่เคยมีประวัติเกี่ยวกับอาชญากรรม
console.log(searchCrimeRecord("Dilan Sandra")); //"Dilan Sandra has no crime record"

//ในกรณีที่เคยมีประวัติเกี่ยวกับอาชญากรรม
console.log(searchCrimeRecord("Tinashe Benigno")); //"Tinashe Benigno has crime record !!!"
