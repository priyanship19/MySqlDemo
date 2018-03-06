const {con} = require('../Config/Config');

var addStud = ((req,res) => {

   //var sql = "insert into stud(stud_rollno,stud_name,sem,degree) values('"+ req.body.stud_rollno +"','"+ req.body.stud_name +"','"+ req.body.sem +"','"+ req.body.degree +"')"

   var sql=`CALL insertStud(?,?,?,?)`;
    var data=[req.body.stud_rollno,req.body.stud_name,req.body.sem,req.body.degree]

    con.query(sql,(err,result) => {

    if(err){throw err}

    console.log("Successfully Inserted" + result);
    res.send("SuceesFully Inserted");

});
    InsertStud();

})

var getAllStud = ((req,res) => {

  //  var sql = "select * from stud";

    var sql = "CALL getStud()";

    getAllStudProcedure();

    con.query(sql,(err,result) => {

        if(err) {

            throw err;
        }

        console.log("Student Is" + result);
        res.send(result);
    })

})

var updateStud = ((req,res) => {

    var sql = "update stud set stud_rollno='"+ req.body.stud_rollno +"',stud_name='"+ req.body.stud_name +"',sem='"+ req.body.sem +"',degree='"+ req.body.degree +"' where stud_id= "+ req.body.stud_id;
    con.query(sql,(err,result) => {


        if(err){

            throw err
        }

        console.log("SuccessFully Updated Record");
        res.send("Successfully Updated")
    })

})
var deleteStud = ((req,res) => {

    var sql = "delete from stud where stud_id =" + req.params.stud_id ;
    console.log(req.params.stud_id);
    con.query(sql,(err,result) => {

        if(err) {throw err}

        console.log("SuccessFully Deleted" + result);
        res.send("SuccessFully Deleted")
    })


})

var softDelete = ((req,res) => {


    var sql = "update stud set isDelete=1 where stud_id=" + req.params.stud_id;

    con.query(sql,(err,result) =>{
        var sql1 = `CALL getStud()`;
        con.query(sql1,(err1,result1) => {

            if(err1) {throw err1}

            console.log("SuccessFully Soft Deleted" + result1);
            res.send("SuccessFully Soft Deleted")
        })

    })


})


//Store Procedures

var getAllStudProcedure=()=>{

    var sql = "CREATE PROCEDURE getStud() BEGIN SELECT * from stud where isDelete=0; END;"
    con.query(sql,(err,result) => {

        if(err){throw err}

        console.log("successfully created Display procedure");


    });
}

var InsertStud = () => {


    var sql = "CREATE PROCEDURE insertStud(IN stud_rollno varchar(10),IN stud_name varchar(50),IN sem int(10),IN degree varchar(50)) BEGIN insert into stud (stud_rollno,stud_name,sem,degree)values(stud_rollno,stud_name,sem,degree);END;"
    con.query(sql,(err,result) => {

        if(err){throw err}

        console.log("successfully created insert procedure");


    });

}
//Triggers

var AfterStudDelete = () =>{

    var sql = "CREATE TRIGGER studBackUp AFTER DELETE ON stud FOR EACH ROW BEGIN insert into stud_backup values(old.stud_id,old.stud_rollno,old.stud_name,old.sem,old.degree); END ;";
    con.query(sql,(err,result)=>{
        if(err) throw err;
        console.log("Trigger Created");
    })
}

module.exports = {addStud,getAllStud,updateStud,deleteStud,softDelete}