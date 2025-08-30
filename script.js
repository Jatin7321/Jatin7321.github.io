 /* window.addEventListener("load", function(){
    setTimeout(() => {
      document.getElementById("preloader").style.display = "none";
      document.getElementById("contents").style.display = "block";
    }, 5000);
  });*/

function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: "smooth"});
  document.querySelector("#header .menu").classList.remove("active");
}

function toggleMenu() {
  document.querySelector("#header .menu").classList.toggle("active");
}

function showDiv(id) {
  document.querySelectorAll('.content').forEach(div => {
    div.style.display = "none";
  });
  document.getElementById(id).style.display = "block";
}


// New code to generate Minecraft blocks
const minecraftGround = document.getElementById('minecraft-ground');
const blockImages = [
    '/blocks/coal.png',
    '/blocks/stone.png',
    '/blocks/redstone.png',
    '/blocks/iron.png',
    '/blocks/gold.png',
    '/blocks/diamond.png'
];

function getRandomImage() {
    const randomIndex = Math.floor(Math.random() * blockImages.length);
    return blockImages[randomIndex];
}

function generateBlocks(count) {
    for (let i = 0; i < count; i++) {
        const block = document.createElement('div');
        block.classList.add('block');
        block.style.backgroundImage = `url(${getRandomImage()})`;
        minecraftGround.appendChild(block);
    }
}

generateBlocks(80); 


const repoData = {
    ds: [
        "Singly Linked List"
    ],
    oop: [
        "Student Grade Card"
    ],
    work: [
        "Prashna Bhandar"
    ]
};
const tabs = document.querySelectorAll(".tab");
const list = document.getElementById("repo-list");

function loadList(tab) {
    list.innerHTML = "";
    repoData[tab].forEach( item => {
        const div = document.createElement("div");
        div.className = "item";
        div.textContent = item;
        list.appendChild(div);
    });
}

loadList("ds");

tabs.forEach( tab => {
   tab.addEventListener("click", () => {
       document.querySelector(".tab.active").classList.remove("active");
       tab.classList.add("active");
       loadList(tab.dataset.tab);
   }); 
});

// Show button after scrolling down
window.onscroll = function() {
    let btn = document.getElementById("scrollBtn");
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        btn.style.display = "block";
    } else {
        btn.style.display = "none";
    }
};

// Dragon scroll + animation
function scrollDragon() {
    let dragonWrapper = document.getElementById("dragonWrapper");
    
    dragonWrapper.style.display = "block";
    dragonWrapper.classList.add("fly");
    
    let scrollStep = -window.scrollY / 200;
    let scrollInterval = setInterval(function() {
        if (window.scrollY !== 0) {
            window.scrollBy(0, scrollStep);
        } else {
            clearInterval(scrollInterval);
        }
    }, 15);
    
    setTimeout(() => {
        dragonWrapper.style.display = "none";
        dragonWrapper.classList.remove("fly");
    }, 4000);
}