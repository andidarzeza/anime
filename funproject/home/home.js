
getLatestPosts();
initEventListeners();
setTimeout(() => {
    const myBanner = document.getElementById("myBanner");
    myBanner.style.transform = "translateY(100px)"
    myBanner.style.opacity = 1;
}, 200);
selectedImage = 0;
this.startImageAnimation();
function startImageAnimation() {
    setInterval(() => {
        let margin;
        if(selectedImage == 0) {
            console.log("test");
            margin = -100;
            selectedImage++;
        }
        else if(selectedImage === 1) {
            console.log("test 1");
            margin = -200
            selectedImage++;
        }
        else if(selectedImage === 2) {
            console.log("test 2");
            margin = 0
            selectedImage = 0;
        }
        document.getElementById("main-0").style.transform = `translateX(${margin}%)`;
        document.getElementById("main-1").style.transform = `translateX(${margin}%)`;
        document.getElementById("main-2").style.transform = `translateX(${margin}%)`;
    }, 6000);
}




function populateLatestPosts(latestPosts) {
    const latestPostsContainer = document.getElementById("latest-videos");
    if(latestPostsContainer) {
        var template = document.createElement('div');
        for(let i = 0;i<latestPosts.length;i++)  {
            template.innerHTML =
            `<div class="latest-video">
                <img style="width: 100%;height: 100%;" src="${latestPosts[i].img}">
                <div class="shadow">
                    <div class="text">
                    ${latestPosts[i].title}
                    </div>
                </div>
            </div>`.trim();
            latestPostsContainer.innerHTML = latestPostsContainer.innerHTML + template.innerHTML;
        } 
    }
}

function getLatestPosts() {
    // You can also retrieve the data from the db
    posts = [{
        img: "../images/main-1.jpg",
        title: "The Imprisoned Royal Shichibukai! Jinbe, Knight of the Sea"
    },
    {
        img: "../images/main-2.jpg",
        title: "The Hunt Begins"
    },
    {
        img: "../images/main-3.jpg",
        title: "The Slit-Eyed Woman"
    },
    {
        img: "../images/main-3.jpg",
        title: "The Slit-Eyed Woman"
    },
    {
        img: "../images/main-3.jpg",
        title: "The Slit-Eyed Woman"
    }];
    this.populateLatestPosts(posts); 
}

function initEventListeners()  {
    document.getElementById("right-button").addEventListener('click', ()=> {
        
    });
}