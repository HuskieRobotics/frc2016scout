data = new Meteor.Collection("data");

if (Meteor.isClient) {

  Template.form.events({
    'click button': function() {
      var input = document.getElementById("input").value;
      alert(input);
      data.insert({
        'input':input
      });
    }
  });

  Template.get_data.events({
    'click button': function() {
      alert(JSON.stringify(data.find()));
    }
  });

  // Template.add_item.events({
  //   'click .submit': function(){
  //     $tele.insert({
  //       minipulateRecyclingBins: $('.recycling bins').val(),
  //       minipulateTotes: $('.totes').val(),
  //       minipulateNoodles: $('.noodles').val(),
  //       coopertitionStack: $('.stack').val(),
  //       coopertitionSet: $('.set').val(),
  //       collectsTotesFromHuman: $('.human').val(),
  //       collectsTotesFromGround: $('.ground').val(),
  //       totePreference: $('.totePreference').val(),
  //       tipTotes: $('.tipObjects').val(),
  //       numberStakesKnokedDown: $('.numberStakesKnokedDown').val(),
  //       maxCrates: $('.maxCrates').val(),
  //       goOverPlatform: $('.goOverPlatform').val()

  //     });
  //   $auto.insert({
  //       startingConfiguration: $('.startingConfig').val(),
  //       totalBinsInAutoZone: $('.binsAuto').val(),
  //       totalTotesInAutoZone: $('.totesAuto').val(),
  //       totalNoodlesInAutoZone: $('.noodlesAuto').val(),
  //       stackYellowBins: $('.stackedYellowBins').val(),
  //       endInAutoZone: $('.endAutoZone').val()
  //     });
  //   $pit.insert({

  //   })
  //   }
  // });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
