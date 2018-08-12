

setInterval(()=>{
    let imgs = $('#images>img')
    let len = imgs.length;
    imgs.each((i,e)=>{
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
},1000)