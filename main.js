// ┌─────────────────┐
// │ Your code here! │	
// └─────────────────┘
/*
isAdmin
parameters: user object

user ={
    firstName: String
    lastName: String
    userRole: String
}

return boolean - true or false


*/

function isAdmin(user){
    if(user.userRole === 'ADMIN'){
        return true;
    }
    else {
        return false;
    }
}


function getEmail(user){
   let userEmail = (`${user.firstName}.${user.lastName}@codeimmersives.com`);
   return userEmail.toLowerCase();
}



function getPlaylistLength(playlist){
    return playlist.songs.length 
}
/*
getHardestHomework
parameters - homework array

homework = {
    name: string
    average score: number
}

return type: string

*/

function getHardestHomework(homeworkArray){
    if(homeworkArray.length === 0){
        return ''
    }

    let lowestHw = homeworkArray[0]

    for(let i = 0; i < homeworkArray.length; i++){
        if( homeworkArray[i].averageScore < lowestHw.averageScore){
            lowestHw = homeworkArray[i];
        }
    }
    
return lowestHw.name;
    
}
/*
createPhonebook
parameters: 
namesArray - string
numbersArray - string

return phonebook object{

    'name' : 'number'   string : string
}
*/

function createPhonebook(namesArray, numbersArray){
    let phonebook = {}

    for(let i = 0; i < namesArray.length ;i++){
        phonebook[namesArray[i]] = numbersArray[i];
    }
return phonebook
}



// ┌─────────────────────────────────────┐
// │ Do not modify code below this line. │
// └─────────────────────────────────────┘

if (typeof isAdmin === 'undefined') {
    isAdmin = undefined;
}
if (typeof getEmail === 'undefined') {
    getEmail = undefined;
}
if (typeof getPlaylistLength === 'undefined') {
    getPlaylistLength = undefined;
}
if (typeof getHardestHomework === 'undefined') {
    getHardestHomework = undefined;
}
if (typeof createPhonebook === 'undefined') {
    createPhonebook = undefined;
}

module.exports = {
    isAdmin,
    getEmail,
    getPlaylistLength,
    getHardestHomework,
    createPhonebook
};