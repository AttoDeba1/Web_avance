onload = function () {
    AuditeurContenu.init();
    var barreOutil = document.getElementById('barreAOutil');

    var formatGras = {propriete: 'font-weight', valeur: 'blod'};
    var cmdFormatGras = new CommandeFormatage({
        titre: 'Mise en gras',
        baliseMere: barreOutil,
        format: formatGras
    });

    var formatItalic = {propriete: 'font-style', valeur: 'italic'};
    var cmdFormatItalic = new CommandeFormatage({
        titre: 'Mise en italique',
        baliseMere: barreOutil,
        format: formatItalic
    });
    new CommandeAction({
        titre: 'Supprimer',
        baliseMere: barreAOutil,
        fonction: function (cible) {
            cible.parentNode.removeChild(cible);
        }
    });
    new CommandeAction({
        titre: 'Ajouter',
        baliseMere: barreAOutil,
        fonction: function (cible) {
            var nouveauTexte = prompt("Texte du nouveau paragraphe", "petit essai");
            if (!nouveauTexte)
                return;
            var baliseMere = cible.parentNode;
            var nouveauParagraphe = document.createElement("P");
            nouveauParagraphe.appendChild(document.createTextNode(nouveauTexte));
            baliseMere.insertBefore(nouveauParagraphe, cible)
        }
    });

}