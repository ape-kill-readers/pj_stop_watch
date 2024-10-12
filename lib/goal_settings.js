$(document).ready(function () {
  $("#set-total-goal").on("click", function () {
    const goal = $("#total-goal").val();
    sessionStorage.setItem("totalGoal", goal); // 目標時間をセッションストレージに保存
    window.location.href = "discussion.html"; // 話し合い画面に遷移
  });
});
