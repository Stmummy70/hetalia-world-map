const data={
italy:{name:"Italy",faction:"axis",desc:"Pasta-loving and friendly.",page:"countries/italy.html"},
germany:{name:"Germany",faction:"axis",desc:"Serious and disciplined.",page:"countries/germany.html"},
japan:{name:"Japan",faction:"axis",desc:"Quiet and traditional.",page:"countries/japan.html"},
america:{name:"America",faction:"allies",desc:"Energetic hero.",page:"countries/america.html"},
england:{name:"England",faction:"allies",desc:"Cynical magician.",page:"countries/england.html"},
france:{name:"France",faction:"allies",desc:"Romantic.",page:"countries/france.html"},
canada:{name:"Canada",faction:"allies",desc:"Quiet and kind.",page:"countries/canada.html"},
russia:{name:"Russia",faction:"neutral",desc:"Intimidating but lonely.",page:"countries/russia.html"},
china:{name:"China",faction:"neutral",desc:"Ancient and wise.",page:"countries/china.html"},
austria:{name:"Austria",faction:"axis",desc:"Refined musician.",page:"countries/austria.html"},
prussia:{name:"Prussia",faction:"axis",desc:"Rebellious.",page:"countries/prussia.html"},
romano:{name:"Romano",faction:"axis",desc:"Tsundere Italy.",page:"countries/romano.html"},
spain:{name:"Spain",faction:"neutral",desc:"Laid-back.",page:"countries/spain.html"},
netherlands:{name:"Netherlands",faction:"neutral",desc:"Merchant.",page:"countries/netherlands.html"},
switzerland:{name:"Switzerland",faction:"neutral",desc:"Neutral guard.",page:"countries/switzerland.html"},
liechtenstein:{name:"Liechtenstein",faction:"neutral",desc:"Sweet.",page:"countries/liechtenstein.html"},
sealand:{name:"Sealand",faction:"neutral",desc:"Tiny nation.",page:"countries/sealand.html"},
estonia:{name:"Estonia",faction:"neutral",desc:"Tech lover.",page:"countries/estonia.html"},
latvia:{name:"Latvia",faction:"neutral",desc:"Anxious.",page:"countries/latvia.html"},
lithuania:{name:"Lithuania",faction:"neutral",desc:"Loyal.",page:"countries/lithuania.html"},
finland:{name:"Finland",faction:"neutral",desc:"Chill.",page:"countries/finland.html"},
sweden:{name:"Sweden",faction:"neutral",desc:"Intimidating.",page:"countries/sweden.html"},
norway:{name:"Norway",faction:"neutral",desc:"Magical.",page:"countries/norway.html"},
denmark:{name:"Denmark",faction:"neutral",desc:"Cheerful.",page:"countries/denmark.html"},
iceland:{name:"Iceland",faction:"neutral",desc:"Volcanic.",page:"countries/iceland.html"},
greece:{name:"Greece",faction:"neutral",desc:"Philosophical.",page:"countries/greece.html"},
turkey:{name:"Turkey",faction:"neutral",desc:"Proud.",page:"countries/turkey.html"},
egypt:{name:"Egypt",faction:"neutral",desc:"Mysterious.",page:"countries/egypt.html"},
hongkong:{name:"Hong Kong",faction:"neutral",desc:"Cynical.",page:"countries/hongkong.html"},
thailand:{name:"Thailand",faction:"neutral",desc:"Kind.",page:"countries/thailand.html"},
vietnam:{name:"Vietnam",faction:"neutral",desc:"Strong.",page:"countries/vietnam.html"},
philippines:{name:"Philippines",faction:"neutral",desc:"Resilient.",page:"countries/philippines.html"},
indonesia:{name:"Indonesia",faction:"neutral",desc:"Relaxed.",page:"countries/indonesia.html"},
malaysia:{name:"Malaysia",faction:"neutral",desc:"Friendly.",page:"countries/malaysia.html"},
australia:{name:"Australia",faction:"neutral",desc:"Rugged.",page:"countries/australia.html"},
newzealand:{name:"New Zealand",faction:"neutral",desc:"Calm.",page:"countries/newzealand.html"},
cuba:{name:"Cuba",faction:"neutral",desc:"Revolutionary.",page:"countries/cuba.html"},
belgium:{name:"Belgium",faction:"neutral",desc:"Cheerful.",page:"countries/belgium.html"},
luxembourg:{name:"Luxembourg",faction:"neutral",desc:"Tiny.",page:"countries/luxembourg.html"},
monaco:{name:"Monaco",faction:"neutral",desc:"Elegant.",page:"countries/monaco.html"},
portugal:{name:"Portugal",faction:"neutral",desc:"Relaxed.",page:"countries/portugal.html"},
scotland:{name:"Scotland",faction:"neutral",desc:"Magical.",page:"countries/scotland.html"},
wales:{name:"Wales",faction:"neutral",desc:"Quiet.",page:"countries/wales.html"},
ireland:{name:"Ireland",faction:"neutral",desc:"Friendly.",page:"countries/ireland.html"}
};

const popup=document.getElementById("popup");
const nameEl=document.getElementById("popup-name");
const desc=document.getElementById("popup-desc");
const more=document.getElementById("more-btn");
const tooltip=document.getElementById("tooltip");

document.addEventListener("load",()=>{
const svg=document.querySelector("object").contentDocument;
svg.querySelectorAll("path").forEach(p=>{
 const d=data[p.id]; if(!d)return;
 p.classList.add(d.faction);
 p.addEventListener("mouseenter",()=>{tooltip.textContent=d.name;tooltip.style.opacity=1});
 p.addEventListener("mouseleave",()=>tooltip.style.opacity=0);
 p.addEventListener("click",()=>{nameEl.textContent=d.name;desc.textContent=d.desc;more.href=d.page;popup.classList.add("show")});
});
});

document.getElementById("close-btn").onclick=()=>popup.classList.remove("show");
