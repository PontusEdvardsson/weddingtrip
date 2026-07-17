const days = [
  { date: "Ons 5 augusti", from: "Kode", to: "Moray", plans: ["Ryanair FR5658: Landvetter 10:40 → Edinburgh 11:35", "Hämta hyrbil hos Dollar/Hertz 13:00", "Edinburgh Airport → Moray: cirka 3 tim 30 min", "Sikta på avfärd 13:30 och ankomst omkring 17:00–17:30", "Airbnb-incheckning efter 15:00", "Vila"] },
  { date: "Tors 6 augusti", from: "Elgin", to: "Elgin", plans: ["Vila och utforska närområdet"] },
  { date: "Fre 7 augusti", from: "Elgin", to: "Elgin", plans: ["Elgin → Drumbuie Farm: cirka 1 tim 15–30 min", "Avfärd senast 10:15 för lugn marginal", "Highland Coo Afternoon Tea 12:00–13:30", "Utforska Drumnadrochit med omnejd", "Tillbaka till Elgin: cirka 1 tim 15–30 min"] },
  { date: "Lör 8 augusti", from: "Elgin", to: "Elgin", plans: ["Förslag: avfärd mot Cove Sea Links 08:45", "Golf cirka 09:30–11:30", "Cove Sea Links → Glen Moray: cirka 20–25 min", "Glen Moray visitor centre och butik cirka 12:30–14:00", "Lunch eller fika och köp av en minnesflaska", "Resten av eftermiddagen fri"] },
  { date: "Sön 9 augusti", from: "Elgin", to: "Elgin", plans: ["Elgin → Eilean Donan: cirka 2 tim 15–30 min", "Förslag: avfärd 08:00", "Eilean Donan → Loch Ness/Drumnadrochit: cirka 1 tim 15 min", "Loch Ness → Elgin: cirka 1 tim 15–30 min", "Total körning: cirka 5 timmar"] },
  { date: "Mån 10 augusti", from: "Moray", to: "Lennoxtown", plans: ["Checka ut och åk cirka 08:30", "Moray → Glenfinnan: cirka 2 tim 30 min", "Glenfinnan → Glen Etive/Skyfall-vägen: cirka 1 tim 30 min", "Räkna minst 2 timmar för Glen Etive tur och retur", "Glen Etive → Lennoxtown: cirka 1 tim 45 min", "Total körning: cirka 5 tim 45 min", "Airbnb-incheckning efter 14:00", "BBQ i glamping pod"] },
  { date: "Tis 11 augusti", from: "Lennoxtown", to: "East Calder", plans: ["Checka ut före 10:00", "Lennoxtown → centrala Glasgow: cirka 30–40 min", "Glasgow → East Calder: cirka 50–60 min", "Direkt till East Calder: cirka 55–70 min", "Airbnb-incheckning efter 15:00"] },
  { date: "Ons 12 augusti", from: "East Calder", to: "East Calder", plans: ["East Calder → centrala Edinburgh: cirka 35–50 min utan parkering", "Räkna med 60 min totalt och kontrollera parkering eller tåg", "Utforska Edinburgh", "Fin middag på kvällen"] },
  { date: "Tors 13 augusti", from: "East Calder", to: "Hemma", plans: ["Checka ut före 11:00", "East Calder → Airpark House: cirka 15–25 min", "Förslag: avfärd 10:45 och bilåterlämning senast 12:00", "Edinburgh 14:25 → Landvetter 17:15", "Hemma cirka 19:00"] }
];

const budget = [
  ["Flyg", 4000],
  ["Boende", 10088],
  ["Hyrbil inklusive försäkring", 6774],
  ["Bränsle", 2500],
  ["Mat och fin middag", 9000],
  ["Golf", 2500],
  ["Whisky/minnesflaska", 2000],
  ["Övriga aktiviteter och entréer", 2500],
  ["UK ETA för två", 520],
  ["Parkering och lokaltrafik", 1500],
  ["Reserv", 3500]
];

const packing = {
  pontus: {
    "Kläder": ["Underkläder och strumpor", "T-shirts och skjortor", "Byxor", "Tröja eller fleece", "Sovkläder", "Finare kläder till middagen", "Regnjacka", "Vardagsjacka", "Bekväma skor", "Golfkläder", "Keps eller mössa"],
    "Hygien": ["Tandborste och tandkräm", "Deodorant", "Hud- och hårprodukter", "Rakhyvel", "Kontaktlinser eller glasögon", "Personliga läkemedel"],
    "Teknik och handbagage": ["Mobil", "Plånbok", "Hörlurar", "Laddkabel", "Powerbank", "Retur: liten väska under sätet", "Retur: kabinväska enligt Priority-mått"]
  },
  sarri: {
    "Kläder": ["Underkläder och strumpor", "Toppar och skjortor", "Byxor, kjol eller klänning", "Tröja eller fleece", "Sovkläder", "Finare kläder till middagen", "Regnjacka", "Vardagsjacka", "Bekväma skor", "Golfkläder", "Keps eller mössa"],
    "Hygien": ["Tandborste och tandkräm", "Deodorant", "Hud- och hårprodukter", "Smink och sminkborttagning", "Kontaktlinser eller glasögon", "Personliga läkemedel"],
    "Teknik och handbagage": ["Mobil", "Plånbok", "Hörlurar", "Laddkabel", "Powerbank", "Liten väska för resdagen"]
  },
  shared: {
    "Resan": ["Pass", "Körkort", "Kontrollera UK ETA mot rätt pass", "Flygbiljetter i Ryanair-appen", "Hyrbilsvoucher", "Boendeuppgifter offline", "Reseförsäkring och EU-kort", "Betalkort och lite reservpengar"],
    "Praktiskt": ["UK-adapter", "Gemensam laddare", "Powerbank", "Första hjälpen och värktabletter", "Solskydd", "Myggmedel", "Paraply", "Vattenflaskor", "Tvättsäck", "Plastpåse för våta kläder"],
    "Golf och bil": ["Boka hyrklubbor vid behov", "Golfhandskar", "Golfbollar och peggar", "Solglasögon", "Mobilhållare till bilen", "Offlinekartor", "Kontrollera däck och fotografera hyrbilen"],
    "Innan avresa": ["Väg Pontus väska – max 20 kg", "Väg Sarris väska – max 20 kg", "Ladda ner boardingkort", "Ladda mobiler och powerbanks", "Kontrollera väderprognosen", "Ställ in autosvar och ordna hemmet"]
  }
};

const money = new Intl.NumberFormat("sv-SE", { style: "currency", currency: "SEK", maximumFractionDigits: 0 });

document.querySelector("#timeline").innerHTML = days.map((day, index) => `
  <article class="day">
    <p class="day-date">${day.date}</p>
    <div class="day-content">
      <h3>${day.from} <span aria-hidden="true">→</span> ${day.to}</h3>
      <ul>${day.plans.map(plan => `<li>${plan}</li>`).join("")}</ul>
    </div>
  </article>`).join("");

document.querySelector("#budget-rows").innerHTML = budget.map(([label, amount]) =>
  `<tr><th>${label}</th><td>${money.format(amount)}</td></tr>`
).join("");

document.querySelector("#updated").textContent = new Intl.DateTimeFormat("sv-SE", { dateStyle: "long" }).format(new Date());
document.querySelector("#print").addEventListener("click", () => window.print());

const packingState = JSON.parse(localStorage.getItem("packing-v1") || "{}");
const packingRoot = document.querySelector("#packing-lists");
const tabs = [...document.querySelectorAll("[data-pack-tab]")];

function itemId(person, category, item) {
  return `${person}|${category}|${item}`;
}

function updatePackingProgress() {
  Object.entries(packing).forEach(([person, categories]) => {
    const ids = Object.entries(categories).flatMap(([category, items]) => items.map(item => itemId(person, category, item)));
    const checked = ids.filter(id => packingState[id]).length;
    document.querySelector(`#progress-${person}`).textContent = `${checked}/${ids.length}`;
  });
}

function showPackingList(person) {
  packingRoot.innerHTML = Object.entries(packing[person]).map(([category, items]) => `
    <div class="packing-group">
      <h3>${category}</h3>
      ${items.map(item => {
        const id = itemId(person, category, item);
        return `<label><input type="checkbox" data-pack-id="${id}" ${packingState[id] ? "checked" : ""}><span>${item}</span></label>`;
      }).join("")}
    </div>`).join("");
  packingRoot.querySelectorAll("[data-pack-id]").forEach(input => input.addEventListener("change", event => {
    packingState[event.target.dataset.packId] = event.target.checked;
    localStorage.setItem("packing-v1", JSON.stringify(packingState));
    updatePackingProgress();
  }));
}

tabs.forEach(tab => tab.addEventListener("click", () => {
  tabs.forEach(other => other.setAttribute("aria-selected", String(other === tab)));
  showPackingList(tab.dataset.packTab);
}));

document.querySelector("#reset-packing").addEventListener("click", () => {
  if (!window.confirm("Nollställa alla kryss i packlistan?")) return;
  Object.keys(packingState).forEach(key => delete packingState[key]);
  localStorage.removeItem("packing-v1");
  showPackingList(document.querySelector('[data-pack-tab][aria-selected="true"]').dataset.packTab);
  updatePackingProgress();
});

showPackingList("pontus");
updatePackingProgress();

if ("serviceWorker" in navigator) navigator.serviceWorker.register("service-worker.js");
