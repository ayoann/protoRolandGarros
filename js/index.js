$(function() {
	// récupération des boutons de filtre des sous-tournois
	var btnFiltres = $(".btn-filtre");

	// récupération du bouton de filtre séléctionné
	var btnFiltreActif = $(".btn-filtre.t-selected");

	// récupération de tous les block de matchs
	var matchsBlocks = $(".match-block");

	// ajout d'un évènement sur le click de chacun des boutons du menu de filtre
	btnFiltres.click(function () {
		var btnFiltre = $(this);

		// suppression de la classe CSS du bouton actif
		btnFiltreActif.removeClass("t-selected").addClass("t-not-selected");
		btnFiltre.removeClass("t-not-selected").addClass("t-selected");

		// changement de référence du bouton actif
		btnFiltreActif = btnFiltre;

		// filtre la liste des résultats de matchs
		var classBtn = btnFiltre.find("span").attr("class");
		updateListeMatches(classBtn);
	});

	function updateListeMatches(className) {
		// si la class n'est pas t-tous
		if (className !== "t-tous") {
			matchsBlocks.each(function (index, elt) {
				var matchBlock = $(elt);
				if (matchBlock.hasClass(className)) {
					matchBlock.show();
				} else {
					matchBlock.hide();
				}
			});
		} else {
			matchsBlocks.each(function (index, elt) {
				var matchBlock = $(elt);

				matchBlock.show();
			});
		}
	}
});