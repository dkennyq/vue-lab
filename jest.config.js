module.exports = {
    moduleFileExtensions: ['js', 'jsx', 'json', 'vue', 'ts', 'tsx'],
    transform: {
      '^.+\\.vue$': 'vue-jest',
      '^.+\\.js$': 'babel-jest',
      '^.+\\.tsx$': 'ts-jest'
    },
    testMatch: ['**/tests/**/*.spec.js'],
    testEnvironmentOptions: { url: 'http://localhost/' },
    setupFilesAfterEnv: ['./jest.setup.js'],
    moduleNameMapper:{
        '^@components/(.*)$': '<rootDir>/src/components/$1',
        '^@views/(.*)$': '<rootDir>/src/views/$1',
        '^@router/(.*)$': '<rootDir>/src/router/$1',
        '^@store/(.*)$': '<rootDir>/src/store/$1',
        '^@assets/(.*)$': '<rootDir>/src/assets/$1',
        '^@utils/(.*)$': '<rootDir>/src/utils/$1',
        '^@tests/(.*)$': '<rootDir>/tests/$1'
    },
    transformIgnorePatterns: ['/node_modules/']
  };
  