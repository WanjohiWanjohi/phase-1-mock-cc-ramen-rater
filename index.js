const form = document.querySelector('form');
form.addEventListener('submit', addRestaurant)
const init = () => {
    fetch("http://localhost:3000/ramens")
    .then((response) =>response.json())
    .then((response) => response.forEach(element => {
      const img = document.createElement("img") 
      img.addEventListener("click", renderMenu(element));
      img.src = element.image
      document.querySelector("#ramen-menu").appendChild(img);
    }))
}
function addRestaurant(event) {
    event.preventDefault();
    const rst = {name:event.target.name.value, 
    restaurant:event.target.restaurant.value,
    image:event.target.image.value, 
    rating:event.target.rating.value, 
    comment:event.target.new_comment.value,
    };
    const img = document.createElement("img") 
    img.src = rst.image
    document.querySelector("#ramen-menu").appendChild(img);

    // fetch("http://localhost:3000/ramens" ,{
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json',
    //         'Accept': 'application/json',

    //     },
    //     body: JSON.stringify(rst )});

    console.log(rst)
}
function renderMenu(element) {
    document.querySelector(".detail-image").src = element.image
    document.querySelector(".name").innerHTML = element.name
    document.querySelector(".restaurant").innerHTML = element.restaurant
    document.querySelector("#rating-display").innerHTML = element.rating
    document.querySelector("#comment-display").innerHTML = element.comment

}
document.addEventListener('DOMContentLoaded',init());