let scoreboardList = document.getElementById('scoreboard-list')

const topTenUrl = 'http://localhost:3000/api/v1/scores/topten'

function initialTopTenFetch() {
  fetch(topTenUrl).then( resp => resp.json()).then( data => createScoreboard(data));
}

function createScoreboard(topTenScoresJson) {
  let counter = 1;
  topTenScoresJson.forEach( function(topTenElement) {
    const listItem = document.createElement("li")
    const listItemRow = document.createElement("tr")
    listItem.dataset.scoreId = counter++;
    listItem.innerText = `${topTenElement.username} - ${topTenElement.point_value}`;
    scoreboardList.append(listItem);
  })
}

function sendScoreToDb() {
  const usernameField = document.getElementById("username-field");
  const currentScore = document.getElementById("current-score");
  const postScoreUrl = 'http://localhost:3000/api/v1/scores/'
  const payload = {
    username: "asdkajsdsdkakjadsjadkjakdjadakjadj",
    // username: usernameField.value,
    point_value: "9999999999999999"
  }
  const configObj = {
    headers: {
      "Accept": "application/json",
      "Content-Type":"application/json"
    },
    method: 'POST',
    body: JSON.stringify(payload)
  }
  fetch(postScoreUrl, configObj)
}
