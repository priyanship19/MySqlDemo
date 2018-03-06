const {con} = require('../Config/Config');
var getAllStudSubject = ((req,res) => {

    var sql = "SELECT st.stud_id,st.stud_name,su.subject_name,su.marks FROM stud st ,subject su where st.stud_id = su.stud_id GROUP by st.stud_name ORDER by su.marks";
    var data=[req.body.subject_name,req.body.marks,req.body.stud_id]
    con.query(sql,(err,result) => {

        if(err){throw err}

        console.log("Successfully Subject Displayed" + result);

        res.json(result);

    });

})
module.exports = {getAllStudSubject}


//"SELECT st.stud_id,st.stud_name,su.subject_name,su.marks FROM stud st ,subject su where st.stud_id = su.stud_id AND st.stud_name='Priyanshi'"
//SELECT st.stud_id,st.stud_name,su.subject_name,su.marks FROM stud st ,subject su where st.stud_id = su.stud_id GROUP by st.stud_name
//SELECT st.stud_id,st.stud_name,su.subject_name,su.marks FROM stud st ,subject su where st.stud_id = su.stud_id GROUP by st.stud_name ORDER by su.marks