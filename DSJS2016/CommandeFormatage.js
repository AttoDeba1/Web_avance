function CommandeFormatage(params) {
    this.call(Commande(params));
    this.format = params.format;
}

CommandeFormatage.prototype = Commande;

CommandeFormatage.prototype.agit = function (cible) {
    var nomPropriete = this.format.propriete;
    var laValeur = this.format.valeur;
    cible.style[nomPropriete] = laValeur;
    Commande.prototype.agit.call(this, cible);
}