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
      alert('hi')
      data.insert({name:"test one"})
      alert(JSON.stringify(data.find().fetch()))
      //alert(JSON.stringify(data.find()));
    }
  });


  Template.submit_data.events({
    'click button': function() {
      alert('test form')
    }
  })

  Template.match.events({
    'click button': function() {
      var rBin = document.getElementById("recycling").value;
      var totes = document.getElementById("totes").value;
      var noodles = document.getElementById("noodles").value;
      var coopMode = document.getElementById("coopertitionOption").value;
      var cGround = document.getElementById("fromArena").value;
      var cHuman = document.getElementById("fromPlayer").value;
      var colPref = document.getElementById("collectPreference").value;
      var Tip = document.getElementById("tipTotes").value;
      var sKnocked = document.getElementById("stacksKnocked").value;
      var mCrates = document.getElementById("maxCrates").value;
      var Platform = document.getElementById("overPlatform").value;
    
      //
      //data.insert({
      //  'manipulateRecycleBins':rBin
      //})
      //
    }
    
  });

  Template.form.events({
    'click button': function() {
      var rBin = document.getElementById("recycling").value;
      alert(recycling);
      data.insert({
        'recycling':input
      });
    }
  });
  
  Template.form.events({
    'click button': function() {
      var totes = document.getElementById("totes").value;
      alert(totes);
      data.insert({
        'totes':input
      });
    }
  });

  Template.form.events({
    'click button': function() {
      var noodles = document.getElementById("noodles").value;
      alert(noodles);
      data.insert({
        'noodles':input
      });
    }
  });

  Template.form.events({
    'click button': function() {
      var coopMode = document.getElementById("coopertitionOption").value;
      alert(coopertitionOption);
      data.insert({
        'coopertitionOption':input
      });
    }
  });

  Template.form.events({
    'click button': function() {
      var cGround = document.getElementById("fromArena").value;
      alert(fromArena);
      data.insert({
        'fromArena':input
      });
    }
  });

  Template.form.events({
    'click button': function() {
      var cHuman = document.getElementById("fromPlayer").value;
      alert(fromPlayer);
      data.insert({
        'fromPlayer':input
      });
    }
  });

  Template.form.events({
    'click button': function() {
      var colpref = document.getElementById("collectPreference").value;
      alert(collectPreference);
      data.insert({
        'collectPreference':input
      });
    }
  });

  Template.form.events({
    'click button': function() {
      var Tip = document.getElementById("tipTotes").value;
      alert(tipTotes);
      data.insert({
        'tipTotes':input
      });
    }
  });

  Template.form.events({
    'click button': function() {
      var sKnocked = document.getElementById("stacksKnocked").value;
      alert(stacksKnocked);
      data.insert({
        'stacksKnocked':input
      });
    }
  });

  Template.form.events({
    'click button': function() {
      var mCrates = document.getElementById("maxCrates").value;
      alert(maxCrates);
      data.insert({
        'maxCrates':input
      });
    }
  });

  Template.form.events({
    'click button': function() {
      var Platform = document.getElementById("overPlatform").value;
      alert(overPlatform);
      data.insert({
        'overPlatform':input
      });
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
