var parseTime = d3.timeParse("%m/%d/%y");
var rowConverter = function(d) {
        return {
            
            Date: parseFloat(d.Date),
            Close: parseFloat(d.Close)
        };
    };
var xScale = d3.scaleLinear()
        .domain([0,15])
        .range([0,100]);
    
var yScale = d3.scaleLinear()
    .domain([0,3500])
    .range([100,0]);
