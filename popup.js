document.addEventListener('DOMContentLoaded', function() {
    const generateButton = document.getElementById('generateMeme');
    const memeContainer = document.getElementById('memeContainer');
  
    generateButton.addEventListener('click', function() {
      fetch('https://meme-api.com/gimme')
        .then(response => response.json())
        .then(data => {
          const memeUrl = data.url;
          memeContainer.innerHTML = `<img src="${memeUrl}" alt="Random Meme" width="400" height="auto">`;
        })
        .catch(error => {
          console.error('Error fetching meme:', error);
        });
    });
  });
  