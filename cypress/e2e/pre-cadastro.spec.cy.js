/// <reference types="cypress"/>
var faker = require('faker-br')

describe('Funcionalidade Pre Cadastro', () => {

    beforeEach(() =>{
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
    })

    it('Deve completar o pre cadastro com sucesso ', () => {
        let emailFaker = faker.internet.email(nomeFaker)
        let nomeFaker = faker.name.firstName() 
        let sobrenomeFaker = faker.name.lastName()

        cy.get('#reg_email').type(emailFaker)
        cy.get('#reg_password').type('teste@teste.com')
        cy.get(':nth-child(4) > .button').click()

        cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()
        cy.get('#account_first_name').type(nomeFaker)
        cy.get('#account_last_name').type(sobrenomeFaker)
        cy.get('.woocommerce-Button').click()

        cy.get('.page-title').should('contain' , 'Minha conta')


        
    });
    
});