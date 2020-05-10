google.charts.setOnLoadCallback(drawChartPreD);

function drawChartPreD() {
	// Tạo data table
	var data = new google.visualization.DataTable();
	data.addColumn('string', 'Users');
	data.addColumn('number', 'Total');
	data.addRows([
		['Sales', 43.75],
		['Research & Development', 34],
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
		['Sales Executive',              39.66],
		['Research Scientist',           35.8],
		['Laboratory Technician',        30.43],
		['Manufacturing Director',       34.38],
		['Healthcare Representative',    37.84],
		['Manager',                      47.37],
		['Sales Representative',          26.32],
		['Research Director',             31.58],
		['Human Resources' ,              40]
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