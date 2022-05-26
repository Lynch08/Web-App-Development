// Source Code adaoted from: https://github.com/kriscfoster/d3-barchart/blob/master/index.js
// Used for Ideashttps://www.youtube.com/watch?v=BDpBAFvdjYo
//youtube.com/watch?v=aHJCt2adSWA 



function drawChart() {
    d3.select("#d3-container").selectAll("*").remove()
    // Array Data
    const data = [
        { name: 'Tom Brady', score: 8000 },
        { name: 'Serena Williams', score: 7600 },
        { name: 'Muhammad Ali', score: 9000 },
        { name: 'Michael Jordan', score: 8200 },
        { name: 'Michael Phelps', score: 10000 },
        { name: 'Tiger Woods', score: 7500 },
        { name: 'Roger Federer', score: 8600 },
        { name: 'Lebron James', score: 9600 },
        { name: 'Messi', score: 12600 },
        { name: 'Ronaldo', score: 7600 },
        { name: 'Lewis Hamilton', score: 4600 },
        { name: 'Katie Taylor', score: 3800 },
    ];

    // DOM variables for generating chart
    const chartColor = document.getElementById("colorPicker").value
    const width = 900;
    const height = document.getElementById("chartHeight").value;
    const margin = { top: 50, bottom: 150, left: 50, right: 50 };
    
    // Tags for svg variable
    const svg = d3.select('#d3-container')
        .append('svg')
        .attr('width', width - margin.left - margin.right)
        .attr('height', height - margin.top - margin.bottom)
        .attr("viewBox", [0, 0, width, height]);
   
        // x scale
    const x = d3.scaleBand()
        .domain(d3.range(data.length))
        .range([margin.left, width - margin.right])
        .padding(0.1)
    // y scale
    const y = d3.scaleLinear()
        .domain([0, 15000])
        .range([height - margin.bottom, margin.top])
    
    // svg attributes   
    svg
        .append("g")
        .attr("fill", chartColor)
        .selectAll("rect")
        .data(data.sort((a, b) => d3.descending(a.score, b.score)))
        .join("rect")
        .attr("x", (d, i) => x(i))
        .attr("y", d => y(d.score))
        .attr('title', (d) => d.score)
        .attr("class", "rect")
        .attr("height", d => y(0) - y(d.score))
        .attr("width", x.bandwidth());


    // y axis layout and text
    function yAxis(g) {
    g.attr("transform", `translate(${margin.left}, 0)`)
        .call(d3.axisLeft(y).ticks(null, data.format))
        .attr("font-size", '20px')
        .selectAll("text")
            .attr("font-weight", 800)
            .attr("color", "red")
    }

    // x axis layout and text
    function xAxis(g) {
    g.attr("transform", `translate(0,${height - margin.bottom})`)
        .call(d3.axisBottom(x).tickFormat(i => data[i].name))
        .attr("font-size", '20px')
        .selectAll("text")
            .attr("transform", "rotate(60)")
            .attr("text-anchor", "start")
            .attr("font-weight", 800)
            .attr("color", "blue")
    }


    svg.append("g").call(xAxis);
    svg.append("g").call(yAxis);

    // Generate graph
    svg.node();
}


// This function is called by the buttons on top of the plot to change colour
function changeColor(color){
    d3.selectAll("rect")
    .transition()
    .duration(200)
    .style("fill", color)
}