var AllData="";

function getResponseCallBack(){
var resp=this.responseText;
var jsObj=JSON.parse(resp);
AllData=jsObj.products
}


function loadDataFromApi(){
var url="https://dummyjson.com/products"
objRequest=new XMLHttpRequest();
objRequest.open("GET",url,true);
objRequest.onload=getResponseCallBack;
objRequest.send();

}



function add_click(){
p1={};
p1["id"]=document.getElementById("Id").value;
p1["title"]=document.getElementById("title").value;
p1["description"]=document.getElementById("description").value;
p1["price"]=document.getElementById("price").value;
p1["discountPercentage"]=document.getElementById("discountPercentage").value;
p1["rating"]=3.5;
p1["stock"]=document.getElementById("stock").value;
p1["brand"]=document.getElementById("brand").value;
p1["category"]="Samsung";
p1["thumbnail"]="https://dummyjson.com/image/i/products/1/thumbnail.jpg";
p1["images"]=["https://dummyjson.com/image/i/products/1/1.jpg","https://dummyjson.com/image/i/products/1/2.jpg","https://dummyjson.com/image/i/products/1/3.jpg","https://dummyjson.com/image/i/products/1/4.jpg","https://dummyjson.com/image/i/products/1/thumbnail.jpg"];

objRequest=new XMLHttpRequest();
var url="https://dummyjson.com/products/add"
objRequest.open("POST",url,true);
objRequest.setRequestHeader('Content-Type','application/json');
objRequest.onload=callBack;
dataInJson=JSON.stringify(p1);
objRequest.send(dataInJson);
}

function callBack(){
alert("function added successfully!!!")}


function show_click(){
loadDataFromApi();

}
var cur_index=0;
function first_click(){
cur_index=0;
show_data_by_index(cur_index);


}




function previous_click(){
if(cur_index!=0)
cur_index--;

show_data_by_index(cur_index)

}

function last_click(){
cur_index=AllData.length-1;
show_data_by_index(cur_index);

}

function next_click(){
if (cur_index!=AllData.length-1)
cur_index++;
show_data_by_index(cur_index)
}



function show_data_by_index(i){
document.getElementById("Id").value=AllData[cur_index].id;
document.getElementById("title").value=AllData[cur_index].title;
document.getElementById("description").value=AllData[cur_index].description;
document.getElementById("price").value=AllData[cur_index].price;
document.getElementById("discountPercentage").value=AllData[cur_index].discountPercentage;
document.getElementById("stock").value=AllData[cur_index].stock;
document.getElementById("brand").value=AllData[cur_index].brand;
myImg=document.getElementById("imgProduct");
myImg.src=AllData[cur_index].thumbnail //thumbnail is the object like ,stock, brand etc.


}

