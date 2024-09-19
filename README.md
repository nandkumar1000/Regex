# 📋 Regex

# ✨ Abstract

This project implements an advanced form validation system 🔐 for capturing user details like username, mobile number, email, and password 📧. Using regular expressions 📜, it ensures that the data entered meets strict validation rules, preventing form submission 🚫 if the criteria aren't met. This enhances user experience and improves data quality 📊.

# 🌟 Features

Username Validation: Validates the username 🆔 to ensure it contains at least 3 characters and consists of letters and numbers only 🔡.
Mobile Number Validation: Verifies that the mobile number 📞 matches a valid pattern, allowing different formats (including country codes) 🌍.
Email Validation: Ensures that the entered email address 📧 follows the standard email format with proper domain validation 📨.
Password Strength Validation: Enforces a password policy 🔑 of 8-12 characters that includes uppercase, lowercase, numbers, and special characters 💪.
Password Match Validation: Confirms that the password 🔑 and confirm password 📝 fields match.


# 🚀 Use Case

This form validation system is ideal for any web application 🌐 where users need to register or log in. It ensures that the input provided during the sign-up process meets strict validation standards ✅, improving both security 🔒 and user data accuracy 📝.

Example Scenario
A user is signing up for an account 🔐 on a platform.
They need to enter their username 🆔, mobile number 📞, email address 📧, and a secure password 🔑.
If any of the fields are incomplete or don’t meet the validation rules ⚠️ (e.g., incorrect email format or weak password), they receive an alert 🔔.

# 🛠️ Technology Stack
HTML: Defines the structure of the form 🏗️.
CSS: Provides styling to make the form visually appealing 🎨.
JavaScript: Implements the validation logic using regular expressions 📜 to ensure correct input formatting.

# 🧩 Code Explanation
The form validation system uses JavaScript to check if the entered data meets the following criteria:

Username: Starts with a letter and has a minimum of 3 characters 🆔.
Mobile Number: Matches a valid phone number pattern 📱.
Email: Follows the email format using the standard regex 📧.
Password: Is strong and contains upper, lower case letters, numbers, and special characters 🔑.
Password Match: Ensures that the password matches the confirm password 📝.

# 🏁 Conclusion
This project ensures valid and secure user input 🔒 during form submission. It improves both the user experience 🎉 and the quality of the data entered 📝, making it an essential part of any web application 🌐.
