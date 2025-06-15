document.querySelectorAll('.project-tile').forEach(tile => {
  tile.addEventListener('click', () => {
    const overlay = document.getElementById('projectOverlay');
    overlay.classList.remove('hidden');
    overlay.querySelector('.overlay-content').innerText = `${tile.innerText} is loading...`;
  });
});
document.getElementById('closeOverlay').addEventListener('click', () => {
  document.getElementById('projectOverlay').classList.add('hidden');
});
