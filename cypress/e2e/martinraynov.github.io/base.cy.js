/// <reference types="cypress" />

describe('martinraynov blog app', () => {
  beforeEach(() => {
    cy.visit('https://martinraynov.github.io/')
  })

  it('Check logo', () => {
    cy.get('.about .cover-author-image')
      .find('img')
      .should('be.visible')
  })

  it('Check User Data', () => {
    cy.get('.about .author-name')
      .contains('Martin RAYNOV')
      cy.get('.about p')
      .contains('Technical Architect')
  })

  it('Check Contact', () => {
    cy.get('.contact ul>li')
      .should('have.length', 3)
  })

  it('Check Articles', () => {
    cy.get('.content-box>article')
      .should('have.length.greaterThan', 1)
  })

})
