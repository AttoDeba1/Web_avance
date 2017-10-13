function Cellule(ligne){
    this.balise= document.createElement("td");
    ligne.appendChild(this.balise);

    this.baliseText= document.createTextNode("");
    this.balise.appendChild(this.baliseText);

    this.balise.addEventListener("click", this);
    style(this.balise);
}


Cellule.prototype.__defineSetter__(
  "text",
  function (value) {
         this.baliseText.data=value;
    }
);

Cellule.prototype.__defineGetter__(
 "text",
 function () {
    return  this.baliseText.data;
      }
  );
  function getRndCellule(row) {
     var val = Math.floor(Math.random() * 3);
     switch(val) {
         case 0:
             return new CelluleEntier(row);
             break;
         case 1:
             return new CelluleColor(row);
             break;
         default:
             return new CelluleText(row);
     }
 }
function style(balise) {
  balise.style.color= 'black';
  balise.style.border = '1px double';
  balise.style.padding = '10px';
}

function CelluleEntier(ligne) {
    Cellule.call(this,ligne);
    this.baliseText.data="9";

}

function CelluleColor(ligne)  {
  Cellule.call(this,ligne);
  this.baliseText.data="";
  this.balise.style.backgroundColor= "rgb(255,255,255)";

}

function CelluleText(ligne)  {
  Cellule.apply(this,[ligne]);
  //this.baliseText.data="txt";


}
CelluleText.prototype.handleEvent = function () {
  console.log(this);
  const txt = prompt("saisir:", this.text);
  this.text = txt;
}

CelluleEntier.prototype.handleEvent = function () {
  console.log(this);
}

CelluleColor.prototype.handleEvent = function () {
  console.log(this);
}
