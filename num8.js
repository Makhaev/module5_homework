
// 8) задание

let assortiment = new Map([
    ['color','red'],
    ['phone','apple'],
    ['car','BMW'],
]);
for (let name of assortiment.keys()) {
    console.log(`${name}-x`)

  }

  for (let name of assortiment.values()) {
    console.log(`${name}-y`)
  }

  assortiment.forEach(item=>{
    console.log(item)
  })