import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

FlowRouter.route('/', {
  name: "trangChu",
  action: function () {
    BlazeLayout.render("adminLayout", {
      content:"dsKhuTro"
    });
  }
});
FlowRouter.route('/khu-tro/them-moi', {
  name: "khutro.new",
  action: function () {
    BlazeLayout.render("adminLayout", {
      content:"formKhuTro"
    });
  }
});
FlowRouter.route('/khu-tro/chinh-sua/:_id', {
  name: "khutro.edit",
  action: function () {
    BlazeLayout.render("adminLayout", {
      content:"formKhuTro"
    });
  }
});
