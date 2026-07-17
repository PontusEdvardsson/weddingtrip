const days = [
  { date: "Ons 5 augusti", from: "Kode", to: "Moray", plans: ["Ryanair FR5658: Landvetter 10:40 → Edinburgh 11:35", "Hämta hyrbil hos Dollar/Hertz 13:00", "Edinburgh Airport → Moray: cirka 3 tim 30 min", "Sikta på avfärd 13:30 och ankomst omkring 17:00–17:30", "Airbnb-incheckning efter 15:00", "Vila"] },
  { date: "Tors 6 augusti", from: "Elgin", to: "Elgin", plans: ["Vila och utforska närområdet"] },
  { date: "Fre 7 augusti", from: "Elgin", to: "Elgin", plans: ["Elgin → Drumbuie Farm: cirka 1 tim 15–30 min", "Avfärd senast 10:15 för lugn marginal", "Highland Coo Afternoon Tea 12:00–13:30", "Utforska Drumnadrochit med omnejd", "Tillbaka till Elgin: cirka 1 tim 15–30 min"] },
  { date: "Lör 8 augusti", from: "Elgin", to: "Elgin", plans: ["Elgin → Cove Sea Links: cirka 25–30 min", "Åk cirka 45 min före önskad start", "Preliminärt: golf på Cove Sea Links", "Pay & Play – ingen starttid behövs för två", "Förboka hyrklubbor vid behov", "Eventuellt whiskyprovning"] },
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
  ["Övriga aktiviteter och entréer", 2500],
  ["UK ETA för två", 520],
  ["Parkering och lokaltrafik", 1500],
  ["Reserv", 3500]
];

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

if ("serviceWorker" in navigator) navigator.serviceWorker.register("service-worker.js");
