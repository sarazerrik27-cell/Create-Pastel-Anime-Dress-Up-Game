
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;800&family=Playfair+Display:wght@600;700&display=swap');

:root {
  --pink: #e9a9c2;
  --dark: #654b5a;
  --cream: #fffaf7;
  --lavender: #eee8f6;
}

* { box-sizing: border-box; }

body {
  margin: 0;
  color: var(--dark);
  background:
    radial-gradient(circle at 10% 15%, #f9dce7 0, transparent 27%),
    radial-gradient(circle at 90% 80%, #e9e1f5 0, transparent 30%),
    #fff8f5;
  font-family: 'DM Sans', sans-serif;
}

.topbar {
  height: 76px;
  padding: 0 6%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: rgba(255,255,255,.82);
  border-bottom: 1px solid #f2e3e9;
}

.logo { font-weight: 800; letter-spacing: 3px; font-size: 19px; }
.logo span { color: #d98eae; }
.subtitle, .eyebrow {
  font-size: 10px;
  letter-spacing: 3px;
  font-weight: 800;
  color: #b68a9e;
}

.game {
  width: min(1120px, 94%);
  margin: 34px auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 25px;
}

.stage, .wardrobe {
  border: 1px solid #f0dfe6;
  border-radius: 24px;
  background: rgba(255,255,255,.88);
  box-shadow: 0 15px 45px rgba(130,85,108,.08);
  overflow: hidden;
}

.stage { padding: 22px; }
.stage-heading {
  display: flex;
  justify-content: space-between;
  font-size: 10px;
  font-weight: 800;
  letter-spacing: 2px;
  color: #a47e91;
}
.live { color: #83a88e; }

.character-area {
  position: relative;
  height: 540px;
  margin-top: 12px;
  border-radius: 18px;
  overflow: hidden;
  background:
    linear-gradient(90deg, transparent 49%, rgba(255,255,255,.45) 50%, transparent 51%),
    linear-gradient(#f9e9ee, #f4eaf2 65%, #eadde9);
}
.character-area::before {
  content: "";
  position: absolute;
  width: 270px;
  height: 270px;
  border: 1px solid rgba(255,255,255,.75);
  border-radius: 50%;
  top: 105px;
  left: 50%;
  transform: translateX(-50%);
}
.character-area::after {
  content: "";
  position: absolute;
  width: 100%;
  height: 65px;
  bottom: 0;
  background: rgba(255,255,255,.35);
  border-top: 1px solid rgba(255,255,255,.6);
}
#doll {
  position: relative;
  z-index: 1;
  display: block;
  height: 100%;
  width: 100%;
}
.character-name {
  position: absolute;
  z-index: 2;
  top: 18px;
  left: 20px;
  font-family: 'Playfair Display', serif;
  font-size: 23px;
  color: #a36f88;
}
.sparkle { position: absolute; color: white; z-index: 2; }
.sparkle-one { top: 110px; left: 35px; font-size: 27px; }
.sparkle-two { right: 35px; top: 210px; font-size: 35px; }

.character-switch {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 22px;
  padding-top: 14px;
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 2px;
}
.character-switch button {
  border: 0;
  border-radius: 50%;
  width: 34px;
  height: 34px;
  background: #f7e5ed;
  color: #a56f88;
  font-size: 24px;
  cursor: pointer;
}

.wardrobe { padding: 25px; }
.wardrobe-title { display: flex; justify-content: space-between; align-items: center; }
h1 {
  margin: 6px 0 20px;
  font-family: 'Playfair Display', serif;
  font-size: 34px;
  color: #735568;
}
.flower { font-size: 35px; }

.tabs {
  display: flex;
  flex-wrap: wrap;
  gap: 7px;
  padding-bottom: 17px;
  border-bottom: 1px solid #f2e5eb;
}
.tab {
  border: 1px solid #f0dfe7;
  background: #fff;
  color: #9a7889;
  padding: 9px 12px;
  border-radius: 20px;
  font: 600 11px 'DM Sans', sans-serif;
  cursor: pointer;
}
.tab.active, .tab:hover {
  color: white;
  background: #d99bb5;
  border-color: #d99bb5;
}

.items {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  padding: 18px 0;
  min-height: 225px;
}
.item {
  min-height: 91px;
  border: 1px solid #f0e3e9;
  border-radius: 14px;
  background: #fffafc;
  color: #866a7a;
  cursor: pointer;
  padding: 10px 5px;
  font: 600 11px 'DM Sans', sans-serif;
  transition: .2s;
}
.item:hover, .item.selected {
  border-color: #d99bb5;
  background: #fceef4;
  transform: translateY(-2px);
}
.item .emoji { display: block; font-size: 27px; margin-bottom: 7px; }

.color-panel {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 14px 0;
  border-top: 1px solid #f2e5eb;
  font-size: 10px;
  font-weight: 800;
  letter-spacing: 1px;
}
#colorPicker {
  width: 38px;
  height: 32px;
  border: 0;
  background: none;
  cursor: pointer;
}
#colorLabel { color: #aa8a9a; font-weight: 500; letter-spacing: 0; }

.actions { display: flex; gap: 10px; }
.actions button {
  flex: 1;
  padding: 13px 8px;
  border: 0;
  border-radius: 12px;
  cursor: pointer;
  font: 700 12px 'DM Sans', sans-serif;
}
.primary { background: #d99bb5; color: white; }
.secondary { background: #f1eaf5; color: #846b91; }
.actions button:hover { filter: brightness(.97); }
.tip { color: #ad91a0; font-size: 11px; text-align: center; margin-top: 16px; }

footer {
  text-align: center;
  color: #b292a2;
  font-size: 11px;
  padding: 5px 15px 25px;
}

@media (max-width: 760px) {
  .game { grid-template-columns: 1fr; margin: 18px auto; }
  .character-area { height: 480px; }
  .topbar { padding: 0 4%; }
  .subtitle { font-size: 8px; letter-spacing: 1px; }
  h1 { font-size: 29px; }
}
