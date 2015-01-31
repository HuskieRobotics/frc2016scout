data = new Mongo.Collection("data");
sdata = new Mongo.Collection("sdata");


if (Meteor.isClient) {

    

  Template.get_data.events({
    'click button': function() {
      
      //alert(JSON.stringify(data.find().fetch()))
      alert(JSON.stringify(sdata.find({})));
    }
  });

  Template.clear_data.events({
    'click button': function()
    {
      alert("im clearing the data");
      sdata.remove("10");

      

    }
  });


  Template.submit_data.events({
    'click button': function() {
      alert('test form')
      sdata.insert({
        title:"frc2015",
        _id:10
      })
      
    }
  });

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
      var startingPos = document.getElementById("config").value();
      var rBinInZone = document.getElementById("bins").value();
      var totesInZone = document.getElementById("totes").value();
      var noodlesInZone = document.getElementById("noodles").value();
      var endInAutoZone = document.getElementById("autoZone").value();
      var stackedYellowBins = document.getElementById("stack").value();
      alert("is it working")
      sdata.insert({
          'startingPosition':startingPos
        })
      //
      //data.insert({
      //  'manipulateRecycleBins':rBin
      //})
      //
    }
    
  });
  Template.match.events({
      'click button': function() {
        var startingPos = document.getElementById("config").value;
        alert(startingPos);
        sdata.insert({
          'startingPosition':startingPos
        })
      }
    });

Template.form.events({
      'click button': function() {
        var startingPos = document.getElementById("config").value;
        alert(startingPos);
        data.insert({
          'startingPosition':startingPos
        })
      }
    });

  Template.form.events({
      'click button': function() {
        var rBinInZone = document.getElementById("bins").value;
        alert(rBinInZone);
        data.insert({
          'recycling bin in auto zone':rBinInZone
        });
      }
    });
  Template.form.events({
      'click button': function() {
        var totesInZone = document.getElementById("totes").value;
        alert(totesInZone);
        data.insert({
          'totes in auto zone':totesInZone
        });
      }
    });

  Template.form.events({
      'click button': function() {
        var noodlesInZone = document.getElementById("noodles").value;
        alert(noodlesInZone);
        data.insert({
          'noodles in auto zone':noodlesInZone
        });
      }
    });

  Template.form.events({
      'click button': function() {
        var stackedYellowBins = document.getElementById("stack").value;
        alert(stackedYellowBins);
        data.insert({
          'Stacked Yellow Bins':stackedYellowBins
        });
      }
    });

  Template.form.events({
      'click button': function() {
        var endInAutoZone = document.getElementById("autoZone").value;
        alert(endInAutoZone);
        data.insert({
          'Ends In Auto Zone':endInAutoZone
        });
      }
    });

  Template.form.events({
    'click button': function() {
      var rBin = document.getElementById("recycling").value;
      alert(rBin);
      data.insert({
        'recycling':rBin
      });
    }
  });
  
  Template.form.events({
    'click button': function() {
      var totes = document.getElementById("totes").value;
      alert(totes);
      data.insert({
        'totes':totes
      });
    }
  });

  Template.form.events({
    'click button': function() {
      var noodles = document.getElementById("noodles").value;
      alert(noodles);
      data.insert({
        'noodles':noodles
      });
    }
  });

  Template.form.events({
    'click button': function() {
      var coopMode = document.getElementById("coopertitionOption").value;
      alert(coopMode);
      data.insert({
        'coopertitionOption':coopMode
      });
    }
  });

  Template.form.events({
    'click button': function() {
      var cGround = document.getElementById("fromArena").value;
      alert(cGround);
      data.insert({
        'fromArena':cGround
      });
    }
  });

  Template.form.events({
    'click button': function() {
      var cHuman = document.getElementById("fromPlayer").value;
      alert(cHuman);
      data.insert({
        'fromPlayer':cHuman
      });
    }
  });

  Template.form.events({
    'click button': function() {
      var colPref = document.getElementById("collectPreference").value;
      alert(colPref);
      data.insert({
        'collectPreference':colPref
      });
    }
  });

  Template.form.events({
    'click button': function() {
      var tip = document.getElementById("tipTotes").value;
      alert(tip);
      data.insert({
        'tipTotes':tip
      });
    }
  });

  Template.form.events({
    'click button': function() {
      var sKnocked = document.getElementById("stacksKnocked").value;
      alert(sKnocked);
      data.insert({
        'stacksKnocked':sKnocked
      });
    }
  });

  Template.form.events({
    'click button': function() {
      var mCrates = document.getElementById("maxCrates").value;
      alert(mCrates);
      data.insert({
        'maxCrates':mCrates
      });
    }
  });

  Template.form.events({
    'click button': function() {
      var platform = document.getElementById("overPlatform").value;
      alert(platform);
      data.insert({
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

