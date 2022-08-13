let posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

const post = document.getElementById('post')

render()

function render() {
    let renderPost = ""
    for (i = 0; i < posts.length; i++) {
        renderPost += `<div id="profile">
                        <img src="${posts[i].avatar}" class="avatar">
                        <div id="account-desc">
                            <h4>${posts[i].name}</h4>
                            <p>${posts[i].location}</p>
                        </div>
                    </div>
                    
                    <img src="${posts[i].post}" class="post-image">
            
                    <div class="post-body">
                        <div class="icons">
                            <img class="img-icons" id="${i}" ondblClick="likesCount(this.id)" src="images/icon-heart.png">
                            <img class="img-icons" src="images/icon-comment.png">
                            <img class="img-icons" src="images/icon-dm.png">
                        </div>
                        <div id="post-text">
                            <p><span id="like-count" class="bold">${posts[i].likes} likes</span></p>
                            <p><span class="bold">${posts[i].username} </span>${posts[i].comment}</p>
                        </div> 
                    </div>`
    }   post.innerHTML = renderPost
}        

function likesCount(clicked_id) {
      let i = Number(clicked_id)
      posts[i].likes ++
      render()
  }
  






