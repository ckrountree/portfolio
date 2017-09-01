'use strict';

// Create a constructor function of my projects to date.

function Projects ( projDataObj ) {
  this.title = projDataObj.title;
  this.languages = projDataObj.languages;  
  this.date = projDataObj.date;
  this.company = projDataObj.company;
}

// hide class = main-nav
// $( '.main-nav').hide();

// attach event listener to nav li links
$( 'nav a').click( function () {
  $( 'main-nav').hide();
  var tabs = $( event.target ).attr( 'data-content' );
  $( 'section#' + tabs ).show();

  // create the appearance of a click with a fadeIn
  // $( 'nav a[data-content="about"]').click();
  // $( 'nav a[data-content="about"]' ).fadeIn();
  $( 'nav a[data-content="projects"]').click();

});