function getTheTitles(books) {
    var titlesWanted = [];
    books.forEach( v => {
        titlesWanted.push(v.title);
    });
    return titlesWanted;
};

// const books = [
//     {
//       title: 'Book',
//       author: 'Name'
//     },
//     {
//       title: 'Book2',
//       author: 'Name2'
//     }
//   ]
    
// console.log(getTheTitles(books));
