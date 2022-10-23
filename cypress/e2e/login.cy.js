import dashPage from '../support/pages/dash'
import loginPage from '../support/pages/login'
describe('login', function () {

    context('quando o usuário é muito bom', function () {
        const user = {
            name: 'Robson Jassa 2',
            email: 'jassa2@samuraibs.com',
            password: 'xpto1234'
        }

        it('deve logar com sucesso', function () {
            loginPage.go()
            loginPage.form(user)
            loginPage.submit()

            //dashPage.header.userLoggedIn(user.name)

        })
    })

    context('quando o usuário é bom mas a senha esta incorreta', function(){

        const user = {
            name: 'Adriano Gonçalves',
            email: 'adrianopg@gmail.com',
            password: 'pwd123',
            is_provider: true
        }

        it ('deve notificar erro de credencias', function(){

            loginPage.go()
            loginPage.form(user)
            loginPage.submit()
        })

    })
})