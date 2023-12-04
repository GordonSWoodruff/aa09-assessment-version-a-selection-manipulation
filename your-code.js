document.addEventListener('DOMContentLoaded', (e) => {
    // 1
    // Select the div with the id of "problem-one" and change the border color to
    // red and the border width to 3 pixels
    const prob1 = document.getElementById('problem-one');
    prob1.style.borderColor = "red";
    prob1.style.borderWidth = "3px";

    // 2
    // Select the text in the first div that has the class of "even" and change the
    // font color to green and the font style to bold
    const prob2 = document.body.getElementsByClassName('even');
    prob2[0].style.color = "green";
    prob2[0].style.fontWeight = "bold";

    // 3
    // Select all of the elements with the class of "odd" and add a box shadow. You
    // may choose your own box-shadow values.
    const prob3 = document.body.getElementsByClassName('odd');
    for(let i = 0; i < prob3.length; i++) {
        prob3[i].style.boxShadow = "5px 5px 5px black";
    }

    // 4
    // Select the fourth box with a selector of your choice. Change the text inside
    // the box to the string "Four"
    const prob4 = document.body.getElementsByClassName('even');
    prob4[1].innerHTML = "Four";

    // 5
    // Select the fifth box. Remove the text "5", and replace it with a child button that says "5!"
    const prob5 = document.getElementById('problem-five');
    const btn = document.createElement("button");
    btn.innerText = "5!";
    prob5.removeChild(prob5.firstChild);
    prob5.appendChild(btn);


    // 6
    // Select the span element. Remove it from the DOM.
    const prob6 = document.getElementById('root');
    const byeBye = document.querySelector("span");
    prob6.removeChild(byeBye);

    // 7
    // Select the element with the number 7, and change the number to 6 (because you
    // just removed number 6!)
    const prob7 = document.getElementsByClassName('seven');
    prob7[0].innerText = "6";

    // 8
    // Select the last box, and add the class of "last". This will apply new styling
    // to the box if successful. Change the text inside to box to "END!!!"
    const prob8 = document.getElementById('problem-eight');
    prob8.setAttribute('class', "last");
    prob8.innerHTML = "END!!!";
});
