const API_URL = 'https://api.nbp.pl/api/exchangerates/rates/a/usd/'
const usdValue = document.querySelector('.usd')
const plnValue = document.querySelector('.pln')
const midValue = document.querySelector('.calc__info span')
const message = document.querySelector('.calc__message')

fetch(API_URL)
	.then(res => res.json())
	.then(data => (midValue.textContent = data.rates[0].mid.toFixed(2)))
	.catch(err => console.error(err))

// inserting a usd value
const usdExchange = () => {
	if (isNaN(usdValue.value) == true && message.classList.contains('calc__message-active') == false) {
		message.classList.add('calc__message-active')
		plnValue.value = '00.00'
	} else if (isNaN(usdValue.value) == false) {
		plnValue.value = (usdValue.value * midValue.textContent).toFixed(2)
		message.classList.remove('calc__message-active')
	}
}

// inserting a pln value
const plnExchange = () => {
	if (isNaN(plnValue.value) == true && message.classList.contains('calc__message-active') == false) {
		message.classList.add('calc__message-active')
		usdValue.value = '00.00'
	} else if (isNaN(plnValue.value) == false) {
		usdValue.value = (plnValue.value / midValue.textContent).toFixed(2)
		message.classList.remove('calc__message-active')
	}
}

usdValue.addEventListener('input', usdExchange)
plnValue.addEventListener('input', plnExchange)
