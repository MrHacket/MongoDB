use('SLIPS');


db.createCollection("book")

// var bulk = db.book.initializeUnorderedBulkOp();
//Insert at least 10 documents in a collection, use bulk insert

db.book.find().pretty();

// b 

// 1 Display two books of ‘BPB’ publication. 

db.book.find(
    {
        Publisher_name: "BPB"
    }
).limit(2)

// 2 Display Book_title and Authors of books published between years 2019 to 2021.

db.book.find(
    {
        Publication_year: {
            $gte: 2019,
            $lte: 2021
        }
    }
)

// 3  Count number of books having three authors. 

db.book.count(
    {
        "Authors":{
            $size: 3
        }
    }
)

//4 Update the ISBN number of book titled “Definitive Guide to MongoDB”  to “1
 // 4302-3051-7”.

 db.book.updateOne(
    {
        Book_Title:"Definitive Guide to MongoDB"
    },{
        $set : {"ISBN":14302-3051-7}
    }
 )


 // 5 Add one more author “Alex Buckley” to book titled “The Java Languages 
 // Specification”.

 db.book.updateOne({
    Book_Title:"The Java Language Specification"
 },{
    $push:{Authors:"Alex Buckley"}
 })