/**
 * central-click.js
 */
d3.svg.BubbleChart.define("central-click", function (options) {
  var self = this;

  self.setup = (function (node) {
    var original = self.setup;
    return function (node) {
      var fn = original.apply(this, arguments);
      self.event.on("click", function(node) {
        if (node.selectAll("text.central-click")[0].length === 1 && node.selectAll("text.central-click")[0].parentNode.textContent === "38Austin, TX(See deal)") {
          alert("Fly to Austin, TX (AUS) from New York, NY (JFK) from $134. Choose Jet Blue.")
        } else if (node.selectAll("text.central-click")[0].length === 1 && node.selectAll("text.central-click")[0].parentNode.textContent === "23Las Vegas, NV(See deal)") {
          alert("Fly to Las Vegas, NY (LAS) from New York, NY (JFK) from $117. Choose Jet Blue.")

        } else if (node.selectAll("text.central-click")[0].length === 1 && node.selectAll("text.central-click")[0].parentNode.textContent === "17Seattle, WA(See deal)") {
            alert("Fly to Seattle, WA (SEA) from New York, NY (JFK) from $159. Choose Jet Blue.")

        } else if (node.selectAll("text.central-click")[0].length === 1 && node.selectAll("text.central-click")[0].parentNode.textContent === "2Denver, CO(See deal)") {
          alert("Fly to Denver, CO (DEN) from New York, NY (JFK) from $128. Choose Jet Blue.")

        } else if (node.selectAll("text.central-click")[0].length === 1 && node.selectAll("text.central-click")[0].parentNode.textContent === "12Tampa, FL(See deal)") {
          alert("Fly to Tampa, FL (TPA) from New York, NY (JFK) from $110. Choose Jet Blue.")

        } else if (node.selectAll("text.central-click")[0].length === 1 && node.selectAll("text.central-click")[0].parentNode.textContent === "10Aruba(See deal)") {
          alert("Fly to Aruba (AUA) from New York, NY (JFK) from $157. Choose Jet Blue.")

        } else if (node.selectAll("text.central-click")[0].length === 1 && node.selectAll("text.central-click")[0].parentNode.textContent === "15Grand Cayman(See deal)") {
          alert("Fly to Grand Cayman (GCM) from New York, NY (JFK) from $137. Choose Jet Blue.")

        } else if (node.selectAll("text.central-click")[0].length === 1 && node.selectAll("text.central-click")[0].parentNode.textContent === "10Havana, Cuba(See deal)") {
          alert("Fly to Havana, Cuba (HAV) from New York, NY (JFK) from $136. Choose Jet Blue.")

        } else if (node.selectAll("text.central-click")[0].length === 1 && node.selectAll("text.central-click")[0].parentNode.textContent === "27New Orleans, LA(See deal)") {
          alert("Fly to New Orleans, LA (MSY) from New York, NY (JFK) from $153. Choose Jet Blue.")
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
