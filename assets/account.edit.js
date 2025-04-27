const translations = {
  English: {
    editProfile: "Edit Profile",
    language: "Language",
    maturitySettings: "Maturity Settings",
    editBtn: "EDIT",
    autoplayControls: "Autoplay controls",
    autoplayNext: "Autoplay next episode in a series on all devices.",
    autoplayPrev: "Autoplay previews while browsing on all devices.",
    save: "SAVE",
    cancel: "CANCEL",
    deleteProfile: "DELETE PROFILE",
  },
  Italiano: {
    editProfile: "Modifica Profilo",
    language: "Lingua",
    maturitySettings: "Impostazioni di maturità",
    editBtn: "MODIFICA",
    autoplayControls: "Controlli di riproduzione automatica",
    autoplayNext: "Riproduci automaticamente l'episodio successivo di una serie su tutti i dispositivi.",
    autoplayPrev: "Riproduzione automatica delle viste precedenti mentre si naviga su tutti i dispositivi.",
    save: "SALVA",
    cancel: "ANNULLA",
    deleteProfile: "ELIMINA PROFILO",
  },
  Espanol: {
    editProfile: "Editar Perfil",
    language: "Idioma",
    maturitySettings: "Configuraciones de madurez",
    editBtn: "EDITAR",
    autoplayControls: "Controles de reproducción automática",
    autoplayNext: "Reproducir automáticamente el próximo episodio de una serie en todos los dispositivos.",
    autoplayPrev: "Reproducción automática de vistas previas mientras navegas en todos los dispositivos.",
    save: "GUARDAR",
    cancel: "CANCELAR",
    deleteProfile: "ELIMINAR PERFIL",
  },
};

const languageSelect = document.getElementById("languageSelect");

languageSelect.addEventListener("change", function () {
  const selectedLanguage = this.value;
  const t = translations[selectedLanguage];

  document.getElementById("editProfileTitle").textContent = t.editProfile;
  document.getElementById("languageLabel").textContent = t.language;
  document.getElementById("maturitySettingsLabel").textContent = t.maturitySettings;
  document.getElementById("editBtnLabel").textContent = t.editBtn;
  document.getElementById("autoplayControlsLabel").textContent = t.autoplayControls;
  document.getElementById("autoplayNextLabel").textContent = t.autoplayNext;
  document.getElementById("autoplayPrevLabel").textContent = t.autoplayPrev;
  document.getElementById("saveButton").textContent = t.save;
  document.getElementById("cancelButton").textContent = t.cancel;
  document.getElementById("deleteProfileButton").textContent = t.deleteProfile;
});
