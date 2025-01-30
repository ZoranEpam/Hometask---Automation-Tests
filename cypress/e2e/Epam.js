class Epam{

    ThemeSwitcher() { 
        return cy.get('.theme-switcher')
    }

    HeaderStrip() {
        return cy.get('.header__inner')
    }

    LanguageSelector() { 
        return cy.get('.location-selector__button')
    }

    UkrainianLanguage() { 
        return cy.get(".location-selector__link[href='https://careers.epam.ua']")
    }

    Investors() { 
        return cy.get('body > div:nth-child(1) > div:nth-child(5) > div:nth-child(4) > div:nth-child(1) > footer:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > ul:nth-child(1) > li:nth-child(1) > a:nth-child(1)')
    }

    CookiePolicy() { 
        return cy.get('body > div:nth-child(1) > div:nth-child(5) > div:nth-child(4) > div:nth-child(1) > footer:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > ul:nth-child(1) > li:nth-child(5) > a:nth-child(1)')
    }

    OpenSource() { 
        return cy.get("ul[class='ul policies-left'] li:nth-child(2) a:nth-child(1)")
    }

    ApplicantPrivacy() { 
        return cy.get('body > div:nth-child(1) > div:nth-child(5) > div:nth-child(4) > div:nth-child(1) > footer:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > ul:nth-child(2) > li:nth-child(1) > a:nth-child(1)')
    }

    PrivacyPolicy() { 
        return cy.get(".fat-links[href='https://privacy.epam.com/core/interaction/showpolicy?type=CommonPrivacyPolicy']")
    }

    WebAccessibility() { 
        return cy.get('body > div:nth-child(1) > div:nth-child(5) > div:nth-child(4) > div:nth-child(1) > footer:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > ul:nth-child(2) > li:nth-child(2) > a:nth-child(1)')
    }

    Policies() { 
        return cy.get('.policies-links-wrapper')
    }

    Locations() {
        return cy.get("div[role='tablist']")
    }

    Americas() {
        return cy.get(".tabs-23__link.js-tabs-link.active")
    }

    EMEA() {
        return cy.get(".tabs-23__link.js-tabs-link[data-item='1']")
    }

    APAC() {
        return cy.get(".tabs-23__link.js-tabs-link[data-item='2']")
    }

    Search() {
        return cy.get('.search-icon.dark-icon.header-search__search-icon')
    }

    SearchInput() {
        return cy.get('#new_form_search')
    }

    Find() {
        return cy.get('body > div:nth-child(1) > div:nth-child(5) > div:nth-child(2) > div:nth-child(1) > header:nth-child(1) > div:nth-child(1) > div:nth-child(1) > ul:nth-child(5) > li:nth-child(3) > div:nth-child(1) > div:nth-child(2) > form:nth-child(1) > div:nth-child(3) > button:nth-child(2) > svg:nth-child(3) > rect:nth-child(1)')
    }

    SearchResults() {
        return cy.get('.search-results__counter')
    }

    Submit() {
        return cy.get("button[type='submit']")
    }

    FirstName() {
        return cy.get("#_content_epam_en_about_who-we-are_contact_jcr_content_content-container_section_section-par_form_constructor_user_first_name")
    }
    
    LastName() {
        return cy.get("#_content_epam_en_about_who-we-are_contact_jcr_content_content-container_section_section-par_form_constructor_user_last_name")
    }

    Email() {
        return cy.get("#_content_epam_en_about_who-we-are_contact_jcr_content_content-container_section_section-par_form_constructor_user_email")
    }

    Phone() {
        return cy.get("#_content_epam_en_about_who-we-are_contact_jcr_content_content-container_section_section-par_form_constructor_user_phone")
    }

    HearAbout() {
        return cy.get("#_content_epam_en_about_who-we-are_contact_jcr_content_content-container_section_section-par_form_constructor > div.layout-box > div > div > div > div > div:nth-child(8) > div.dropdown-list-ui.validation-field > div > span.select2.select2-container.select2-container--default.form-component__field > span.selection > span")
    }

    ConsentCheckbox() {
        return cy.get('[name="gdprConsent"]') 
    }

    Logo() {
        return cy.get('.header__logo.header__logo-light')
    }

    Download() {
        return cy.get(".button-ui-23.btn-focusable[href='https://www.epam.com/content/dam/epam/free_library/EPAM_Corporate_Overview_Q4_EOY.pdf']")
    }
    
}

module.exports = new Epam();
