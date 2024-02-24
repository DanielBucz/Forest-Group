document.addEventListener('DOMContentLoaded', function() {
    const footerYear =document.querySelector('.footer-year');
    const navBtn = document.querySelector('.burger-btn');
    const navLinks = document.querySelector('.nav-mobile__links');
    const allNavsItems = navLinks.querySelectorAll('.nav-mobile-link');
    const handleCurrentYear = () => {
        const year = (new Date).getFullYear();
        footerYear.innerText = year;
      };
      const handleNav = () => {
        navLinks.classList.toggle("active");
        allNavsItems.forEach((navItem) => {
          navItem.addEventListener("click", () => {
            nav.classList.remove('nav--active');
          });
        });
        handleNavItemsAnimation();
      };
    navBtn.addEventListener('click', handleNav);
    handleCurrentYear();
})