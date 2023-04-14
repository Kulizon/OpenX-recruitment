module.exports = {
  preset: "ts-jest",
  transform: {
    "^.+\\.tsx?$": [
      "ts-jest",
      {
        tsconfig: "./tsconfig.json",
      },
    ],
  },
  transformIgnorePatterns: ["<rootDir>/node_modules/"] ,
};
