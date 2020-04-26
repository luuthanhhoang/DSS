google.charts.setOnLoadCallback(drawChart);

function drawChart() {
	// Tạo data table
	var data = new google.visualization.DataTable();
	data.addColumn('string', 'Users');
	data.addColumn('number', 'Total');
	data.addRows([
	  ['Đang làm việc', 1233],
	  ['Đã nghỉ việc', 237]
	]);

	// Set option của biểu đồ
	var options = {
	  'title': 'Thống kê theo Attrition',
	  'width': 360,
	  'height': 300,
	  is3D: true,
	  colors:['red','yellow']
	};

	// Vẽ biểu đồ từ data và option đã khai báo
	var chart = new google.visualization.PieChart(document.getElementById('chart-nv'));
	chart.draw(data, options);
}

google.charts.setOnLoadCallback(drawChartDlv);

function drawChartDlv() {
	// Tạo data table
	var data = new google.visualization.DataTable();
	data.addColumn('string', 'Users');
	data.addColumn('number', 'Total');
	data.addRows([
	  ['Nam', 732],
	  ['Nữ', 501]
	]);

	// Set option của biểu đồ
	var options = {
	  'title': 'Thống kê nhân viên đang làm việc',
	  'width': 360,
	  'height': 300,
	  is3D: true,
	  colors:['blue','red']
	};

	// Vẽ biểu đồ từ data và option đã khai báo
	var chart = new google.visualization.PieChart(document.getElementById('chart-dlv'));
	chart.draw(data, options);
}

google.charts.setOnLoadCallback(drawChartDnv);

function drawChartDnv() {
	// Tạo data table
	var data = new google.visualization.DataTable();
	data.addColumn('string', 'Users');
	data.addColumn('number', 'Total');
	data.addRows([
	  ['Nam', 150],
	  ['Nữ', 87]
	]);

	// Set option của biểu đồ
	var options = {
	  'title': 'Thống kê nhân viên đã nghỉ việc',
	  'width': 360,
	  'height': 300,
	  is3D: true,
	  colors:['red','green']
	};

	// Vẽ biểu đồ từ data và option đã khai báo
	var chart = new google.visualization.PieChart(document.getElementById('chart-dnv'));
	chart.draw(data, options);
}
