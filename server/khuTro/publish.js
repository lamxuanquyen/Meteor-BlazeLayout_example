import {Meteor} from 'meteor/meteor';
import KhuCollection from '/both/collections';

Meteor.publish("khutro.list", function(){
    return KhuCollection.find({});
});
Meteor.publish("khutro.single.id", function(id){
    return KhuCollection.find({_id:id});
});
