document.addEventListener("DOMContentLoaded", function() {
    let div = document.createElement("div");
    div.className = "header-container";

    let h1 = document.createElement("h1");
    h1.className = "h1";
    let h1Text = document.createTextNode("This is an h1");
    let h2 = document.createElement("h2");
    h2.className = "h2";
    let h2Text = document.createTextNode("This is an h2");
    let h3 = document.createElement("h3");
    h3.className = "h3";
    let h3Text = document.createTextNode("This is an h3");
    let h4 = document.createElement("h4");
    h4.className = "h4";
    let h4Text = document.createTextNode("This is an h4");
    let h5 = document.createElement("h5");
    h5.className = "h5";
    let h5Text = document.createTextNode("This is an h5");
    let h6 = document.createElement("h6");
    h6.className = "h6";
    let h6Text = document.createTextNode("This is an h6");

    h1.appendChild(h1Text);
    h2.appendChild(h2Text);
    h3.appendChild(h3Text);
    h4.appendChild(h4Text);
    h5.appendChild(h5Text);
    h6.appendChild(h6Text);
    div.appendChild(h1);
    div.appendChild(h2);
    div.appendChild(h3);
    div.appendChild(h4);
    div.appendChild(h5);
    div.appendChild(h6);
    document.body.appendChild(div);

    let randomColor = ['gold', 'grey','darkgreen', 'lightgrey', 'brown', 'royalblue', 'pink', 'yellowgreen'];

    function selectColor () {
        let selectRandomColor = randomColor[Math.floor(Math.random()*randomColor.length)];
        return selectRandomColor; 
    }

    h1.addEventListener("click", function() {
        let randomColor2 = selectColor();
        h1.style.color = randomColor2;
    })

    h2.addEventListener("click", function() {
        let randomColor3 = selectColor();
        h2.style.color = randomColor3;
    })
    
    h3.addEventListener("click", function() {
        let randomColor4 = selectColor();
        h3.style.color = randomColor4;
    })

    h4.addEventListener("click", function() {
        let randomColor5 = selectColor();
        h4.style.color = randomColor5;
    })

    h5.addEventListener("click", function() {
        let randomColor6 = selectColor();
        h5.style.color = randomColor6;
    })

    h6.addEventListener("click", function() {
        let randomColor7 = selectColor();
        h6.style.color = randomColor7;
    })
    //create a button
    let button = document.createElement('button');
    button.className = "some";
    let btn =document.createTextNode("Click to add new list item");
    button.appendChild(btn);
    document.body.appendChild(button);

    button.addEventListener("click", list);

    //create a list
    let liNumber = 1; 
    function list () {
        let ul = document.createElement("ul");
        let li = document.createElement("li");
        let liText = document.createTextNode('This is list item ' + liNumber);
        liNumber = liNumber + 1;
        li.appendChild(liText);
        //liNumber = (liNumber + 1);
        ul.appendChild(li);
        div.appendChild(ul);
        document.body.appendChild(ul);
        //liNumber = liNumber + 1;

        li.addEventListener('click', function() {
            let randomSelected = selectColor();
            li.style.color = randomSelected;
        });

        li.addEventListener('dblclick', function() {
            li.remove();
        })
    }

    //button.addEventListener("click", list);
})


