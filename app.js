const generateRandomNumber= ()=> {
    let num=Math.floor(Math.random()*20);
    console.log("Random Number = "+num);
    return num;
}
const RandomNumber=generateRandomNumber();

const getInput= ()=> {
    let input=document.getElementById("input").value;
    // console.log("Input= "+input);
    return input;
}



const showResult=()=>{

        // let box=document.getElementById('box2');
        let result=document.getElementById('result');
        // box.appendChild(h1);
        if(getInput()<RandomNumber){
            result.innerHTML="Low, Try A larger Number";
        }
        else if(getInput()>RandomNumber){
            result.innerHTML="High, Try A Smaller Number";
        }
        else if (getInput()==RandomNumber){
            document.querySelector("body").style.backgroundColor="#60b347";
        let res=document.getElementById("number-result");
        result.innerHTML="Congratulations! You Won";
        res.innerHTML=RandomNumber;
    }
}

// generateResult();
