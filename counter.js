const add = document.querySelector("#add");
const reset = document.querySelector("#reset");
const sub = document.querySelector("#sub");
const count = document.querySelector("#count");

let counter =0;

add.addEventListener('click',()=>
{
  counter++;
  count.innerHTML=counter;
})

reset.addEventListener('click',()=>
{
  counter=0;
  count.innerHTML=counter;
})

sub.addEventListener('click',()=>
{
  counter--;
  count.innerHTML=counter;
})