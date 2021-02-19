google.charts.load("current", {packages:["timeline"]});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
    var container = document.getElementById('chartContainer');
    var chart = new google.visualization.Timeline(container);
    var dataTable = new google.visualization.DataTable();

    dataTable.addColumn({ type: 'string', id: 'Store'});
    dataTable.addColumn({ type: 'string', id: 'Name'});
    dataTable.addColumn({ type: 'string', role: 'tooltip'});
    dataTable.addColumn({ type: 'date', id: 'Start'});
    dataTable.addColumn({ type: 'date', id: 'End'});

    for (i in [...Array(stock.length).keys()]) {
        let row = stock[i]
        let min_duration = ((row['End Date'] / 60000) - (row['Start Date'] / 60000)).toString() + ' min'
        dataTable.addRow([
            row['Resource'], min_duration, row['Task Name'],
            new Date(row['Start Date']), new Date(row['End Date'])
        ]);
    }

    var options = {
        width: 10000,
        height: 500
    };

    chart.draw(dataTable, options);
  }

