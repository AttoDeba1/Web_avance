

  function Cellule(value){
    this.balise= document.createElement("td");
    this.balise.style.color= 'black';
    this.balise.style.border   = '1px double red';
    this.balise.style.padding   = '10px';
    this.baliseText= document.createTextNode( value.toString() );
    this.balise.appendChild(this.baliseText);

    //define getter and setter for Cellule object
    this.__defineSetter__("text", function (value) {
      this.baliseText.data=value;
    });
    this.__defineGetter__("text", function () {
      return  this.baliseText.data;
    });

    return this.balise;
  }


class Table{
   constructor(HTMLContainer, nbRows, nbColunn) {
     this.HTMLContainer=HTMLContainer;
     this.nbRows=nbRows;
     this.nbColunn=nbColunn;
   }
  changeContent(balise) {
      console.log(balise);
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
         cellule= new Cellule(1);  //document.createElement("td");
         cellule.addEventListener("click", function () {  this.changeContent(cellule); } );
         row.appendChild(cellule);
       }
       this.baliseTable.appendChild(row);
     }
   }
   initTable(){}

}


onload= function () {

  var container =   document.getElementById('container');
  var table= new Table(container, 20,20)
  table.buildTable();

}
