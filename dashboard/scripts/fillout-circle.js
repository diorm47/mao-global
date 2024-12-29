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
  .select("#fillout")
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

document.addEventListener("DOMContentLoaded", () => {
  const fillupSteps = document.querySelectorAll(".fillup_step");

  fillupSteps.forEach((step) => {
    step.addEventListener("click", () => {
      const isChecked = step.classList.contains("fillup_step_checked");
      const notCheckedIcon = step.querySelector(".not_checked");
      const checkedIcon = step.querySelector(".checked_icon");

      if (isChecked) {
        step.classList.remove("fillup_step_checked");
        notCheckedIcon.style.display = "block";
        checkedIcon.classList.add("hidden_icon");
      } else {
        step.classList.add("fillup_step_checked");
        notCheckedIcon.style.display = "none";
        checkedIcon.classList.remove("hidden_icon");
      }
    });
  });
});

function openModal1() {
  document.querySelector(".fillout_modal").classList.toggle("visible_modal");
}

function openModal2() {
  document
    .querySelector(".fillout_steps_modal_w")
    .classList.toggle("visible_modal");
    document.querySelector(".fillout_modal").classList.remove("visible_modal");
}
