function display(num){
    // console.log(result)
    result.value+=num
}

function allclr(){
    result.value=" "
}

function equal(){
    result.value=eval(result.value)
}

function clr(){
    result.value=result.value.slice(0,-1)
}