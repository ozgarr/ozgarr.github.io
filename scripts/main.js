const myImage = document.querySelector("img");

myImage.onclick = () => {
    const mySrc = myImage.getAttribute("src");
    if (mySrc === "images/the-new-abnormal.jpg") {
        myImage.setAttribute("src", "images/the-strokes-couch.webp");
    } else if (mySrc === "images/the-strokes-couch.webp") {
        myImage.setAttribute("src", "images/marcinek.jpg");
        myHeading.textContent = 'marcinek to krul disco';
    } else {
        myImage.setAttribute("src", "images/the-new-abnormal.jpg");
    }
};

let myButton = document.querySelector("button");
let mySubHeading = document.querySelector("h2");

function setUserName() {
    const myName = prompt("Please enter your name.");
    if (!myName) {
        setUserName();
    } else {
    localStorage.setItem("name", myName);
    mySubHeading.textContent = `the strokes are cool, ${myName}`;
    }
}

if (!localStorage.getItem("name")) {
    setUserName();
} else {
    const storedName = localStorage.getItem("name");
    mySubHeading.textContent = `the strokes are cool, ${storedName}`;
}

myButton.onclick = () => {
    setUserName();
};
