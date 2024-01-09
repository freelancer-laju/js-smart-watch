var date = new Date();
var HH = date.getHours();
var MM = date.getMinutes();
var DT = date.getDate();
if (HH > 12) {
  HH = HH - 12;
} else if (HH == 0) {
  HH = HH + 12;
} else {
  HH = HH;
}
HH = HH < 10 ? "0" + HH : HH;
MM = MM < 10 ? "0" + MM : MM;
var time = HH + ":" + MM;
$(".time").html(time);
var days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednessday",
  "Thursday",
  "Friday",
  "Saturday",
];
var months = [
  "JAN",
  "FEB",
  "MAR",
  "APR",
  "MAY",
  "JUN",
  "JUL",
  "AUG",
  "SEP",
  "OCT",
  "NOV",
  "DEC",
];
$(".inner3").css({ background: "black" });
$(".time").hide();
$(".date").hide();
$(".cos").hide();
$(".day").hide();
$(".day").html(days[date.getDay()]);
$(".date").html(DT + "," + months[date.getMonth()]);
var inner3 = document.querySelector(".inner3");
inner3.style.background = "black";
var inner4 = document.querySelector(".inner4");
inner4.style.display = "none";

$(".cos").on("click", () => {
  $(".inner4").show();
  $(".inner3").hide();
});

$(".button").click(() => {
  if (inner3.style.background == "black") {
    $(".inner3").css({
      background:
        "black url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNev9BvdWJf2DZh080dyNiw1q1ffjmtvuQKQ&usqp=CAU)",
    });
    $(".inner3").css({ "background-size": "cover" });
    $(".time").show();
    $(".date").show();
    $(".day").show();
    $(".cos").show();
    $(".time").html(time);
  } else if (inner3.style.display == "none") {
    $(".inner3").show();
    $(".inner4").hide();
  } else {
    $(".inner3").css({ background: "black" });
    $(".time").hide();
    $(".date").hide();
    $(".date").hide();
    $(".day").hide();
    $(".cos").hide();
  }
});
$(".ball1:nth-child(1)").click(() => {
  $(".inner2").css({ background: "green" });
  $(".route1").css({ background: "green" });
  $(".route2").css({ background: "green" });
  $(".button").css({ background: "green" });
  $(".button").css({ "box-shadow": "inset 4px 4px 5px rgba(0,0,0,.3)" });
  $(".inner3").css({
    background:
      "black url(https://i.postimg.cc/mkt87sTR/f32ed1b22a7991d7bb29563e013301c0.jpg)",
  });
  $(".inner3").css({ "background-size": "cover" });
});

$(".ball1:nth-child(2)").click(() => {
  $(".inner2").css({ background: "#7B1313" });
  $(".route1").css({ background: "#7B1313" });
  $(".route2").css({ background: "#7B1313" });
  $(".button").css({ background: "#7B1313" });
  $(".button").css({ "box-shadow": "inset 4px 4px 5px rgba(0,0,0,.3)" });
  $(".inner3").css({
    background:
      "black url(https://i.postimg.cc/Fs4VrCYT/d113b6f917d3072533f7f1186f842920.jpg)",
  });
  $(".inner3").css({ "background-size": "cover" });
});

$(".ball1:nth-child(3)").click(() => {
  $(".inner2").css({ background: "#011750" });
  $(".route1").css({ background: "#011750" });
  $(".route2").css({ background: "#011750" });
  $(".button").css({ background: "#011750" });
  $(".button").css({ "box-shadow": "inset 4px 4px 5px rgba(0,0,0,.3)" });
  $(".inner3").css({
    background:
      "black url(https://i.postimg.cc/yN2vFFPx/a0c4a08c75287b0758319376d92b8085.jpg)",
  });
  $(".inner3").css({ "background-size": "cover" });
});

$(".ball1:nth-child(4)").click(() => {
  $(".inner2").css({ background: "#CB6913" });
  $(".route1").css({ background: "#CB6913" });
  $(".route2").css({ background: "#CB6913" });
  $(".button").css({ background: "#CB6913" });
  $(".button").css({ "box-shadow": "inset 4px 4px 5px rgba(0,0,0,.3)" });
  $(".inner3").css({
    background:
      "black url(https://i.postimg.cc/gjPLnN3M/d3ef0ec3f40e4a732e1e34c8a4966ebc.jpg)",
  });
  $(".inner3").css({ "background-size": "cover" });
});

$(".ball1:nth-child(5)").click(() => {
  $(".inner2").css({ background: "#502D8F" });
  $(".route1").css({ background: "#502D8F" });
  $(".route2").css({ background: "#502D8F" });
  $(".button").css({ background: "#502D8F" });
  $(".button").css({ "box-shadow": "inset 4px 4px 5px rgba(0,0,0,.3)" });
  $(".inner3").css({
    background:
      "black url(https://i.postimg.cc/tJYDH5x5/19ae10f9cc1ca345f3df55308ac9627e.jpg)",
  });
  $(".inner3").css({ "background-size": "cover" });
});

$(".ball1:nth-child(6)").click(() => {
  $(".inner2").css({ background: "#EB86A8" });
  $(".route1").css({ background: "#EB86A8" });
  $(".route2").css({ background: "#EB86A8" });
  $(".button").css({ background: "#EB86A8" });
  $(".inner2").css({ "box-shadow": "inset 5px 5px 10px rgba(0,0,0,.35)" });
  $(".button").css({ "box-shadow": "inset 4px 4px 5px rgba(0,0,0,.3)" });
  $(".inner3").css({
    background:
      "black url(https://i.postimg.cc/wjrnWksT/fc6435419957bc12edb452ec371bec48.jpg)",
  });
  $(".inner3").css({ "background-size": "cover" });
});

$(".ball1:nth-child(7)").click(() => {
  $(".inner2").css({ background: "#fff" });
  $(".route1").css({ background: "#fff" });
  $(".route2").css({ background: "#fff" });
  $(".button").css({ background: "#fff" });
  $(".inner2").css({ "box-shadow": "inset 5px 5px 10px rgba(0,0,0,.35)" });
  $(".button").css({ "box-shadow": "inset 4px 4px 5px rgba(0,0,0,.3)" });
  $(".inner3").css({
    background:
      "black url(https://i.postimg.cc/cJqSNf8b/c045af1a8ed768a11f4a3b5e6637ad6b.jpg)",
  });
  $(".inner3").css({ "background-size": "cover" });
});

$(".ball1:nth-child(8)").click(() => {
  $(".inner2").css({ background: "#000" });
  $(".route1").css({ background: "#000" });
  $(".route2").css({ background: "#000" });
  $(".button").css({ background: "#000" });
  $(".inner2").css({
    "box-shadow": "inset 5px 5px 10px rgba(255,255,255,.35)",
  });
  $(".button").css({ "box-shadow": "inset 4px 4px 5px rgba(255,255,255,.3)" });
  $(".inner2").css({
    "box-shadow": "inset 5px 5px 10px rgba(255,255,255,.35)",
  });
  $(".inner3").css({
    background:
      "black url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNev9BvdWJf2DZh080dyNiw1q1ffjmtvuQKQ&usqp=CAU)",
  });
  $(".inner3").css({ "background-size": "cover" });
});

$(".ball1:nth-child(9)").click(() => {
  $(".inner2").css({ background: "#CCBA19" });
  $(".route1").css({ background: "#CCBA19" });
  $(".route2").css({ background: "#CCBA19" });
  $(".button").css({ background: "#CCBA19" });
  $(".inner2").css({ "box-shadow": "inset 5px 5px 10px rgba(0,0,0,.35)" });
  $(".button").css({ "box-shadow": "inset 4px 4px 5px rgba(0,0,0,.3)" });
  $(".inner3").css({
    background:
      "black url(https://i.postimg.cc/sx6W4mJh/671c09f186e4097edd0acb879e9484f2.jpg)",
  });
  $(".inner3").css({ "background-size": "cover" });
});
$(".container").hide();
window.addEventListener("load", () => {
  $(".container2").hide();
  $(".container").show();
});
