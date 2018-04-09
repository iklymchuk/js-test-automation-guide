var dream = require('dreamjs');

dream.schema('User', {
	id: 'incrementalId',
	name: 'name',
	age: 'age'
});

dream.customType('incrementalId', function(helper){
	return helper.previousItem ? helper.previousItem.id+1 : 1;
});

dream
	.useSchema('User')
	.generateRnd(5)
	.output(function(err, result){
		console.log(result);
	});