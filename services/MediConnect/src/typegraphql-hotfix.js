const replace = require("replace-in-file");
const results = replace.sync({
    files: "prisma/generated/type-graphql/**/*.ts",
    processor: (input) => {
        return input.replace(/isAbstract: true/g, "")
    },
    countMatches: true,
  });

  console.log(results)