let facebookFriends = {
    "listOfFriends": [
        { "name": "Ghyczy András"},
        { "name": "Skumát Anita" },
        { "name": "Resperger Richárd" },
        { "name": "Szabó Gábor" },
    ]
  }
  
  console.log(facebookFriends.listOfFriends.length)
  console.log(typeof facebookFriends.listOfFriends.length)
  
  
  for (let index = 0; index < facebookFriends.listOfFriends.length; index++) {
    console.log(facebookFriends.listOfFriends[index])
  }
  
  
  for (const friend of facebookFriends.listOfFriends) {
    console.log(friend.name)
  }
  
  
  for (const friendIndex in facebookFriends.listOfFriends) {
    console.log(facebookFriends.listOfFriends[friendIndex].name)
  
    // console.log(friendIndex)
  }