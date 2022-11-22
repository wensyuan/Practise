let data=
[
    {
        "list":"list"
    },
    {
        "list":"整理電腦桌面"
    }
]
let checkbox=document.querySelector(".checkbox");
let newList=document.querySelector(".newItem");
let newBtn=document.querySelector(".btn");
let list=document.querySelector(".list");
//初始化
function reData()
{
    let str="";
    data.forEach(function(item,index)
    {
        str+=`<li>
        <label class="checkbox" for=""> 
            <input type="checkbox"><span>${item.list}</span>
        </label>
        <a href="#" class="delete" data-num="${index}">X</a>
    </li>`
    })
    list.innerHTML=str;
}
reData();
// 新增項目
newBtn.addEventListener("click",function(e)
{
    let obj={};
    obj.list=newList.value;
    data.push(obj);
    newList.value="";
    reData();
})

let delBtn=document.querySelector(".delete");
// 刪除項目
list.addEventListener("click",function(e)
{
    if(e.target.getAttribute("class")!=="delete")
    {
        return;
    }
    let num=e.target.getAttribute("data-num");
    console.log(num);
    data.splice(num,1);
    alert("刪除成功");
    reData();
})
const tab=document.querySelector(".tab");
const allTab=document.querySelector(".tab li");
console.log(tab);