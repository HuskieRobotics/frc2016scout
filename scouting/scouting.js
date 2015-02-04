data = new Mongo.Collection("data");

if (Meteor.isClient) {
  Template.get_data.events({
    'click button': function() {
      
      //alert(JSON.stringify(data.find().fetch()))
      alert(JSON.stringify(data.find({})));
    }
  });

  Template.clear_data.events({
    'click button': function()
    {
      alert("I'm clearing the data");
    }
  });


  // Template.submit_data.events({
  //   'click button': function() {
  //     alert('test form')
  //     sdata.insert({
  //       title:"frc2015",
  //       _id:10
  //     })
      
  //   }
  // });
  
  Template.match.events({
    'click button': function() {
      var rBin = document.getElementById("recycling").value;
      var totes = document.getElementById("totes").value;
      var noodles = document.getElementById("noodles").value;
      var coopMode = document.getElementById("coopertitionOption").value;
      var cGround = document.getElementById("fromArena").value;
      var cHuman = document.getElementById("fromPlayer").value;
      var colPref = document.getElementById("collectPreference").value;
      var tip = document.getElementById("tipTotes").value;
      var sKnocked = document.getElementById("stacksKnocked").value;
      var mCrates = document.getElementById("maxCrates").value;
      var platform = document.getElementById("overPlatform").value;
      var startingPos = document.getElementById("config").value;
      var rBinInZone = document.getElementById("bins").value;
      var totesInZone = document.getElementById("totes").value;
      var noodlesInZone = document.getElementById("noodles").value;
      var endInAutoZone = document.getElementById("autoZone").value;
      var stackedYellowBins = document.getElementById("stack").value;
      alert("is it working");
      data.insert({
          'startingPosition':startingPos,
          'recycling bin in auto zone':rBinInZone,
          'totes in auto zone':totesInZone,
          'noodles in auto zone':noodlesInZone,
          'Stacked Yellow Bins':stackedYellowBins,
          'Ends In Auto Zone':endInAutoZone,
          'recycling':rBin,
          'totes':totes,
          'noodles':noodles,
          'coopertitionOption':coopMode,
          'fromArena':cGround,
          'fromPlayer':cHuman,
          'collectPreference':colPref,
          'tipTotes':tip,
          'stacksKnocked':sKnocked,
          'maxCrates':mCrates,
          'overPlatform':platform
      });
    }
  });
}
if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}

