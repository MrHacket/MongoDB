use('SLIPS');

db.createCollection("Album");

db.Albums.insertMany([
    {
        title: "What's Going On",
        artist: ["A", "B"],
        released_year: 2011,
        tracks: [{
            track_id: 1,
            track_name: "Track 1",
            duration: 3.56
        },
        {
            track_id: 2,
            track_name: "Track 2",
            duration: 4.12
        }
            , {
            track_id: 3,
            track_name: "Track 3",
            duration: 3.89

        }],
        genre: "Pop"
    },
    {
        title: "Uptown Funk",
        artist: ["C", "D"],
        released_year: 2012,
        tracks: [{
            track_id: 1,
            track_name: "Track 1",
            duration: 4.23
        },
        {
            track_id: 2,
            track_name: "Track 2",
            duration: 3.78
        }
            , {
            track_id: 3,
            track_name: "Track 3",
            duration: 4.01
            }],
        genre: "Rock"
    },
    {
        title: "Dark Side of the Moon",
        artist: ["E", "F"],
        released_year: 1973,
        tracks: [{
            track_id: 1,
            track_name: "Track 1",
            duration: 4.56
        },
        {
            track_id: 2,
            track_name: "Track 2",
            duration: 4.12
        }
            , {
            track_id: 3,
            track_name: "Track 3",
            duration: 3.89
            }],
        genre: "Rock"
    }
])

// 2 Display all documents of ‘Album’ collection in proper format.

db.Albums.find().pretty();


//B 

// 1  Count number of albums released between years 2010 to 2020. 

db.Albums.count(
    {
        released_year:{
            $gte:2010,
            $lte:2020
        }
    }
)

// 2  Display two documents which have genre ‘Rock’. 

db.Albums.find(
    {
        genre:{
            $eq:"Rock"
        }
    }
)

// 3  Give title and artist of an album which has 3 tracks.

db.Albums.find(
    {
        tracks:{$size:3}
    },
    {
        title:1,
        artist:1,
        _id:0
    }
)

// 4 Display albums that do not have genre either ‘Rock’ or ‘hip-hop’.

db.Albums.find(
    {
        $and: [
            { genre: { $ne: "Rock" } },
            { genre: { $ne: "hip-hop" } }
        ]
    }
)

// 5 Update the seconds of the track to 6.38 whose track id is 2 and album title is 
 // “What’s Going On”. 

 db.Albums.updateOne(
    {
        title:"What's Going On",
        "tracks.track_id":2
    },
    {
        $set:{
            "tracks.$.duration":6.38
        }
    }
 )