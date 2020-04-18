const ModuleAMock = require('../__mocks__/moduleA');
const ModuleA = require('../moduleA.js')
const TestCase = require('../__testCase__/moduleA')

describe ('moduleA', () => {

  beforeEach(() => {
    jest.restoreAllMocks();
  });

  const mock = (testCase) => {
    ModuleAMock.doMock('testMethod', testCase.mock.mockFuncA);
  };

  describe('[method] target funcXxx', () => {
    it ('should be succeeded normal sequence', async () => {
      const testCase = TestCase.funcXxxNormalSequence;
      mock(testCase);

      const result = await ModuleA.hello(testCase.args.arg1, testCase.args.arg2);
      testCase.expects(result);
    })
  })
})
