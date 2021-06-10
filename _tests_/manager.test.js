const Manager = require('../lib/Manager');
 
test('creates an Manager object', () => {
    const manager = new Manager('Luke', 1, 'LukeSky1@gmail', 1);
    
    expect(manager.officeNumber).toEqual(expect.any(Number));
});

test('gets role of employee', () => {
    const manager = new Manager('Luke', 1, 'LukeSky1@gmail.com');

    expect(manager.getRole()).toEqual("Manager");
}); 