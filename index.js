function superbowlWin(record) {
    // Use the find method to search for an object with result "W"
    const winningYearObj = record.find(game => game.result === "W");
  
    // If a winning year object is found, return its year
    if (winningYearObj) {
      return winningYearObj.year;
    } else {
      // If no win is found, return undefined
      return undefined;
    }
  }
  
  // Example usage:
  const record = [
    {year: "2018", result: "L"},
    {year: "2017", result: "W"},
    {year: "2016", result: "N/A"}
    //...
  ];
  
  console.log(superbowlWin(record)); // Output: 2017
  