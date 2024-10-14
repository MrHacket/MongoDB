

use ('SLIPS');

db.createCollection('films');


// Insert at least 10 documents in a collection.

db.films.insertMany([
    {
        title : "Jungle Book",  
        director : "Jon Favreau", 
        release_year : 2016,  
        language:"English", 
        film_type : [ "Adventure", "Drama "],  
        actors : ["Neel Sethi", "Bill Murray", "Ben Kingsley"] 
    },
    {
        title : "BOSS",  
        director : "Raj Mehta", 
        release_year : 2019,  
        language:"Hindi", 
        film_type : [ "Comedy", "Drama "],  
        actors : ["Akshay Kumar", "Kareena Kapoor", "Diljit Dosanjh"] 
    },
    {
        title : "Kabir Singh",  
        director : "Sandeep Reddy Vanga", 
        release_year : 2019,  
        language:"Hindi", 
        film_type : [ "Drama", "Romance "],  
        actors : ["Shahid Kapoor", "Kiara Advani", "Arjan Bajwa"] 
    },
    {
        title : "The Lion King",  
        director : "Jon Favreau", 
        release_year : 2019,  
        language:"English", 
        film_type : [ "Adventure", "Drama "],  
        actors : ["Donald Glover", "Beyoncé", "Seth Rogen"] 
    },
    {
        title : "Avengers: Endgame",  
        director : "Anthony Russo", 
        release_year : 2019,  
        language:"English", 
        film_type : [ "Action", "Adventure "],  
        actors : ["Robert Downey Jr.", "Chris Evans", "Mark Ruffalo"] 
    },
    {
        title : "Toy Story 4",  
        director : "Josh Cooley", 
        release_year : 2019,  
        language:"English", 
        film_type : [ "Animation", "Adventure "],  
        actors : ["Tom Hanks", "Tim Allen", "Annie Potts"] 
    },
    {
        title : "Aladdin",  
        director : "Guy Ritchie", 
        release_year : 2019,  
        language:"English", 
        film_type : [ "Adventure", "Family "],  
        actors : ["Will Smith", "Mena Massoud", "Naomi Scott"] 
    },
    {
        title : "Spider-Man: Far From Home",  
        director : "Jon Watts", 
        release_year : 2019,  
        language:"English", 
        film_type : [ "Action", "Adventure "],  
        actors : ["Tom Holland", "Samuel L. Jackson", "Jake Gyllenhaal"] 
    },
    {
        title : "The Secret Life of Pets 2",  
        director : "Chris Renaud", 
        release_year : 2019,  
        language:"English", 
        film_type : [ "Animation", "Adventure "],  
        actors : ["Patton Oswalt", "Kevin Hart", "Harrison Ford"] 
    },
    {
        title : "Men in Black: International",  
        director : "F. Gary Gray", 
        release_year : 2019,  
        language:"English", 
        film_type : [ "Action", "Adventure "],  
        actors : ["Chris Hemsworth", "Tessa Thompson", "Kumail Nanjiani"] 
    },
]);

//Display all documents of ‘films’ collection in proper format. 

db.films.find().pretty();

// B 

// 1 Give all English films released before year 2000.


db.films.find(
    {
        language:"English",
        release_year:{$lt:2000}
    },
    {

    }
);


//2 Display title and release year of ‘Action’ films that starts with the letter ‘K’.

db.films.find(
    {
        title:{$regex:/^K/i}
    },
    {
        title:1,
        release_year:1
    }
)

//3 Display the latest five ‘Hindi’ films released in easy-to-read format. 

db.films.find(
    {
        language:"Hindi"
    }
).sort(
    {release_year:-1}
)

//4 Count the number of films in which ‘Akshay Kumar’ has not acted.

db.films.find(
    {
        actors:{$nin:["Akshay Kumar"]}
    }
).count();

// 5 Update release year of a film ‘Jungle Book’ to 2016.

db.films.updateOne(
    {
        title:"Jungle Book"
    },
    {
        $set:{release_year:2016}
    }
)