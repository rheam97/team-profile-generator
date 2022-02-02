const Intern = require('../lib/Intern')

test('creates intern object', ()=> {
    const intern = new Intern('Rhea', 85, 'rheam97@gmail.com', 'GWU')
    expect(intern.school).toEqual(expect.any(String))
})

test('get school', ()=> {
    const intern = new Intern('Rhea', 85, 'rheam97@gmail.com', 'GWU')
    expect(intern.getSchool()).toEqual(expect.any(String))
})

test('get role', ()=> {
    const intern = new Intern('Rhea', 85, 'rheam97@gmail.com', 'GWU')
    expect(intern.getRole()).toEqual('Intern')
})