function CommandeAction(params) {
    this.call(Commande(params));
    this.fonction = params.fonction;
}

CommandeAction.prototype.agit = function (cible) {
    this.call(this.fonction, cible);
    Commande.prototype.agit.call(this, cible);
}