if (Meteor.isClient) {
  // counter starts at 0
  Session.setDefault('counter', 0);
  Session.setDefault('counter1', 0);
  Session.setDefault('counter2', 0);
  Session.setDefault('is_rone', '');
  Session.setDefault('is_rtwo', '');



  Template.tel.helpers({
    is_rOne: function () {
      return Session.get('is_rOne');
    },
    is_rTwo: function(){
       return Session.get('is_rTwo');
    }
  
  });


 Template.tel.events({
    'click .recylingBins': function () {
     console.log("tel recylingBins");
      alert('bins');
      
    },

    'click .totes': function () {
     console.log("tel totes");
      alert('totes');
    },

    'click .noodles': function () {
     console.log("tel noodles");
      alert('noodles');
    },

    'click .stack': function () {
     console.log("tel stack");
      alert('stack');
    },

    'click .set': function(){
      console.log("tel set");
      alert('set');
    },

    'click .ground1': function(){
      console.log("tel ground1");
      alert('ground')
    },

    'click .human1': function(){
      console.log("tel human1");
      alert('human');
    },

    'click .ground2': function(){
      console.log("tel ground2");
      alert('ground')
    },

    'click .human2': function(){
      console.log("tel human2");
      alert('human');
    },

    'click .set': function(){
      console.log("tel set");
      alert('set');
    },

    'click .ground1': function(){
      console.log("tel ground1");
      alert('ground')
    },
    
    
    'click .i': function(){
      console.log("tel set");
      Session.set('iCount', Session.get('iCount') + 1);
      alert('increase by 1');
    },

    'click .d': function(){
      console.log("tel ground1");
      alert('decrease by 1')
    },
    'click #r1' : function(e) {
        e.preventDefault();
        console.log('YES');
        alert("YES");
        var clickedButton = e.currentTarget;
        console.log('Check clickedButton'+ $(clickedButton).val() );
        Session.set('is_rone','checked');
         Session.set('is_rtwo','');
       
    },
    'click #r2' : function(e) {
        e.preventDefault();
      
        console.log('NO');
        alert("NO");
        var clickedButton = e.currentTarget;
        console.log('checked '+ $(clickedButton).val() );
        Session.set('is_rtwo','checked');
         Session.set('is_rone','');
         console.log('$$$$ '+Session.get('is_rone'));
         console.log('$$$$ '+Session.get('is_rtwo'));
        
    },
    'click #r3' : function(e) {
        e.preventDefault();
        console.log('YES');
        alert("YES");
        var clickedButton = e.currentTarget;
        console.log('Check clickedButton'+ $(clickedButton).val() );
        Session.set('is_rThree','checked');
         Session.set('is_rThree','');
       
    },
    'click #r4' : function(e) {
        e.preventDefault();
      
        console.log('NO');
        alert("NO");
        var clickedButton = e.currentTarget;
        console.log('checked '+ $(clickedButton).val() );
         Session.set('is_rFour','checked');
         Session.set('is_rFour','');
         console.log('$$$$ '+Session.get('is_rone'));
         console.log('$$$$ '+Session.get('is_rtwo'));
        
    },
    'click #r5' : function(e) {
        e.preventDefault();
        console.log('YES');
        alert("YES");
        var clickedButton = e.currentTarget;
        console.log('Check clickedButton'+ $(clickedButton).val() );
        Session.set('is_rFive','checked');
         Session.set('is_rFive','');
       
    },
    'click #r6' : function(e) {
        e.preventDefault();
      
        console.log('NO');
        alert("NO");
        var clickedButton = e.currentTarget;
        console.log('checked '+ $(clickedButton).val() );
        Session.set('is_rtwo','checked');
         Session.set('is_rone','');
         console.log('$$$$ '+Session.get('is_rone'));
         console.log('$$$$ '+Session.get('is_rtwo'));
        
    },
    'click .pltfm' : function(e) {
        e.preventDefault();
        var clickedButton = e.currentTarget;
        console.log('xxxxxxxxx----->>>>> '+ $(clickedButton).val() );
    },
    'click .tip' : function(e) {
        e.preventDefault();
        var clickedButton = e.currentTarget;
        console.log('xxxxxxxxx----->>>>> '+ $(clickedButton).val() );
    }




});



    

}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}

