const leaderboard = document.getElementById('leaderboard');
const rows = document.querySelectorAll('#leaderboard table tr');

export function updateLeaderboard(data) {
  for (let i = 0; i < data.length; i++) {
    rows[i + 1].innerHTML = `<td>${data[i].username.slice(0, 15) || 'Guest'}</td><td>${
      data[i].score
    }</td>`;
  }
  for (let i = data.length; i < 5; i++) {
    rows[i + 1].innerHTML = '<td>-</td><td>-</td>';
  }
}

export function hideLeaderboard(hidden) {
  if (hidden) {
    leaderboard.classList.add('hidden');
  } else {
    leaderboard.classList.remove('hidden');
  }
}
