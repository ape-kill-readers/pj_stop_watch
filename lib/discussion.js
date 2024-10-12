$(document).ready(function () {
  // localStorageからプレイヤー名を取得
  const player1Name = sessionStorage.getItem("player1Name");
  const player2Name = sessionStorage.getItem("player2Name");

  // プレイヤー名を表示する
  $("#player1-label").text(player1Name + "の目標時間:");
  $("#player2-label").text(player2Name + "の目標時間:");
  
  $("#start-discussion").on("click", function () {
    const player1Goal = $("#player1-goal").val();
    const player2Goal = $("#player2-goal").val();

    // プレイヤーの目標時間をセッションストレージに保存
    sessionStorage.setItem("player1Goal", player1Goal);
    sessionStorage.setItem("player2Goal", player2Goal);

    // ストップウォッチ画面に遷移
    window.location.href = "stopwatch.html";
  });
});
