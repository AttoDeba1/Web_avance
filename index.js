function Cellule() {
  this.balise= document.createElement("td");
  this.baliseText= document.createTextNode("");
  this.balise.appendChild(this.baliseText);

  //define getter and setter for Cellule object
  this.__defineSetter__("text", function (value) {
    this.baliseText.data=value;
  });
  this.__defineGetter__("text", function () {
    return  this.baliseText.data;
  });
}


class Table{
   constructor(HTMLContainer, nbRows, nbColunn) {
     this.HTMLContainer=HTMLContainer;
     this.nbRows=nbRows;
     this.nbColunn=nbColunn;
   }
   buildTable(){
     this.baliseTable= document.createElement("table");
     console.log(this.HTMLContainer);
     this.HTMLContainer.appendChild(this.baliseTable);
     var row, cellule ;
     for (var i = 0; i < this.nbRows; i++) {
       row = document.createElement("tr");
       //row.createAttribute("id", i);
       for (var j = 0; j < this.nbColunn; j++) {
         cellule= document.createElement("th");
         cellule.appendChild(document.createTextNode("1"));
         row.appendChild(cellule);
       }
       this.baliseTable.appendChild(row);
     }
   }
   initTable(){}

}


onload= function () {

  var container =   document.getElementById('container');
  var table= new Table(container, 10,10)
  table.buildTable();

}
