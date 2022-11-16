/// <reference types="cypress"/>
import EnderecoPage from '../support/page-objects/endereco.page'
const dadosEndereco = require('../fixtures/endereco.json')


describe('Funicionalidade Endereços - Faturamento e Entrega', () => {
    beforeEach(() => {
        cy.visit('minha-conta')
        cy.fixture('perfil').then(dados => { 
            cy.login(dados.usuario, dados.senha)
        })
        
    });

    it('Deve fazer cadastro de faturamento com sucesso', () => {
        EnderecoPage.editarEnderecoFaturamento('Flavio', 'Araujo', 'Google', 'Brasil', 'Rua Pauliceia','251', 'Osasco', 'São Paulo','06243240','11973335598', 'otaviocesario@hotmail.com' )
        cy.get('.woocommerce-message').should('contain', 'Endereço alterado com sucesso')


    });

    it.only('Deve fazer cadastro de faturamento com sucesso - usando arquivo de dados', () => {
        EnderecoPage.editarEnderecoFaturamento(
            dadosEndereco [1].nome,
            dadosEndereco [1].sobrenome,
            dadosEndereco [1].empresa,
            dadosEndereco [1].pais,
            dadosEndereco [1].endereco,
            dadosEndereco [1].numero,
            dadosEndereco [1].cidade,
            dadosEndereco [1].estado,
            dadosEndereco [1].cep,
            dadosEndereco [1].telefone,
            dadosEndereco [1].email
            )


        cy.get('.woocommerce-message').should('contain', 'Endereço alterado com sucesso')


    });

});