document.addEventListener('DOMContentLoaded', function () {
    const profileLink = document.getElementById('profile');
    const profilePopup = document.getElementById('profile-popup');

    profileLink.addEventListener('click', function (event) {
        event.preventDefault();
        profilePopup.style.display = profilePopup.style.display === 'block' ? 'none' : 'block';
    });

    window.addEventListener('click', function (event) {
        if (!profileLink.contains(event.target) && !profilePopup.contains(event.target)) {
            profilePopup.style.display = 'none';
        }
    });
});
