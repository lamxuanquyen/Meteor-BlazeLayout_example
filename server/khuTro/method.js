import {Meteor} from 'meteor/meteor';
import KhuCollection from '/both/collections';

Meteor.methods({
    insertKhu: function(khu){
        if(!khu.name)
          throw new Mongo.Error("khu tro khong duoc rong");

        KhuCollection.insert(khu);
    },
    updateKhu: function(id, khu){
        KhuCollection.update({_id: id}, {$set: khu});
    },
    removeKhu: function(id){
        KhuCollection.remove({_id : id});
    },
});
