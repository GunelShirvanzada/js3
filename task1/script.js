const athletes = [
    {
      name: "Usain Bolt",
      sport: "Track and Field",
      hasWorldRecord: true,
      gender: "Male",
      age: 35,
      totalMedals: 8,
      country: "Jamaica",
    },
    {
      name: "Simone Biles",
      sport: "Gymnastics",
      hasWorldRecord: false,
      gender: "Female",
      age: 25,
      totalMedals: 12,
      country: "United States",
    },
    {
      name: "Michael Phelps",
      sport: "Swimming",
      hasWorldRecord: true,
      gender: "Male",
      age: 37,
      totalMedals: 28,
      country: "United States",
    },
    {
      name: "Katie Ledecky",
      sport: "Swimming",
      hasWorldRecord: true,
      gender: "Female",
      age: 25,
      totalMedals: 10,
      country: "United States",
    },
    {
      name: "Allyson Felix",
      sport: "Track and Field",
      hasWorldRecord: false,
      gender: "Female",
      age: 36,
      totalMedals: 9,
      country: "United States",
    },
    {
      name: "Nadia Comăneci",
      sport: "Gymnastics",
      hasWorldRecord: true,
      gender: "Female",
      age: 60,
      totalMedals: 9,
      country: "Romania",
    },
    {
      name: "Birgit Fischer",
      sport: "Canoeing",
      hasWorldRecord: true,
      gender: "Female",
      age: 60,
      totalMedals: 12,
      country: "Germany",
    },
    {
      name: "Mariana Pajón",
      sport: "Cycling",
      hasWorldRecord: false,
      gender: "Female",
      age: 30,
      totalMedals: 4,
      country: "Colombia",
    },
    {
      name: "Wayne Gretzky",
      sport: "Ice Hockey",
      hasWorldRecord: false,
      gender: "Male",
      age: 61,
      totalMedals: 4,
      country: "Canada",
    },
    {
      name: "Yuna Kim",
      sport: "Figure Skating",
      hasWorldRecord: false,
      gender: "Female",
      age: 31,
      totalMedals: 6,
      country: "South Korea",
    },
];
  
//? 1. Dünya rekordu olan atletlərdən ibarət array yaradın.

// const record = (arr) => {
//     const filtered = arr.filter((item) => item.hasWorldRecord === true);
//     const mapping = filtered.map((item)=> item.name);
//     console.log(mapping);
// }
// record(athletes);
  
//? 2. Medallarının sayı 10 və daha artıq olan qadın atletlərdən ibarət array yaradın.

// const medal = (arr) => {
//     const filtered = arr.filter((item) => item.totalMedals >= 10 && item.gender === 'Female');
//     const mapping = filtered.map((item) => item.name);
//     console.log(mapping);
// }
// medal(athletes);
  
//? 3. Atletlərin adlarından ibarət array yaradın.
  
// const nameAthlet = athletes.map((item)=> item.name);
// console.log(nameAthlet);
  
//? 4. Atletlərin adları və ölkələri olan obyektlərdən ibarət array yaradın.
  
// const nameCountry = athletes.map((item) => ({
//     name: item.name,
//     country: item.country,
// }))
// console.log(nameCountry);
  
//? 5. Bütün atletlərin ümumi medallarının sayını hesablayın.
  
// const sumMedal = athletes.reduce((acc, item) => acc+item.totalMedals, 0)
// console.log(sumMedal);
  
//? 6. Atletin adına əsasən spesifik obyekti tapıb console-a yazın.
  
// const nameObj = ((name, arr) => {
//     const filtered = arr.find((item) => item.name === name);
//     console.log(filtered);
// })
// nameObj("Yuna Kim" , athletes);
  
//? 7. Hər hansı bir kişi atletin dünya rekordu olub olmamasını yoxlayın.
  
// const maleRecord = ((arr) => {
//     const filtered = arr.filter((item) => item.gender === 'Male');
//     const forec = filtered.forEach((item) => {
//       if (item.hasWorldRecord) { console.log(`${item.name} Dünya recordu var`) }
//       else { console.log(`${item.name} Dünya recordu yoxdur`) };
//     });
//     console.log(forec);
// })
// maleRecord(athletes);
  
//? 8. Amerikalı və dünya rekordu olan atletlərin adlarından ibarət array yaradın.
  
// const countryRecord = (arr) => {
//     const filtered = arr.filter((item) => item.country === 'United States' && item.hasWorldRecord === true);
//     const mapping = filtered.map((item) => ({
//       country: item.country,
//       worldRecord: item.hasWorldRecord
//     }));
//     console.log(mapping);
// }
// countryRecord(athletes);
  
//? 9. Kişi atletlərin yaşlarının ortalamasını tapın.
  
// const maleAge = (arr) => {
  //   const filtered = arr.filter((item) => item.gender === 'Male');
  //   const reduced = filtered.reduce((acc, item)=> acc + item.age, 0); 
  //   const final = reduced/filtered.length;
  //   console.log(final.toFixed(2));
// }
// maleAge(athletes);
  
  