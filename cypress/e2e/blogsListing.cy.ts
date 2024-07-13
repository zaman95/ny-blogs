// cypress/integration/blogsListing.spec.js
describe('BlogsListing Component', () => {
  beforeEach(() => {
    // Visit the component's URL or mock API calls if necessary
    cy.visit('http://localhost:5173/'); // Replace with your component's URL
  });

  it('displays loader when fetching data', () => {
    // Check if the loader is displayed initially
    cy.get('[data-testid=loader]').should('be.visible');

    // Wait for the loader to disappear (assuming data is fetched quickly in tests)
    cy.wait(2000).then(() => {
      cy.get('[data-testid=loader]').should('not.exist');
    })
  });

  it('displays blogs after data is fetched', () => {
    // Mock the API response
    cy.intercept('GET', 'https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=Oz9EnvGGOtsvvERAi705uINEFFwPbZ2J', { fixture: 'blogs.json' }).as('getBlogs');

    // Check if the blogs are rendered correctly
    cy.wait('@getBlogs').then(() => {
      cy.get('.post').should('have.length.greaterThan', 0); // Assuming .post is the class for each blog post
    });
  });

  it('displays blog detail when a blog is selected', () => {
    // Mock the API response
    cy.intercept('GET', 'https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=Oz9EnvGGOtsvvERAi705uINEFFwPbZ2J', { fixture: 'blogs.json' }).as('getBlogs');

    // Select a blog (assuming the first blog in the list)
    cy.wait('@getBlogs').then(() => {
      cy.get('.post').first().click();
      cy.get('.sidebarTitle').should('contain.text', 'Five Takeaways From');
      cy.get('.postImg').should('be.visible');
      cy.get('.postDesc').should('be.visible');
    });
  });
});
