const ctx = document.querySelector("#line-chart");
const month = [
  "1월",
  "2월",
  "3월",
  "4월",
  "5월",
  "6월",
  "7월",
  "8월",
  "9월",
  "10월",
  "11월",
  "12월",
];

new Chart(ctx, {
  type: "line",
  data: {
    labels: month,
    datasets: [
      {
        label: "매출추이",
        data: [
          1200, 3000, 2400, 3000, 2600, 2500, 1200, 1100, 1000, 1100, 2000,
          2500,
        ],

        fill: "start",
        backgroundColor: ["rgb(119,93,166,0.5)"],
        borderColor: ["#775DA6"],
        borderWidth: 1,
      },
    ],
  },
  options: {
    responsive: false,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
    },
  },
});

var ctx1 = document.querySelector("#pie-chart");
var ctx2 = document.querySelector("#bar-chart").getContext("2d");
const data1 = {
  labels: ["여성", "남성"],
  datasets: [
    {
      label: "예약 건수",
      data: [100, 50],
      backgroundColor: ["#FFB1B7", "#775DA6"],
      hoverOffset: 4,
    },
  ],
};
const labels = ["1월", "2월", "3월", "4월", "5월", "6월", "7월"];
const data2 = {
  labels: labels,
  datasets: [
    {
      label: "예약 건수",
      data: [65, 59, 80, 81, 56, 55, 40],
      backgroundColor: ["#775DA6"],
      barThickness: 10,
    },
  ],
};

// 추가
var ctx3 = document.querySelector("#bar-chart2");
var ctx4 = document.querySelector("#bubble-chart").getContext("2d");
const data3 = {
  labels: ["20대", "30대", "40대", "50대", "60대~"],
  datasets: [
    {
      label: "평균 별점",
      data: [4.2, 3.6, 3.1, 3.2, 3],
      backgroundColor: ["#70b6c1"],
    },
  ],
};

const data4 = {
  datasets: [
    {
      label: "가게 수",
      data: [
        {
          x: 20,
          y: 15,
          r: 20,
        },
        {
          x: 40,
          y: 10,
          r: 10,
        },
        {
          x: 5,
          y: 10,
          r: 10,
        },
        {
          x: 30,
          y: 25,
          r: 15,
        },
      ],
      backgroundColor: "rgba(255,177,183,0.8)",
    },
  ],
};
//추가

window.onload = function () {
  chartDraw();
  let legendDiv = document.getElementById("legend-div");
  legendDiv.innerHTML = customLegend(window.myChart);
};

let chartDraw = function () {
  window.myChart = new Chart(ctx1, {
    type: "pie",
    data: data1,
    options: {
      responsive: false,
      plugins: {
        legend: {
          display: false,
        },
      },
      legendCallback: customLegend,
    },
  });
};

new Chart(ctx2, {
  type: "bar",
  data: data2,
  options: {
    responsive: false,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  },
});

//추가
new Chart(ctx3, {
  type: "bar",
  data: data3,
  options: {
    responsive: false,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  },
});

new Chart(ctx4, {
  type: "bubble",
  data: data4,
  options: {},
});
//추가

let customLegend = function (chart) {
  let ul = document.createElement("ul");
  ul.style.listStyleType = "none"; // list-style-type: none;
  ul.style.display = "flex"; // 가로 정렬을 위해 flexbox 사용
  // ul.style.padding = '0';           // 기본 padding 제거
  // ul.style.margin = '0';            // 기본 margin 제거

  let colors = chart.data.datasets[0].backgroundColor;

  chart.data.labels.forEach(function (label, index) {
    ul.innerHTML += `<li style="margin-left: 43px; margin-top:15px"><span style="background-color: ${colors[index]}; display: inline-block; width: 30px; height: 10px; margin-right: 5px;"></span> ${label}</li>`;
  });

  return ul.outerHTML;
};
