'use strict';

// Create a constructor function of my projects to date.

function Projects ( projDataObj ) {
  this.title = projDataObj.title;
  this.languages = projDataObj.languages;
  this.description = projDataObj.description;
  this.date = projDataObj.date;
}

// create new Projects template by cloning original
// hide original by removing the class and displaying none in module.css
Projects.prototype.toHtml = function() {
  var $newProjects = $( 'article.template' ).clone();
  $newProjects.removeClass( '.template' );

  // if date of project doesn't exist, add the class of 'draft'
  if (!this.date) { $newProjects.addClass('draft'); }
  $newProjects.attr('data-category', this.languages);
  $newProjects.find('h1').text(this.title);
  $newProjects.find('.projects-body').html(this.description);
  $newProjects.find('time').text(this.date);




// hide class = main-nav
// $( '.main-nav').hide();

// attach event listener to nav li links
$( 'nav a').click( function () {
  $( 'main-nav').hide();
  var tabs = $( event.target ).attr( 'data-link' );
  $( 'section#' + tabs ).show();

  // create the appearance of a click with a fadeIn
  // $( 'nav a[data-tab="about"]').click();
  // $( 'nav a[data-tab="projects"]' ).fadeIn();
  // $( 'nav a[data-tab="projects"]').click();

});