const inputs = document.querySelectorAll('.controls input');

function inputUpdate() {
	const suffix = this.dataset.sizing || '';
	document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}

inputs.forEach(input => input.addEventListener('change', inputUpdate));

inputs.forEach(input => input.addEventListener('mousemvoe', inputUpdate));