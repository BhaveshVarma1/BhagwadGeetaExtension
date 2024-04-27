document.addEventListener('DOMContentLoaded', function() {
    const verseContainer = document.getElementById('verse-container');
    const newTeachingButton = document.getElementById('new-teaching');
  
    fetch('teachings.json')
      .then(response => response.json())
      .then(teachings => {
        displayRandomTeaching(teachings);
  
        newTeachingButton.addEventListener('click', () => {
          displayRandomTeaching(teachings);
        });
      });
  
    function displayRandomTeaching(teachings) {
      const randomIndex = Math.floor(Math.random() * teachings.length);
      const selectedTeaching = teachings[randomIndex];
      verseContainer.innerHTML = `
        <p>"${selectedTeaching.verse}"</p>
        <p>- ${selectedTeaching.chapter}</p>
      `;
    }
  });
  