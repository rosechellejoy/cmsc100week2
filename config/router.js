var student = require('./../controllers/student');
var teacher = require('./../controllers/teacher');

module.exports= function(router){	
	router.route('/students')
		.get(student.find);
		
	return router;
};

module.exports= function(router){	
	router.route('/teachers')
		.get(teacher.view)
		.post(teacher.add)
		.put(teacher.update)
		.delete(teacher.del);
	return router;
};
