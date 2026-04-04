const { execSync } = require("child_process");

const commitHash = execSync("git rev-parse --short HEAD").toString().trim();

module.exports = {
  env: {
    NEXT_PUBLIC_COMMIT_HASH: commitHash,
  },
};
