function downloadSkin() {
  alert("Скин загружается...");
  // Здесь можно добавить функционал для скачивания скинов
}

function downloadMap() {
  alert("Карта загружается...");
  // Здесь можно добавить функционал для скачивания карт
}

function playPreview() {
  const video = document.getElementById('preview-video');
  video.play();
  setTimeout(() => {
    video.pause();
    video.currentTime = 0;
  }, 5000); // Останавливаем видео через 5 секунд
}

