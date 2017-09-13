'use strict';

var app = app || {};

// Wrap in IIFE
(function(module) {
  var projects = [];

  // Create a constructor function of my projects to date.
  function Projects(projDataObj) {
    this.title = projDataObj.title;
    this.languages = projDataObj.languages;
    this.description = projDataObj.description;
    this.date = projDataObj.date;
  }

  Projects.all = [];
  // compile Handlebars template and add text to index.html
  Projects.prototype.toHtml = function () {
    var template = Handlebars.compile($('#projHbars-template').text());

    return template;
  };

  projects.initIndexPage = function () {
    projects.forEach(function (projects) {
      $('#project-body').append(projects.toHtml());
    });
  };
  // what to pass into these functions?
  Projects.loadAll = function (projDataObj) {
    projDataObj.forEach(function () {
      projects.push(new Projects());
    });
  };

  module.Projects = Projects;
}) ( app );