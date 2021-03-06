module.exports = {
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
  },
  moduleFileExtensions: ["ts", "tsx", "js"],
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$",
  projects: [
    {
      displayName: "core",
      transform: {
        "^.+\\.(ts|tsx)$": "ts-jest",
      },
      moduleFileExtensions: ["ts", "tsx", "js"],
      rootDir: "<rootDir>/packages/manawa-core/",
      testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$",
    },
    {
      displayName: "cli",
      transform: {
        "^.+\\.(ts|tsx)$": "ts-jest",
      },
      moduleFileExtensions: ["ts", "tsx", "js"],
      rootDir: "<rootDir>/packages/manawa-cli/",
      testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$",
    },
  ],
};
