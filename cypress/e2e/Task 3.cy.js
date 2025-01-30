describe('API Tests', () => {

    it('Verify that allows creating a User', () => {
    
        const userData = {
          id: 1,
          username: "mista",
          firstName: "Mighty",
          lastName: "Potato",
          email: "mighty.potato@mista.com",
          password: "verysecurePassword123",
          phone: "555-1234",
          userStatus: 1 
        }
    
        
        cy.request({
          method: 'POST',
          url: 'https://petstore.swagger.io/v2/user',
          body: userData,
          headers: {
            'Content-Type': 'application/json'
          }
        }).then((response) => {
          expect(response.status).to.eq(200);
          expect(response.body).to.include({ message: "1"})
        })
      })

      it('Verify that allows login as a User', () => {
        const username = "mista"
        const password = "verysecurePassword123"
    
        cy.request({
          method: 'GET',
          url: 'https://petstore.swagger.io/v2/user/login',
          qs: {  
            username: username,
            password: password
          }
        }).then((response) => {
          expect(response.status).to.eq(200);
          expect(response.body.message).to.include('logged in user session');
        })
      })

      it('Verify that allows creating the list of Users', () => {
        const users = [
          {
            "id": 0,
            "username": "testuser1",
            "firstName": "Test",
            "lastName": "User1",
            "email": "testuser1@example.com",
            "password": "password123",
            "phone": "123-456-7890",
            "userStatus": 1
          },
          {
            "id": 1,
            "username": "testuser2",
            "firstName": "Test",
            "lastName": "User2",
            "email": "testuser2@example.com",
            "password": "password123",
            "phone": "123-456-7891",
            "userStatus": 1
          }
        ];
    
        cy.request({
          method: 'POST',
          url: 'https://petstore.swagger.io/v2/user/createWithArray',
          body: users,
          headers: {
            'Content-Type': 'application/json'
          }
        }).then((response) => {
          expect(response.status).to.eq(200);
          expect(response.body.message).to.eq('ok');
        });
      });

      it('Verify that allows Log out User', () => {
        cy.request({
          method: 'GET',
          url: 'https://petstore.swagger.io/v2/user/logout'
        }).then((response) => {
          expect(response.status).to.eq(200);
          expect(response.body.message).to.eq('ok');
        });
      });

      it('Verify that allows adding a new Pet', () => {
        const newPet = {
          "id": 123,
          "category": {
            "id": 333,
            "name": "blue"
          },
          "name": "Svrca",
          "photoUrls": [
            "veryawesomephoto.jpg"
          ],
          "tags": [
            {
              "id": 444,
              "name": "great"
            }
          ],
          "status": "available"
        };
    
        cy.request({
          method: 'POST',
          url: 'https://petstore.swagger.io/v2/pet',
          body: newPet,
          headers: {
            'Content-Type': 'application/json'
          }
        }).then((response) => {
          expect(response.status).to.eq(200);
          expect(response.body).to.have.property('id');
          expect(response.body.name).to.eq('Svrca');
          expect(response.body.status).to.eq('available');
          expect(response.body.category.name).to.eq('blue');
          expect(response.body.photoUrls[0]).to.eq('veryawesomephoto.jpg');
          expect(response.body.tags[0].name).to.eq('great');
        });
      });

      it("Verify that allows updating Pet’s image", () => {
        const updatedPet = {
        "id": 123,
          "category": {
            "id": 333,
            "name": "blue"
          },
          "name": "Svrca",
          "photoUrls": [
            "thebestphoto.jpg"
          ],
          "tags": [
            {
              "id": 444,
              "name": "great"
            }
          ],
          "status": "available"
        };
    
        cy.request({
          method: 'PUT',
          url: 'https://petstore.swagger.io/v2/pet',
          body: updatedPet,
          headers: {
            'Content-Type': 'application/json'
          }
        }).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.have.property('id');
            expect(response.body.name).to.eq('Svrca');
            expect(response.body.status).to.eq('available');
            expect(response.body.category.name).to.eq('blue');
            expect(response.body.photoUrls[0]).to.eq('thebestphoto.jpg');
            expect(response.body.tags[0].name).to.eq('great');
        });
      });

      it("Verify that allows updating Pet’s name and status", () => {
        const updatedPet = {
        "id": 123,
          "category": {
            "id": 333,
            "name": "blue"
          },
          "name": "Mrvica",
          "photoUrls": [
            "thebestphoto.jpg"
          ],
          "tags": [
            {
              "id": 444,
              "name": "great"
            }
          ],
          "status": "awesome"
        };
    
        cy.request({
          method: 'PUT',
          url: 'https://petstore.swagger.io/v2/pet',
          body: updatedPet,
          headers: {
            'Content-Type': 'application/json'
          }
        }).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.have.property('id');
            expect(response.body.name).to.eq('Mrvica');
            expect(response.body.status).to.eq('awesome');
            expect(response.body.category.name).to.eq('blue');
            expect(response.body.photoUrls[0]).to.eq('thebestphoto.jpg');
            expect(response.body.tags[0].name).to.eq('great');
        });
      });
      
      it('Verify that allows deleting Pet', () => {
        const petId = 123;
    
        cy.request({
          method: 'DELETE',
          url: `https://petstore.swagger.io/v2/pet/${petId}`,
          
        }).then((response) => {
          expect(response.status).to.eq(200);
          expect(response.body.message).to.eq('123');
        });
      });
    })