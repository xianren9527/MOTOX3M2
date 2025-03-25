// Social Share Buttons
function shareGame(platform) {
    const url = encodeURIComponent(window.location.href);
    const title = encodeURIComponent('Play Moto X3M 2 - The Ultimate Motorcycle Racing Game!');
    let shareUrl = '';

    switch(platform) {
        case 'facebook':
            shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
            break;
        case 'twitter':
            shareUrl = `https://twitter.com/intent/tweet?url=${url}&text=${title}`;
            break;
        case 'whatsapp':
            shareUrl = `https://wa.me/?text=${title}%20${url}`;
            break;
    }

    window.open(shareUrl, '_blank', 'width=600,height=400');
}

// Add click event listeners to share buttons
document.querySelectorAll('.share-btn').forEach(button => {
    button.addEventListener('click', () => {
        const platform = button.getAttribute('data-platform');
        shareGame(platform);
    });
}); 