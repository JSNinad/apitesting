
//     it('CREATE A BOARD', () => {
//         // cy.log("hello cypress")
//         cy.request({
//             method:"POST",
//             url:baseURL+"/1/boards/",
//             qs:{
//                 name:"First board",
//                 key:apikey,
//                 token:apiToken,

//             }
//         }).then(response=>{
//             const res=JSON.parse(JSON.stringify(response.body));
//             id=res.id;

//             expect(response.status).to.eql(200);
//         })
//          it('GET BOARD', () => {
//         cy.request({
//             method: "GET",
//             url: baseURL+/1/boards/id,
//             qs: {
//                 key: apikey,
//                 token: apiToken,
//             }
//         }).then(response => {
//             const res = JSON.parse(JSON.stringify(response.body));
//             expect(response.status).to.eql(200);
//             expect(res.id).to.eql(id);
//             expect(res.name).to.eql("First board");
//         });
//     });
// });


describe('collection of test case', () => {
    const baseURL = "https://api.trello.com";
    const apiKey = "";
    const apiToken = "
    it('Create a Board', () => {
        cy.request({
            method:"POST",
            url:baseURL+"/1/boards",
            qs:{
                name:"First Board",
                key:apiKey,
                token:apiToken
            }
        }).then(response=>{
            const res = JSON.parse(JSON.stringify(response.body));
            id = res.id;
            cy.log(res);
        })
        cy.log("Board Created")
    });

    it('Getting Detials of Boards', () => {
        cy.request({
            method:"GET",
            url:baseURL+"/1/boards/"+id,
            qs:{
                name:"Get Request",
                key:apiKey,
                token:apiToken
            }
        }).then(response=>{
            const res = JSON.parse(JSON.stringify(response.body));
            cy.log(res);
        })
        cy.log("Your Board is Found")
    });

    it('Updating Detials of Boards', () => {
        cy.request({
            method:"PUT",
            url:baseURL+"/1/boards/"+id,
            qs:{
                name:"Updated Board",
                key:apiKey,
                token:apiToken
            }
        }).then(response=>{
            const res = JSON.parse(JSON.stringify(response.body));
            cy.log(res);
        })
        cy.log("Your Board is Updated")
    });
    
    it('Deleting the Most Recent Board', () => {
        cy.request({
            method:"DELETE",
            url:baseURL+"/1/boards/"+id,
            qs:{
                name:"Deleting a Board",
                key:apiKey,
                token:apiToken
            }
        }).then(response=>{
            const res = JSON.parse(JSON.stringify(response.body));
            cy.log(res);
        })
        cy.log("Board Deleted")
    });
});
