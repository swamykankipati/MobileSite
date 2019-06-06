function loadjson(file){
  return new Promise((resolve,reject)=>{
    return fetch(file).then(res=>{
      if(res.ok){
        resolve(res.json());
      }
        else{
          reject(new Error('error'));
        }
    })
  })
}
var fetchedData=loadjson("json/data.json");
fetchedData.then(data=>{
  console.log(data);
  mobile(data.details);
  javamobile(data.java);
  
});
var det=document.querySelector(".main");
console.log(det);
function mobile(deta){
var heading=document.createElement("h1");
heading.textContent="AndroidMobiles";
det.appendChild(heading);
// var dmain=document.createElement("div")
// dmain.appendChild(dev1)
var dev1=document.createElement("div");
var redmi4=document.createElement("img");
redmi4.src=deta.img;
dev1.appendChild(redmi4);
det.appendChild(dev1);
var redmi4n=document.createElement("h3");
redmi4n.textContent=deta.name;
dev1.appendChild(redmi4n);
det.appendChild(dev1);
var redmi4p=document.createElement("h3")
redmi4p.textContent=deta.price;
dev1.appendChild(redmi4p);
det.appendChild(dev1);
var redmi4b=document.createElement("button");
 redmi4b.textContent=deta.button;
 dev1.appendChild(redmi4b);
 det.appendChild(dev1);
//block two
var dev2=document.createElement("div");
var note4=document.createElement("img");
note4.src=deta.img1;
dev2.appendChild(note4);
det.appendChild(dev2);
var noten=document.createElement("h3");
noten.textContent=deta.name1;
dev2.appendChild(noten);
det.appendChild(dev2);
var notep=document.createElement("h3")
notep.textContent=deta.price1;
dev2.appendChild(notep);
det.appendChild(dev2);
var noteb=document.createElement("button");
 noteb.textContent=deta.button1;
 dev2.appendChild(noteb);
 det.appendChild(dev2);
 //block thiree
 var dev3=document.createElement("div");
var samsung=document.createElement("img");
samsung.src=deta.img2;
dev3.appendChild(samsung);
det.appendChild(dev3);
var samsungn=document.createElement("h3");
samsungn.textContent=deta.name2;
dev3.appendChild(samsungn);
det.appendChild(dev3);
var samsungp=document.createElement("h3")
samsungp.textContent=deta.price2;
dev3.appendChild(samsungp);
det.appendChild(dev3);
var samsungb=document.createElement("button");
 samsungb.textContent=deta.button2;
 dev3.appendChild(samsungb);
 det.appendChild(dev3);
//block four
var dev4=document.createElement("div");
var vivo=document.createElement("img");
vivo.src=deta.img3;
dev4.appendChild(vivo);
det.appendChild(dev4);
var vivon=document.createElement("h3");
vivon.textContent=deta.name3;
dev4.appendChild(vivon);
det.appendChild(dev4);
var vivop=document.createElement("h3")
vivop.textContent=deta.price3;
dev4.appendChild(vivop);
det.appendChild(dev3);
var vivob=document.createElement("button");
 vivob.textContent=deta.button3;
 dev4.appendChild(vivob);
 det.appendChild(dev4);
//block five
var dev5=document.createElement("div");
var cellcon=document.createElement("img");
cellcon.src=deta.img4;
dev5.appendChild(cellcon);
det.appendChild(dev5);
var cellkonn=document.createElement("h3");
cellkonn.textContent=deta.name4;
dev5.appendChild(cellkonn);
det.appendChild(dev5);
var cellkonp=document.createElement("h3")
cellkonp.textContent=deta.price4;
dev5.appendChild(cellkonp);
det.appendChild(dev5);
var cellkonb=document.createElement("button");
 cellkonb.textContent=deta.button4;
 dev5.appendChild(cellkonb);
 det.appendChild(dev5);
//block six
var dev6=document.createElement("div");
var lenovo=document.createElement("img");
lenovo.src=deta.img5;
dev6.appendChild(lenovo);
det.appendChild(dev6);
var lenovon=document.createElement("h3");
lenovon.textContent=deta.name5;
dev6.appendChild(lenovon);
det.appendChild(dev6);
var lenovop=document.createElement("h3")
lenovop.textContent=deta.price5;
dev6.appendChild(lenovop);
det.appendChild(dev6);
var lenovob=document.createElement("button");
 lenovob.textContent=deta.button5;
 dev6.appendChild(lenovob);
 det.appendChild(dev6);
}
function javamobile(jm){
var heading=document.createElement("h1");
heading.textContent="JavaMobiles";
det.appendChild(heading);
// var dmain=document.createElement("div")
// dmain.appendChild(dev1)
var dev11=document.createElement("div");
var ebony=document.createElement("img");
ebony.src=jm.img11;
dev11.appendChild(ebony);
det.appendChild(dev11);
var ebonyn=document.createElement("h3");
ebonyn.textContent=jm.name11;
dev11.appendChild(ebonyn);
det.appendChild(dev11);
var ebonyp=document.createElement("h3")
ebonyp.textContent=jm.price11;
dev11.appendChild(ebonyp);
det.appendChild(dev11);
var ebonyoff=document.createElement("h4");
ebonyoff.textContent=jm.offer;
ebonyoff.style="color:blue";
dev11.appendChild(ebonyoff);
det.appendChild(dev11);
var ebonyb=document.createElement("button");
 ebonyb.textContent=jm.button11;
 dev11.appendChild(ebonyb);
 det.appendChild(dev11);
 //block two ....
var dev111=document.createElement("div");
 var ebony2=document.createElement("img");
ebony2.src=jm.img11;
dev111.appendChild(ebony2);
det.appendChild(dev111);
var ebonyn2=document.createElement("h3");
ebonyn2.textContent=jm.name11;
dev111.appendChild(ebonyn2);
det.appendChild(dev111);
var ebonyp2=document.createElement("h3")
ebonyp2.textContent=jm.price11;
dev111.appendChild(ebonyp2);
det.appendChild(dev111);
var ebonyoff2=document.createElement("h4");
ebonyoff2.textContent=jm.offer;
dev111.appendChild(ebonyoff2);
det.appendChild(dev111);
ebonyoff2.style="color:blue";
var ebonyb2=document.createElement("button");
 ebonyb2.textContent=jm.button11;
 dev111.appendChild(ebonyb2);
 det.appendChild(dev111);
//block three
var dev13=document.createElement("div");
var nokiax1=document.createElement("img");
nokiax1.src=jm.img22;
dev13.appendChild(nokiax1);
det.appendChild(dev13);
var nxn=document.createElement("h3");
nxn.textContent=jm.name33;
dev13.appendChild(nxn);
det.appendChild(dev13);
var nxp=document.createElement("h3")
nxp.textContent=jm.price33;
dev13.appendChild(nxp);
det.appendChild(dev13);
var nxb=document.createElement("button");
 nxb.textContent=jm.button33;
 dev13.appendChild(nxb);
 det.appendChild(dev13);
 //block four
var dev14=document.createElement("div");
var n27=document.createElement("img");
n27.src=jm.img44;
dev14.appendChild(n27);
det.appendChild(dev14);
var n27n=document.createElement("h3");
n27n.textContent=jm.name44;
dev14.appendChild(n27n);
det.appendChild(dev14);
var n27p=document.createElement("h3")
n27p.textContent=jm.price44;
dev14.appendChild(n27p);
det.appendChild(dev14);
var n27b=document.createElement("button");
 n27b.textContent=jm.button33;
 dev14.appendChild(n27b);
 det.appendChild(dev14);
 //block five 
 var dev15=document.createElement("div");
var nc1=document.createElement("img");
nc1.src=jm.img55;
dev15.appendChild(nc1);
det.appendChild(dev15);
var nc1n=document.createElement("h3");
nc1n.textContent=jm.name55;
dev15.appendChild(nc1n);
det.appendChild(dev15);
var nc1p=document.createElement("h3")
nc1p.textContent=jm.price55;
dev15.appendChild(nc1p);
det.appendChild(dev15);
var nc1b=document.createElement("button");
 nc1b.textContent=jm.button55;
 dev15.appendChild(nc1b);
 det.appendChild(dev15);
}
