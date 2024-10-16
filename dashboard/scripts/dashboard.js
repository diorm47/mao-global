var points = 70;
var maxPoints = 100;
var percent = (points / maxPoints) * 100;
var ratio = percent / 100;
var pie = d3.layout
  .pie()
  .value(function (d) {
    return d;
  })
  .sort(null);
var w = 220,
  h = 220;
var outerRadius = w / 2 - 10;
var innerRadius = 75;
var color = ["#fafafc", "#000", "#fafafc"];

var arc = d3.svg
  .arc()
  .innerRadius(innerRadius)
  .outerRadius(outerRadius)
  .startAngle(0)
  .endAngle(Math.PI);

var arcLine = d3.svg
  .arc()
  .innerRadius(innerRadius)
  .outerRadius(outerRadius)
  .startAngle(0);

var svg = d3
  .select("#loyalty")
  .append("svg")
  .attr({
    width: w,
    height: h,
    class: "shadow",
  })
  .append("g")
  .attr({
    transform: "translate(" + w / 2 + "," + h / 2 + ")",
  });

var defs = svg.append("defs");

var gradient = defs
  .append("linearGradient")
  .attr("id", "grad1")
  .attr("x1", "0%")
  .attr("y1", "0%")
  .attr("x2", "0%")
  .attr("y2", "100%");

gradient
  .append("stop")
  .attr("offset", "0%")
  .style("stop-color", " rgb(0, 0, 0)");

gradient
  .append("stop")
  .attr("offset", "51.156%")
  .style("stop-color", "rgb(255, 63, 63)");

var path = svg
  .append("path")
  .attr({
    d: arc,
    transform: "rotate(-90)",
  })
  .style({
    fill: color[0],
  });

var pathForeground = svg
  .append("path")
  .datum({ endAngle: 0 })
  .attr({
    d: arcLine,
    transform: "rotate(-90)",
  })
  .style({
    fill: "url(#grad1)",
  });

var middleCount = svg
  .append("text")
  .datum(0)
  .text(function (d) {
    return d;
  })
  .attr({
    class: "middleText",
    "text-anchor": "middle",
    dy: 0,
    dx: 5,
  })
  .style({
    fill: d3.rgb("#000000"),
    "font-size": "36px",
  });

var oldValue = 0;
var arcTween = function (transition, newValue, oldValue) {
  transition.attrTween("d", function (d) {
    var interpolate = d3.interpolate(d.endAngle, Math.PI * (newValue / 100));
    var interpolateCount = d3.interpolate(oldValue, newValue);

    return function (t) {
      d.endAngle = interpolate(t);

      middleCount.text(Math.floor((interpolateCount(t) / 100) * maxPoints));

      return arcLine(d);
    };
  });
};

pathForeground
  .transition()
  .duration(750)
  .ease("cubic")
  .call(arcTween, percent, oldValue, points);
