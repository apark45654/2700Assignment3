let allMovies = [];

//Define a movie class with parameters title (string), rating (number) and haveWatched (boolean)
function Movie(title, rating, haveWatched){
    return {
        title:title, 
        rating:rating, 
        haveWatched:haveWatched
    };
}

//add a movie OBJECT to the allMovies array
let addMovie = (movie) => {
    allMovies.length = allMovies.length + 1;
    allMovies[allMovies.length -1] = movie;
    document.write("A new movie is added ");
    document.write("<br />");

}

//iterate through all elements of allMovies array
//Display the total number of movies in allMovies array
let printMovies = () => {
    let outcome = "Printing all movies.... \n" + "<br />";
    let j  = 0;
    while(allMovies.length > j){
        let i = allMovies[j];
        outcome = outcome + (i.title + ", rating of " + i.rating + ", havewatched: " + i.haveWatched + "\n" + "<br />");
        j++;
    }
        outcome = outcome + ("<br />" + "\nYou have " + allMovies.length + " movies in total");
        document.write(outcome);
        document.write("<br />");
}


//Display only the movies that has a rating higher than rating(argument)
//Display the total number of matches
let highRatings = (rating) => {
    let amountMatches = 0;
    let outcome = "printing movie that has a rating higher than "  + rating + "\n" + "<br />";

    let j = 0;
    while (allMovies.length > j){
        let i = allMovies[j];

        if(rating <= i.rating){
            outcome = outcome + (i.title + " has a rating of " + i.rating + "\n" + "<br />");
            amountMatches = amountMatches + 1;
        }

        j++;
    }

    outcome = outcome + ("<br />" + "\nIn total, there are " + amountMatches + " matches");
    document.write(outcome);
    document.write("<br />");

}


//Toggle the 'haveWatched' property of the specified movie 
let changeWatched = (title) => {
    document.write("changing the status of the movie... \n");
    
    let j = 0;
    while (allMovies.length > j){
        let k = allMovies[j];
        if(k.title == title){
            k.haveWatched = !k.haveWatched;
        }
        j++;
    }
}



////////////////////////////////////////////////////////////
//Test code - DO NOT DELETE
let x = new Movie("Spiderman", 3, true);
let y = new Movie("Citizen Kane", 4, false);
let z = new Movie("Zootopia", 4.5, true);

allMovies.push(x,y,z);

/*replace console.log with display on web page*/
document.write("----------------");
document.write("<br />");
document.write("running program......");
document.write("<br />");
document.write("----------------");
document.write("<br />");
printMovies();


let movie1 = new Movie("Parasite", 2, false);

/*replace console.log with display on web page*/
document.write("----------------");
document.write("<br />");
addMovie(movie1);
document.write("----------------");
document.write("<br />");

changeWatched("Spiderman");
document.write("<br />");
/*replace console.log with display on web page*/
document.write("----------------");
document.write("<br />");
printMovies();

/*replace console.log with display on web page*/
document.write("----------------");
document.write("<br />");

changeWatched("Spiderman");
document.write("<br />");
/*replace console.log with display on web page*/
document.write("----------------");
document.write("<br />");

printMovies();
/*replace console.log with display on web page*/
document.write("----------------");
document.write("<br />");

highRatings(3.5);