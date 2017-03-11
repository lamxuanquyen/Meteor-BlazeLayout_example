import {Template } from 'meteor/templating';
import {Meteor } from 'meteor/meteor';
import {FlowRouter} from 'meteor/kadira:flow-router';
import KhuCollection from '/both/collections';

Template.formKhuTro.onCreated(function(){
    const self=this;
    this._id = FlowRouter.getParam("_id");
    //console.log(_id);
    this.autorun(function(){
        Meteor.subscribe("khutro.single.id", self._id);
    });
});

Template.formKhuTro.events({
    "submit form": function(e){
      e.preventDefault();
      const item ={
          name: e.target.name.value,
      };

      const _id=Template.instance()._id;
      if (_id){
        Meteor.call("updateKhu", _id, item, function(err){
            if(err)
              console.log(err);
            else{
              console.log("update thanh cong");
              FlowRouter.go("trangChu");
            }
        });
      }
      else {
        Meteor.call("insertKhu", item, function(err){
            if(err)
              console.log(err);
            else {
              console.log("luu thanh cong");
              FlowRouter.go("trangChu");
            }
        });
      }

    }
});

Template.formKhuTro.helpers({
    khu: function(){
        const _id=Template.instance()._id;
        //console.log(_id);
        return KhuCollection.findOne({_id:_id}) || {};
    }
});
