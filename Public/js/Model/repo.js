'use strict';

repos.all = []

// make a request to proxy route
repos.requestRepos = function( callback ) {
    $.get( {
        url: 'github.com/user/repos',
        type: 'GET'
    })
    // after request is fulfilled, then give the data from the repos, if there are repos to get.  Otherwise, return an error message
    .then( data => repos.all = data, err => console.error( err ))
    .then( callback );
};

repos.with = attr => repos.all.filter( repos => repos[ attr ]);