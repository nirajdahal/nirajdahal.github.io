lightGallery(document.getElementById('lightgallery'), {
    selector: 'a',
    thumbnail: true,
    zoom: true,
    fullScreen: true, // Enable full-screen mode
    download: true, // Enable download button
    autoplay: true, // Enable autoplay for videos
    videojs: true // Use video.js for video playback
});

document.addEventListener("DOMContentLoaded", function () {
    lightGallery(document.getElementById('light-gallery'));

    // Apply flexbox styling
    document.getElementById('light-gallery').style.display = 'flex';
    document.getElementById('light-gallery').style.flexWrap = 'wrap'; // To wrap items if needed
});

var scene = document.getElementById('scene');
var parallaxInstance = new Parallax(scene);