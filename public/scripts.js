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

window.onload = dininghalls;