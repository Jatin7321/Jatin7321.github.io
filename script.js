 window.addEventListener("load", function(){
    setTimeout(() => {
      document.getElementById("preloader").style.display = "none";
      document.getElementById("contents").style.display = "block";
    }, 3000);
  });

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


function showTab(tabId) {
    const contents = document.querySelectorAll('.tab-content');
    contents.forEach(content => {
        content.style.display = 'none';
    });
    const buttons = document.querySelectorAll('.tab-button');
    buttons.forEach(button => {
        button.classList.remove('active');
    });
    document.getElementById(tabId).style.display = 'block';
    event.currentTarget.classList.add('active');
}


const btn = document.getElementById("feedbackBtn");
const popup = document.getElementById("feedbackPopUp");
const close = document.getElementById("closePopUp");
btn.onclick = (e) => {
    e.preventDefault();
    popup.style.display = "flex";
};



window.onscroll = function() {
    let btn = document.getElementById("scrollBtn");
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        btn.style.display = "block";
    } else {
        btn.style.display = "none";
    }
};
close.onclick = () => popup.style.display = "none";
window.onclick = e => { if( e.target === popup) popup.style.display = "none";}

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
    }, 7000);
}