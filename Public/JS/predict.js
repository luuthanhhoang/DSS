google.charts.setOnLoadCallback(drawChartPreD);

function drawChartPreD() {
	// Tạo data table
	var data = new google.visualization.DataTable();
	data.addColumn('string', 'Users');
	data.addColumn('number', 'Total');
	data.addRows([
		['Sales', 41.25],
		['Research & Development', 27.47],
		[' Human Resource', 36.5]
	]);

	// Set option của biểu đồ
	var options = {
	'title': 'Dự báo nhân viên nghỉ việc theo phòng ban (%)',
	'width': 600,
	'height': 400,
	};

	// Vẽ biểu đồ từ data và option đã khai báo
	var chart = new google.visualization.ColumnChart(document.getElementById('chart-department'));
	chart.draw(data, options);
}

google.charts.setOnLoadCallback(drawChartJobRole);

function drawChartJobRole() {
	// Tạo data table
	var data = new google.visualization.DataTable();
	data.addColumn('string', 'Users');
	data.addColumn('number', 'Total');
	data.addRows([
		['Sales Executive',              34.36],
		['Research Scientist',           7.88],
		['Laboratory Technician',        32.43],
		['Manufacturing Director',       86.2],
		['Healthcare Representative',    22.9],
		['Manager',                      18.63],
		['Sales Representative',          8.43],
		['Research Director',             82.5],
		['Human Resources' ,              9.62]
	]);

	// Set option của biểu đồ
	var options = {
	'title': 'Dự báo nhân viên nghỉ việc theo chức vụ (%)',
	'width': 600,
	'height': 500,
	};

	// Vẽ biểu đồ từ data và option đã khai báo
	var chart = new google.visualization.ColumnChart(document.getElementById('chart-jobRole'));
	chart.draw(data, options);
}