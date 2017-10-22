AuditeurContenu = {
    elementSurvole: document.getElementById('contenu'),
    contenu: document.getElementById('contenu'),
    init: function () {
        this.contenu.onmousemove = this.onmousemove.bind(this);
        this.contenu.onclick = this.onclick.bind(this);
    },
    onmousemove: function (evenement) {
        if (this.elementSurvole !== evenement.target) {
            if (this.elementSurvole) {
                this.elementSurvole.style.backgroundColor = '#FFFFFF';
                this.elementSurvole.style.color = '#000000'
            }

            this.elementSurvole = evenement.target;
        }

        if (this.contenu !== evenement.target) {
            evenement.target.style.backgroundColor = '#000';
            evenement.target.style.color = '#FFF';
        }
    },
    onclick: function (evenement) {
        if (this.commande) {
            this.commande.agit(evenement.target);
        }
    },
    fixerLaCommande: function (commande) {
        this.commande = commande;

    }

}