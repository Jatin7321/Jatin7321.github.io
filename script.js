function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: "smooth"});
  document.querySelector("#header .menu").classList.remove("active");
}

function toggleMenu() {
  document.querySelector("#header .menu").classList.toggle("active");
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

