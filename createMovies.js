use movies
db.createCollection('movies')

show databases

db.movies.insert({name: "Harry Potter", year: 2004, description: "Harry goes to Hogwarts"})
db.movies.find({name: "Harry Potter"})

// more pretty!
db.movies.find({name: "Harry Potter"}).pretty()
