
const Manager = require('../lib/Manager')

test('creates a manager object', ()=> {
    const manager = new Manager('Rhea', 85, 'rheam97@gmail.com', 123)
    expect(manager.officeNumber).toEqual(expect.any(Number))
})
test('gets role', ()=> {
    const manager = new Manager('Rhea', 85, 'rheam97@gmail.com', 123)

    expect(manager.getRole()).toEqual('Manager')
})