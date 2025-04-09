// aws-exports.js
window.awsconfig = {
    Auth: {
      region: "ap-south-1",
      userPoolId: "ap-south-1_AWVfn9P3b",
      userPoolWebClientId: "7do93ckljrsk5s9tbgtc0dv553",
      mandatorySignIn: true,
    },
    Storage: {
      AWSS3: {
        bucket: "profile-pic-fbclone",
        region: "ap-south-1",
      }
    }
  };
  