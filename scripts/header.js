document.addEventListener('DOMContentLoaded', function () {
    const currentURL = window.location.href;
    const links = document.querySelectorAll('.nav-link');
    console.log(currentURL)


    links.forEach(link => {
        console.log(link.href)
        if (link.href === currentURL) {
            link.classList.add('active');
        }
    });
});