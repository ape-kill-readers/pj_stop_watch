$(document).ready(function () {
  const player1Name = sessionStorage.getItem("player1Name");
  const player1Goal = parseFloat(sessionStorage.getItem("player1Goal"));
  const player1Time = parseFloat(sessionStorage.getItem("player1Time"));
  const player2Name = sessionStorage.getItem("player2Name");
  const player2Goal = parseFloat(sessionStorage.getItem("player2Goal"));
  const player2Time = parseFloat(sessionStorage.getItem("player2Time"));

  // 結果の表示
  const player1Diff = Math.abs(player1Goal - player1Time).toFixed(2);
  const player2Diff = Math.abs(player2Goal - player2Time).toFixed(2);
  const totalGoal = (player1Goal + player2Goal).toFixed(2);
  const totalTime = (player1Time + player2Time).toFixed(2);
  const totalDiff = Math.abs(totalGoal - totalTime).toFixed(2);

  $("#player1-result").text(
    `${player1Name}: 目標 - ${player1Goal}秒, 実際 - ${player1Time}秒, 差 - ${player1Diff}秒`
  );
  $("#player2-result").text(
    `${player2Name}: 目標 - ${player2Goal}秒, 実際 - ${player2Time}秒, 差 - ${player2Diff}秒`
  );
  $("#total-result").text(
    `トータル: 目標 - ${totalGoal}秒, 実際 - ${totalTime}秒, 差 - ${totalDiff}秒`
  );

  // 結果をローカルストレージに保存する関数
  function saveResult() {
    const totalGoal = player1Goal + player2Goal;
    const totalTime = player1Time + player2Time;

    const results = JSON.parse(localStorage.getItem("rankings")) || {
      "10秒部": [],
      "20秒部": [],
      "30秒部": [],
    };

    let category = "";
    if (totalGoal === 10) {
      category = "10秒部";
    } else if (totalGoal === 20) {
      category = "20秒部";
    } else if (totalGoal === 30) {
      category = "30秒部";
    }

    const totalDifference = Math.abs(totalGoal - totalTime).toFixed(2);

    results[category].push({
      player1Name: player1Name,
      player2Name: player2Name,
      player1Time: player1Time,
      player2Time: player2Time,
      totalTime: totalTime,
      totalGoal: totalGoal,
      totalDifference: totalDifference,
    });

    results[category].sort((a, b) => a.totalDifference - b.totalDifference);
    results[category] = results[category].slice(0, 5);
    localStorage.setItem("rankings", JSON.stringify(results));
  }

  // 結果を保存
  saveResult();

  // 「ランキングを表示」ボタンがクリックされた際にランキングページに遷移
  $("#show-ranking").on("click", function () {
    window.location.href = "ranking.html"; // 正しいパスを指定
  });
});
