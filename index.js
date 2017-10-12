

  function Cellule(value, id){
    this.balise= document.createElement("td");
    this.balise.style.color= 'black';
    this.balise.style.border   = '1px double red';
    this.balise.style.opacity=1;
      this.balise.style.padding   = '10px';
    this.baliseText= document.createTextNode( value.toString() );
    this.balise.appendChild(this.baliseText);
    this.balise.setAttribute('id', id);
    this.balise.addEventListener("click", function (balise) {
        var id = (balise.path[0].getAttribute('id') );
        var td=  document.getElementById(id);

       if(td.textContent!=="" && !isNaN(td.textContent) ){
           console.log( td.textContent );
           td.textContent= parseInt(td.textContent)+1;
          }
        else{
           prompt("saisir:", td.textContent)
       }

        td.style.opacity= parseInt(td.style.opacity)+1;
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
  function changeBalise( ) {
       console.log("1111");
  }
  function getRndValue() {
      var val=Math.floor(Math.random() * 3) ;
      switch(val) {
          case 0:
              return "";
              break;
          case 1:
              return "1"
              break;
          default:
              return "un";
      }
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
     var row ;
     for (var i = 0; i < this.nbRows; i++) {
       row = document.createElement("tr");
       //row.createAttribute("id", i);
       for (var j = 0; j < this.nbColunn; j++) {
         var id = 'id'+i+'_'+j;
         var cellule= new Cellule(getRndValue(), id);
         console.log(cellule.balise );
         //document.createElement("td");
         //cellule.addEventListener("click", function () {  this.changeContent(cellule.balise.getAttribute()); } );
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
