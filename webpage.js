const innerSearch = document.getElementById("searchbox");
const btnclick = document.getElementById("btnclick");
 
let getProdect = document.getElementById("Items"); //moved to top to have global scope
let getArray ='';


fetch("https://fakestoreapi.com/products?limit=10")  //request data from server.
.then((response)=> response.json()) //return the data in JASON formate and in here data type is array. 
              //.then((res) => console.log(res));
.then((productLIST) =>{
    getArray = productLIST; //store the data in getArray variable. 
    productLIST.map((obj) => {ProductAdd(obj)}); 
});

btnclick.onclick = () => { 
    getProdect.innerHTML =''; //move outside of for loop
    for(let i =0; i<getArray.length; i++){
        if(getArray[i].title.toLowerCase().includes(innerSearch.value)){
            ProductAdd(getArray[i]);
        }
    }
};

function buttonChange(object)
          {
    let btn = object.target;  // object.target refers to the clicked  element (btn). 
    let btnClass = btn.getAttribute("class"); // In here getAttribute() will only return true or null for attribute with boolean values.
    if(btnClass =="btn btn-outline-secondary"){
        btn.innerHTML ="dismissed";
        btn.setAttribute("class", "btn btn-outline-danger"); // setAttribute()update the existing attribute value. 
    } else{
        btn.innerHTML ="dismiss";
        btn.setAttribute("class", "btn btn-outline-secondary");
    }
}

function ProductAdd(productLIST){
    const {title,price,description,category,image} = productLIST;
    let stringProduct =`
    <div class="row">
    <div class="col-md-7">
        <h2> ${title}</h2>
        <div> <b>Price:</b> $ ${price}</div>
        <p> <b>Description:</b> ${description}</p>
        <div><b>Category:</b> ${category}</div>
        <div class="my-3">
        <button  class= "btn btn-outline-secondary" onclick="buttonChange(event)">Dismiss </button>
        </div>
    </div>
    <div class="col-md-5">
        <img src ="${image}" alt ="${title}">
    </div>
</div> 
<hr />

<br>
</div> `;
getProdect.innerHTML+=stringProduct;
}