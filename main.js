let team1 = {
  name: "patriots",
  score: -1,
};
let team2 = {
  name: "raiders",
  score: -1,
};

function pScore() {
  team1.score++;
  let pScore = document.getElementById("pScore");
  let pName = document.getElementById("pName");
  pName.innerHTML = team1.name;
  // @ts-ignore
  pScore.innerHTML = team1.score;
  console.log(team1.score);
}
function rScore() {
  team2.score++;
  let rScore = document.getElementById("rScore");
  let rName = document.getElementById("rName");
  rName.innerHTML = team2.name;
  // @ts-ignore
  rScore.innerHTML = team2.score;
  console.log(team2.score);
}

function tDown1() {
  team1.score += 6;
  let pScore = document.getElementById("pScore");
  // @ts-ignore
  pScore.innerHTML = team1.score;
}
tDown1();
function tDown2() {
  team2.score += 6;
  let rScore = document.getElementById("rScore");
  // @ts-ignore
  rScore.innerHTML = team2.score;
}
tDown2();

function reset() {
  team1.score = 0;
  team2.score = 0;
  let rScore = document.getElementById("rScore");
  // @ts-ignore
  rScore.innerHTML = team2.score;
  let pScore = document.getElementById("pScore");
  // @ts-ignore
  pScore.innerHTML = team1.score;
}

function update() {
  let rScore = document.getElementById("rScore");
  // @ts-ignore
  rScore.innerHTML = team2.score;
  let pScore = document.getElementById("pScore");
  // @ts-ignore
  pScore.innerHTML = team1.score;
}

pScore();
rScore();
reset();
update();
