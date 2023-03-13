const usdValue = document.querySelector('.usd')
const bbValue = document.querySelector('.bb')
const midValue = document.querySelector('.calc__info span')
const message = document.querySelector('.calc__message')

function getRandomArbitrary(min, max) {
	return Math.random() * (max - min) + min;
  }
   
midValue.textContent = getRandomArbitrary(1,1.2).toFixed(2)
  

// inserting a usd value
const usdExchange = () => {
	if (isNaN(usdValue.value) == true && message.classList.contains('calc__message-active') == false) {
		message.classList.add('calc__message-active')
		bbValue.value = '00.00'
	} else if (isNaN(usdValue.value) == false) {
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
		usdValue.value = (bbValue.value / midValue.textContent).toFixed(2)
		message.classList.remove('calc__message-active')
	}
}

usdValue.addEventListener('input', usdExchange)
bbValue.addEventListener('input', bbExchange)
