import Epam from "./Epam";

describe('Task1', () => {

const baseUrl = Cypress.config('baseUrl');

beforeEach ('Visit Epam website', ()=> {
    cy.visit('/')
    cy.viewport(1280, 720)
})

    it('Check if the title is correct', () => {
        cy.title().should('eq','EPAM | Software Engineering & Product Development Services')
    })

    

    it('Check the ability to switch Light / Dark mode', () => {
        Epam.HeaderStrip().should('have.css', '--autofill-background-color', '#191919')
        Epam.ThemeSwitcher().eq(1).click()
        Epam.HeaderStrip().should('have.css', '--autofill-background-color', '#f3f3f3')
    })

   /* it('Check that allow to change language to UA', () => {
        Epam.LanguageSelector().eq(1).click()
        Epam.UkrainianLanguage().eq(1).click()
        cy.url().should('eq', 'https://careers.epam.ua/')

    This test will fail in Cypress becasue domain needs to be chagned and that is not supported.
    }) */

    it('Check the policies list', () => {
        cy.scrollTo('bottom')
        Epam.Policies().find('li').contains('INVESTORS')
        Epam.Policies().find('li').contains('COOKIE POLICY')
        Epam.Policies().find('li').contains('OPEN SOURCE')
        Epam.Policies().find('li').contains('APPLICANT PRIVACY NOTICE')
        Epam.Policies().find('li').contains('PRIVACY POLICY')
        Epam.Policies().find('li').contains('WEB ACCESSIBILITY')
    })

    it('Check that allow to switch location list by region', () => {
        Epam.Locations().scrollIntoView({offset: { top: 1600}})
        Epam.Americas().click()
        Epam.Americas().should('have.attr', 'aria-selected', 'true')
        Epam.EMEA().click()
        Epam.EMEA().should('have.attr', 'aria-selected', 'true')
        Epam.APAC().click()
        Epam.APAC().should('have.attr', 'aria-selected', 'true')
    })

    it('Check the search function', () => {
        Epam.Search().eq(0).click()
        Epam.SearchInput().type("AI", {force: true})
        Epam.Find().click({force: true})
        Epam.SearchResults().contains('results for "AI"')
    })

    it("Check form's fields validation", () => {
        cy.visit('https://www.epam.com/about/who-we-are/contact')
        Epam.Submit().click()
        Epam.FirstName().should('have.attr', 'aria-required', 'true')
        Epam.LastName().should('have.attr', 'aria-required', 'true')
        Epam.Email().should('have.attr', 'aria-required', 'true')
        Epam.Phone().should('have.attr', 'aria-required', 'true')
        Epam.HearAbout().should('have.attr', 'aria-invalid', 'true')
        Epam.ConsentCheckbox().should('have.attr', 'aria-required', 'true')
    })

    it("Check the Company logo on the header lead to the main page", () => {
        cy.visit('https://www.epam.com/about')
        Epam.Logo().click()
        cy.url().should('eq', 'https://www.epam.com/')
    })

    it("Check that allows to download report", () => {
        if (Cypress.browser.family === 'chromium') {
        cy.task('clearDownloads')
        cy.visit('https://www.epam.com/about')
        Epam.Download().click()
        cy.task('findDownloadedFile', { filename: 'EPAM_Corporate_Overview_Q4_EOY.pdf', extension: 'pdf' }).then((fileExists) => {
            expect(fileExists).to.be.true;  
          });
        }
        else {
            cy.visit('https://www.epam.com/about')
            Epam.Download().should('have.attr', 'href', 'https://www.epam.com/content/dam/epam/free_library/EPAM_Corporate_Overview_Q4_EOY.pdf')
            Epam.Download().click()
        }
    })


})