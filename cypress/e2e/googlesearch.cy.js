describe('Google search test', ()=>{

it('search test', ()=>{

    cy.visit('https://www.jbhifi.com.au/')
    
    cy.get('#quicksearch-search-box').type('samsung')
    cy.get('.submit-search').click()


})
    
})