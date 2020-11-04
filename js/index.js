

const API_URL = "http://localhost:3000/api/posts";
const API_BASE_URL = "http://localhost:3000/";

window.onload = () => {
    getPosts();
}

const getPosts = () => {
    fetch(API_URL,{
        method:'GET'
    }).then((response)=>{
        return response.json();
    }).then((data)=>{
        
        buildPosts(data);
    }).catch((error)=>{
        console.log(error);
    })


}

const buildPosts = (blogPosts) => {
    let blogPostContent="";
    for(blogpost of blogPosts){
        const postDate=new Date(parseInt(blogpost.added_date)).toDateString();
        const postImage=`${API_BASE_URL}${blogpost.post_image}`;
        const postLink=`/post.html?id=${blogpost.id}`;
    blogPostContent+=`<a class="post-link" href="${postLink}"><div class="blog">
    <div class="blog-image" style="background-image:url(${postImage})"> </div>
     <div class="blog-details">
         <div class="blog-date">${postDate}</div>
         <div class="blog-title">${blogpost.title}</div>
         <div class="blog-content">${blogpost.content}</div>
         
     </div>
 </div></a>`
}
document.querySelector('.blog-Posts').innerHTML=blogPostContent;
}


/*!
 * Run a callback function after scrolling has stopped
 * (c) 2017 Chris Ferdinandi, MIT License, https://gomakethings.com
 * @param  {Function} callback The function to run after scrolling
 */
var scrollStop = function (callback) {

	// Make sure a valid callback was provided
	if (!callback || typeof callback !== 'function') return;

	// Setup scrolling variable
	var isScrolling;

	// Listen for scroll events
	window.addEventListener('scroll', function (event) {

		// Clear our timeout throughout the scroll
		window.clearTimeout(isScrolling);

		// Set a timeout to run after scrolling ends
		isScrolling = setTimeout(function() {
            let addPost=document.querySelector(".add-post");
            addPost.style.display='none';
			// Run the callback
			callback();

		}, 66);

	}, false);

};

scrollStop(function () {
    setTimeout(function(){ 
        let addPost=document.querySelector(".add-post");
     addPost.style.display="block";    
     }, 500);
     
    
});