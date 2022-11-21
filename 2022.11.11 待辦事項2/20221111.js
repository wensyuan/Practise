let data=[]
const list=document.querySelector(".list");


function reData()
{
    let str="";
    data.forEach(function(item,index)
    {
        str+=`<li>${item.content} <input type="button" data-num="${index}" value="刪除" class="delete"></li>`
    })
    list.innerHTML=str;
}
reData();
const txt=document.querySelector(".txt");
const save=document.querySelector(".save");
//新增
save.addEventListener("click",function(e)
{
    if(txt.value=="")
    {
        alert("請輸入待辦事項");
        return;
    }
    let obj={};
    obj.content=txt.value;
    data.push(obj);
    txt.value="";
    reData();
})
//刪除
list.addEventListener("click",function(e)
{
    if(e.target.getAttribute("class")!=="delete"){
        return;
      }
    let num=e.target.getAttribute("data-num");
    console.log(num);
    data.splice(num,1);
    alert("刪除成功");
    
    reData();
})