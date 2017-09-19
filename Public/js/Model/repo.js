'use strict';

repos.all = []

// make a request to proxy route
repos.requestRepos = function( callback ) {
    $.ajax( {
        url: 'https://api.github.com/users/ckrountree/repos',
        type: 'GET',
        headers: {
            'Authorization': `token ${token}`
        }
    })
    // after request is fulfilled, then give the data from the repos, if there are repos to get.  Otherwise, return an error message
    .then( data => repos.all = data );
}

repos.with = attr => repos.all.filter( repos => repos[ attr ]);

