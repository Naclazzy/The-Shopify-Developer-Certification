document.addEventListener('DOMContentLoaded', () => {
    function playVideos() {
      const videoContainers = document.querySelectorAll('.content-hub-video');

      videoContainers.forEach((videoContainer) => {
        const videoPoster = videoContainer.querySelector('.content-hub-video .video-poster');
        videoPoster.addEventListener('click', () => {
          videoContainer.classList.add('video-playing');
          const videoIframe = videoContainer.querySelector('iframe');
          videoIframe.src += '?autoplay=1';
        });
      });
    }

    playVideos();
  });