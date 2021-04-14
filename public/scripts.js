async function dininghalls() {
  const request = await fetch('/api/dining');
  const data = await request.json();
  console.log(data);
  
  let t = '';
  for (let i = 0; i < data.data.length; i++) {
    let tr = '<tr>';
    tr += '<td>' + data.data[i].hall_id + '</td>';
    tr += '<td>' + data.data[i].hall_name + '</td>';
    tr += '<td>' + data.data[i].hall_address + '</td>';
    tr += '</tr>';
    t += tr;

  }
  document.getElementById('halls').innerHTML += t;
}
async function getMeals() {
  const request = await fetch('/api/meals');
  const ids = await fetch('/api/macros/:meal_id');
  const data = await request.json();
  const idList = await ids.json();
  console.log(data);
  let chart = new CanvasJS.Chart("chartContainer", {
    title: {
      text: "Meals"
    },
    data: [{
      type: "stackedBar",
		  showInLegend: "true",
      dataPoints: holder
    }]

  });
  for (let i = 0; i < 10; i++) {
    chart.data.concat(data[Math.getRandomIntInclusive(data.length)]);
  }
  

  chart.render();
}

window.onload = function () {
  diningHalls;
  getMeals;
}