//1.2
console.log("Hello World")


//1.8
let grade = 85

switch (true) {
    case grade >= 90:
        console.log("You got an A");
        break;
    case grade >= 80:
        console.log("You got a B");
        break;
    case grade >= 70:
        console.log("Cs get degrees");
        break;
    case grade >= 60:
        console.log("You got a D");
        break;
    default:
        console.log("You Fail");
}

//1.38
let book = {
    title:"Ender's Game",
    author:"Orson Scott Card",
    pages:324,
    read: true
}

//1.39
printBookInfo(book);

function printBookInfo(book){
    let insert = (book.read) ? "": "not "
    console.log(book.title + " by " + book.author + " has " + book.pages + " pages. I have " + insert + "read it.");
}


//Note: numbering is ppt#.slide#
//Note: the folder has a 1 so that it appears above the components folder