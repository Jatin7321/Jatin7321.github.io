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
    '/blocks/redstone.png',
    '/blocks/iron.png',
    '/blocks/gold.png',
    '/blocks/diamond.png.png'
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

// Generate a good number of blocks. You might need to adjust this number.
generateBlocks(80); 
