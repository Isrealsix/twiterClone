const mainPage = document.querySelector('.main-page');
const loginPage = document.querySelector('.login-page');
const rightMiddle = document.querySelector('.right__middle');
const topBtn = document.querySelector('.right__form .form__button');
const feedsPage = document.querySelector('.feeds-page');
const loginModal = document.querySelector('.login-modal');
const modalClose = document.querySelector('.login-modal i');
const loginBtn = document.querySelector('.form__group .form__button');

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

topBtn.addEventListener('click', () => {
	const username = document.querySelector('.form__user').value.trim();
	const password = document.querySelector('.form__password').value.trim();
	if (!username || !password) {
		loginModal.style.display = 'block';
		return goToLoginPage();
	}

	mainPage.style.display = 'none';
	feedsPage.style.display = 'block';
});

// Close modal box
modalClose.addEventListener('click', () => (loginModal.style.display = 'none'));

// Login page validation
loginBtn.addEventListener('click', () => {
	const username = document.querySelector('.user').value.trim();
	const password = document.querySelector('.pass').value.trim();

	if (!username || !password) {
		loginModal.style.display = 'block';
	} else {
		loginPage.style.display = 'none';
		feedsPage.style.display = 'block';
	}
});
