const img = document.getElementById("main");
let h = img.clientHeight;

const introText = document.getElementById("intro-text");
introText.style.height = "" + h + "px";
introText.style.paddingTop = "" + h / 2 + "px";


//for resizing centering text when typing animation 
window.addEventListener("resize", function (event) {

    h = img.clientHeight;

    introText.style.height = "" + h + "px";
    introText.style.paddingTop = "" + h / 2 + "px";

});


const typeText = document.getElementById('typeText')
const done = true;
const intro = "Hello, I am Daniel Romo."
const second = "This is me!"
let start = true

const type = () => {
    if (typeText.innerHTML.length < intro.length) {
        typeText.innerHTML = typeText.innerHTML.concat(intro[typeText.innerHTML.length])
        console.log(typeText.innerHTML)
    }
    else {
        clearInterval(typing)
        const deleteTyping = setInterval(() => {
            typeText.innerHTML = typeText.innerHTML.slice(0, -1)
            console.log(typeText.innerHTML);
            if (typeText.innerHTML.length == 0){
                clearInterval(deleteTyping)
                const secondType = setInterval(()=>{
                    if(typeText.innerHTML.length < second.length)
                        typeText.innerHTML = typeText.innerHTML.concat(second[typeText.innerHTML.length])
                    else
                        clearInterval(secondType)

                    console.log('ended');
                },200)
            }
                
        }, 100)
    }
}

const typing = setInterval(type, 200)


// $('.nav-link').on('click', function () {
//     $('.navbar-toggler').trigger('click');
// });
// $('#gitHub').hover(function () {
//     $(this).css("background-color", "#5a457a");
// }, function () {
//     $(this).css("background-color", "#6e5494");
// });
