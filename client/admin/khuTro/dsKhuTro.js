import { Template } from 'meteor/templating';
import { Meteor } from 'meteor/meteor';
import KhuCollection from '/both/collections';

Template.dsKhuTro.onCreated(function(){
    this.autorun(function(){
        const handle = Meteor.subscribe("khutro.list");
      //  handle.ready();
    });
});

Template.dsKhuTro.helpers({
    items: function () {
        return KhuCollection.find({});
    },
});
Template.dsKhuTro.events({
    "click .btnRemove": function(){
        //console.log(this);
      //  return;
        if (confirm("Ban muon xoa chu")){
          Meteor.call("removeKhu",this._id, function(err) {
              if (err)
                console.log(err.resson || err.message);
              else
                console.log("ok");
          });
        }

    },
});
