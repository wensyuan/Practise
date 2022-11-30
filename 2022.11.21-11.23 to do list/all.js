let data=[]
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
            <input type="checkbox" ${item.checkbox}>
            <span>${item.list}</span>
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
// tab 切換(css樣式)
const tab=document.getElementById('tab');
let toggleStatus='all';
tab.addEventListener('click',changeTab);
function changeTab(e)
{
    // console.log(e.target.dataset.tab);
    toggleStatus=e.target.dataset.tab;
    let tabs=document.querySelectorAll('#tab li');
    tabs.forEach((i)=>{
        i.classList.remove('active');
    });
    e.target.classList.add('active');
    updateList();
}
//更新待辦事項
function updateList()
{
    let showData=[];
    if(toggleStatus == "all")
    {
        showData=list;
    }else if(toggleStatus == "work"){
        showData = list.filter((i)=> i.checked=="");
    }else{
        showData = list.filter((i)=> i.checked=="checked");
    }

    const workNum=document.getElementById("workNum");
    let todoLength=list.filter((i)=>i.checked=="");
    workNum.textContent=todoLength.length;

    reData();
}
updateList();