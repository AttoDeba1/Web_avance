

  function Cellulsssse(value, id){
    this.balise= document.createElement("td");
    this.balise.style.color= 'black';
      this.balise.style.border = '1px double';
      this.balise.style.opacity = (value === '') ? '0.4' : '1';
      // this.balise.style.backgroundColor= (value!=="")?'':'black';
      this.balise.style.padding = '10px';
    this.baliseText= document.createTextNode( value.toString() );
    this.balise.appendChild(this.baliseText);
    this.balise.setAttribute('id', id);
    this.balise.addEventListener("click", function (balise) {
        let id = (balise.path[0].getAttribute('id') );
        let td = document.getElementById(id);
       if(td.textContent!=="" && !isNaN(td.textContent) ){
           td.textContent= parseInt(td.textContent)+1;
          }
        else{
           if (td.textContent === "") {
               td.style.backgroundColor = 'black';
               td.style.opacity = parseFloat(td.style.opacity) + 0.1;
           }
           else {
               const txt = prompt("saisir:", td.textContent);
               td.textContent = txt;
           }
       }

    } );

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
   buildTable(){
     this.baliseTable= document.createElement("table");
     console.log(this.HTMLContainer);
     this.HTMLContainer.appendChild(this.baliseTable);
     var row ;
     for (var i = 0; i < this.nbRows; i++) {
       row = document.createElement("tr");
       for (var j = 0; j < this.nbColunn; j++) {
          var cel = getRndCellule(row);
       }
       this.baliseTable.appendChild(row);
     }
   }

    initTable() {
    }

}


onload= function () {

  var container =   document.getElementById('container');
    var table = new Table(container, 10, 15)
  table.buildTable();

}
