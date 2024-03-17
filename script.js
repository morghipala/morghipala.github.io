// Funzione per caricare i file HTML dalla directory "blocks" in base all'ordine definito in order.json
function loadHTMLFilesInOrder() {
    // Percorso della directory "blocks"
    var htmlDirectoryPath = "blocks/";

    // Carica l'ordine definito in order.json
    fetch("order.json")
        .then(response => response.json())
        .then(data => {
            var order = data.order;
            var loadedCount = 0; // Contatore per tenere traccia dei file HTML caricati

            // Carica i file HTML in base all'ordine definito
            order.forEach(function (fileName, index) {
                var fullFileName = fileName + ".html"; // Aggiungi l'estensione .html
                fetch(htmlDirectoryPath + fullFileName)
                    .then(response => {
                        if (response.ok) {
                            return response.text();
                        } else {
                            console.error("File non trovato:", fullFileName);
                            return Promise.reject("File non trovato");
                        }
                    })
                    .then(data => {
                        // Creare un nuovo elemento <div> per contenere il contenuto HTML
                        var div = document.createElement("div");
                        div.innerHTML = data;

                        // Inserire il contenuto HTML nel div "thumbnails"
                        var thumbnailsDiv = document.getElementById("thumbnails");
                        thumbnailsDiv.appendChild(div);

                        // Incrementa il contatore
                        loadedCount++;

                        // Controlla se tutti i file sono stati caricati
                        if (loadedCount === order.length) {
                            console.log("Tutti i file HTML sono stati caricati.");

                            // Controlla se l'ordine è corretto
                            var loadedOrder = Array.from(thumbnailsDiv.children).map(function (child) {
                                return child.getAttribute("data-file");
                            });
                            if (JSON.stringify(order) === JSON.stringify(loadedOrder)) {
                                console.log("L'ordine è corretto.");
                            } else {
                                console.error("L'ordine non è corretto.");
                            }
                        }
                    })
                    .catch(error => console.error('Error loading HTML file:', error));
            });
        })
        .catch(error => console.error('Error loading order.json:', error));
}

// Funzione per caricare i file CSS dalla directory "css"
function loadCSSFiles() {
    // Percorso della directory "css"
    var cssDirectoryPath = "css/";

    // Carica i file CSS definiti in cssfiles.json
    fetch("cssfiles.json")
        .then(response => response.json())
        .then(data => {
            var cssFiles = data.files;

            // Caricare ciascun file CSS e aggiungerlo all'head della pagina HTML
            cssFiles.forEach(function (fileName) {
                var fullFileName = fileName + ".css"; // Aggiungi l'estensione .css
                var link = document.createElement("link");
                link.rel = "stylesheet";
                link.type = "text/css";
                link.href = cssDirectoryPath + fullFileName;
                document.head.appendChild(link);
            });
        })
        .catch(error => console.error('Error loading cssfiles.json:', error));
}

// Chiamare le funzioni al caricamento della pagina
window.onload = function () {
    loadCSSFiles();
    loadHTMLFilesInOrder();
};
