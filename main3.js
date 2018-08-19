function beginTimer(){
    let timer = setInterval(()=>{
    let divs = $('#images>div')
    let len = divs.length;
    divs.each((i,e)=>{
            let step = e.className.substr(4,1);
            let className = 0;
            if(step == 1){
                className = 'page' + len;
            }else if(step == len){
                className = 'page' + (len-1);
            }else{
                className = 'page' + (step-1);
            }
            $(e).removeClass().addClass(className)
        })
    },2000)
    return timer
}

let timer = beginTimer();

document.addEventListener('visibilitychange', function(e){
    console.log(document.hidden)
    if(document.hidden){
        window.clearInterval(timer)
    }else{
        timer = beginTimer()
    }
}, false)