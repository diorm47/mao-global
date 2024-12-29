var points = 70;
var maxPoints = 100;
var percent = (points / maxPoints) * 100;
var ratio = percent / 100;

var w = 100,
  h = 100;
var outerRadius = w / 2 - 5;
var innerRadius = 29;
var color = ["#22c55e", "#d3d3d3"];

var arcBackground = d3.svg
  .arc()
  .innerRadius(innerRadius)
  .outerRadius(outerRadius)
  .startAngle(0)
  .endAngle(2 * Math.PI);

var arcForeground = d3.svg
  .arc()
  .innerRadius(innerRadius)
  .outerRadius(outerRadius)
  .startAngle(0);

var svg = d3
  .select("#fillout2")
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

// Background circle
svg
  .append("path")
  .attr({
    d: arcBackground,
  })
  .style({
    fill: color[1],
  });

// Foreground circle (progress)
var pathForeground = svg
  .append("path")
  .datum({ endAngle: 0 })
  .attr({
    d: arcForeground,
  })
  .style({
    fill: color[0],
  });

var arcTween = function (transition, newValue) {
  transition.attrTween("d", function (d) {
    var interpolate = d3.interpolate(
      d.endAngle,
      2 * Math.PI * (newValue / 100)
    );
    return function (t) {
      d.endAngle = interpolate(t);
      return arcForeground(d);
    };
  });
};

pathForeground.transition().duration(750).ease("cubic").call(arcTween, percent);


