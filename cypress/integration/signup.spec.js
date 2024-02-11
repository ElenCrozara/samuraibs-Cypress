
describe('Validando Barbearia SamuraiBS', function(){

    context('quando o usuário é novato', function() {
        const user = {
            nome: 'Elen Crozara',
            email: 'elen.teste@gmail.com',
            password: '123456'
        }
        it('deve cadastrar com sucesso', function() {
        
            cy.visit('/signup')
            cy.get('input[placeholder="Nome completo"]').type(user.nome)
            cy.get('input[placeholder="Seu melhor email"]').type(user.email)
            cy.get('input[placeholder="Sua senha secreta"]').type(user.password)
            
            cy.intercept('POST', '/users', {
                statusCode: 200
            }).as('postUsers')// vai interceptar a chamada para trocar o status code 400 para 200
        
            cy.contains('button', 'Cadastrar').click()
        
            cy.wait('@postUsers')
        
            cy.get('.toast')
                .should('be.visible')
                .find('p')
                .should('have.text', 'Agora você se tornou um(a) Samurai, faça seu login para ver seus agendamentos!')
            // cy.wait(5000)
            // cy.get('body')
        })
    })

    context('quando email já existe', function() {
        const user = {
            name: 'Adriano Gonçalves',
            email: 'adriano@samuraibs.com',
            password: 'ABC123',
            is_provider: true
        }
        before(function() {
            cy.task('removeUser', user.email)
            .then(function(result) {
                console.log(result)
            })
    
            cy.request(
                'POST', 
                'http://localhost:3333/users', 
                user
            ).then(function(response){
                expect(response.status).to.eq(200)
            })  
        })
        it('deve exibir mensagem no toast', function() {

            cy.visit('/signup')
            
            cy.get('input[placeholder="Nome completo"]').type(user.name)
            cy.get('input[placeholder="Seu melhor email"]').type(user.email)
            cy.get('input[placeholder="Sua senha secreta"]').type(user.password)
    
            cy.contains('button', 'Cadastrar').click()
    
            cy.get('.toast')
                .should('be.visible')
                .find('p')
                .should('have.text', 'Email já cadastrado para outro usuário.')
        })
    })
})

