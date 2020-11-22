var parseTime = d3.timeParse("%m/%d/%y");
var rowConverter = function(d) {
        return {
            
            Date: parseFloat(d.Date),
            Close: parseFloat(d.Close)
        };
    };
var xScaled = d3.scaleLinear()
        .domain([0,15])
        .range([0,300]);
    
var yScaled = d3.scaleLinear()
    .domain([0,600])
    .range([300,0]);
var drawLined = function(dataset){
var line = d3.line()
        .x(function(d) {return xScaled(d.Date);})
        .y(function(d) {return yScaled(d.Close);});
var svg = d3.select("#graph4")
            .append("g")
            .attr("width", 150)
            .attr("height", 120);
    d3.select("g")
    .append("path")
    .datum(dataset)
    .attr("class","line")
    .attr("d", line)
    .attr("fill","none")
    .attr("stroke", "green")
    .attr("transform","translate(30,10)")
};
var createAxes = function(){
    var xAxes = d3.axisBottom(xScaled);
    var yAxes = d3.axisLeft(yScaled);
    
    var Axis = d3.select("#graph4")
    Axis.append("g")
    .attr("transform","translate(30,310)")
    .call(xAxes)
    Axis.append("g")
    .attr("transform","translate(30,10)")
    .call(yAxes)
}

var retrievePromise = d3.csv("Data/netflix2020.csv");
var successFCN = function(stock) {
    console.log("data", stock);
    drawLined(stock);
    createAxes(stock);


}


var failFCN = function(errMessage) {
    console.log("failure", errMessage);
}
retrievePromise.then(successFCN, failFCN);
console.log(parseTime("6/11/08"));
console.log(parseFloat("1"));
