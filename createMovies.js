use movies
db.createCollection('movies')

show databases

db.movies.insert({name: "Harry Potter", year: 2004, description: "Harry goes to Hogwarts"})
db.movies.find({name: "Harry Potter"})

// more pretty!
db.movies.find({name: "Harry Potter"}).pretty()

// show all
db.movies.find().pretty()

// delete old register, and put this new info instead (dangerous, deletes everything else!)
db.movies.update({name:"Harry Potter"}, {name: "harry potter and the philosopher's stone"})

// add new info to current register
db.movies.update({name:"Harry Potter"},{$set: {like: true}})
