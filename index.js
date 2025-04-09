aws_amplify.Auth.currentAuthenticatedUser()
  .then(user => {
    loadFeed(); // Only runs if signed in
  })
  .catch(() => {
    window.location.href = "login.html";
  });
