//Timeline Button Styles

$(document).ready(function() {

  $('button#education_button').click(function() {
    $(this).toggleClass("deselected");
  });

  $('button#professional_button').click(function() {
    $(this).toggleClass("deselected");
  });

  $('button#event_button').click(function() {
    $(this).toggleClass("deselected");
  });

  $('button#misc_button').click(function() {
    $(this).toggleClass("deselected");
  });

});

//Functions to hide specific event types

function hideEducation() {
  var x = document.getElementsByClassName("education");
  for(var i=0; i<x.length; i++){
    if (x[i].style.display === "none") {
      x[i].style.display = "flex";
    }
    else {
      x[i].style.display = "none";
    }
  }
}

function hideProfessional() {
  var x = document.getElementsByClassName("professional");
  for(var i=0; i<x.length; i++){
    if (x[i].style.display === "none") {
      x[i].style.display = "flex";
    }
    else {
      x[i].style.display = "none";
    }
  }
}

function hideEvent() {
  var x = document.getElementsByClassName("event");
  for(var i=0; i<x.length; i++){
    if (x[i].style.display === "none") {
      x[i].style.display = "flex";
    }
    else {
      x[i].style.display = "none";
    }
  }
}

function hideMisc() {
  var x = document.getElementsByClassName("misc");
  for(var i=0; i<x.length; i++){
    if (x[i].style.display === "none") {
      x[i].style.display = "flex";
    }
    else {
      x[i].style.display = "none";
    }
  }
}
