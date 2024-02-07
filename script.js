document.addEventListener('DOMContentLoaded', function () {
    const videoContainer = document.getElementById('video-container');
    const landingPage = document.getElementById('landing-page');
    const playButton = document.getElementById('play-button');
    const backgroundVideo = document.getElementById('background-video');

    // Check if the cookie is set
    const hasPressedButton = document.cookie.includes('pressedButton=true');

    if (hasPressedButton) {
        // If the cookie is set, hide the play button and show the landing page
        playButton.style.display = 'none';
        videoContainer.style.display = 'none';
        landingPage.style.display = 'block';
    } else {
        // Preload the landing page background image
        const landingPageImage = new Image();
        landingPageImage.src = 'https://cdn.discordapp.com/attachments/172555033429278722/1201779591174430740/IntroPage-ezgif.com-overlay.gif?ex=65d449f6&is=65c1d4f6&hm=102f8e18c003b18151a13ac74aec06d43d11aaaf40118c3777fc83793d0ca7b6&';

        playButton.addEventListener('click', function () {
            playButton.style.pointerEvents = 'none'; // Disable further clicks on the button
            playButton.classList.add('crack'); // Add crack class for the cracking effect

            // Add class for fade-out effect after the cracking animation
            setTimeout(function () {
                playButton.classList.add('fade-out');
            }, 500);

            // Hide the cracked egg after the fade-out effect
            setTimeout(function () {
                playButton.style.display = 'none';
            }, 1000);

            // Show sunny-side-up egg after 500ms
            setTimeout(function () {
                showSunnySideUpEgg();
            }, 500);

            // Start playing the background video after 2 seconds
            setTimeout(function () {
                backgroundVideo.play();
            }, 2000); // Adjust the timeout duration for video playback

            // Set a cookie to indicate that the button has been pressed
            document.cookie = 'pressedButton=true; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/';
        });

        backgroundVideo.addEventListener('ended', function () {
            videoContainer.style.display = 'none'; // Hide the video container
            landingPage.style.display = 'block'; // Show the landing page
        });
    }

    function showSunnySideUpEgg() {
        const sunnySideUpEgg = document.createElement('div');
        sunnySideUpEgg.className = 'sunny-side-up-egg';
        document.body.appendChild(sunnySideUpEgg);

        // Triggering reflow to force the browser to repaint and apply the opacity transition
        sunnySideUpEgg.offsetHeight;

        sunnySideUpEgg.style.opacity = '1'; // Set opacity to 1 for the fade-in effect

        // Hide sunny-side-up egg with fade-out effect after 2 seconds
        setTimeout(function () {
            sunnySideUpEgg.style.opacity = '0'; // Set opacity to 0 for the fade-out effect
        }, 1500); // Adjust the duration for the sunny-side-up egg to fade out
    }
});
