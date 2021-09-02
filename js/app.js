const sideNav = document.querySelector(`.side-nav`);
const navToggler = document.querySelector(`.fa-bars`);
const sideNavBackground = document.getElementById(`side-nav-cover`);


navToggler.addEventListener(`click`, () => {
    sideNav.classList.toggle(`toggle`);
    sideNavBackground.classList.toggle(`toggle`);
    document.body.classList.toggle(`hide-overflow`);
});
sideNavBackground.addEventListener(`click`, () => {
    sideNavBackground.classList.remove(`toggle`);
    sideNav.classList.remove(`toggle`);
    document.body.classList.remove(`hide-overflow`);
})