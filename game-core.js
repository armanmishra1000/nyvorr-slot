// --- SYMBOLS & CANVAS SETUP ---
// Image objects for icons
let netflixImage = new Image();
let spotifyImage = new Image();
let youtubeImage = new Image();
let chatgptImage = new Image();
let coinImage = new Image();

export const SYMBOLS = [
    { name: "Netflix", service: "Netflix", draw: drawNetflixIcon, imagePath: "icons/netflix.png", imageRef: netflixImage },
    { name: "Spotify", service: "Spotify", draw: drawSpotifyIcon, imagePath: "icons/spotify.png", imageRef: spotifyImage },
    { name: "YouTube", service: "YouTube Premium", draw: drawYouTubeIcon, imagePath: "icons/YouTube.png", imageRef: youtubeImage },
    { name: "ChatGPT", service: "AI Tool", draw: drawChatGPTIcon, imagePath: "icons/chatgpt.png", imageRef: chatgptImage },
    { name: "Coin", service: "Credits", draw: drawCoinIcon, imagePath: "icons/coin.png", imageRef: coinImage }

];
export const SERVICE_MAPPING = {
    Netflix: "Netflix",
    Spotify: "Spotify",
    YouTube: "YouTube Premium",
    ChatGPT: "AI Tool",
    Coin: "Credits"

};
export const REEL_SYMBOL_DISTRIBUTION = [0,1,2,3,4,4,4,3,3,2,1,0,4,4,2,3,1,2,0,2];
export const PAYLINES = [
    [[0,0],[1,0],[2,0],[3,0],[4,0]], [[0,1],[1,1],[2,1],[3,1],[4,1]], [[0,2],[1,2],[2,2],[3,2],[4,2]],
    [[0,0],[1,1],[2,2],[3,1],[4,0]], [[0,2],[1,1],[2,0],[3,1],[4,2]],
    [[0,0],[1,0],[2,1],[3,2],[4,2]], [[0,2],[1,2],[2,1],[3,0],[4,0]],
    [[0,1],[1,2],[2,2],[3,2],[4,1]], [[0,1],[1,0],[2,0],[3,0],[4,1]], [[0,2],[1,1],[2,1],[3,1],[4,0]],
];
export const REELS = 5, ROWS = 3;
export const CANVAS_W = 600, CANVAS_H = 360;
export const P = 15, DIVIDER_W = 2;
export const REEL_W = (CANVAS_W - 2 * P - (REELS - 1) * DIVIDER_W) / REELS;
export const SYMBOL_H = (CANVAS_H - 2 * P) / ROWS;
export const SPIN_Y_OFFSET = P;

export let reels = [];
export let winLines = [];
export let winningSymbols = [];
export function clearWinLines() { winLines.length = 0; }
export function clearWinningSymbols() { winningSymbols.length = 0; }

// --- STATE THAT NEEDS GETTER/SETTER ---
let animating = false;
export function setAnimating(val) { animating = val; }
export function getAnimating() { return animating; }

// --- SYMBOL DRAWING ---

function drawNetflixIcon(ctx) {
    if (netflixImage && netflixImage.complete && netflixImage.naturalWidth > 0) {
        const aspectRatio = netflixImage.naturalWidth / netflixImage.naturalHeight;
        let w = 64, h = 64;
        if (aspectRatio > 1) {
            h = 64 / aspectRatio;
        } else {
            w = 64 * aspectRatio;
        }
        const xOffset = (64 - w) / 2;
        const yOffset = (64 - h) / 2;
        ctx.drawImage(netflixImage, xOffset, yOffset, w, h);
    } else {
        ctx.fillStyle = "#555";
        ctx.fillRect(0, 0, 64, 64);
        ctx.fillStyle = "white";
        ctx.font = "12px Arial";
        ctx.textAlign = "center";
        ctx.fillText("NFX", 32, 36);
    }
}

function drawSpotifyIcon(ctx) {
    if (spotifyImage && spotifyImage.complete && spotifyImage.naturalWidth > 0) {
        const aspectRatio = spotifyImage.naturalWidth / spotifyImage.naturalHeight;
        let w = 64, h = 64;
        if (aspectRatio > 1) {
            h = 64 / aspectRatio;
        } else {
            w = 64 * aspectRatio;
        }
        const xOffset = (64 - w) / 2;
        const yOffset = (64 - h) / 2;
        ctx.drawImage(spotifyImage, xOffset, yOffset, w, h);
    } else {
        ctx.fillStyle = "#555";
        ctx.fillRect(0, 0, 64, 64);
        ctx.fillStyle = "white";
        ctx.font = "12px Arial";
        ctx.textAlign = "center";
        ctx.fillText("SPT", 32, 36);
    }
}

function drawYouTubeIcon(ctx) {
    if (youtubeImage && youtubeImage.complete && youtubeImage.naturalWidth > 0) {
        const aspectRatio = youtubeImage.naturalWidth / youtubeImage.naturalHeight;
        let w = 64, h = 64;
        if (aspectRatio > 1) {
            h = 64 / aspectRatio;
        } else {
            w = 64 * aspectRatio;
        }
        const xOffset = (64 - w) / 2;
        const yOffset = (64 - h) / 2;
        ctx.drawImage(youtubeImage, xOffset, yOffset, w, h);
    } else {
        ctx.fillStyle = "#555";
        ctx.fillRect(0, 0, 64, 64);
        ctx.fillStyle = "white";
        ctx.font = "12px Arial";
        ctx.textAlign = "center";
        ctx.fillText("YT", 32, 36);
    }
}

function drawChatGPTIcon(ctx) {
    if (chatgptImage && chatgptImage.complete && chatgptImage.naturalWidth > 0) {
        const aspectRatio = chatgptImage.naturalWidth / chatgptImage.naturalHeight;
        let w = 64, h = 64;
        if (aspectRatio > 1) {
            h = 64 / aspectRatio;
        } else {
            w = 64 * aspectRatio;
        }
        const xOffset = (64 - w) / 2;
        const yOffset = (64 - h) / 2;
        ctx.drawImage(chatgptImage, xOffset, yOffset, w, h);
    } else {
        ctx.fillStyle = "#777";
        ctx.fillRect(0, 0, 64, 64);
        ctx.fillStyle = "white";
        ctx.font = "12px Arial";
        ctx.textAlign = "center";
        ctx.fillText("GPT", 32, 36);
    }
}

function drawCoinIcon(ctx) {
    if (coinImage && coinImage.complete && coinImage.naturalWidth > 0) {
        const aspectRatio = coinImage.naturalWidth / coinImage.naturalHeight;
        let w = 64, h = 64;
        if (aspectRatio > 1) {
            h = 64 / aspectRatio;
        } else {
            w = 64 * aspectRatio;
        }
        const xOffset = (64 - w) / 2;
        const yOffset = (64 - h) / 2;
        ctx.drawImage(coinImage, xOffset, yOffset, w, h);
    } else {
        ctx.fillStyle = "#777";
        ctx.fillRect(0, 0, 64, 64);
        ctx.fillStyle = "white";
        ctx.font = "12px Arial";
        ctx.textAlign = "center";
        ctx.fillText("CN", 32, 36);
    }
}

// --- REEL AND RENDER LOGIC ---
export function initReels(randSymbol) {
    reels = [];
    for (let i = 0; i < REELS; i++) {
        const symbols = [];
        for (let j = 0; j < ROWS; j++) symbols.push(randSymbol());
        reels.push({ symbols, animY: 0, spinning: false, targetSymbols: null, momentum: 0 });
    }
}

export function renderReels(ctx) {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    for (let i = 0; i < REELS; i++) {
        const reel = reels[i];
        for (let j = 0; j < ROWS + 1; j++) {
            const cell_base_x = P + i * (REEL_W + DIVIDER_W);
            const cell_base_y = P + (j * SYMBOL_H) - reel.animY;
            const symbolIdx = reel.symbols[j % ROWS];
            const symbolObj = SYMBOLS[symbolIdx];
            ctx.save();
            ctx.translate(cell_base_x, cell_base_y);
            const s = Math.min(REEL_W / 64, SYMBOL_H / 64) * 0.9;
            ctx.translate((REEL_W - (64 * s)) / 2, (SYMBOL_H - (64 * s)) / 2);
            ctx.scale(s, s);
            symbolObj.draw(ctx);
            ctx.restore();
        }
        if (i < REELS - 1) {
            const divider_x = P + (i * (REEL_W + DIVIDER_W)) + REEL_W + (DIVIDER_W / 2);
            ctx.save();
            ctx.strokeStyle = '#8A652D';
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(divider_x, P);
            ctx.lineTo(divider_x, CANVAS_H - P);
            ctx.stroke();
            ctx.restore();
        }
    }
}

// --- SPIN LOGIC ---
export function spinReel(reel, targetSymbols, cb, randSymbol, renderReels) {
    reel.spinning = true;
    reel.targetSymbols = targetSymbols;
    reel.animY = 0;
    reel.momentum = 30 + Math.random()*6;
    let spinSteps = 28 + Math.floor(Math.random()*7), steps = 0;
    function animate() {
        if (steps < spinSteps) {
            reel.animY += reel.momentum;
            if (reel.animY >= SYMBOL_H) {
                reel.animY = 0; reel.symbols.pop(); reel.symbols.unshift(randSymbol());
            }
            if (reel.momentum > 7) reel.momentum *= 0.98;
            steps++; renderReels();
            requestAnimationFrame(animate);
        } else {
            reel.symbols = [...targetSymbols];
            reel.animY = 0; reel.spinning = false;
            renderReels();
            if (cb) cb();
        }
    }
    animate();
}

export function randSymbol() {
    return REEL_SYMBOL_DISTRIBUTION[Math.floor(Math.random()*REEL_SYMBOL_DISTRIBUTION.length)];
}

export function preloadSymbolImages() {
    const promises = [];
    SYMBOLS.forEach(symbol => {
        if (symbol.imagePath && symbol.imageRef) {
            const promise = new Promise((resolve) => {
                symbol.imageRef.onload = () => resolve(symbol.imageRef);
                symbol.imageRef.onerror = () => {
                    console.error("Failed to load image:", symbol.imagePath);
                    resolve(null);
                };
                symbol.imageRef.src = symbol.imagePath;
            });
            promises.push(promise);
        }
    });
    return Promise.all(promises);
}