"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var seriesTbody = document.getElementById('series');
function renderSeriesInTable(series) {
    series.forEach(function (c) {
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<td>".concat(c.name, "</td>\n                           <td>").concat(c.channel, "</td>\n                           <td>").concat(c.season, "</td>");
        seriesTbody.appendChild(trElement);
    });
}
