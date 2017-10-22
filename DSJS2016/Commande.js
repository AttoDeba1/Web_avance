function Commande(params) {
    if (params.length === 0) return;
    this.titre = params.titre;
    this.baliseMere = params.baliseMere;
    this.construireBaliseHTML();
}

Commande.prototype.construireBaliseHTML = function () {
    this.balise = document.createElement();
    this.balise.className = 'list-items-group';
    this.balise.href = '#';
    this.baliseMere.appendChild(this.balise);
    this.balise.appendChild(document.createTextNode(this.titre));
    this.balise.addEventListener('click', this);
}


Commande.prototype.handleEvent = function (evenement) {
    this.balise.className = 'list-items-group active';
    AuditeurContenu.fixerLaCommande(this);
}

Commande.prototype.agit = function (cible) {
    this.balise.className = 'list-items-group';
    AuditeurContenu.fixerLaCommande(null);
}


