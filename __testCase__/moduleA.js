module.exports = {
    funcXxxNormalSequence: {
      args: {
        arg1: 1,
        arg2: 2
      },
      mock: {
        mockFuncA: (x, y) => {return x + y},
        mockFuncB: () => {return 4}
      },
      expects: (result) => {
        expect(result).toBe(3);
        //expect(result.statusCode).toBe(200)
      }
    }
}

