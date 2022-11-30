
const inputText=document.getElementById('inputText');
const addBTN=document.getElementById('addBTN');
let todoData=[];

// 新增
addBTN.addEventListener("click",addTodo);
function addTodo()
{
    let todo=
    {
        txt:inputText.value,
        id:new Date().getTime(),
        checked:'',
    };
    if(todo.txt != "")
    {
        todoData.unshift(todo);
        inputText.value="";
    }
    updatelist();
}

//優化
inputText.addEventListener('keypress',function(e)
{
    if(e.key=='Enter')
    {
        addTodo();
    }
});
// 渲染
const todoList=document.getElementById('todoList');
function render(arr)
{
    let str='';
    arr.forEach(i=>
        {
            str+=
                `<li data-id="${i.id}">
                    <label class="checkbox" for=""> 
                        <input type="checkbox" ${i.checked}>
                        <span>${i.txt}</span>
                    </label>
                <a href="#" class="delete">X</a>
            </li>`;
        });
    todoList.innerHTML=str;
}

// tab切換(css樣式)
const tab=document.getElementById('tab');

let toggleStatus='all'; //用來裝點到的tab

tab.addEventListener("click",changeTab);
function changeTab(e)
{
    toggleStatus=e.target.dataset.tab;

    let tabs=document.querySelectorAll('#tab li');
    //tabs跑迴圈將 active class都移出
    tabs.forEach((i)=>
    {
        i.classList.remove('active');
    });
    e.target.classList.add('active');
    updatelist();
}

//刪除 & 切換checked 狀態功能
todoList.addEventListener('click',deleteAndChecked);
function deleteAndChecked(e)
{
    let id=e.target.closest('li').dataset.id;
    if(e.target.classList.value=='delete')
    {
        //a標籤先取消預設值
        e.preventDefault();
        //刪除事項，是ID也比較不怕刪錯
        todoData=todoData.filter((i)=>i.id != id);
    }else{
        //切換checked狀態切換
        todoData.forEach((i,index)=>
        {
            if(i.id==id)
            {
                if(todoData[index].checked == "checked")
                {
                    todoData[index].checked = "";
                }else{
                    todoData[index].checked = "checked";
                }
            }
        });
    }
    updatelist();
}
//更新代辦清單
function updatelist(){
    let showData=[];
    if (toggleStatus == 'all')
    {
        showData = todoData;
    }else if(toggleStatus == 'work')
    {
        showData = todoData.filter((i) => i.checked == '');
    }else
    {
        showData = todoData.filter((i) => i.checked == 'checked');
    }

    const workNum = document.getElementById('workNum');
    let todoLength=todoData.filter((i) => i.checked == '');
    workNum.textContent = todoLength.length;

    render(showData);
}
updatelist();

//刪除已完成todo
const deleteBtn=document.getElementById("deleteBtn");
deleteBtn.addEventListener('click',function(e)
{
    e.preventDefault();
    todoData = todoData.filter((i)=>i.checked != 'checked');
    updatelist();
})