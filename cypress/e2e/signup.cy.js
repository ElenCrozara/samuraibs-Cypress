//após baixar é necessário importar para o projeto
import { faker } from '@faker-js/faker'

describe('cadastro', function () {

    context('quando o usuário é novato', function () {
        const name = 'Elen Crozara'
        const email = faker.internet.email() // fazendo email fake
        const password = 'Paisetabranca00'

        it('deve cadastrar com sucesso', function () {
            cy.visit('/signup')
            cy.get('input[placeholder="Nome completo"]').type(name)
            cy.get('input[placeholder="Seu melhor email"]').type(email)
            cy.get('input[placeholder="Sua senha secreta"]').type(password)
            cy.contains('button', 'Cadastrar').click()
            cy.get('.toast')
                .should('be.visible')
                .find('p')
                .should('have.text', 'Agora você se tornou um(a) Samurai, faça seu login para ver seus agendamentos!')
        }),
        it('deve exibir email já cadastrado', function () {
                cy.visit('/signup')
                cy.get('input[placeholder="Nome completo"]').type(name)
                cy.get('input[placeholder="Seu melhor email"]').type(email)
                cy.get('input[placeholder="Sua senha secreta"]').type(password)
                cy.contains('button', 'Cadastrar').click()
                cy.get('.toast')
                    .should('be.visible')
                    .find('p')
                    .should('have.text', 'Email já cadastrado para outro usuário.')
        })
    })
   
    
    // para congelar a msg flutuante (toast) é preciso inserir o wait
    //cy.wait(1000)
    //cy.get('body')
})




