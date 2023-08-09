const inputEl = document.querySelector("#password")
const passwordLengthEl = document.querySelector("#password-length")
const btnCopy1 = document.querySelector("#copy_1")
const btnCopy2 = document.querySelector("#copy_2")
const btnRenew = document.querySelector("#renew")
const barIndicator = document.querySelector("#security-indicator-bar")
const passwordLengthText = document.querySelector("#password-length-text")
const upperCaseCheck = document.querySelector("#uppercase-check")
const symbolCheck = document.querySelector("#symbol-check")
const numberCheck = document.querySelector("#number-check")


let passwordLength = 16

function generatePassword() {
  let chars = "abcdefghjklmnpqrstuvwxyz"

  const upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  const numberChars = "123456789"
  const symbolChars = "?!@&*()[]"

  if (upperCaseCheck.checked) {
    chars += upperCaseChars
  }

  if (symbolCheck.checked) {
    chars += symbolChars
  }

  if (numberCheck.checked){
    chars += numberChars
  }

  let password = ""

  for(let i = 0; i < passwordLength; i++){
    const randomNumber = Math.floor(Math.random() * chars.length)
    password += chars.substring(randomNumber, randomNumber + 1)
  }

  inputEl.value = password
}

passwordLengthEl.addEventListener("input", () => {
  passwordLength = passwordLengthEl.value


  if(passwordLength < 22){
    barIndicator.style.width = "15%"
    barIndicator.classList.add("critical")
    barIndicator.classList.remove("warning")
    barIndicator.classList.remove("safe")
  } else if(passwordLength >= 22 && passwordLength <= 42){
    barIndicator.style.width = "50%"
    barIndicator.classList.add("warning")
    barIndicator.classList.remove("critical")
    barIndicator.classList.remove("safe")
  }else{
    barIndicator.style.width = "95%"
    barIndicator.classList.add("safe")
    barIndicator.classList.remove("critical")
    barIndicator.classList.remove("warning")
  }

  upperCaseCheck.addEventListener("click", (evt) => {
    generatePassword()
  })

  symbolCheck.addEventListener("click", (evt) => {
    generatePassword()
  })

  numberCheck.addEventListener("click", (evt) => {
    generatePassword()
  })



  passwordLengthText.innerHTML = passwordLength
  generatePassword()

})

btnCopy1.addEventListener("click", (evt) => {
  navigator.clipboard.writeText(inputEl.value) // copiar itens do value
})

btnCopy2.addEventListener("click", (evt) => {
  navigator.clipboard.writeText(inputEl.value) // copiar itens do value
})

btnRenew.addEventListener("click", (evt) => {
  generatePassword()
})

