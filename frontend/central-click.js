
d3.svg.BubbleChart.define("central-click", function (options) {
  var self = this;

  self.setup = (function (node) {
    var original = self.setup;
    return function (node) {
      var fn = original.apply(this, arguments);
      self.event.on("click", function(node) {
        if (node.selectAll("text.central-click")[0].length === 1 && node.selectAll("text.central-click")[0].parentNode.textContent === "38Austin, TX(See deal)") {
          vex.dialog.confirm({
            message: "Fly Jet Blue to Austin, TX (AUS) from New York, NY (JFK) from $134.",
              callback: function (value) {
                if (value) {
                  console.log('Clicked ok.')
                } else {
                  console.log('Clicked error.')
                }
              }
            })
        } else if (node.selectAll("text.central-click")[0].length === 1 && node.selectAll("text.central-click")[0].parentNode.textContent === "23Las Vegas, NV(See deal)") {
          vex.dialog.confirm({
            message: "Fly Jet Blue to Las Vegas, NY (LAS) from New York, NY (JFK) from $117.",
              callback: function (value) {
                if (value) {
                  console.log('Clicked ok.')
                } else {
                  console.log('Clicked error.')
                }
              }
            })



        } else if (node.selectAll("text.central-click")[0].length === 1 && node.selectAll("text.central-click")[0].parentNode.textContent === "17Seattle, WA(See deal)") {
          vex.dialog.confirm({
            message: "Fly Jet Blue to Seattle, WA (SEA) from New York, NY (JFK) from $159.",
              callback: function (value) {
                if (value) {
                  console.log('Clicked ok.')
                } else {
                  console.log('Clicked error.')
                }
              }
            })

        } else if (node.selectAll("text.central-click")[0].length === 1 && node.selectAll("text.central-click")[0].parentNode.textContent === "27Denver, CO(See deal)") {
          vex.dialog.confirm({
          message: "Fly Jet Blue to Denver, CO (DEN) from New York, NY (JFK) from $128.",
            callback: function (value) {
              if (value) {
                console.log('Clicked ok.')
              } else {
                console.log('Clicked error.')
              }
            }
          })


        } else if (node.selectAll("text.central-click")[0].length === 1 && node.selectAll("text.central-click")[0].parentNode.textContent === "12Tampa, FL(See deal)") {
          vex.dialog.confirm({
            message: "Fly Jet Blue to Tampa, FL (TPA) from New York, NY (JFK) from $110.",
              callback: function (value) {
                if (value) {
                  console.log('Clicked ok.')
                } else {
                  console.log('Clicked error.')
                }
              }
            })

        } else if (node.selectAll("text.central-click")[0].length === 1 && node.selectAll("text.central-click")[0].parentNode.textContent === "19Aruba(See deal)") {
          vex.dialog.confirm({
            message: "Fly Jet Blue to Aruba (AUA) from New York, NY (JFK) from $157.",
              callback: function (value) {
                if (value) {
                  console.log('Clicked ok.')
                } else {
                  console.log('Clicked error.')
                }
              }
            })


        } else if (node.selectAll("text.central-click")[0].length === 1 && node.selectAll("text.central-click")[0].parentNode.textContent === "15Grand Cayman(See deal)") {
          vex.dialog.confirm({
            message: "Fly Jet Blue to Grand Cayman (GCM) from New York, NY (JFK) from $137.",
              callback: function (value) {
                if (value) {
                  console.log('Clicked ok.')
                } else {
                  console.log('Clicked error.')
                }
              }
            })


        } else if (node.selectAll("text.central-click")[0].length === 1 && node.selectAll("text.central-click")[0].parentNode.textContent === "58Havana, Cuba(See deal)") {
          vex.dialog.confirm({
            message: "Fly Jet Blue to Havana, Cuba (HAV) from New York, NY (JFK) from $136.",
              callback: function (value) {
                if (value) {
                  console.log('Clicked ok.')
                } else {
                  console.log('Clicked error.')
                }
              }
            })


        } else if (node.selectAll("text.central-click")[0].length === 1 && node.selectAll("text.central-click")[0].parentNode.textContent === "27New Orleans, LA(See deal)") {
          vex.dialog.confirm({
            message: "Fly Jet Blue to New Orleans, LA (MSY) from New York, NY (JFK) from $153.",
              callback: function (value) {
                if (value) {
                  console.log('Clicked ok.')
                } else {
                  console.log('Clicked error.')
                }
              }
            })
        }
      });
      return fn;
    };
  })();

  self.reset = (function (node) {
    var original = self.reset;
    return function (node) {
      var fn = original.apply(this, arguments);
      node.select("text.central-click").remove();
      return fn;
    };
  })();

  self.moveToCentral = (function (node) {
    var original = self.moveToCentral;
    return function (node) {
      var fn = original.apply(this, arguments);
      var transition = self.getTransition().centralNode;
      transition.each("end", function() {
        node.append("text").classed({"central-click": true})
          .attr(options.attr)
          .style(options.style)
          .attr("x", function (d) {return d.cx;})
          .attr("y", function (d) {return d.cy;})
          .text(options.text)
          .style("opacity", 0).transition().duration(self.getOptions().transitDuration / 2).style("opacity", "0.8");
      });
      return fn;
    };
  })();
});
