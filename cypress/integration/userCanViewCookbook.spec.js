describe('User can view cookbook', () => {

  it('Successfully', () => {
    cy.route({
      method: 'GET',
      url: 'http://localhost:3000/v1/recipes/1/favorite',
      response: 'fixture:favorites.json',
      status: 200
    })
  
    cy.get('#cookbook')
      .click({ force: true })
    cy.get('[name="single-recipe"]').within(() => {
      cy.get('.header').should('contain', 'Quiche')
        .get('[name="recipe-ingredients"]').should('contain', 'Eggs')
        .get('[name="recipe-directions"]').should('contain', 'Stir the mixture')
    })
  })
})