// ===============================================================================
// DATA
// Below data will hold all of the reserved tables.
// Initially we just set it equal to a "dummy" customer.
// But you could have it be an empty array as well.
// ===============================================================================

var friendsArray = [
  {
    friendName: "Jerome",
    friendEmail: "jerome@example.com",
    questions:[1,3,4,5,6,7,1,7,2,5,],
  }
];

// Note how we export the array. This makes it accessible to other files using require.
module.exports = friendsArray;
