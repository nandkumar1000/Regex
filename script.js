const formvalidation = () => {
  const username = document.getElementById('username').value;
  const Mobile_number = document.getElementById('Mobile_number').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const confirm_password = document.getElementById('confirm_password').value;

  // regular expression for username, email, password.
  const UserRegex = /^[A-Za-z]\w{2,}$/;
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const MobileRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
  const passRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$/;

  if (!username || !Mobile_number || !email || !password || !confirm_password) {
    alert('All Fields is manadatory');
    return false;
  }

  if (!username.match(UserRegex)) {
    alert('Enter a valid username (at least 3 characters, only letters and numbers).');
    return false;
  }

  if (!Mobile_number.match(MobileRegex)) {
    alert('Enter a valid mobile number');
    return false;
  }

  if (!email.match(emailRegex)) {
    alert('Enter a valid email');
    return false;
  }

  if (!password.match(passRegex)) {
    alert('Enter a valid password (8-12 characters, include uppercase, lowercase, numbers, and special characters)');
    return false;
  }

  if (password !== confirm_password) {
    alert('Password and confirm password should match');
    return false;
  }

  return true;
}
