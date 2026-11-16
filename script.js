
const characters = [
  { name: "Sakura", skin: "#f6d1bd", hair: "#493044", eyes: "#80506d" },
  { name: "Yuki", skin: "#f3cdbb", hair: "#c6a0a8", eyes: "#66899a" },
  { name: "Aiko", skin: "#dca98e", hair: "#302b3d", eyes: "#7a5944" }
];

const catalog = {
  tops: [
    ["Classic blouse", "👚", "#f3b7ca"],
    ["Pink cardigan", "🧥", "#e9a0bd"],
    ["Sailor top", "🎀", "#9cb9d8"],
    ["Cute sweater", "🩷", "#c9acd9"],
    ["Summer shirt", "🌼", "#f1d38e"],
    ["Black crop top", "🖤", "#514451"]
  ],
  bottoms: [
    ["Pleated skirt", "👗", "#e9a0bd"],
    ["Long skirt", "🌸", "#b9a5d5"],
    ["Wide trousers", "👖", "#9db6d5"],
    ["Cute shorts", "🩳", "#edc2a7"],
    ["School skirt", "🎒", "#6d789c"],
    ["Pink pants", "💗", "#e7a9bd"]
  ],
  dresses: [
    ["Princess dress", "👑", "#e9a0bd"],
    ["Flower dress", "🌷", "#d8b4d8"],
    ["Lolita dress", "🎀", "#a9b7d8"],
    ["Summer dress", "🌻", "#f0d58e"]
  ],
  shoes: [
    ["Mary Janes", "👞", "#9b647c"],
    ["Pink boots", "👢", "#d98eaa"],
    ["White sneakers", "👟", "#e9e5e4"],
    ["Cute heels", "👠", "#bd809c"]
  ],
  hair: [
    ["Long hair", "💇🏻‍♀️", "long"],
    ["Twin tails", "🎀", "twin"],
    ["Short bob", "✂️", "bob"],
    ["High ponytail", "🌸", "pony"],
    ["Wavy hair", "✨", "wavy"]
  ],
  accessories: [
    ["Hair bow", "🎀", "bow"],
    ["Flower clip", "🌼", "flower"],
    ["Necklace", "📿", "necklace"],
    ["Handbag", "👜", "bag"],
    ["Glasses", "👓", "glasses"]
  ]
};

const defaultLook = {
  tops: 0,
  bottoms: 0,
  dresses: -1,
  shoes: 0,
  hair: 0,
  accessories: -1
};

let characterIndex = 0;
let activeCategory = "tops";
let look = { ...defaultLook };
let colors = {
  tops: "#f3b7ca",
  bottoms: "#e9a0bd",
  dresses: "#e9a0bd",
  shoes: "#9b647c",
  hair: "#493044"
};

const doll = document.getElementById("doll");
const itemsBox = document.getElementById("items");
const colorPicker = document.getElementById("colorPicker");
const colorLabel = document.getElementById("colorLabel");

function hairBack(style, color) {
  if (style === "bob") {
    return `<path d="M139 139 Q125 44 200 42 Q280 42 263 150 L258 205 Q230 228 211 188 L190 190 Q160 225 140 190 Z" fill="${color}"/>`;
  }
  if (style === "twin") {
    return `<path d="M143 117 Q130 48 200 43 Q273 45 259 130 L265 245 Q247 267 230 233 L238 137 L160 137 L166 235 Q145 261 130 238 Z" fill="${color}"/><path d="M145 117 Q102 105 108 190 Q112 240 137 239 Q153 230 145 117Z M256 117 Q298 105 292 190 Q288 240 263 239 Q247 230 256 117Z" fill="${color}"/>`;
  }
  if (style === "pony") {
    return `<path d="M143 128 Q127 43 200 42 Q280 43 259 145 L258 205 Q240 220 224 186 L233 123 Z" fill="${color}"/><path d="M250 90 Q323 88 292 180 Q280 230 300 270 Q255 267 255 210 Q270 145 230 140Z" fill="${color}"/>`;
  }
  if (style === "wavy") {
    return `<path d="M140 130 Q124 40 200 42 Q281 40 260 140 Q278 200 257 235 Q238 249 244 205 L233 143 L164 143 Q155 190 160 232 Q134 253 128 222 Q119 180 140 130Z" fill="${color}"/>`;
  }
  return `<path d="M140 135 Q120 40 200 42 Q280 40 260 135 Q275 190 255 260 Q240 270 240 230 L235 140 L165 140 Q160 205 160 245 Q135 265 128 225 Q120 180 140 135Z" fill="${color}"/>`;
}

function hairFront(style, color) {
  let fringe = `<path d="M140 116 Q150 48 205 58 Q250 54 261 120 Q236 99 218 108 Q198 122 183 104 Q164 123 140 116Z" fill="${color}"/>`;
  if (style === "bob") {
    fringe += `<path d="M140 120 Q126 150 142 180 L150 203 Q159 192 158 160Z M260 120 Q274 150 258 180 L250 203 Q241 192 242 160Z" fill="${color}"/>`;
  }
  if (style === "twin") {
    fringe += `<path d="M137 112 Q145 80 165 80 Q158 108 160 127Z M262 112 Q255 80 235 80 Q242 108 240 127Z" fill="${color}"/>`;
  }
  return fringe;
}

function topShape(index, color) {
  const shapes = [
    `<path d="M151 221 Q173 205 185 209 L200 225 L215 209 Q230 205 249 221 L270 310 Q245 329 225 317 L221 278 L221 385 L179 385 L179 278 L175 317 Q150 329 130 310Z" fill="${color}" stroke="#ffffff" stroke-width="2"/>`,
    `<path d="M151 221 Q175 205 185 211 L200 230 L215 211 Q230 205 249 221 L270 315 L226 320 L221 275 L221 385 L179 385 L179 275 L174 320 L130 315Z" fill="${color}" stroke="#fff" stroke-width="2"/><path d="M180 222 L200 245 L220 222 L212 385 L188 385Z" fill="#fff" opacity=".25"/>`,
    `<path d="M151 221 L185 210 L200 229 L215 210 L249 221 L268 315 L225 320 L220 385 L180 385 L175 320 L132 315Z" fill="${color}" stroke="#fff" stroke-width="2"/><path d="M181 223 L200 244 L219 223" fill="none" stroke="#fff" stroke-width="5"/>`,
    `<path d="M151 221 Q175 205 185 211 L200 229 L215 211 Q230 205 249 221 L270 315 L225 320 L221 385 L179 385 L175 320 L130 315Z" fill="${color}" stroke="#fff" stroke-width="2"/><path d="M183 240 Q200 258 217 240" fill="none" stroke="#fff" stroke-width="4"/>`,
    `<path d="M151 221 Q175 205 185 211 L200 229 L215 211 Q230 205 249 221 L270 315 L225 320 L221 385 L179 385 L175 320 L130 315Z" fill="${color}" stroke="#fff" stroke-width="2"/>`,
    `<path d="M151 221 Q175 205 185 211 L200 229 L215 211 Q230 205 249 221 L270 315 L225 320 L221 385 L179 385 L175 320 L130 315Z" fill="${color}" stroke="#fff" stroke-width="2"/>`
  ];
  return shapes[index] || shapes[0];
}

function bottomShape(index, color) {
  if (index === 2 || index === 5) {
    return `<path d="M165 374 L235 374 L244 540 L207 540 L199 430 L191 540 L154 540Z" fill="${color}" stroke="#fff" stroke-width="2"/>`;
  }
  if (index === 3) {
    return `<path d="M166 374 L234 374 L244 470 L207 470 L200 430 L193 470 L156 470Z" fill="${color}" stroke="#fff" stroke-width="2"/>`;
  }
  if (index === 1) {
    return `<path d="M175 374 L225 374 L270 525 Q200 555 130 525Z" fill="${color}" stroke="#fff" stroke-width="2"/>`;
  }
  return `<path d="M174 374 L226 374 L265 500 L245 535 L200 520 L155 535 L135 500Z" fill="${color}" stroke="#fff" stroke-width="2"/>`;
}

function dressShape(index, color) {
  const hem = index === 1 ? 505 : 530;
  return `<path d="M151 221 Q175 205 185 211 L200 229 L215 211 Q230 205 249 221 L263 330 L${index === 2 ? 245 : 275} ${hem} Q200 ${hem + 22} ${index === 2 ? 155 : 125} ${hem} L137 330Z" fill="${color}" stroke="#fff" stroke-width="3"/><path d="M185 225 L200 250 L215 225" fill="none" stroke="#fff" stroke-width="4" opacity=".8"/><path d="M145 380 Q200 400 255 380" fill="none" stroke="#fff" stroke-width="2" opacity=".6"/>`;
}

function accessoryShape(type) {
  if (type === "bow") return `<path d="M155 82 Q120 50 130 91 Q140 110 165 94 Q180 120 190 93 Q190 62 165 82Z" fill="#e88eaf" stroke="#fff" stroke-width="3"/>`;
  if (type === "flower") return `<g transform="translate(250 105)"><circle r="8" fill="#f4c66c"/><circle cy="-12" r="8" fill="#fff"/><circle cx="12" r="0" fill="#fff"/><circle cx="12" cy="0" r="8" fill="#fff"/><circle cy="12" r="8" fill="#fff"/><circle cx="-12" r="8" fill="#fff"/></g>`;
  if (type === "necklace") return `<path d="M175 224 Q200 265 225 224" fill="none" stroke="#d6ad5d" stroke-width="4"/><path d="M200 254 l-7 9 7 9 7-9Z" fill="#e7b9cf"/>`;
  if (type === "bag") return `<g><path d="M250 335 Q280 335 280 365 L280 420 L245 420 L245 365Z" fill="#d99bb5" stroke="#fff" stroke-width="3"/><path d="M251 350 Q250 325 263 325 Q278 325 275 350" fill="none" stroke="#9b647c" stroke-width="5"/></g>`;
  if (type === "glasses") return `<g fill="none" stroke="#75536a" stroke-width="4"><rect x="159" y="126" width="30" height="19" rx="7"/><rect x="211" y="126" width="30" height="19" rx="7"/><path d="M189 134 L211 134"/></g>`;
  return "";
}

function renderDoll() {
  const c = characters[characterIndex];
  const hairIndex = Math.max(0, look.hair);
  const hairStyle = catalog.hair[hairIndex][2];
  const hairColor = colors.hair || c.hair;

  let outfit = "";
  if (look.dresses >= 0) {
    outfit += dressShape(look.dresses, colors.dresses);
  } else {
    outfit += bottomShape(Math.max(0, look.bottoms), colors.bottoms);
    outfit += topShape(Math.max(0, look.tops), colors.tops);
  }

  const shoes = `<path d="M153 530 Q170 523 191 537 L190 553 Q165 563 145 551Z M209 537 Q230 523 247 530 L255 551 Q235 563 210 553Z" fill="${colors.shoes}" stroke="#fff" stroke-width="3"/>`;

  let extra = "";
  if (look.accessories >= 0) {
    extra = accessoryShape(catalog.accessories[look.accessories][2]);
  }

  doll.innerHTML = `
    <defs>
      <linearGradient id="skinShade" x2="0" y2="1">
        <stop offset="0" stop-color="${c.skin}"/>
        <stop offset="1" stop-color="#e9b9a7"/>
      </linearGradient>
    </defs>
    ${hairBack(hairStyle, hairColor)}
    <path d="M176 183 L224 183 L225 222 L175 222Z" fill="${c.skin}"/>
    <path d="M165 218 Q200 203 235 218 L252 330 L238 390 L162 390 L148 330Z" fill="url(#skinShade)" stroke="#dba996" stroke-width="1"/>
    <path d="M151 224 Q134 223 129 246 L111 355 Q108 373 122 375 Q136 377 141 357 L171 267Z" fill="${c.skin}" stroke="#dba996" stroke-width="2"/>
    <path d="M249 224 Q266 223 271 246 L289 355 Q292 373 278 375 Q264 377 259 357 L229 267Z" fill="${c.skin}" stroke="#dba996" stroke-width="2"/>
    <path d="M168 375 L197 375 L195 540 L157 540Z" fill="${c.skin}" stroke="#dba996" stroke-width="2"/>
    <path d="M203 375 L232 375 L243 540 L205 540Z" fill="${c.skin}" stroke="#dba996" stroke-width="2"/>
    <path d="M158 540 Q175 535 195 544 L193 559 L145 559 Q140 550 158 540Z" fill="#f2d5c9"/>
    <path d="M207 544 Q227 535 244 540 Q262 550 255 559 L207 559Z" fill="#f2d5c9"/>
    <ellipse cx="200" cy="126" rx="59" ry="73" fill="url(#skinShade)" stroke="#dba996" stroke-width="1.5"/>
    <path d="M144 118 Q150 50 202 52 Q251 51 259 119 Q242 92 222 99 Q203 105 189 94 Q170 111 144 118Z" fill="${hairColor}"/>
    <path d="M170 135 Q183 127 193 136" fill="none" stroke="${c.eyes}" stroke-width="4" stroke-linecap="round"/>
    <path d="M207 136 Q219 127 230 135" fill="none" stroke="${c.eyes}" stroke-width="4" stroke-linecap="round"/>
    <ellipse cx="183" cy="145" rx="5" ry="8" fill="${c.eyes}"/>
    <ellipse cx="218" cy="145" rx="5" ry="8" fill="${c.eyes}"/>
    <circle cx="184" cy="142" r="2" fill="white"/>
    <circle cx="219" cy="142" r="2" fill="white"/>
    <path d="M195 165 Q200 169 205 165" fill="none" stroke="#bd7f80" stroke-width="2" stroke-linecap="round"/>
    <ellipse cx="164" cy="162" rx="11" ry="5" fill="#e99ca6" opacity=".35"/>
    <ellipse cx="236" cy="162" rx="11" ry="5" fill="#e99ca6" opacity=".35"/>
    ${outfit}
    ${shoes}
    ${hairFront(hairStyle, hairColor)}
    ${extra}
  `;
  document.getElementById("characterName").textContent = c.name;
  document.getElementById("characterLabel").textContent =
    `0${characterIndex + 1} / 03`;
}

function showItems() {
  document.querySelectorAll(".tab").forEach(tab => {
    tab.classList.toggle("active", tab.dataset.category === activeCategory);
  });

  itemsBox.innerHTML = catalog[activeCategory].map((item, index) => {
    const selected = look[activeCategory] === index;
    return `
      <button class="item ${selected ? "selected" : ""}" data-index="${index}">
        <span class="emoji">${item[1]}</span>
        ${item[0]}
      </button>
    `;
  }).join("");

  itemsBox.querySelectorAll(".item").forEach(button => {
    button.addEventListener("click", () => {
      const index = Number(button.dataset.index);
      look[activeCategory] = index;

      if (activeCategory === "dresses" && index >= 0) {
        // A dress replaces the separate top and bottom.
      } else if (activeCategory === "tops" || activeCategory === "bottoms") {
        look.dresses = -1;
      }

      if (activeCategory === "hair") {
        colors.hair = characters[characterIndex].hair;
      }

      showItems();
      renderDoll();
    });
  });

  const currentIndex = look[activeCategory];
  const selectedItem = catalog[activeCategory][currentIndex];
  if (selectedItem && activeCategory !== "hair" && activeCategory !== "accessories") {
    colorPicker.value = colors[activeCategory];
    colorLabel.textContent = selectedItem[0];
  } else if (activeCategory === "hair") {
    colorPicker.value = colors.hair;
    colorLabel.textContent = "Hair colour";
  } else {
    colorLabel.textContent = "Choose an item";
  }
}

document.getElementById("tabs").addEventListener("click", event => {
  const tab = event.target.closest(".tab");
  if (!tab) return;
  activeCategory = tab.dataset.category;
  showItems();
});

colorPicker.addEventListener("input", event => {
  const value = event.target.value;
  colorLabel.textContent = value;

  if (activeCategory === "hair") {
    colors.hair = value;
  } else if (["tops", "bottoms", "dresses", "shoes"].includes(activeCategory)) {
    colors[activeCategory] = value;
  }
  renderDoll();
});

document.getElementById("prevCharacter").addEventListener("click", () => {
  characterIndex = (characterIndex + characters.length - 1) % characters.length;
  colors.hair = characters[characterIndex].hair;
  renderDoll();
  showItems();
});

document.getElementById("nextCharacter").addEventListener("click", () => {
  characterIndex = (characterIndex + 1) % characters.length;
  colors.hair = characters[characterIndex].hair;
  renderDoll();
  showItems();
});

document.getElementById("resetBtn").addEventListener("click", () => {
  look = { ...defaultLook };
  colors = {
    tops: "#f3b7ca",
    bottoms: "#e9a0bd",
    dresses: "#e9a0bd",
    shoes: "#9b647c",
    hair: characters[characterIndex].hair
  };
  colorPicker.value = "#f2a9c5";
  renderDoll();
  showItems();
});

document.getElementById("randomBtn").addEventListener("click", () => {
  Object.keys(catalog).forEach(category => {
    look[category] = Math.floor(Math.random() * catalog[category].length);
  });

  if (look.dresses >= 0) {
    // Keep the dress as the main outfit.
  }

  colors.tops = randomPastel();
  colors.bottoms = randomPastel();
  colors.dresses = randomPastel();
  colors.shoes = randomPastel();
  colors.hair = randomHairColour();

  activeCategory = "tops";
  renderDoll();
  showItems();
});

function randomPastel() {
  const colours = ["#f2b7ca", "#c7b5df", "#a9c6df", "#f2d59a", "#b9d8c0", "#e6a9a9"];
  return colours[Math.floor(Math.random() * colours.length)];
}

function randomHairColour() {
  const colours = ["#493044", "#b77b83", "#a17c61", "#6d638e", "#d1a16d", "#343044"];
  return colours[Math.floor(Math.random() * colours.length)];
}

renderDoll();
showItems();
