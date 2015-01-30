var express = require('express');
var router = express.Router();

/*
 * GET userlist.
*/
router.get('/observations', function(req, res) {
    var db = req.db;
    db.collection('observations').find().toArray(function (err, items) {
        res.json(items);
    });
});
 

/*
 * POST to adduser.
 */
router.post('/addobservation', function(req, res) {
    var db = req.db;
    db.collection('observations').insert(req.body, function(err, result){
        res.send(
            (err === null) ? { msg: '' } : { msg: err }
        );
    });
});

/*
 * POST to adduser.
 */
router.post('/updatecomment/:id', function(req, res) {
    var db = req.db;
	var observationIdToUpdate = req.params.id;
	var newComment = req.body.comment;
	console.log('update ' + observationIdToUpdate + ' with comment ' + newComment);
	
	//var obj = db.collection('observations').findById(observationIdToUpdate);
	console.log('found');
	
	 db.collection('observations').findById(req.params.id, function(err, result){
		//if (e) {
		//	return next(err)
		//};
		result.comment=newComment;
		
		//todo: save it
		
		
		//result.comment = newComment;		
		res.send(
            (err === null) ? { msg: '' } : { msg: err }
        );
  });
	
    //db.collection('observations').update(req.body, function(err, result){
    //    res.send(
     //       (err === null) ? { msg: '' } : { msg: err }
    //    );
    //});
});


/*
 * DELETE to deleteuser.
router.delete('/deleteuser/:id', function(req, res) {
    var db = req.db;
    var userToDelete = req.params.id;
    db.collection('userlist').removeById(userToDelete, function(err, result) {
        res.send((result === 1) ? { msg: '' } : { msg:'error: ' + err });
    });
});

 */


module.exports = router;
