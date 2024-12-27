import * as d3 from "https://esm.sh/d3";

document.addEventListener("DOMContentLoaded", () => {
  const url =
    "https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/GDP-data.json";
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const w = 800;
      const h = 500;
      const padding = 60;
      const dataset = data.data;
      const xScale = d3
        .scaleLinear()
        .domain([1947, d3.max(dataset, (d) => +d[0].split("-")[0])])
        .range([padding, w - padding]);
      const yScale = d3
        .scaleLinear()
        .domain([0, d3.max(dataset, (d) => d[1])])
        .range([h - padding, padding]);
      const svg = d3
        .select("div")
        .append("svg")
        .attr("width", w)
        .attr("height", h);
      svg
        .append("text")
        .attr("x", w / 2)
        .attr("y", padding / 2)
        .attr("font-size", "30px")
        .attr("text-anchor", "middle")
        .attr("id", "title")
        .text("Federal Reserve Economic Data");
      svg
        .selectAll("rect")
        .data(dataset)
        .enter()
        .append("rect")
        .attr("class", "bar")
        .attr("data-date", (d) => d[0])
        .attr("data-gdp", (d) => d[1])
        .attr("width", 10)
        .attr("height", (d) => h - padding - yScale(d[1]))
        .attr("x", (d, i) => xScale(+d[0].split("-")[0]))
        .attr("y", (d, i) => yScale(d[1]))
        .attr("fill", "navy")
        .attr("class", "bar")
        .append("title")
        .text((d) => `${d[0].split("-")[0]}\n${d[1]}`);

      const xAxis = d3.axisBottom(xScale);
      svg
        .append("g")
        .attr("id", "x-axis")
        .attr("transform", "translate(0, " + (h - padding) + ")")
        .call(xAxis);

      const yAxis = d3.axisLeft(yScale);
      svg
        .append("g")
        .attr("id", "y-axis")
        .attr("transform", "translate(" + padding + ", 0)")
        .call(yAxis);
    });
});
