// const db = require('./models');
// const cityDataArray = [{
//   name: "San Francisco",
//   state: "California",
//   country: "USA",
//   image: "http://google.com"
// }];

// // Delete All Games
// db.City.deleteMany({}, (err, deletedCity) => {
//   if(err) {
//     console.log(err);
//     process.exit();
//   }
//     console.log('Posts deleted successfully');
//   // Create New Games
//   db.City.create(cityDataArray, (err, allCities) => {
//     if (err) {
//       console.log(err);
//       process.exit();
//     }
//       console.log(`Created ${allCities.length} city successfully`);
//       process.exit();
//   });
// });
