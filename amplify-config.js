// amplify-config.js
window.Amplify = aws_amplify;
window.aws_amplify_config = {
  Auth: {
    region: 'ap-south-1',                // Your region (for example: ap-south-1)
    userPoolId: 'ap-south-1_AWVfn9P3b',     // Your manually created User Pool ID
    userPoolWebClientId: '7do93ckljrsk5s9tbgtc0dv553', // Your App Client ID (without secret)
    mandatorySignIn: true,               // Force sign in for protected pages
  },
  Storage: {
    AWSS3: {
      bucket: 'profile-pic-fbclone',        // Your S3 Bucket name (for profile and feed images)
      region: 'ap-south-1',              // The same region as above
    },
  },
};
