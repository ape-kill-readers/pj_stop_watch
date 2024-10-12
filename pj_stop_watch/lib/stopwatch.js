let player1Timer, player2Timer;
let player1Seconds = 0,
  player2Seconds = 0;
let isTimerRunning = false;
let player1Stopped = false,
  player2Stopped = false; // プレイヤーのタイマーが停止したかどうかを管理

$(document).ready(function () {
  // sessionStorageからプレイヤー名を取得
  const player1Name = sessionStorage.getItem("player1Name");
  const player2Name = sessionStorage.getItem("player2Name");

  // プレイヤー名を表示する
  $("#player1-name").text(player1Name + "の時間:");
  $("#player2-name").text(player2Name + "の時間:");

  // キーボードのキーイベントを監視
  $(document).on("keydown", function (event) {
    // Spaceキーでタイマーをスタート
    if (event.code === "Space" && !isTimerRunning) {
      isTimerRunning = true;
      player1Stopped = false;
      player2Stopped = false;

      // プレイヤー1のタイマー開始
      player1Timer = setInterval(function () {
        player1Seconds += 0.01;
        $("#player1-time").text(player1Seconds.toFixed(2));
      }, 10);

      // プレイヤー2のタイマー開始
      player2Timer = setInterval(function () {
        player2Seconds += 0.01;
        $("#player2-time").text(player2Seconds.toFixed(2));
      }, 10);
    }

    // Aキーでプレイヤー1のタイマーをストップ
    if (event.code === "KeyA" && isTimerRunning && !player1Stopped) {
      clearInterval(player1Timer);
      player1Stopped = true;
      $("#player1-time").text(player1Seconds.toFixed(2)); // 最終時間を更新
      sessionStorage.setItem("player1Time", player1Seconds.toFixed(2)); // ローカルストレージに経過時間を保存
      checkBothTimersStopped(); // 両方のタイマーが停止しているか確認
    }

    // Enterキーでプレイヤー2のタイマーをストップ
    if (event.code === "Enter" && isTimerRunning && !player2Stopped) {
      clearInterval(player2Timer);
      player2Stopped = true;
      $("#player2-time").text(player2Seconds.toFixed(2)); // 最終時間を更新
      sessionStorage.setItem("player2Time", player2Seconds.toFixed(2)); // ローカルストレージに経過時間を保存
      checkBothTimersStopped(); // 両方のタイマーが停止しているか確認
    }
  });

  // 両方のタイマーが停止しているか確認し、結果画面に遷移
  function checkBothTimersStopped() {
    if (player1Stopped && player2Stopped) {
      isTimerRunning = false;
      window.location.href = "result.html"; // 結果画面に遷移
    }
  }
});
