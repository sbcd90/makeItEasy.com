var oFeedList = new sap.m.List("oFeedItemList", {
        mode: "SingleSelectMaster",
        //showSeparators: "None",
    });

    
    var fnOpenPopup = function(oControlEvent) {
      oPopover.openBy(oControlEvent.getParameters().domRef);
    };
    if(responseJSON != 0){
    for(var i=0;i<responseJSON.length;i++){
    var oFeedListItemTemplate = new sap.m.FeedListItem({
      type: sap.m.ListType.Active,   
      icon : "{icon}",
      activeIcon : "{activeIcon}",
      text : "{text}",
      sender : "{sender}",
      showIcon : "{showIcon}",
      senderActive: "{senderActive}",
      iconActive: "{iconActive}",
      info: "{info}",
      timestamp : "{timestamp}",
      maxCharacters : 100,
      senderPress : fnOpenPopup,
      iconPress : fnOpenPopup
    });
}
}
    function bindFeedListData(data, itemTemplate, list)
    {
      var oModel = new sap.ui.model.json.JSONModel();
      // set the data for the model
      oModel.setData(data);
      // set the model to the list
      list.setModel(oModel);

      // bind Aggregation
      list.bindAggregation("items", "/chunks", itemTemplate);
    }
    
    jQuery.sap.require("sap.ui.core.IconPool");
    var sURI = sap.ui.core.IconPool.getIconURI("personnel-view");
    
    
    
    var feedData = {
        chunks : [ {
          icon: "images/male.jpg",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque risus nulla, interdum eget posuere non, tincidunt eu felis. In hac habitasse platea dictumst. This is a very long URL: http://vesapui5.dhcp.wdf.sap.corp:1080/trac/sapui5.consumption/wiki/SprintPlanning/Kelley/CustomStuffAfterECC#StillEmptySpaceinObjectListItemsandObjectHeaders/vesapui5.dhcp.wdf.sap.corp:1080/trac/sapui5.consumption/wiki/SprintPlanning/Kelley/CustomStuffAfterECC#StillEmptySpaceinObjectListItemsandObjectHeaders/vesapui5.dhcp.wdf.sap.corp:1080/trac/sapui5.consumption/wiki/SprintPlanning/Kelley/CustomStuffAfterECC#StillEmptySpaceinObjectListItemsandObjectHeadersQuisque ut ipsum est.",
          sender: "Jeremy Dash",
          senderActive: true,
          iconActive: true,
          timestamp: "March 03, 2013",
          info: "Approved",
        }, {
          icon: sURI,
          text: "This FeedListItem displays an ImagePool image. Cras congue posuere metus sed tempus. Mauris euismod, dui sit amet molestie volutpat, ipsum est viverra velit, id ultricies ante dolor et ligula. ",
          sender: "Christopher Kent",
          senderActive: true,
          iconActive: true,
          timestamp: "Dec 04, 2012",
          info: "Rejected",
        }, {
          icon: "images/female.jpg",
          text: "This FeedListItem comes with senderActive = false and iconActive = false. In hac habitasse platea dictumst. Quisque ut ipsum est. Duis ipsum orci, interdum eget sollicitudin ac, blandit a ante.",
          sender: "Claire Jones",
          senderActive: false,
          iconActive: false,
          timestamp: "Dec 02, 2012",
          info: "Waiting for Approval",
        }, {
          text: "This FeedListItem comes without an image and has a very long info text",
          sender: "Christine Noah",
          senderActive: true,
          iconActive: true,
          timestamp: "Nov 23, 2012",
          info: "Waiting for Approval and waiting and waiting and waiting and waiting and waiting and waiting and waiting and waiting and waiting and waiting and waiting and waiting and waiting and waiting and waiting and waiting and waiting and waiting and waiting and waiting",
        }, {
          text: "This one has no date",
          sender: "Frank Black",
          senderActive: true,
          iconActive: true,
          info: "New",
        }, {
          text: "This one shows the default image",
          sender: "Frank Black",
        }, {
          text: "And this one does without info",
          sender: "Kurt Nistroy",
          senderActive: true,
          iconActive: true,
          timestamp: "Nov 01, 2012",
        }, {
          text: "OPEN (No decision yet)",
          sender: "Kurt Nistroy",
          senderActive: true,
          iconActive: true,
        }, {
          text: "This one has no timestamp and no icon",
          info: "Approved",
          sender: "Kurt Nistroy",
          showIcon: false,
        }, {
          text: "This one has no sender and no icon",
          info: "Approved",
          timestamp: "Nov 01, 2012",
          showIcon: false,
        }, {
          text: "This one has a timestamp starting with a number",
          info: "Approved",
          timestamp: "1.12.2012",
          showIcon: false,
        }, {
          text: "This one has no sender but active/inactve icons (check out the icon's color, when you press this item)",
          icon: "images/action.png",
          activeIcon: "images/action_pressed.png",
          senderActive: true,
          iconActive: true,
          timestamp: "Nov 01, 2012",
        }, {
          sender: "Frank Black",
          text: "This FeedListItem has an image but showIcon is set to false so it should not be displayed",
          icon: "images/action.png",
          showIcon: false,
          senderActive: true,
          iconActive: true,
          timestamp: "Nov 01, 2012",
        }, {
          icon: "images/male.jpg",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque risus nulla, interdum eget posuere non, tincidunt eu felis. In hac habitasse platea dictumst. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque risus nulla, interdum eget posuere non, tincidunt eu felis. In hac habitasse platea dictumst. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque risus nulla, interdum eget posuere non, tincidunt eu felis. In hac habitasse platea dictumst. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque risus nulla, interdum eget posuere non, tincidunt eu felis. In hac habitasse platea dictumst. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque risus nulla, interdum eget posuere non, tincidunt eu felis. In hac habitasse platea dictumst. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque risus nulla, interdum eget posuere non, tincidunt eu felis. In hac habitasse platea dictumst. This is a very long URL: http://vesapui5.dhcp.wdf.sap.corp:1080/trac/sapui5.consumption/wiki/SprintPlanning/Kelley/CustomStuffAfterECC#StillEmptySpaceinObjectListItemsandObjectHeaders/vesapui5.dhcp.wdf.sap.corp:1080/trac/sapui5.consumption/wiki/SprintPlanning/Kelley/CustomStuffAfterECC#StillEmptySpaceinObjectListItemsandObjectHeaders/vesapui5.dhcp.wdf.sap.corp:1080/trac/sapui5.consumption/wiki/SprintPlanning/Kelley/CustomStuffAfterECC#StillEmptySpaceinObjectListItemsandObjectHeadersQuisque ut ipsum est.",
          sender: "Jeremy has a really long long long middle-name Dash",
          senderActive: true,
          iconActive: true,
          timestamp: "March 03, 2013 March 03, 2013 March 03, 2013 March 03, 2013 March 03, 2013 March 03, 2013 March 03, 2013 March 03, 2013 March 03, 2013",
          info: "Approved Approved Approved Approved Approved Approved Approved Approved Approved Approved Approved Approved Approved Approved ",
        }]
      };
    oJsonModel = new sap.ui.model.json.JSONModel();
oJsonModel.setData(feedData);



 
    bindFeedListData(feedData, oFeedListItemTemplate, oFeedList);

/*for(var i=0; i < json.data.length; i++)
{*/
document.write('<div class="wrap">');
document.write('<div class="column_right">');
document.write('  <div id="menu_box_feed">');

document.write('   </div>');
document.write(' </div>');
document.write('</div>');

oFeedList.placeAt("menu_box_feed");
/*}
};*/


function onPost(oEvent) {
    //var oFormat = sap.ui.core.format.DateFormat.getDateTimeInstance({style: "medium"});
    //var oDate = new Date();
    //var sDate = oFormat.format(oDate);
    // create new entry
    var sValue = oEvent.getParameter("value");
    var oEntry = {     
      icon: "images/profile_img40x40.jpg",
          text: sValue,
          sender: "Me",
          senderActive: true,
          iconActive: true,
          timestamp: "12.1.1" ,
          info: "Ap"
          };

  
   
    var aEntries = oJsonModel.getData().chunks;
    aEntries.unshift(oEntry);
    oModel.setData({
      chunks : aEntries
    });
  };
