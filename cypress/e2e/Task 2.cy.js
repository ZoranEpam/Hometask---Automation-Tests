import Webshop, { Password } from "./Webshop";

function generateRandomEmail() {
    const randomString = Math.random().toString(36).substring(2, 15);
    return `${randomString}@example.com`;
  }
  
function generateRandomString(length) {
    return Math.random().toString(36).substring(2, 2 + length);
  }
  

describe('Task2', () => {

    const demowebshop = 'https://demowebshop.tricentis.com/';

    const PASSWORD = 'TheMightyPassOver9000'; 
    const EMAIL = 'MightyPotato@mashed.com';
    
    beforeEach ('Visit Demo Webshop', ()=> {
        cy.visit(demowebshop)
        cy.viewport(1280, 720)
    }) 

    it('Verify that allows registration of a user', () => {
    const randomName = generateRandomString(10);
    const randomEmail = generateRandomEmail();

        Webshop.Register().click()
        Webshop.FirstName().type(randomName)
        Webshop.LastName().type(randomName)
        Webshop.Email().type(randomEmail)
        Webshop.Password().type(PASSWORD)
        Webshop.ConfirmPass().type(PASSWORD)
        Webshop.RegisterSubmit().click()
        Webshop.RegistrationConfirm().should('contain','Your registration completed')
    })

    it('Verify that allows login of a User', () => {
        Webshop.Login().click()
        Webshop.Email().clear().type(EMAIL)
        Webshop.Password().clear().type(PASSWORD)
        Webshop.LoginCTA().click()
        Webshop.LoggedEmail().should('have.text',EMAIL)
    })

    it('Verify that Computers group has 3 sub-groups with correct names', () => {
        Webshop.Computers().click()
        Webshop.ComputersSubitems().should('have.length', 3)
        Webshop.ComputersSubitems().eq(0).should('contain', 'Desktops')
        Webshop.ComputersSubitems().eq(1).should('contain', 'Notebooks')
        Webshop.ComputersSubitems().eq(2).should('contain', 'Accessories')
    })

    it('Verify that allows sorting items (different options)', () => {
        Webshop.Computers().click()
        Webshop.Desktops().click()
        Webshop.Sorting().within(() => {
            cy.get('option').eq(0).should('have.text', 'Position');
            cy.get('option').eq(1).should('have.text', 'Name: A to Z');
            cy.get('option').eq(2).should('have.text', 'Name: Z to A');
            cy.get('option').eq(3).should('have.text', 'Price: Low to High');
            cy.get('option').eq(4).should('have.text', 'Price: High to Low');
            cy.get('option').eq(5).should('have.text', 'Created on');
          });
        Webshop.Sorting().select('Price: Low to High')
        Webshop.Sorting().find('option:selected').should('have.text', 'Price: Low to High')
        Webshop.Sorting().select('Created on')
        Webshop.Sorting().find('option:selected').should('have.text', 'Created on')

    })

    it('Verify that allows changing number of items on page', () => {
        Webshop.Books().click()
        Webshop.ItemsPerPage().select('4')
        Webshop.ItemsPerPage().find('option:selected').should('have.text', '4')
    })

    /*it('Verify that allows adding an item to the Wishlist', () => {
        
    })*/
    
    it('Verify that allows adding an item to the cart', () => {
        Webshop.Login().click()
        Webshop.Email().clear().type(EMAIL)
        Webshop.Password().clear().type(PASSWORD)
        Webshop.LoginCTA().click()
        Webshop.LoggedEmail().should('have.text',EMAIL)
        Webshop.LapTopAddToCart().click()
        Webshop.NotificationBar().should('be.visible')
    })

    it('Verify that allows removing an item from the cart', () => {
        Webshop.Login().click()
        Webshop.Email().clear().type(EMAIL)
        Webshop.Password().clear().type(PASSWORD)
        Webshop.LoginCTA().click()
        Webshop.LoggedEmail().should('have.text',EMAIL)
        Webshop.ShoppingCart().click()
        Webshop.RemoveCheckBox().check()
        Webshop.UpdateShoppingCart().click()
        Webshop.EmptyCartMessage().should('be.visible')
        Webshop.EmptyCartMessage().should('contain', 'Your Shopping Cart is empty! ')     
    })

    it.only('Verify that allows checkout an item', () => {
        Webshop.Login().click()
        Webshop.Email().clear().type(EMAIL)
        Webshop.Password().clear().type(PASSWORD)
        Webshop.LoginCTA().click()
        Webshop.LoggedEmail().should('have.text',EMAIL)
        Webshop.LapTopAddToCart().click()
        Webshop.ShoppingCart().click()
        Webshop.TermsOfService().check()
        Webshop.Checkout().click()
        Webshop.Continue().click()
        Webshop.Continue2().click()
        Webshop.Continue3().click()
        Webshop.Continue4().click()
        Webshop.Continue5().click()
        Webshop.Confirm().click()
        Webshop.ConfirmationMessage().should('be.visible')
        Webshop.ConfirmationMessage().should('contain', 'Your order has been successfully processed!')          
    })

})