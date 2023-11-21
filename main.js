document.addEventListener('DOMContentLoaded', function () {
    // Get all thumbnail elements
    let thumbnails = document.querySelectorAll('.thumbnail');

    // Attach click event listener to each thumbnail
    thumbnails.forEach(function (thumbnail) {
        thumbnail.addEventListener('click', function () {
            // Get the source of the clicked thumbnail
            let thumbnailSrc = thumbnail.src;

            // Extract the filename and number from the thumbnail source
            let matches = thumbnailSrc.match(/thumb(\d+)\.jpg/);
            if (matches) {
                let number = matches[1];

                // Construct the source for the corresponding larger image
                let largerImageSrc = `pic${number}.jpg`;

                // Update the source of the main photo
                let mainPhoto = document.getElementById('mainPhoto');
                mainPhoto.src = largerImageSrc;

                // Optionally, you can update the caption as well
                let caption = document.querySelector('.main-photo-container figcaption');
                caption.textContent = thumbnail.alt;
            }
        });
    });
});
