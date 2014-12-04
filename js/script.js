  $(function() {
    $( ".column" ).sortable({
      connectWith: ".column",
      handle: ".portlet-header",
      cancel: ".portlet-toggle",
      placeholder: "portlet-placeholder ui-corner-all"
    });

    $( ".portlet" )
      .addClass( "ui-widget ui-widget-content ui-helper-clearfix ui-corner-all" )
      .find( ".portlet-header" )
        .addClass( "ui-widget-header ui-corner-all" )
        .prepend( "<span class='ui-icon ui-icon-minusthick portlet-toggle'></span>");
 
    $( ".portlet-toggle" ).click(function() {
      var icon = $( this );
      icon.toggleClass( "ui-icon-minusthick ui-icon-plusthick" );
      icon.closest( ".portlet" ).find( ".portlet-content" ).toggle();
    });
    
  $( ".newport" ).click(function() {  
		$( this ).after('<div id="newportlet" class="portlet">' + '<div id="newheader" class="portlet-header">test1</div>' +
            '<div class="portlet-content">test2</div>' +
            '</div>');
    $('#newportlet').addClass("ui-widget ui-widget-content ui-helper-clearfix ui-corner-all");
    $('#newheader').addClass("ui-widget-header ui-corner-all");
    $('#newheader').prepend("<span class='ui-icon ui-icon-minusthick portlet-toggle'></span>");
  });
});
