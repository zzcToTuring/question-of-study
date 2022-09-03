const list=document.getElementById("list")
// 使用传统的方式添加DOM结点，使用DOM结点操作了5次
// for (let i=0;i<5;i++){
//     const item =document.createElement("li")
//     item.innerHTML=`项目${i}`
//     list.appendChild(item)
// }

//使用文档碎片的方式，最终只操作了DOM结点一次
const fragment=document.createDocumentFragment();
for (let i=0;i<5;i++){
    const item=document.createElement("li")
    item.innerHTML=`项目${i}`
    fragment.appendChild(item)
}
list.appendChild(fragment)