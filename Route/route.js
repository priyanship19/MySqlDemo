
exports.route = (app) =>{
    var {addStud,getAllStud,updateStud,deleteStud,softDelete} = require('../Controllers/studController')
    var {getAllStudSubject} = require('../Controllers/SubjectController')
 app.post('/Student',addStud);
   app.get('/Student',getAllStud);
   app.put('/Student',updateStud);
   app.delete('/Student/:stud_id',deleteStud)
    app.delete('/SoftDelete/:stud_id',softDelete)
    app.get('/Subject',getAllStudSubject)

}