const mainPage = document.querySelector('.main-page');
const loginPage = document.querySelector('.login-page');
const rightMiddle = document.querySelector('.right__middle');
const topBtn = document.querySelector('.right__form .form__button');
const feedsPage = document.querySelector('.feeds-page');
const loginModal = document.querySelector('.login-modal');
const modalClose = document.querySelector('.login-modal i');
const loginBtn = document.querySelector('.form__group .form__button');
const modalBox = document.querySelector('.modal-box');
const modal = document.querySelector('.modal');
const postBtn = document.querySelector('.post-btn');
const postModalClose = document.querySelector('.modal__header i');

const modalInput = document.querySelector('.modal__input');
const modalPost = document.querySelector('.modal__header button');
const footerPlus = document.querySelector('.modal__footer span');

const user = document.querySelector('.nav__user');
const sidebarBox = document.querySelector('.sidebar-box');
const sidebar = document.querySelector('.sidebar');
const sidebarClose = document.querySelector('.sidebar__header i');

const toggle = document.querySelector('.toggle');
const circle = document.querySelector('.circle');

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

// Show post modal on news feed
postBtn.addEventListener('click', ev => {
	modal.style.display = 'block';
	modalBox.classList.add('modal-box-show');
	// console.log(modalBox);
});

postModalClose.addEventListener('click', () => {
	modal.style.display = 'none';
	modalBox.classList.remove('modal-box-show');

	if (modalInput.value.trim()) {
		modalInput.value = '';
		changeOpacity(0.5);
	}
});

const changeOpacity = x => {
	modalPost.style.opacity = x;
	footerPlus.style.opacity = x;
};

modalInput.addEventListener('keypress', ev => {
	const value = ev.target.value.trim();
	// console.log(value);
	if (value) changeOpacity(1);
});

modalInput.addEventListener('blur', ev => {
	const value = ev.target.value.trim();
	if (!value) changeOpacity(0.5);
});

user.addEventListener('click', () => {
	sidebarBox.classList.add('sidebar-box__display');
	sidebar.classList.add('sidebar__display');
});

sidebarClose.addEventListener('click', () => {
	sidebarBox.classList.remove('sidebar-box__display');
	sidebar.classList.remove('sidebar__display');
});

// Dark Mode
const darkable = Array.from(document.querySelectorAll('.dark-mode-1'));
const darkable2 = Array.from(document.querySelectorAll('.dark-mode-2'));
const lightTexts = Array.from(document.querySelectorAll('.light-text'));
const borders = Array.from(document.querySelectorAll('.border'));

toggle.addEventListener('click', () => {
	circle.classList.toggle('move');
	darkable.map(dark => dark.classList.toggle('dark-1'));
	darkable2.map(dark2 => dark2.classList.toggle('dark-2'));
	lightTexts.map(light => light.classList.toggle('light'));
	borders.map(border => border.classList.toggle('border-color'));
});

// window.addEventListener('resize', () => window.location.reload());
