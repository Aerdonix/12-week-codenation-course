// Arrays Activity 1
// let music = [
//     "Tinlicker - You Take My Hand.",
//     "Boris Brejcha - Space Diver",
//     "Ben Böhmer - Beyond Beliefs"
// ]
// console.log(music);

// Stretch 1
// let music = [
//     "Tinlicker - You Take My Hand.",
//     "Boris Brejcha - Space Diver",
//     "Ben Böhmer - Beyond Beliefs"
// ]

// music.push("Anyma & Chris Avantgarde - Consciousness");
// music.push("Anyma - Running");
// music.pop("Anyma - Running");

// console.log(music);


// Arrays Activity 2
// let music = [
//     "Tinlicker - You Take My Hand.",
//     "Boris Brejcha - Space Diver",
//     "Ben Böhmer - Beyond Beliefs"
// ]

// music.push("Anyma & Chris Avantgarde - Consciousness");
// music.push("Anyma - Running");
// music.shift();

// console.log(music);


// Loop Activity 1
// let favouriteFilms = [
//     "Kung Fu Hustle",
//     "Shaolin Soccer",
//     "John Wick Series",
//     "Back to the Future Trilogy",
//     "Star Wars Collection"
// ];

// favouriteFilms.push("Fast and Furious Collection");
// favouriteFilms.push("Nobody");

// for (let i = 0; i < favouriteFilms.length; i++){
// console.log(favouriteFilms[i]);
// }

//Loop Activity 2 
// let numbers = [];

// for (let i = 1; i < 7; i++) {
//   let a = true,
//       n;
//   while(a) {
//     n = Math.floor(Math.random() * 50) + 1;
//     a = numbers.includes(n);
//   }
//   numbers.push(n);
// }

// console.log(`The 6 Random numbers between 1 & 50 are: ${numbers}`);

// Loop Activity 3
//  let numbers = [];
//  for (let i = 9; i >= 0; i--){
//      if (i % 1 == 0){
//          numbers.push(i);
//      }
// }

// console.log(numbers);

// Loop Activity 4
//  let movies = [
//      "Back to the Future",
//      "Home Alone",
//      "Ghostbusters",
//      "Police Academy"
//  ];
 
//  for (let i = 0; i <=3; i++){
//     console.log(movies[i])
// }
// if (movies[2] == "Ghostbusters"){
//     console.log("Who you gunna call? Yay it's Ghostbusters!")
// } else {
//     console.log("Boo! We want ghostbusters!")
// }

// Loop Activity 5
//  let numbers = [];

//  for (let i = 1; i <= 6; i++) {
//    let a = true,
//        n;
//    while(a) {
//      n = Math.floor(Math.random() * 30) + 1;
//      a = numbers.includes(n);
//    }
//    numbers.push(n);

// if (n % 7 == 0){
//     console.log(`${n} divides by 7.`)
// } else {
//     console.log(`${n} does not divide by 7.`)
// }
//  }

// Loop Activity 6
// 2 arrays for 2 people's followers. 4 names per array. 1 name per array.
// console log the matching follower through a nested loop. (loop within a loop.)
// let bobsFollowers = [
//     "Simon",
//     "Jane",
//     "Sarah",
//     "John"
// ];
// let hannahsFollowers = [
//     "William",
//     "Molly",
//     "Sarah",
//     "Stephen"
// ];
// for (let b = 0; b < 4; b++){
//     for (let h = 0; h < 4; h++){
//         if (bobsFollowers[b] == hannahsFollowers[h])
//         console.log(bobsFollowers[b])
//     }
// }