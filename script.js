document.getElementById('wordForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const listOne = document.getElementById('listOne').value.split(',').map(word => word.trim());
  const listTwo = document.getElementById('listTwo').value.split(',').map(word => word.trim());

  const matches = [];
  const maxLength = Math.max(listOne.length, listTwo.length);

  for (let i = 0; i < maxLength; i++) {
    if (listOne.length && listTwo.length) {
      const randomIndexOne = Math.floor(Math.random() * listOne.length);
      const randomIndexTwo = Math.floor(Math.random() * listTwo.length);

      if (Math.random() < 0.5) {
        matches.push(`${listOne[randomIndexOne]} ${listTwo[randomIndexTwo]}`);
      } else {
        matches.push(`${listTwo[randomIndexTwo]} ${listOne[randomIndexOne]}`);
      }

      listOne.splice(randomIndexOne, 1);
      listTwo.splice(randomIndexTwo, 1);
    } else if (listOne.length) {
      const randomIndexOne = Math.floor(Math.random() * listOne.length);
      matches.push(`${listOne[randomIndexOne]}`);
      listOne.splice(randomIndexOne, 1);
    } else if (listTwo.length) {
      const randomIndexTwo = Math.floor(Math.random() * listTwo.length);
      matches.push(`${listTwo[randomIndexTwo]}`);
      listTwo.splice(randomIndexTwo, 1);
    }
  }

  const matchesList = document.getElementById('matchesList');
  matchesList.innerHTML = '';
  matches.forEach(match => {
    const li = document.createElement('li');
    li.textContent = match;
    matchesList.appendChild(li);
  });
});
