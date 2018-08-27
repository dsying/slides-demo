let divs = $('#images>div')
let len = divs.length;
var arr = ['4','1','2','3']

function beginTimer(){
    let timer = setInterval(()=>{
    divs.each((i,e)=>{
            let step = e.getAttribute('data').substr(-1,1)
            let dataName = '';

            if(step == 1){// page1 => page4
                dataName = 'page' + len;
            }else if(step == len){//page4 => page3
                dataName = 'page' + (len-1);
            }else{//掐头去尾 中间状态page(step-1)
                dataName = 'page' + (step-1);
            }
            dataName === 'page1'? $(e).addClass('current') : $(e).removeClass('current')
            $(e).attr('data',dataName);

        })
    },2000)
    return timer
}
let timer = beginTimer();

$('.btns button').each((i,e)=>{
    e.addEventListener('click',function(){
        window.clearInterval(timer)
        let curr_page = $('.current').html();
        let btn_num = i + 1;
        let offset = btn_num - curr_page;
        var page = ['page4','page1','page2','page3']
        console.log(offset)
        if (offset > 0) {
            //左移
            for(let i = 0;i < offset; i++){
                var a = arr.shift();
                arr.push(a)
            }
        }else{
            //右移
            console.log(Math.abs(offset))
            for(let i = 0;i < Math.abs(offset); i++){
                var a = arr.pop();
                console.log(a)
                arr.unshift(a)
            }
        }

        console.log(arr)
        divs.each((i,e)=>{
            let dataName = page[arr.indexOf(i + 1 + '')];
            dataName === 'page1'? $(e).addClass('current') : $(e).removeClass('current')
            $(e).attr('data',dataName);

        })
         timer = beginTimer()
    })

})

//当切换页面时 销毁定时器，切换回来时重新打开定时器。
document.addEventListener('visibilitychange', function(e){
    if(document.hidden){

    }else{
        timer = beginTimer()
    }
}, false)