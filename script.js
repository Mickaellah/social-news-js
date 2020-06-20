// This is an array with objects of links inside it.
const links = [
    {
        title: "Profile picture",
        url: "(http://profile-picture)",
        author: "Catherine"
    },
    {
        title: "Home page",
        url: "(https://home-page)",
        author: "Claudia"
    },
    {
        title: "New post",
        url: "(http://new-blog-post)",
        author: "Emily"
    }
]


// All the choices which users can choose from.
const menuOfChoices = `
1: Show links.
2: Add a link.
3: Remove a link.
0: Quit.
`;

// A prompt to show all the choices.
let userChoice = Number(prompt(`Choose an option: ${menuOfChoices}`));

// A function which is a responsible for the adding new link.
const addNewlink = () => {
    let userLinkTitle = prompt("Give your link's title.");
    let userLinkUrl = prompt("Give your link's url.");
    let userLinkAuthor = prompt("Give your link's author");

    let newLink = {
        title: userLinkTitle,
        url: userLinkUrl,
        author: userLinkAuthor
    }

    links.push(newLink);

// An if statement which is the responsible for the url that the user give, if they do not add http:// or https:// in front and it will add automatically.

    if (!newLink.url.startsWith("http://") && !newLink.url.startsWith("https://")) {
        alert("http://" + newLink.url);
    }
}


// A while loop for looping through the code until users choose to quit this program.
while (userChoice !== 0) {

// Switch statement which contains all the data and conditions for the all codes.
    switch (userChoice) {
        case 1:
            for (i = 0; i < links.length; i++) {
                let listOfLinks = `Title: ${links[i].title}
url: ${links[i].url}
author: ${links[i].author}`;
                alert(listOfLinks);
            }
            break
        case 2:
            addNewlink();
            break
        case 3:
            let indexToDelete = Number(prompt("Enter the link's index you want to delete."));
            let deletedLink = links.splice(indexToDelete--, 1);
            alert(`You have just deleted ${deletedLink[0].title}`);
            break
        case 4:
            break
    }
    userChoice = Number(prompt(`Choose an option: ${menuOfChoices}`));
}
