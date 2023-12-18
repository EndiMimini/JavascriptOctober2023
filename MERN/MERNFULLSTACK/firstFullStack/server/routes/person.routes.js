const PersonController = require('../controllers/person.controller');
module.exports = (app) => {
    app.get('/api/people', PersonController.findAllUsers);
    app.post('/api/people', PersonController.createNewUser);
    app.get('/api/person/:id', PersonController.findOneSingleUser);     /* This is new */
    app.put('/api/person/:id', PersonController.updateExistingUser);     /* This is new */
    app.delete('/api/person/:id', PersonController.deleteAnExistingUser);     /* This is new */

}
