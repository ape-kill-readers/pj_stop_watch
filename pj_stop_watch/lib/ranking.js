function loadRankings(division) {
  let results = JSON.parse(localStorage.getItem("rankings")) || {}; // ランキングデータを取得

  // 指定した部門のデータを取得
  let divisionResults = results[division] || [];

  // 目標タイムとの差が小さい順にソート
  divisionResults.sort((a, b) => a.difference - b.difference);

  let rankingList = $("#ranking-list");
  rankingList.empty(); // 一度リストをクリア

  // 上位5件を表示
  divisionResults.slice(0, 5).forEach((result, index) => {
    rankingList.append(
      `<li>${index + 1}位: ${
        result.player1.name
      } - ${result.player1.time.toFixed(2)}秒, 
      ${result.player2.name} - ${result.player2.time.toFixed(
        2
      )}秒, 合計 - ${result.totalTime.toFixed(2)}秒, 
      目標との差 - ${result.difference.toFixed(2)}秒</li>`
    );
  });
}

$(document).ready(function () {
  // 初期状態で10秒の部を表示
  loadRankings("10秒の部");

  // 部門ごとのランキング表示を切り替える
  $("#select-division").on("change", function () {
    const selectedDivision = $(this).val();
    loadRankings(selectedDivision); // 選択した部門のランキングを表示
  });

  $("#back-to-start").on("click", function () {
    window.location.href = "index.html"; // インデックス画面に遷移
  });
});
