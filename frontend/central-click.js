
d3.svg.BubbleChart.define("central-click", function (options) {
  var self = this;

  self.setup = (function (node) {
    var original = self.setup;
    return function (node) {
      var fn = original.apply(this, arguments);
      self.event.on("click", function(node) {
        if (node.selectAll("text.central-click")[0].length === 1 && node.selectAll("text.central-click")[0].parentNode.textContent === "23Bahamas(See deal)") {
          vex.dialog.confirm({
            message: "Wishpoints Deal",
              callback: function (value) {
                if (value) {
                  console.log('Clicked ok.')
                } else {
                  console.log('Clicked error.')
                }
              }
            })
        } else if (node.selectAll("text.central-click")[0].length === 1 && node.selectAll("text.central-click")[0].parentNode.textContent === "38Mexico City, Mexico(See deal)") {
          vex.dialog.confirm({
            message: "Wishpoints Deal",
              callback: function (value) {
                if (value) {
                  console.log('Clicked ok.')
                } else {
                  console.log('Clicked error.')
                }
              }
            })



        } else if (node.selectAll("text.central-click")[0].length === 1 && node.selectAll("text.central-click")[0].parentNode.textContent === "61Santo Domingo, DR(See deal)") {
          vex.dialog.confirm({
            message: "Wishpoints Deal",
              callback: function (value) {
                if (value) {
                  console.log('Clicked ok.')
                } else {
                  console.log('Clicked error.')
                }
              }
            })

        } else if (node.selectAll("text.central-click")[0].length === 1 && node.selectAll("text.central-click")[0].parentNode.textContent === "27Lima, Peru(See deal)") {
          vex.dialog.confirm({
          message: "Wishpoints Deal",
            callback: function (value) {
              if (value) {
                console.log('Clicked ok.')
              } else {
                console.log('Clicked error.')
              }
            }
          })


        } else if (node.selectAll("text.central-click")[0].length === 1 && node.selectAll("text.central-click")[0].parentNode.textContent === "62San Jose, Costa Rica(See deal)") {
          vex.dialog.confirm({
            message: "Wishpoints Deal",
              callback: function (value) {
                if (value) {
                  console.log('Clicked ok.')
                } else {
                  console.log('Clicked error.')
                }
              }
            })

        } else if (node.selectAll("text.central-click")[0].length === 1 && node.selectAll("text.central-click")[0].parentNode.textContent === "59Aruba(See deal)") {
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


        } else if (node.selectAll("text.central-click")[0].length === 1 && node.selectAll("text.central-click")[0].parentNode.textContent === "45Grand Cayman(See deal)") {
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


        } else if (node.selectAll("text.central-click")[0].length === 1 && node.selectAll("text.central-click")[0].parentNode.textContent === "27Kingston, Jamaica(See deal)") {
          vex.dialog.confirm({
            message: "Wishpoints Deal",
              callback: function (value) {
                if (value) {
                  console.log('Clicked ok.')
                } else {
                  console.log('Clicked error.')
                }
              }
            })
        }
        else if (node.selectAll("text.central-click")[0].length === 1 && node.selectAll("text.central-click")[0].parentNode.textContent === "24Bogota, Colombia(See deal)") {
          vex.dialog.confirm({
            message: "Wishpoints Deal",
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
