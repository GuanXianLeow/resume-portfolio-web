setInterval(generateBubble,100)

function generateBubble(){

    let bubbleWrapper = document.querySelector(".bubbleWrapper");
    let bubbles = document.createElement("span");
    bubbleWrapper.appendChild(bubbles);
    let randomSizes= 30 + (Math.random() *30)
    bubbles.style.width = randomSizes + "px";
    bubbles.style.height = randomSizes + "px";
    bubbles.style.left = Math.random() * innerWidth + "px";
    setTimeout(() => {
        bubbles.remove()
    },3500); 




}


