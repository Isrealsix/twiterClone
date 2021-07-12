const mainPage = document.querySelector('.main-page');
const loginPage = document.querySelector('.login-page');
const rightMiddle = document.querySelector('.right__middle');

// click on the buttons to go to the sign in page;

rightMiddle.addEventListener('click', ev => {
	const target = ev.target.closest('.main-btn');
	if (!target) return;
	goToLoginPage();
});

const goToLoginPage = () => {
	mainPage.style.display = 'none';
	loginPage.style.display = 'grid';
};
