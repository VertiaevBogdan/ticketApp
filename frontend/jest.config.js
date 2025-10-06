export default {
  testEnvironment: "jsdom", // чтобы симулировать браузер
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"], // подключаем jest-dom
  moduleFileExtensions: ["js", "jsx"],
  transform: {
    "^.+\\.(js|jsx)$": "babel-jest", // чтобы работали импорты JSX
  },
};
