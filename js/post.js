/**
 * TODO (Together): Create getPostIdParam to get the id of the post to use in the request later
 * TODO: Complete getPost function to get post data from API
 * TODO: Complete buildPost function to fill in the post data in the post.html file using ids
 */

const API_URL = "http://localhost:3000/api/posts/";
const API_BASE_URL = "http://localhost:3000/";

window.onload = () => {
    getPost();
    
}
const getPostIdParam= ()=>{
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    
    return urlParams.get("id");
}
const getPost = () => {
    const post_id=getPostIdParam();
let url=`${API_URL}${post_id}`;
console.log(url);
    fetch(url,{
    method:'GET'
}).then((response)=>{
    return response.json();
}).then((data)=>{
    buildPost(data);
}).catch((error)=>{
    console.log(error);
})
    // CODE GOES HERE
}

const buildPost = (data) => {

    const post_date=new Date(parseInt(data.added_date)).toDateString();  
    let image=`${API_BASE_URL}${data.post_image}`;
console.log(image)
    document.querySelector("header").style.backgroundImage=`url(${image})`  
    
    const post=`<div id="individual-post-title">
    ${data.title}
</div>
<div id="individual-post-date">Published On ${post_date}</div> 
<div id="individual-post-content">${data.content}
    </div>
`;
document.querySelector("#post-container").innerHTML=post;
    // HINT: Convert the date number to a Date string 
}

