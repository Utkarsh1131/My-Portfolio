document.addEventListener('DOMContentLoaded', function () {
    var blurLink1 = document.querySelector('.blur-link1');
    var blurOverlay1 = document.createElement('div');
    blurOverlay1.classList.add('blur-overlay1');
    var blurContainer1 = document.createElement('div');
    blurContainer1.classList.add('blur-container1');
    // blurContainer1.innerHTML = '<h2>Blurred Overlay Content</h2><p>ab isme code likkhunmai poore page ka .</p>';

    blurLink1.addEventListener('click', function (event) {
        event.preventDefault();
        document.body.appendChild(blurOverlay1);
        blurOverlay1.appendChild(blurContainer1);
    });
    // Fetch the content of the HTML file


    fetch('skills.html')
        .then(response => response.text())
        .then(html => {
            // Set the fetched HTML content as innerHTML of the blur container
            blurContainer1.innerHTML = html;
        })
        .catch(error => console.error('Error fetching HTML:', error));


    blurOverlay1.addEventListener('click', function (event) {
        if (event.target === blurOverlay1) {
            document.body.removeChild(blurOverlay1);
        }
    });
});  


document.addEventListener('DOMContentLoaded', function () {
    var blurLink2 = document.querySelector('.blur-link2');
    var blurOverlay2 = document.createElement('div');
    blurOverlay2.classList.add('blur-overlay2');
    var blurContainer2 = document.createElement('div');
    blurContainer2.classList.add('blur-container2');
    // blurContainer2.innerHTML = '<h2>Blurred Overlay Content</h2><p>ab isme code likkhunmai poore page ka .</p>';

    blurLink2.addEventListener('click', function (event) {
        event.preventDefault();
        document.body.appendChild(blurOverlay2);
        blurOverlay2.appendChild(blurContainer2);
    });
    // Fetch the content of the HTML file


    fetch('projects.html')
        .then(response => response.text())
        .then(html => {
            // Set the fetched HTML content as innerHTML of the blur container
            blurContainer2.innerHTML = html;
        })
        .catch(error => console.error('Error fetching HTML:', error));


    blurOverlay2.addEventListener('click', function (event) {
        if (event.target === blurOverlay2) {
            document.body.removeChild(blurOverlay2);
        }
    });
});  


document.addEventListener('DOMContentLoaded', function () {
    var blurLink3 = document.querySelector('.blur-link3');
    var blurOverlay3 = document.createElement('div');
    blurOverlay3.classList.add('blur-overlay3');
    var blurContainer3 = document.createElement('div');
    blurContainer3.classList.add('blur-container3');
    // blurContainer3.innerHTML = '<h3>Blurred Overlay Content</h3><p>ab isme code likkhunmai poore page ka .</p>';

    blurLink3.addEventListener('click', function (event) {
        event.preventDefault();
        document.body.appendChild(blurOverlay3);
        blurOverlay3.appendChild(blurContainer3);
    });
    // Fetch the content of the HTML file


    fetch('links.html')
        .then(response => response.text())
        .then(html => {
            // Set the fetched HTML content as innerHTML of the blur container
            blurContainer3.innerHTML = html;
        })
        .catch(error => console.error('Error fetching HTML:', error));


    blurOverlay3.addEventListener('click', function (event) {
        if (event.target === blurOverlay3) {
            document.body.removeChild(blurOverlay3);
        }
    });
});  




