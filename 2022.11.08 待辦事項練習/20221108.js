let data=
[{
    "content":"背單字x10"
 },
 {
    "content":"23:00睡覺"
 }
]
const list=document.querySelector(".list");
function rederData()
{
    let str="";
    data.forEach(function(item,index)
    {
        str+=`<li>${item.content}  <input class="delete" type="button" data-num="${index}" value="刪除待辦"></li>`
        list.innerHTML=str;
    })
}
rederData();


const txt=document.querySelector(".txt");
const save=document.querySelector(".save");

//新增
save.addEventListener("click",function(e)
{
    let obj={};
    obj.content=txt.value;
    data.push(obj);
    txt.value="";
    rederData();
})

//刪除
list.addEventListener("click",function(e)
{
    if(e.target.getAttribute("class")!=="delete")
    {
        alert("你要點刪除鈕啦");
        return;
    }
    let num=e.target.getAttribute("data-num");
    console.log(num);
    data.splice(num,1);
    rederData();
    
})
