tele = new Meteor.Collection("teleop");
auto = new Meteor.Collection("autonomous");
pit = new Meteor.Collection("pitScout");

if (Meteor.isClient) {
  // counter starts at 0
  Session.setDefault("counter", 0);

  Template.hello.helpers({
    counter: function () {
      return Session.get("counter");
    }
  });

  Template.hello.events({
    'click button': function () {
      // increment the counter when button is clicked
      Session.set("counter", Session.get("counter") + 1);
    }
  });

  Template.add_item.events({
    'click .submit': function(){
      $tele.insert({
        minipulateRecyclingBins: $('.recycling bins').val(),
        minipulateTotes: $('.totes').val(),
        minipulateNoodles: $('.noodles').val(),
        coopertitionStack: $('.stack').val(),
        coopertitionSet: $('.set').val(),
        collectsTotesFromHuman: $('.human').val(),
        collectsTotesFromGround: $('.ground').val(),
        totePreference: $('.totePreference').val(),
        tipTotes: $('.tipObjects').val(),
        numberStakesKnokedDown: $('.numberStakesKnokedDown').val(),
        maxCrates: $('.maxCrates').val(),
        goOverPlatform: $('.goOverPlatform').val()

      });
    $auto.insert({
        startingConfiguration: $('.startingConfig').val(),
        totalBinsInAutoZone: $('.binsAuto').val(),
        totalTotesInAutoZone: $('.totesAuto').val(),
        totalNoodlesInAutoZone: $('.noodlesAuto').val(),
        stackYellowBins: $('.stackedYellowBins').val(),
        endInAutoZone: $('.endAutoZone').val()
      });
    $pit.insert({

    })
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
