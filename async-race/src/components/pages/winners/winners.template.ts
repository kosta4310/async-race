import { getCarTemplate } from '../garage/car/car.template';

export function getWinnersTemplate(quantityOfWinners: string, numberPage: string) {
    return `
    <div class="winners">
         <div class="container">
            <h1>Winners<span id="quantity-of-winners" class="quantity-of-winners">(${quantityOfWinners})</span></h1>
            <div id="number-page-winners" class="page-number">Page #${numberPage}</div>
            <table id="table-winners" class="table-winners">
               <thead>
                  <tr>
                      <th>N</th>
                      <th>Car</th>
                      <th>Name</th>
                      <th id="sort-wins" class="btn-sort-wins">Wins
                        ${getArrowTemplate('wins')}
                      </th>
                      <th id="sort-time" class="btn-sort-time">Best time(sec)
                        ${getArrowTemplate('time')}
                      </th>
                  </tr>
               </thead>
               <tbody>
               </tbody>
            </table>
         </div>
    </div>`;
}

export function getWinnerTemplate(i: number, color: string, model: string, wins: number, time: number) {
    return `<tr>
            <td>${i}</td>
            <td>${getCarTemplate(color)}</td>
            <td>${model}</td>
            <td>${wins}</td>
            <td>${time}</td>
      </tr>`;
}

function getArrowTemplate(typeSort: string) {
    return `
            <svg id="arrow-sort-${typeSort}" class="arrow-sort-${typeSort}">
    <use xlink:href="./assets/images/spriteArrowUp.svg#up-arrow-24"></use>
  </svg>
      `;
}
