
const Engineer = require('../lib/Engineer')

test('creates engineer object', ()=> {
    const engineer = new Engineer('Rhea', 85, 'rheam97@gmail.com', 'rheam97')
    expect(engineer.gitHub).toEqual(expect.any(String))
})

test('get GitHub', ()=> {
    const engineer = new Engineer('Rhea', 85, 'rheam97@gmail.com', 'rheam97')
    expect(engineer.getGitHub()).toEqual(expect.any(String))
})

test('get role', ()=> {
    const engineer = new Engineer('Rhea', 85, 'rheam97@gmail.com', 'rheam97')
    expect(engineer.getRole()).toEqual('Engineer')
})