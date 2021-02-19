// var element = document.createElement('div');

// element.style.cssText = "background:red; width:100px; height:100px; border-radius:100px;";

// document.body.append(element);

// var myFunction = function(event){
//     alert("hello, thank you for clicking");

// }

// element.addEventListener('click', myFunction)

function set(){
    // alert("clicked");
    let elements = document.getElementsByName('cssProperty');

    for (let i = 0; i < elements.length; i++){
        let cssProperty = elements[i].getAttribute('id');

        let cssValue = elements[i].value;

        let div = document.getElementById('modify');

        div.style[cssProperty] = cssValue;
        }
}

document.getElementById('set').addEventListener('click', set);

