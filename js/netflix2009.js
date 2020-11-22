
var parseTime = d3.timeParse("%m/%d/%y");
var rowConverter = function(d) {
        return {
            
            Date: parseFloat(d.Date),
            Close: parseFloat(d.Close)
        };
    };
var xScaleb = d3.scaleLinear()
        .domain([0,30])
        .range([0,300]);
    
var yScaleb = d3.scaleLinear()
    .domain([0,20])
    .range([300,0]);
console.log("testing", yScale(150));
console.log("testing", xScale(15))
var drawLineb = function(dataset){
var lineb = d3.line()
        .x(function(d) {return xScaleb(d.Date);})
        .y(function(d) {return yScaleb(d.Close);});
var svgb = d3.select("#graph3")
            .append("g")
            .attr("class", "3")
            .attr("width", 500)
            .attr("height", 500);
    var draw = d3.select("g")
    .append("path")
    .datum(dataset)
    .attr("class","line")
    .attr("d", lineb)
    .attr("fill","none")
    .attr("stroke", "green")
    .attr("transform","translate(30,10)")
};
var createLabels = function(){
    var labels = d3.select("#graph3")
    .append("g")
    .classed("labels",true)
    
labels.append("text")
    .text("Netflix 2009 Influenza Pandemic")
    .classed("title", true)
    .attr("text-anchor","middle")
    .attr("y",20)
    .attr("x",180)
labels.append("text")
    .text("Months Since June 11, 2008")
    .classed("label", true)
    .attr("text-anchor","middle")
    .attr("x",180)
    .attr("y",350)
}
d3.select("#rotated")
    .text("Stock Price")
    .classed("label", true)
    .attr("y",30)

var drawAxes = function(){
    var xAxis = d3.axisBottom(xScaleb);
    var yAxis = d3.axisLeft(yScaleb);
    
    var axes = d3.select("#graph3")
    .append("g")
    axes.append("g")
    .attr("transform","translate(30,310)")
    .call(xAxis)
    
    axes.append("g")
    .attr("transform","translate(30,10)")
    .call(yAxis)
}
var retrievePromiseb = d3.csv("Data/netflix2009.csv");
var successFCN = function(stock) {
    console.log("data", stock);
    drawLineb(stock);
    createLabels(stock);
    drawAxes(stock);


};



var failFCN = function(errMessage) {
    console.log("failure", errMessage);
}
retrievePromiseb.then(successFCN, failFCN);
console.log(parseTime("6/11/08"));
console.log(parseFloat("1"));
