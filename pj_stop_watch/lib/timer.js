let totalGoal = 0;
let player1Goal = 0;
let player2Goal = 0;

// トータル時間をランダムで決定する関数
function setTotalGoal() {
  const options = [10, 20, 30]; // トータル時間の選択肢
  totalGoal = options[Math.floor(Math.random() * options.length)]; // ランダムにトータル時間を設定

  // トータル時間をUIに表示
  $("#total-goal").text(`トータル目標時間: ${totalGoal}秒`);
}

// プレイヤーがそれぞれ目標秒数を設定する関数
function setPlayerGoals(player1Input, player2Input) {
  player1Goal = player1Input; // プレイヤー1の目標秒数
  player2Goal = player2Input; // プレイヤー2の目標秒数

  // 目標秒数をUIに表示
  $("#player1-goal").text(`プレイヤー1目標時間: ${player1Goal}秒`);
  $("#player2-goal").text(`プレイヤー2目標時間: ${player2Goal}秒`);
}
