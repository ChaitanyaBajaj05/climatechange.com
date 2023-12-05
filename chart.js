google.charts.load('current', { packages: ['corechart'] });
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
  var data = new google.visualization.DataTable();
  data.addColumn('string', 'Year');
  data.addColumn('number', 'Temperature');
  data.addRows([
    ['2010', 25],
    ['2011', 26],
    ['2012', 27],
    ['2013', 26.5],
    ['2014', 27.5],
    // Add more data points as needed
  ]);

  var options = {
    title: 'Average Global Temperature Change (in Celsius)',
    curveType: 'function',
    legend: { position: 'bottom' }
  };

  var chart = new google.visualization.LineChart(document.getElementById('chart_div'));
  chart.draw(data, options);
}   

google.charts.load('current', {
    'packages': ['geochart'],
    'mapsApiKey': 'YOUR_API_KEY' // Replace with your own Google Maps API key
  });
  google.charts.setOnLoadCallback(drawRegionsMap);
  
  function drawRegionsMap() {
    var data = google.visualization.arrayToDataTable([
      ['Country', 'Affected'],
      ['Germany', 200], // Sample data, replace with actual affected regions and values
      ['United States', 300],
      ['Brazil', 400],
      ['Canada', 500],
      ['France', 600],
      ['RU', 700] // Russia
    ]);
  
    var options = {
      colorAxis: { colors: ['#e7711c', '#4374e0'] } // Change colors as needed
    };
  
    var chart = new google.visualization.GeoChart(document.getElementById('regions_div'));
  
    chart.draw(data, options);
  }
  