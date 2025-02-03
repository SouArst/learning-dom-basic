function register (ev){
  console.log(ev)
  const sectonElement = ev.currentTarget.parentNode
  const username = sectonElement.children.username.value
  const password = sectonElement.children.password.value
  const passwordConfirm = sectonElement.children.passwordConfirm.value

  if (password === passwordConfirm){
    alert ("User " +username+ "successfully registered")
  } else {
    alert ("Passwords don't match")
  }
}

const button = document.getElementById('register-button')

button.addEventListener('click', register)