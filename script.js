
const secondHand = document.querySelector('.second-hand')
const minutesHand = document.querySelector('.min-hand')
const hoursHand = document.querySelector('.hour-hand')


function setDate() {
    const now = new Date();
    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
    console.log(seconds)

    const minutes = now.getMinutes();
    const minutesDegrees = ((minutes/60)*360) + 90;
    minutesHand.style.transform = `rotate(${minutesDegrees}deg)`;


    const hours = now.getHours();
    const hoursDegrees = ((hours/60)*360)+90;
    hoursHand.style.transform = `rotate(${hoursDegrees}deg)`

    if(seconds===0){
        secondHand.style.transitionDuration = '0s';
        minutesHand.style.transitionDuration = '0s';
        hoursHand.style.transitionDuration = '0s';
       } else {
        secondHand.style.transitionDuration = '0.05s';
        minutesHand.style.transitionDuration = '0.05s';
        hoursHand.style.transitionDuration = '0.05s';
       }

}

setInterval(setDate,1000)