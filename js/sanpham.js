
const product ={
        name : "xe điện VF9",
        image : "../assets/images/VinFast-VF9.jpg",
        price : "1.300.000.000 VNĐ",
        description : "Xe điện VF9 thân thiện với môi trường",
        link : "../html/tham-khao.html"
    };
const product2 ={
        name : "xe điện VF3",
        image : "../assets/images/VinFast-VF3.jpg",
        price : "299.000.000 VNĐ",
        description : "Xe điện VF3 thân thiện với môi trường, nhỏ gọn",
        link : "../html/tham-khao.html"
    };


function CreateItem(obj)
{
    //container item
    const containerItem = document.createElement("div"); //<div></div>
    containerItem.setAttribute("class", "container-item"); //<div class="container-item"></div>

    //image
    const containerImage = document.createElement("div");
    containerImage.setAttribute("class", "container-image");

    const image = document.createElement("img"); //<img></img>
    image.setAttribute("src", obj.image);
    image.setAttribute("alt", "Xe VF9");

    //info container
    const containerInfo = document.createElement("div");
    containerInfo.setAttribute("class", "container-info");

    const name = document.createElement("p"); //<p></p>
    name.innerHTML = obj.name;

    const price = document.createElement("p"); //<p></p>
    price.innerHTML = obj.price;

    const description = document.createElement("p");
    description.innerHTML = obj.description;

    const link = document.createElement("a");
    link.setAttribute("href", obj.link);
    link.innerHTML= "Xem chi tiết"; 

    //thêm image vào div image
    containerImage.appendChild(image);

    //thêm các phần tử vào container info
    containerInfo.appendChild(name);
    containerInfo.appendChild(price);
    containerInfo.appendChild(description);
    containerInfo.appendChild(link);

    //gộp 2 div image và info vào container item
    containerItem.appendChild(containerImage);
    containerItem.appendChild(containerInfo);

    //thêm containerItem vào productlist ở HTML
    document.getElementById("productlist").appendChild(containerItem);
}



    