javascript
document.addEventListener('DOMContentLoaded', function () {
    const navItems = document.querySelectorAll('.nav-item');

    navItems.forEach(item => {
        item.addEventListener('click', function () {
            // Remove 'active' class from all items
            navItems.forEach(navItem => navItem.classList.remove('active'));
            // Add 'active' class to the clicked item
            this.classList.add('active');
        });
    });

    // Optional: Set the active class based on the current URL
    const currentUrl = window.location.pathname.split('/').pop();
    navItems.forEach(item => {
        const link = item.querySelector('a');
        if (link.getAttribute('href') === currentUrl) {
            item.classList.add('active');
        }
    });
});