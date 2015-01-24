Items = new Meteor.Collection('items');
if (Meteor.isClient) {
	Template.add_item.events({
		'click .submit': function() {
			Items.insert({
				item: $('.the_item').val()
			})
		}
	});
}