Allows existing users to access the protected areas of your application.
   The client sends user credentials (username/email and password) to the server.
   The server verifies the credentials against the database.
   If valid, the server generates a JWT containing user information (e.g., user ID, role).
   The server sends the JWT back to the client.
   The client stores the JWT securely (e.g.,  local storage)
   
![Image](https://github.com/user-attachments/assets/15f8ac26-6c81-43cf-aca7-34262674c512)

Enables new users to create accounts.
After successful registration, the server can immediately generate a JWT and log the user in.
Password validation (enforce strong passwords).
Email verification (optional, but recommended).
Duplicate user prevention.


![Image](https://github.com/user-attachments/assets/56a06472-da95-4aa6-97a8-5c7ad508c5ae)

The main landing page of your application.
Access to the home page might be restricted to logged-in users.
The JWT is verified (using middleware) to ensure the user is authenticated.
User-specific content or data can be displayed based on the JWT payload.

![Image](https://github.com/user-attachments/assets/61d8af8e-6724-46a1-861f-a4df70533342)

A navigation component often used in web applications,user profile,reset password and logout

![Image](https://github.com/user-attachments/assets/ea9af53a-1f11-4aef-b2b8-4bb72c363ed0)

Allow users to reset their passwords.
"Forgot Password" link/button.
Form to capture user's identifying information (e.g., username or security questions).
Form to capture the new password.

![Image](https://github.com/user-attachments/assets/ec02e7cd-ce1c-40cd-887a-d6985713681a)

