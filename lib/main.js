$(document).ready(function () {
  $("#start-screen").show(); // スタート画面を表示

  $("#start-game").on("click", function () {
    const player1Name = $("#player1-name").val();
    const player2Name = $("#player2-name").val();

    // プレイヤー名をセッションストレージに保存
    sessionStorage.setItem("player1Name", player1Name);
    sessionStorage.setItem("player2Name", player2Name);

    // 目標秒数設定画面に遷移
    window.location.href = "goal_setting.html";
  });
});
