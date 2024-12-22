const usdValue = document.querySelector('.usd')
const bbValue = document.querySelector('.bb')
const midValue = document.querySelector('.calc__info span')
const message = document.querySelector('.calc__message')

function getRandomArbitrary(min, max) {
	return Math.random() * (max - min) + min;
  }
   
// midValue.textContent = getRandomArbitrary(0.9,1.1).toFixed(2)
   midValue.textContent = 0.64516129

// inserting a usd value
const usdExchange = () => {
	if (isNaN(usdValue.value) == true && message.classList.contains('calc__message-active') == false) {
		message.classList.add('calc__message-active')
		bbValue.value = '00.00'
	} else if (isNaN(usdValue.value) == false) {
		// midValue.textContent = getRandomArbitrary(3,6).toFixed(2)
		bbValue.value = (usdValue.value * midValue.textContent).toFixed(2)
		message.classList.remove('calc__message-active')
	}
}

// inserting a BB value
const bbExchange = () => {
	if (isNaN(bbValue.value) == true && message.classList.contains('calc__message-active') == false) {
		message.classList.add('calc__message-active')
		usdValue.value = '00.00'
	} else if (isNaN(bbValue.value) == false) {
		// midValue.textContent = getRandomArbitrary(3,6).toFixed(2)
		usdValue.value = (bbValue.value / midValue.textContent).toFixed(2)
		message.classList.remove('calc__message-active')
	}
}

usdValue.addEventListener('input', usdExchange)
bbValue.addEventListener('input', bbExchange)
