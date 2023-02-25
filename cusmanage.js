var arr_ids=[];
var arr_names=[];
var arr_address=[];
var arr_mobile_nos=[];

function add_click(){
let id=document.getElementById("CustId").value;
let name=document.getElementById("CustName").value;
let address=document.getElementById("CustAdd").value;
let mobile_no=document.getElementById("CustMob").value;
arr_ids.push(id);
arr_names.push(name);
arr_address.push(address);
arr_mobile_nos.push(mobile_no);

display_info()

}



function search_click(){
let id=document.getElementById("CustId").value;
let i=arr_ids.indexOf(id);
if(i==-1){
alert("id not found")
}
else{
document.getElementById("CustId").value=arr_ids[i];
document.getElementById("CustName").value=arr_names[i];
document.getElementById("CustAdd").value=arr_address[i];
document.getElementById("CustMob").value=arr_mobile_nos[i];
}

}

function delete_click(){

let id=document.getElementById("CustId").value;
let i=arr_ids.indexOf(id);
if(i==-1){
alert("id is not loaded")}
else{
arr_ids.splice(i,1);
arr_names.splice(i,1);
arr_address.splice(i,1);
arr_mobile_nos.splice(i,1);
display_info();
}
alert("function deleted successfully!")

}


function modify_click(){
let id=document.getElementById("CustId").value;
let i=arr_ids.indexOf(id);
if (i==-1){
alert("id is not loaded")}
else{
arr_names[i]=document.getElementById("CustName").value;
arr_address[i]=document.getElementById("CustAdd").value;
arr_mobile_nos[i]=document.getElementById("CustMob").value;
}
display_info()

}

function show_click(){
display_info()

}
var cur_index=0;
function first_click(){
cur_index=0;
show_data_by_index(cur_index);

reset()

var cus_row=document.getElementById(cur_index.toString())
cus_row.style.backgroundColor="blue";
}
function previous_click(){
if(cur_index!=0)
cur_index--;

show_data_by_index(cur_index)
reset()
var cus_row=document.getElementById(cur_index.toString())
cus_row.style.backgroundColor="blue"
}

function last_click(){
cur_index=arr_ids.length-1;
show_data_by_index(cur_index);

reset()
var cus_row=document.getElementById(cur_index.toString())
cus_row.style.backgroundColor="blue";
}

function next_click(){
if (cur_index!=arr_ids.length-1)
cur_index++;
show_data_by_index(cur_index)
reset()
var cus_row=document.getElementById(cur_index.toString())
cus_row.style.backgroundColor="blue";

}


function reset(){
for(let i=0; i<arr_ids.length; i++){
var cus_row=document.getElementById(i.toString())
cus_row.style.backgroundColor="white";

}

}

function show_data_by_index(i){
document.getElementById("CustId").value=arr_ids[i];
document.getElementById("CustName").value=arr_names[i];
document.getElementById("CustAdd").value=arr_address[i];
document.getElementById("CustMob").value=arr_mobile_nos[i];

}



function display_info(){
var my_div=document.getElementById("my_div"); //is element ke div ko iss statement k through pakar lia
var my_table=`<table>
<tr>
<th>Id</th> <th>Name</th> <th>Address</th> <th>Mobile No</th>
</tr>`
for(let i=0; i<arr_ids.length; i++){
my_table+=`<tr id="${i.toString()}">
<th>${arr_ids[i]}</th> <th>${arr_names[i]}</th> <th>${arr_address[i]}</th> <th>${arr_mobile_nos[i]}</th>
</tr>`
}
my_table+="</table>"
my_div.innerHTML=my_table;


}