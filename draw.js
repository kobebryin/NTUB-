function draw() {
dataFile = "https://kobebryin.github.io/NTUB-/table.csv";
var width  = 1024;
var height = 800; 
d3.csv(dataFile, function(data) {
	console.log(data);
	data.forEach(function(d) {
		console.log(d.Open);
	});
	var hshift = -100;
	var maxy = d3.max(data, function(d) { return d.Open; });
	var ln = data.length;
	var ctrl  = d3.select(".featured").append("svg").attr("width", width).attr("height", height);
	linesO = d3.line().
	x(function(d,i){ return i * (width/ln); }).
	y(function(d){ return d.Open * (height/maxy) + hshift; });
	
	linesH = d3.line().
	x(function(d,i){ return i * (width/ln); }).
	y(function(d){ return d.High * (height/maxy) + hshift; });

	linesL = d3.line().
	x(function(d,i){ return i * (width/ln); }).
	y(function(d){ return d.Low * (height/maxy) + hshift; });

	linesC = d3.line().
	x(function(d,i){ return i * (width/ln); }).
	y(function(d){ return d.Close * (height/maxy) + hshift; });

	ctrl.append("path").data([data]).
	attr("class", "pathline").
	attr("id", "open").
	attr("d", linesO);

	ctrl.append("path").data([data]).
	attr("class", "pathline").
	attr("id", "high").
	attr("d", linesH);

	ctrl.append("path").data([data]).
	attr("class", "pathline").
	attr("id", "low").
	attr("d", linesL);

	ctrl.append("path").data([data]).
	attr("class", "pathline").
	attr("id", "close").
	attr("d", linesC);

});
}