google.charts.setOnLoadCallback(drawChartNn);

function drawChartNn() {
	// Tạo data table
	var data = new google.visualization.DataTable();
	data.addColumn('string', 'Users');
	data.addColumn('number', 'Total');
	data.addRows([
	['Nam', 882],
	['Nữ', 588]
	]);

	// Set option của biểu đồ
	var options = {
	'title': 'Thống kê nhân viên theo giới tính',
	'width': 400,
	'height': 200,
	pieHole: 0.4
	};

	// Vẽ biểu đồ từ data và option đã khai báo
	var chart = new google.visualization.PieChart(document.getElementById('chart-nn'));
	chart.draw(data, options);
}

google.charts.setOnLoadCallback(drawChartPb);

function drawChartPb() {
	// Tạo data table
	var data = new google.visualization.DataTable();
	data.addColumn('string', 'Users');
	data.addColumn('number', 'Total');
	data.addRows([
	['Sales', 446],
	['Research & Development', 961],
	['Human Resources', 63]
	]);

	// Set option của biểu đồ
	var options = {
	'title': 'Thống kê nhân viên theo phòng ban',
	'width': 600,
	'height': 350,
	is3D: true
	};

	// Vẽ biểu đồ từ data và option đã khai báo
	var chart = new google.visualization.PieChart(document.getElementById('chart-pb'));
	chart.draw(data, options);
}

google.charts.setOnLoadCallback(drawChartGd);

function drawChartGd() {
	// Tạo data table
	var data = new google.visualization.DataTable();
	data.addColumn('string', 'Users');
	data.addColumn('number', 'Total');
	data.addRows([
	['Life Sciences',606],
	['Medical',464],
	['Marketing',159],
	['Technical Degree',132],
	['Other',82],
	['Human Resources',27]
	]);

	// Set option của biểu đồ
	var options = {
	'title': 'Thống kê nhân viên theo giáo dục',
	'width': 600,
	'height': 350,
	is3D: true,
	slices: {  2: {offset: 0.2},
                    4: {offset: 0.3},
                    6: {offset: 0.4}
    	}
	};

	// Vẽ biểu đồ từ data và option đã khai báo
	var chart = new google.visualization.PieChart(document.getElementById('chart-gd'));
	chart.draw(data, options);
}

google.charts.setOnLoadCallback(drawChartVtcv);

function drawChartVtcv() {
	// Tạo data table
	var data = new google.visualization.DataTable();
	data.addColumn('string', 'Users');
	data.addColumn('number', 'Total');
	data.addRows([
		['Sales Executive',              326],
		['Research Scientist',           292],
		['Laboratory Technician',        259],
		['Manufacturing Director',       145],
		['Healthcare Representative',    131],
		['Manager',                      102],
		['Sales Representative',          83],
		['Research Director',             80],
		['Human Resources' ,              52]
	]);

	// Set option của biểu đồ
	var options = {
	'title': 'Thống kê nhân viên theo vai trò công việc',
	'width': 600,
	'height': 500,
	};

	// Vẽ biểu đồ từ data và option đã khai báo
	var chart = new google.visualization.ColumnChart(document.getElementById('chart-vtcv'));
	chart.draw(data, options);
}

google.charts.setOnLoadCallback(drawChartHn);

function drawChartHn() {
	// Tạo data table
	var data = new google.visualization.DataTable();
	data.addColumn('string', 'Users');
	data.addColumn('number', 'Total');
	data.addRows([
		['Married',     673],
		['Single',      470],
		['Divorced',    327]
	]);

	// Set option của biểu đồ
	var options = {
	'title': 'Thống kê nhân viên theo tình trạng hôn nhân',
	'width': 600,
	'height': 350,
	
	pieHole: 0.4
	};

	// Vẽ biểu đồ từ data và option đã khai báo
	var chart = new google.visualization.PieChart(document.getElementById('chart-hn'));
	chart.draw(data, options);
}

google.charts.setOnLoadCallback(drawChartLtg);

function drawChartLtg() {
	// Tạo data table
	var data = new google.visualization.DataTable();
	data.addColumn('string', 'Users');
	data.addColumn('number', 'Total');
	data.addRows([
		['No',     1054],
		['Yes',    416]
	]);

	// Set option của biểu đồ
	var options = {
	'title': 'Thống kê nhân viên theo làm thêm giờ',
	'width': 600,
	'height': 350,
	is3D: true
	};

	// Vẽ biểu đồ từ data và option đã khai báo
	var chart = new google.visualization.PieChart(document.getElementById('chart-ltg'));
	chart.draw(data, options);
}

google.charts.setOnLoadCallback(drawChartCb);

function drawChartCb() {
	// Tạo data table
	var data = new google.visualization.DataTable();
	data.addColumn('string', 'Users');
	data.addColumn('number', 'Total');
	data.addRows([
		['Bad',     80],
		['Good',    344],
		['Better',  893],
		['Best',    153]
	]);

	// Set option của biểu đồ
	var options = {
	'title': 'Thống kê nhân viên cân bằng công việc -  cuộc sống',
	'width': 600,
	'height': 350,
	is3D: true
	};

	// Vẽ biểu đồ từ data và option đã khai báo
	var chart = new google.visualization.PieChart(document.getElementById('chart-cb'));
	chart.draw(data, options);
}