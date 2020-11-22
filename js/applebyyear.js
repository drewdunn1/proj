var parseTime = d3.timeParse("%m/%d/%y");
var rowConverter = function(d) {
        return {
            
            Date: parseFloat(d.Date),
            Close: parseFloat(d.Close)
        };
    };
var xScaleb = d3.scaleLinear()
        .domain([0,45])
        .range([0,800]);
    
var yScaleb = d3.scaleLinear()
    .domain([-100,250])
    .range([300,0]);
var drawLineb = function(dataset){
var lineb = d3.line()
        .x(function(d) {return xScaleb(d.Year);})
        .y(function(d) {return yScaleb(d.Change);});
var svgb = d3.select("#yeargraph1")
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
    .attr("stroke", "black")
    .attr("transform","translate(30,10)")
};
var createLabels = function(){
    var labels = d3.select("#yeargraph1")
    .append("g")
    .classed("labels",true)
    labels.append("text")
    .text("Apple Percentage Increase by Year")
    .classed("title", true)
    .attr("text-anchor","middle")
    .attr("y",20)
    .attr("x",400)
labels.append("text")
    .text("Years Since 1980")
    .classed("label", true)
    .attr("text-anchor","middle")
    .attr("x",400)
    .attr("y",350)
}

var drawAxes = function(){
    var xAxis = d3.axisBottom(xScaleb);
    var yAxis = d3.axisLeft(yScaleb);
    
    var axes = d3.select("#yeargraph1")
    .append("g")
    axes.append("g")
    .attr("transform","translate(30,310)")
    .call(xAxis)
    
    axes.append("g")
    .attr("transform","translate(30,10)")
    .call(yAxis)



}
var retrievePromiseb = d3.csv("Data/applebyyear.csv");
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
