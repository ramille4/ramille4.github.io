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
	$( this ).after('<div id="newportlet" class="portlet">' + '<div id="newheader" class="portlet-header">Task Name</div>' +
            '<div class="portlet-content">>Jack<p></p><div id="pb6" style="text-align: center;">0% done</div></div>' +
            '</div>');
    $('#newportlet').addClass("ui-widget ui-widget-content ui-helper-clearfix ui-corner-all");
    $('#newheader').addClass("ui-widget-header ui-corner-all");
    $('#newheader').prepend("<span class='ui-icon ui-icon-minusthick portlet-toggle'></span>");
    $('#pb6').addClass("ui-widget ui-widget-content ui-helper-clearfix ui-corner-all");
  });
     $( "#pb1" ).progressbar({
      value: 37
    });
    $( "#pb2" ).progressbar({
      value: 43
    });
    $( "#pb3" ).progressbar({
      value: 81
    });
    $( "#pb4" ).progressbar({
      value: 23
    });
    $( "#pb5" ).progressbar({
      value: 95
    });
    $( "#pb6" ).progressbar({
      value: 1
    });
    $( "#pb7" ).progressbar({
      value: 100
    });
    $( "#pb8" ).progressbar({
      value: 100
    });
    $( "#pb9" ).progressbar({
      value: 55
    });
    $( "#pb10" ).progressbar({
      value: 75
    });
});
