document.addEventListener("DOMContentLoaded", function() {
    // Pestañas de navegación
    const tabs = document.querySelectorAll(".tab-button");
    const contents = document.querySelectorAll(".tab-content");

    tabs.forEach(tab => {
        tab.addEventListener("click", function() {
            tabs.forEach(t => t.classList.remove("active"));
            contents.forEach(content => content.classList.remove("active"));

            this.classList.add("active");
            const target = this.id.replace("Tab", "");
            document.getElementById(target).classList.add("active");
        });
    });

    // Pestaña activa inicial
    document.getElementById("designTab").classList.add("active");
    document.getElementById("lensDesign").classList.add("active");

    // Volver al inicio
    const backToStartButton = document.getElementById("backToStart");
    backToStartButton.addEventListener("click", function() {
        window.location.reload(); // Recargar la página principal
    });

    // Subir y descargar PDF
    const pdfUpload = document.getElementById("pdfUpload");
    const downloadPDFButton = document.getElementById("downloadPDF");

    pdfUpload.addEventListener("change", function() {
        if (pdfUpload.files.length > 0) {
            downloadPDFButton.style.display = "inline-block";
        }
    });

    downloadPDFButton.addEventListener("click", function() {
        const file = pdfUpload.files[0];
        const link = document.createElement("a");
        link.href = URL.createObjectURL(file);
        link.download = file.name;
        link.click();
    });
});