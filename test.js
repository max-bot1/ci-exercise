const getGreeting = require('./project');

test('can create a basic greeting', () => {
  expect(getGreeting('Sam')).toBe("Hi Sam");
});

test ('Does this math work?', () => {
    expect(sum).toBe(num1 + num2)
})