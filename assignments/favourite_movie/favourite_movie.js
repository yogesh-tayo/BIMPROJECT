const movies = [];
// var movies=new Array();

function favouriteMovie(operation, movie) {
   
    if(operation=="add" && movie!=null){
        movies.push(movie);
        // return k;
    }
    if (operation=="remove"){
        movies.pop();
        // return k;
    }
    return movies;
    // Write your code here
}

module.exports = favouriteMovie;
