// Logica de validacion del formulario de registro.
const form = document.getElementById('register-form');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const emailError = document.getElementById('email-error');
const passwordError = document.getElementById('password-error');
const successMessage = document.getElementById('success-message');
const REDIRECT_DELAY_MS = 5000;
let redirectTimer = null;

if (form && emailInput && passwordInput && emailError && passwordError && successMessage) {
	function showError(input, errorNode, message) {
		errorNode.textContent = message;
		errorNode.classList.remove('hidden');
		input.setAttribute('aria-invalid', 'true');
		input.classList.add('border-red-500', 'focus:border-red-500', 'focus:ring-red-100');
	}

	function clearError(input, errorNode) {
		errorNode.textContent = '';
		errorNode.classList.add('hidden');
		input.setAttribute('aria-invalid', 'false');
		input.classList.remove('border-red-500', 'focus:border-red-500', 'focus:ring-red-100');
	}

	function validateEmail() {
		const value = emailInput.value.trim();

		if (!value) {
			showError(emailInput, emailError, 'El correo electrónico es obligatorio.');
			return false;
		}

		if (!emailInput.checkValidity()) {
			showError(emailInput, emailError, 'Ingresa un correo electrónico válido.');
			return false;
		}

		clearError(emailInput, emailError);
		return true;
	}

	function validatePassword() {
		const value = passwordInput.value.trim();

		if (!value) {
			showError(passwordInput, passwordError, 'La contraseña es obligatoria.');
			return false;
		}

		if (value.length < 8) {
			showError(passwordInput, passwordError, 'La contraseña debe tener mínimo 8 caracteres.');
			return false;
		}

		clearError(passwordInput, passwordError);
		return true;
	}

	function hideSuccessMessage() {
		successMessage.classList.add('hidden');

		if (redirectTimer) {
			clearTimeout(redirectTimer);
			redirectTimer = null;
		}
	}

	emailInput.addEventListener('input', validateEmail);
	passwordInput.addEventListener('input', validatePassword);

	emailInput.addEventListener('input', hideSuccessMessage);
	passwordInput.addEventListener('input', hideSuccessMessage);

	form.addEventListener('submit', (event) => {
		const isEmailValid = validateEmail();
		const isPasswordValid = validatePassword();

		if (!isEmailValid || !isPasswordValid) {
			event.preventDefault();
			hideSuccessMessage();
			return;
		}

		event.preventDefault();
		successMessage.classList.remove('hidden');
		form.reset();

		redirectTimer = setTimeout(() => {
			successMessage.classList.add('hidden');
			window.location.href = './index.html';
		}, REDIRECT_DELAY_MS);
	});
}