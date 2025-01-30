class Webshop{
    Register() { 
        return cy.get('.ico-register')
    }

    FirstName() {
        return cy.get('#FirstName')
    }

    LastName() {
        return cy.get('#LastName')
    }

    Email() {
        return cy.get('#Email')
    }

    Password() {
        return cy.get('#Password')
    }

    ConfirmPass() {
        return cy.get('#ConfirmPassword')
    }

    RegisterSubmit() {
        return cy.get('#register-button')
    }

    RegistrationConfirm() {
        return cy.get('.result')
    } 

    Login() {
        return cy.get('.ico-login')
    } 

    LoginCTA() {
        return cy.get("input[value='Log in']")
    }

    LoggedEmail() {
        return cy.get("div[class='header-links'] a[class='account']")
    }

    Computers() {
        return cy.get("div[class='block block-category-navigation'] li:nth-child(2) a:nth-child(1)")
    }

    ComputersExpanded() {
        return cy.get(".active")
    }

    ComputersSubitems() {
        return cy.get('.active > ul > li')
    }

    Desktops() {
        return cy.get("img[title='Show products in category Desktops']")
    }

    Sorting() {
        return cy.get("#products-orderby")
    }

    Books() {
        return cy.get("div[class='block block-category-navigation'] li:nth-child(1) a:nth-child(1)")
    }

    ItemsPerPage() {
        return cy.get("#products-pagesize")
    }

    LapTopAddToCart() {
        return cy.get("body > div:nth-child(4) > div:nth-child(1) > div:nth-child(5) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(4) > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div:nth-child(4) > div:nth-child(2) > input:nth-child(1)")
    }

    NotificationBar() {
        return cy.get("#bar-notification")
    }

    ShoppingCart() {
        return cy.get("a[class='ico-cart'] span[class='cart-label']")
    }

    RemoveCheckBox() {
        return cy.get('[name="removefromcart"]')
    }

    UpdateShoppingCart() {
        return cy.get("input[value='Update shopping cart']")
    }

    EmptyCartMessage() {
        return cy.get(".order-summary-content")
    }

    Checkout() {
        return cy.get("#checkout")
    }

    TermsOfService() {
        return cy.get("#termsofservice")
    }

    Continue() {
        return cy.get("input[onclick='Billing.save()']")
    }

    Continue2() {
        return cy.get("input[onclick='Shipping.save()']")
    }

    Continue3() {
        return cy.get("input[class='button-1 shipping-method-next-step-button']")
    }

    Continue4() {
        return cy.get("input[class='button-1 payment-method-next-step-button']")
    }

    Continue5() {
        return cy.get("input[class='button-1 payment-info-next-step-button']")
    }

    Confirm() {
        return cy.get("input[value='Confirm']")
    }

    ConfirmationMessage() {
        return cy.get("div[class='title'] strong")
    }
}

module.exports = new Webshop();