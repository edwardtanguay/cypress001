const url = 'http://localhost:5173';

describe('template spec', () => {
	it('passes', () => {
		cy.visit(url);
	});
});

// first test
describe('Heading text', () => {
	it('contains correct title', () => {
		cy.visit(url);
		cy.get('h1').invoke('text').should('equal', 'Info Site');
	});
});

// unpreferred way to select
// describe('Message box functions correctly', () => {
// 	it('displays the appropriate number of characters typed', () => {
// 		cy.visit(url);
// 		cy.get('span.chars').invoke('text').should('equal', '0');
// 		cy.get('input').type('test');
// 		cy.get('span.chars').invoke('text').should('equal', '4');
// 	});
// });

// preferred way to select: data-cy="chars"
// describe('Message box functions correctly', () => {
// 	it('displays the appropriate number of characters typed', () => {
// 		cy.visit(url);
// 		cy.get('[data-cy="chars"]').invoke('text').should('equal', '0');
// 		cy.get('[data-cy="main-input"]').type('test');
// 		cy.get('[data-cy="chars"]').invoke('text').should('equal', '4');
// 	});
// });

// with aliases
describe('Message box functions correctly', () => {
	it('displays the appropriate number of characters typed', () => {
		cy.visit(url);
		const chars1 = '[data-cy="chars1"]';
		cy.get(chars1).as('chars1');
		cy.get('[data-cy="input1"]').as('input1');
		cy.get('@chars1').invoke('text').should('equal', '0');
		cy.get('@input1').type('test');
		cy.get(chars1).invoke('text').should('equal', '4');
	});
});
