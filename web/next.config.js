const { execSync } = require("child_process");

// let commitHash;

// try {
//   commitHash = execSync("git rev-parse --short HEAD").toString().trim();
// } catch {
//   commitHash = process.env.VERCEL_GIT_COMMIT_SHA;
// }

module.exports = {
  // env: {
  //   NEXT_PUBLIC_COMMIT_HASH: process.env.VERCEL_GIT_COMMIT_SHA,
  // },
};
