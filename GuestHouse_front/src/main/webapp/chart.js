
const ctx = document.querySelector('#line-chart');
const ename = ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'];

new Chart(ctx, {
	type: 'line',
	data: {
		labels: ename,
		datasets: [
			{
				label: '매출추이',
				data: [1200, 3000, 2400, 3000, 2600, 2500, 1200, 1100, 1000, 1100, 2000, 2500],

				fill: 'start',
				backgroundColor: ['rgb(255,219,88)'],
				borderColor: ['rgb(255,165,0)',],
				borderWidth: 2
			}]
	},
	options: {
		responsive: false,
		maintainAspectRatio: false,
		plugins: {
			legend: {
				display: false
			}

		}
	}
});
var ctx1 = document.querySelector("#pie-chart");
var ctx2 = document.querySelector("#bar-chart").getContext("2d");
const data1 = {
	labels: ["여성", "남성"],
	datasets: [
		{
			label: "예약 건수",
			data: [100, 50],
			backgroundColor: ["rgb(255, 99, 132)", "rgb(54, 162, 235)"],
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
			backgroundColor: [
				"rgba(255, 99, 132, 0.2)",
				"rgba(255, 159, 64, 0.2)",
				"rgba(255, 205, 86, 0.2)",
				"rgba(75, 192, 192, 0.2)",
				"rgba(54, 162, 235, 0.2)",
				"rgba(153, 102, 255, 0.2)",
				"rgba(201, 203, 207, 0.2)",
			],
			borderColor: [
				"rgb(255, 99, 132)",
				"rgb(255, 159, 64)",
				"rgb(255, 205, 86)",
				"rgb(75, 192, 192)",
				"rgb(54, 162, 235)",
				"rgb(153, 102, 255)",
				"rgb(201, 203, 207)",
			],
			borderWidth: 4,
		},
	],
};
new Chart(ctx1, {
	type: "pie",
	data: data1,
});
new Chart(ctx2, {
	type: "bar",
	data: data2,
	options: {
		scales: {
			y: {
				beginAtZero: true,
			},
		},
	},
});








