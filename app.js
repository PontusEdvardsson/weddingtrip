const days = [
  { date: "Ons 5 augusti", from: "Kode", to: "Elgin", plans: ["Ryanair FR5658: Landvetter 10:40 → Edinburgh 11:35", "Hämta hyrbil hos Dollar/Hertz 13:00", "Edinburgh Airport → Elgin: cirka 3 tim 30 min", "Sikta på avfärd 13:30 och ankomst omkring 17:00–17:30", "Airbnb-incheckning efter 15:00", "Vila"] },
  { date: "Tors 6 augusti", from: "Elgin", to: "Elgin", plans: ["Vila och utforska närområdet"] },
  { date: "Fre 7 augusti", from: "Elgin", to: "Elgin", plans: ["Elgin → Drumbuie Farm: cirka 1 tim 15–30 min", "Avfärd senast 10:15 för lugn marginal", "Highland Coo Afternoon Tea 12:00–13:30", "Utforska Drumnadrochit med omnejd", "Tillbaka till Elgin: cirka 1 tim 15–30 min"] },
  { date: "Lör 8 augusti", from: "Elgin", to: "Elgin", plans: ["Avfärd mot Cove Sea Links cirka 09:15", "Range 10:00–10:30", "Bekräftad tee time 10:30", "9 hål till cirka 12:30", "Cove Sea Links → Glen Moray: cirka 20–25 min", "Glen Moray visitor centre och butik cirka 13:15–14:45", "Lunch eller fika och köp av en minnesflaska", "Resten av eftermiddagen fri"] },
  { date: "Sön 9 augusti", from: "Elgin", to: "Elgin", plans: ["Elgin → Eilean Donan: cirka 2 tim 15–30 min", "Förslag: avfärd 08:00", "Eilean Donan → Loch Ness/Drumnadrochit: cirka 1 tim 15 min", "Loch Ness → Elgin: cirka 1 tim 15–30 min", "Total körning: cirka 5 timmar"] },
  { date: "Mån 10 augusti", from: "Elgin", to: "Lennoxtown", plans: ["Checka ut och åk cirka 08:30", "Elgin → Glenfinnan: cirka 2 tim 30 min", "Glenfinnan → Glen Etive/Skyfall-vägen: cirka 1 tim 30 min", "Räkna minst 2 timmar för Glen Etive tur och retur", "Glen Etive → Lennoxtown: cirka 1 tim 45 min", "Total körning: cirka 5 tim 45 min", "Airbnb-incheckning efter 14:00", "BBQ i glamping pod"] },
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
    "Kläder": ["Underkläder – 10 par", "Strumpor – 10 par, varav 2 varmare", "T-shirts – 5 st", "Skjortor – 2 st", "Byxor – 2 par", "Shorts – 2 par", "Tröjor eller fleece – 2 st", "Sovkläder – 1 uppsättning", "Finare kläder till middagen – 1 uppsättning", "Lätt vardagsjacka – 1 st", "Bekväma promenadskor – 1 par", "Finare skor – 1 par", "Golfhandske – 1 st", "Keps eller mössa – 1 st", "Badkläder – 1 par"],
    "Hygien": ["Tandborste och tandkräm – 1 av varje", "Deodorant – 1 st", "Schampo och duschgel – reseförpackningar", "Personliga läkemedel – 10 dagar + 2 reservdagar"],
    "Teknik och handbagage": ["Mobil – 1 st", "Plånbok – 1 st", "Hörlurar – 1 par", "USB-C-kablar – 2 st", "Laddare – 3 st", "iPhone-laddkabel – 1 st", "Powerbank – 1 st, i handbagaget", "Retur: liten väska under sätet – 1 st", "Retur: kabinväska enligt Priority-mått – 1 st"]
  },
  shared: {
    "Resan": ["Pass – 2 st", "Körkort – 1 st per förare", "Flygbiljetter i Ryanair-appen – på båda mobilerna", "Hyrbilsvoucher – digital + 1 utskrift", "Boendeuppgifter – offline på båda mobilerna", "Reseförsäkring och EU-kort – för båda", "Betalkort – minst 2 olika kort", "Reservpengar – cirka £100"],
    "Praktiskt": ["Reseadaptrar för brittiska vägguttag – 2 st", "Värktabletter – 1 förpackning", "Skavsårsplåster – 1 förpackning", "Solskydd – 1 liten flaska", "Myggmedel – 1 st", "Tvättsäckar – 2 st", "Liten dagryggsäck – 1 st", "Bagagevåg – 1 st"],
    "Golf och bil": ["Solglasögon – 1 par per person", "Offlinekartor – nedladdade på båda mobilerna", "Kontrollera däck och fotografera hyrbilen"],
    "Innan avresa": ["Väg Pontus väska – max 20 kg", "Väg Sarris väska – max 20 kg", "Ladda ner boardingkort", "Ladda mobiler och powerbanks", "Kontrollera väderprognosen"]
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

if ("serviceWorker" in navigator) {
  let refreshing = false;
  navigator.serviceWorker.addEventListener("controllerchange", () => {
    if (refreshing) return;
    refreshing = true;
    window.location.reload();
  });
  navigator.serviceWorker.register("service-worker.js").then(registration => registration.update());
}
