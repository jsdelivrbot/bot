/*

COPYRIGHT»                         QPlug.cz 2017
DEVELOPERS»                        Franta72, Hellbyte
ROOM»                              https://plug.dj/qplug-czsk

Akékoľvek kopírovanie tohoto obsahu alebo dokumentu sa bude riešiť s Administrátormi plug.dj!
- Marvin (xBytez)
- Dom (Origin)
- Brett (sinful)

*/

API.chatLog("[ QBot ] Systém je spustený!");
var verzia = "Alpha 0.1";
var prefix = "!";

//                          FUNKCIE                          //

API.setVolume(0);
API.sendChat("/cap 1");

var emoji = $(".icon-emoji-on");
if(emoji.length > 0){
emoji[0].click();
}

var sounds = $(".icon-chat-sound-on");
if(sounds.lenght > 0){
sounds[0].click();  
}

var onlyaudio = $(".item.s-vo");
if(onlyaudio.length > 0){
onlyaudio[0].click();
}

var avatarsoff = $(".item.s-dancing.selected");
if(avatarsoff.length > 0){
avatarsoff[0].click();
}

var videooff = $(".item.s-av.selected");
if(videooff.length > 0){
videooff[0].click();
}

API.on(API.USER_JOIN, function staff(user) {
var from = user.username;
var fromid = user.id;

if (fromid === 4635487){
API.sendChat("Zamestnanec "+ from +" sa práve pripojil do komunity! :blue_heart:");
}
});

API.on(API.USER_JOIN, function vip(user) {
var from = user.username;
var fromid = user.id;

if (fromid === 5154101){
API.sendChat("VIP člen "+ from +" sa práve pripojil do komunity! :blue_heart:");
}
});

/*var msgs=[
"[ MINIHRA | @djs ] Vylúšti slovo ' dpglju '!"
];
var time=1200; // SEKUNDY
var timer;
API.on(API.CHAT_COMMAND, command);
API.sendChat("/startmsg");
 
function command(value){
console.log("command called");
var commandfunction = "";

if (value.indexOf(" ") == -1){
var commandfunction = value.substring(value.indexOf("/")+1,value.length);
}

else{
var commandfunction = value.substring(value.indexOf("/")+1,value.indexOf(" "));
}

var commandcontent =  value.substring(value.indexOf(" ")+1,value.length);

console.log("commandfunction: " + commandfunction);
console.log("commandcontent: " + commandcontent);

switch(commandfunction){

case "startmsg":
console.log("startmsg called");
refreshtimer();
API.chatLog("Správy sa teraz odosielajú!",true);
break;
}
}
 
function postmsg(){
var random = Math.floor((Math.random() * msgs.length));
API.sendChat(msgs[random]);
}
 
function refreshtimer(){
stoptimer(timer);
timer = window.setInterval(postmsg, time*1000);
}

function stoptimer(){
window.clearInterval(timer);
timer = null;
}*/

//                          AUTOWOOT                          //

$('#woot').click();
API.on(API.ADVANCE, advance);
function advance(obj){
$('#woot').click();
}

//                          VEDENIE                          //

API.on(API.CHAT, slovicka);
function slovicka(data){
var msg = data.message;
var from = data.un;
var fromid = data.uid;
var falseying = "4635487";

if(msg === ""+ prefix +"minihra"){
if(fromid == falseying){
API.sendChat("[ MINIHRA | @djs ] Vylúšti slovo: ' dpglju '!");
}
else{
API.sendChat("[@"+ from +"] Nemáš na to práva!");
}
}
}

API.on(API.CHAT, woot);
function woot(data){
var msg = data.message;
var from = data.un;
var fromid = data.uid;
var falseying = "4635487";

if(msg === ""+ prefix +"woot"){
if(fromid == falseying){
$('#woot').click();
}
else{
API.sendChat("[@"+ from +"] Nemáš na to práva!");
}
}
}

API.on(API.CHAT, meh);
function meh(data){
var msg = data.message;
var from = data.un;
var fromid = data.uid;
var falseying = "4635487";

if(msg === ""+ prefix +"meh"){
if(fromid == falseying){
$('#meh').click();
}
else{
API.sendChat("[@"+ from +"] Nemáš na to práva!");
}
}
}

API.on(API.CHAT, lock);
function lock(data){
var msg = data.message;
var from = data.un;
var fromid = data.uid;
var falseying = "4635487";

if(msg === ""+ prefix +"lock"){
if(fromid == falseying){
API.sendChat("[@"+ from +"] Uzamkol si zoznam!");
setTimeout(function(){ API.moderateLockWaitList(true, false); }, 500);
}
else{
API.sendChat("[@"+ from +"] Nemáš na to práva!");
}
}
}

API.on(API.CHAT, unlock);
function unlock(data){
var msg = data.message;
var from = data.un;
var fromid = data.uid;
var falseying = "4635487";

if(msg === ""+ prefix +"unlock"){
if(fromid == falseying){
API.sendChat("[@"+ from +"] Odomkol si zoznam!");
setTimeout(function(){ API.moderateLockWaitList(false, false); }, 500);
}
else{
API.sendChat("[@"+ from +"] Nemáš na to práva!");
}
}
}

//                          BOUNCER                          //

API.on(API.CHAT, bouncer);
function bouncer(data){
var msg = data.message;
var fromid = data.uid;
var from = data.un;

var pinguin = "4006230";
var jassyk = "5154101";
var gyn = "3857912";
var nyga = "3726868";
var knedlik = "5014687";
var samikk = "3653327";
var atti = "13505684";
var wrest = "4105532";
var viktor = "4671474";
var kevin = "4106134";

if(msg === ""+ prefix +"bouncer"){
if(fromid == pinguin || fromid == jassyk || fromid == gyn || fromid == nyga || fromid == knedlik || fromid == samikk ||  fromid == atti || fromid == wrest || fromid == viktor || fromid == kevin){
API.sendChat("[@"+ from +"] Použil si Promote funkciu!");
setTimeout(function(){ API.moderateSetRole(fromid, 2); }, 500);
}
else{
API.sendChat("[@"+ from +"] Nemáš na to práva!");
}
}
}

API.on(API.CHAT, unbouncer);
function unbouncer(data){
var msg = data.message;
var fromid = data.uid;
var from = data.un;

var pinguin = "4006230";
var jassyk = "5154101";
var gyn = "3857912";
var nyga = "3726868";
var knedlik = "5014687";
var samikk = "3653327";
var atti = "13505684";
var wrest = "4105532";
var viktor = "4671474";
var kevin = "4106134";

if(msg === ""+ prefix +"unbouncer"){
if(fromid == pinguin || fromid == jassyk || fromid == gyn || fromid == nyga || fromid == knedlik || fromid == samikk ||  fromid == atti || fromid == wrest || fromid == viktor || fromid == kevin){
API.sendChat("[@"+ from +"] Použil si Demote funkciu!");
setTimeout(function(){ API.moderateSetRole(fromid, 0); }, 500);
}
else{
API.sendChat("[@"+ from +"] Nemáš na to práva!");
}
}
}

//                          RESIDENT DJ                          //

API.on(API.CHAT, rdj);
function rdj(data){
var msg = data.message;
var fromid = data.uid;
var from = data.un;

var kebab = "5877483";
var many = "";
var lolly = "3845624";
var sies = "5069104";
var husmania = "3737749";

if(msg === ""+ prefix +"rdj"){
if(fromid == kebab || fromid == many || fromid == lolly || fromid == sies || fromid == husmania){
API.sendChat("[@"+ from +"] Použil si Promote funkciu!");
setTimeout(function(){ API.moderateSetRole(fromid, 1); }, 500);
}
else{
API.sendChat("[@"+ from +"] Nemáš na to práva!");
}
}
}

API.on(API.CHAT, unrdj);
function unrdj(data){
var msg = data.message;
var fromid = data.uid;
var from = data.un;

var kebab = "5877483";
var many = "";
var lolly = "3845624";
var sies = "5069104";
var husmania = "3737749";

if(msg === ""+ prefix +"unrdj"){
if(fromid == kebab || fromid == many || fromid == lolly || fromid == sies || fromid == husmania){
API.sendChat("[@"+ from +"] Použil si Demote funkciu!");
setTimeout(function(){ API.moderateSetRole(fromid, 0); }, 500);
}
else{
API.sendChat("[@"+ from +"] Nemáš na to práva!");
}
}
}

//                          UZIVATELIA                          //

API.on(API.CHAT, qplugverzia);
function qplugverzia(data){
var msg = data.message;

if(msg === ""+ prefix +"verzia" || msg === ""+ prefix +"version"){
API.sendChat("[ QPlug.cz ] Verzia našej komunity je aktuálne "+ verzia +"!");
}
}

API.on(API.CHAT, web);
function web(data){
var msg = data.message;
var from = data.un;

if(msg === ""+ prefix +"web" || msg === ""+ prefix +"stránka" || msg === ""+ prefix +"stranka" || msg === ""+ prefix +"page" || msg === ""+ prefix +"site"){
API.sendChat("[ WEB ] Viac informácii o našej komunite!");
}
}

API.on(API.CHAT, pravidla);
function pravidla(data){
var msg = data.message;
var from = data.un;

if(msg === ""+ prefix +"pravidlá" || msg === ""+ prefix +"pravidla" || msg === ""+ prefix +"rules"){
API.sendChat("[ PRAVIDLÁ ] Pravidlá našej komunita najdeš na!");
}
}

API.on(API.CHAT, facebook);
function facebook(data){
var msg = data.message;
var from = data.un;

if(msg === ""+ prefix +"facebook" || msg === ""+ prefix +"fb"){
API.sendChat("[ FACEBOOK ] Hoď like na našu Facebook stránku https://bit.ly/QPlugcz!");
}
}

API.on(API.CHAT, autowoot);
function autowoot(data){
var msg = data.message;
var from = data.un;

if(msg === ""+ prefix +"autowoot" || msg === ""+ prefix +"aw" || msg === ""+ prefix +"rcs"){
API.sendChat("[ AUTOWOOT ] Ak chcete vidieť naše pozadie komunity použite https://rcs.radiant.dj/install!");
}
}

API.on(API.CHAT, prikazy);
function prikazy(data){
var msg = data.message;
var from = data.un;
var fromid = data.uid;

if(msg === ""+ prefix +"prikazy" || msg === ""+ prefix +"commands"){
API.sendChat("[ PRÍKAZY ] Príkazy našeho Systému najdeš na!");
}
}

API.on(API.CHAT, nabor);
function nabor(data){
var msg = data.message;
var from = data.un;
var fromid = data.uid;

if(msg === ""+ prefix +"nabor" || msg === ""+ prefix +"nábor"){
API.sendChat("[ NÁBOR ] Aktuálne prebieha Nábor do týmu, ktorý najdeš na!");
}
}

API.on(API.CHAT, pd);
function pd(data){
var msg = data.message;
var from = data.un;

if(msg === ""+ prefix +"pd" || msg === ""+ prefix +"p&d"){
API.sendChat("[ INFO ] Promote&Demote funckia je len pre náš akutálny Staff Tým. Bouncery a Resident DJi si sami môžu vymazať práva a zasa si ich vrátiť. Príkazy pre Vyhadzovačov sú !bouncer a !unbouncera a pre Residentov sú !rdj a !unrdj.");
}
}

API.on(API.CHAT, discord);
function discord(data){
var msg = data.message;
var from = data.un;

if(msg === ""+ prefix +"discord" || msg === ""+ prefix +"diskord"){
API.sendChat("[ DISCORD ] Odkaz na náš Discord je https://bit.ly/QPlugczDiscord!");
}
}

API.on(API.CHAT, event);
function event(data){
var msg = data.message;
var from = data.un;

if(msg === ""+ prefix +"event" || msg === ""+ prefix +"sútaž" || msg === ""+ prefix +"súťaž"){
API.sendChat("[@"+ from +"] Momentálne sa nechystá žiadny event. Ak chceš vedieť kedy sa bude konať Event ako prvý hoď Like na Facebook: https://bit.ly/QPlugcz & Stránka:!");
//API.sendChat("NÁZOV: - | DÁTUM: x.x.2017 od xx:xx do xx:xx | http://musicforeveryone.6f.sk/eventy");
}
}

API.on(API.CHAT, výhra);
function výhra(data){
var msg = data.message;
var from = data.un;

if(msg === ""+ prefix +"výhra" || msg === ""+ prefix +"vyhra" || msg === ""+ prefix +"odmena"){
API.sendChat("[@"+ from +"] Momentálne sa nechystá žiadny event. Ak chceš vedieť kedy sa bude konať Event ako prvý hoď Like na Facebook: https://bit.ly/QPlugcz & Stránka:!");
//API.sendChat("1. MIESTO: - | 2: - | 3: - | 4: -");
}
}

API.on(API.CHAT, afk);
function afk(data){
var msg = data.message;
var from = data.un;

if(msg === ""+ prefix +"afk" || msg === ""+ prefix +"away" || msg === ""+ prefix +"preč" || msg === ""+ prefix +"prec"){
API.sendChat("[ AFK ] Užívateľ @"+ from +" je práve preč!");
}
}

API.on(API.CHAT, back);
function back(data){
var msg = data.message;
var from = data.un;

if(msg === ""+ prefix +"back" || msg === ""+ prefix +"here" || msg === ""+ prefix +"spet"){
API.sendChat("[ AFK ] Užívateľ @"+ from +" sa práve vrátil!");
}
}

API.on(API.CHAT, joinwl);
function joinwl(data){
var msg = data.message;
var from = data.uid;

if(msg === ""+ prefix +"joinwl" || msg === ""+ prefix +"pripojit"){
API.moderateAddDJ(from);
}
}

API.on(API.CHAT, leavewl);
function leavewl(data){
var msg = data.message;
var from = data.uid;

if(msg === ""+ prefix +"leavewl" || msg === ""+ prefix +"odpojit"){
API.moderateRemoveDJ(from);
}
}

API.on(API.CHAT, id);
function id(data){
var msg = data.message;
var from = data.un;
var fromid = data.uid;

if(msg === ""+ prefix +"id"){
API.sendChat("[@"+ from +"] Tvoje ID je: "+ fromid +".");
}
}

API.on(API.CHAT, minihra1winner);
function minihra1winner(data){
var msg = data.message;
var from = data.un;
var fromid = data.uid;

if(msg === "plugdj"){
API.sendChat("[@"+ from +"] Výborne! Vylúštil si slovo 'plugdj' ako prvý. Gratulujeme! :)");
}
}

API.on(API.CHAT, dnes);
function dnes(data){
var msg = data.message;
var from = data.un;
 
if(msg === ""+ prefix +"dnes" || msg === ""+ prefix +"today" || msg === ""+ prefix +"teraz"){
var datum = new Date();
var denVTydnu = new Array("Nedeľa","Pondelok", "Utorok", "Streda", "Štvrtok", "konečne Piatok", "Sobota");
var retazec = "[@"+ from +"] Dnes je ";
retazec += denVTydnu[datum.getDay()] + ", ";
retazec += datum.getDate() + ".";
retazec += (1 + datum.getMonth()) + ".";
retazec += datum.getFullYear() + ". ";
retazec += "Čas: " + datum.getHours() + ":";
retazec += datum.getMinutes();
retazec += ". ";
retazec += "Prajeme pekne prežitý deň. <3";
API.sendChat( retazec );
}
}

API.on(API.CHAT, ja);
function ja(data){
var msg = data.message;
var from = data.un;

var cicina = Math.floor((Math.random() * 40) + 1);
var sexy = Math.floor((Math.random() * 100) + 1);
var iq = Math.floor((Math.random() * 180) + 1);
var nalada = ["Naštvaný/á.", "Kludný/á.", "Nadržený/á.", "Vzteklý/á.", "Bláznivý/á.", "Hodný/á.", "Radostný/á.", "Skleslý/á.", "Vtipný/á.", "Smutný/á."];
 
if(msg === ""+ prefix +"ja" || msg === ""+ prefix +"cicina" || msg === ""+ prefix +"iq" || msg === ""+ prefix +"sexy" || msg === ""+ prefix +"nálada" || msg === ""+ prefix +"nalada"){
API.sendChat("[@" + from + "] Tvoja cicina má: "+ cicina +"cm. | Tvoje IQ: " + iq + " | Si sexy na " + sexy + "% | Aktuálna nálada: " + nalada[Math.floor(Math.random() * nalada.length)]);
} 
}

API.on(API.CHAT, vtip);
function vtip(data){
var msg = data.message;
var from = data.un;

var vtipy = [
"Idú 2 babky po púšti a tá stredná odbočí doľava.",
"Máš 10 rybiek, 1 sa utopila. Koľko máš?",
"Peniaze vedia rozprávať. Napríklad moje mi každú chvíľu povedia: Zbohom!",
"Milý Ježiško! Pod stromček si prosím tučnú peňaženku a štíhlu postavu. PS: Nepopleť to prosím ťa!",
"Kedy utrpí chlap otras mozgu? Keď ho kopnú do rozkroku.",
"Muži majú najmenšiu záhradku na svete. Jednu mrkvu, dva zemiačky a trošku petržlena!",
"Ženy sú ako drogy. V mladosti s nimi začneš a do smrti ti ničia život.",
"Mami, můžu jít ven? Je ti 25, nemusíš se vracet.",
"Málokdo ví, že slovo onanie pochází ze slovenštiny. Logicky vzniklo spojením slov ona-nie.",
"Viete, že človek je zo slivky? Zo slivky je slivovica, zo slivovice je opica a z opice je človek.",
"Idú dva tanky jeden je ruský a druhý je tiež pokazený...",
"Ide had na bicykli a spomenie si, že nemá nohy, a tak upadne a zlomí si koleno.",
"Chobotnica má 8 chápadiel a jedno nechápe.",
"Idú dve stíhačky a jedna nestíha.",
"Bol raz jeden cigán... jedináčik..."
];

if(msg === ""+ prefix +"vtip" || msg === ""+ prefix +"vtipy"){
API.sendChat(""+ vtipy[Math.floor(Math.random() * vtipy.length)] +"");
}
}

API.on(API.CHAT, meme);
function meme(data){
var msg = data.message;

var memes = [
"http://upload.emefka.sk:82/posts/new/orig/12/63/81263.jpg",
"http://upload.emefka.sk:82/posts/new/orig/12/55/81255.jpg",
"http://upload.emefka.sk:82/posts/new/orig/12/31/81231.jpg",
"http://upload.emefka.sk:82/posts/new/orig/12/27/81227.jpg",
"http://upload.emefka.sk:82/posts/new/orig/12/23/81223.png"
];

if(msg === ""+ prefix +"meme" || msg === ""+ prefix +"memes"){
API.sendChat(""+ memes[Math.floor(Math.random() * memes.length)] +"");
}
}
