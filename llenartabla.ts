import { Serie } from './serie.js';

const seriesTbody: HTMLElement = document.getElementById('series')!; 

function renderSeriesInTable(series: Serie[]): void {
  series.forEach(c => {
    let trElement = document.createElement("tr");
    trElement.innerHTML = `<td>${c.name}</td>
                           <td>${c.channel}</td>
                           <td>${c.season}</td>`;
    seriesTbody.appendChild(trElement);
  });
}
