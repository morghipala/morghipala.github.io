// Funzione per caricare i file HTML dalla directory "blocks" in base all'ordine definito in order.json
function loadHTMLFilesInOrder() {
    // Percorso della directory "blocks"
    var htmlDirectoryPath = "blocks/";

    // Carica l'ordine definito in order.json
    fetch("order.json")
        .then(response => response.json())
        .then(data => {
            var order = data.order;

            // Funzione per caricare un singolo file HTML
            function loadFile(fileName) {
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
                    })
                    .catch(error => console.error('Error loading HTML file:', error));
            }

            // Carica i file HTML in base all'ordine definito
            order.forEach(function (fileName) {
                loadFile(fileName);
            });

            // Carica i file HTML rimanenti nella directory che non sono definiti in order.json
            fetch(htmlDirectoryPath)
                .then(response => response.text())
                .then(data => {
                    // Creare un oggetto DOM temporaneo per analizzare il contenuto della directory
                    var parser = new DOMParser();
                    var xmlDoc = parser.parseFromString(data, "text/html");

                    // Ottenere una lista di tutti i link ai file nella directory
                    var links = xmlDoc.getElementsByTagName("a");
                    var htmlFiles = [];
                    for (var i = 0; i < links.length; i++) {
                        var href = links[i].getAttribute("href");
                        // Aggiungere solo i file HTML alla lista che non sono presenti in order.json
                        if (href.endsWith(".html") && !order.includes(href.slice(0, -5))) { // Rimuovi l'estensione .html
                            htmlFiles.push(href);
                        }
                    }

                    // Caricare ciascun file HTML rimanente e aggiungerlo alla fine
                    htmlFiles.forEach(function (file) {
                        loadFile(file.slice(0, -5)); // Rimuovi l'estensione .html
                    });
                });
        })
        .catch(error => console.error('Error loading order.json:', error));
}

// Funzione per caricare i file CSS dalla directory "css" e aggiungere i collegamenti direttamente a head
function loadCSSFilesAndAddLinksToHead() {
    // Percorso della directory "css"
    var cssDirectoryPath = "css/";

    // Ottenere una lista dei file CSS dalla directory
    fetch(cssDirectoryPath)
        .then(response => response.text())
        .then(data => {
            // Creare un oggetto DOM temporaneo per analizzare il contenuto della directory
            var parser = new DOMParser();
            var xmlDoc = parser.parseFromString(data, "text/html");

            // Ottenere una lista di tutti i link ai file CSS nella directory
            var links = xmlDoc.getElementsByTagName("a");
            var cssFiles = [];
            for (var i = 0; i < links.length; i++) {
                var href = links[i].getAttribute("href");
                // Aggiungere solo i file CSS alla lista che non sono "index.html"
                if (href.endsWith(".css") && href !== "index.html") {
                    cssFiles.push(href);
                }
            }

            // Aggiungi i collegamenti CSS direttamente a head
            cssFiles.forEach(function (file) {
                var link = document.createElement("link");
                link.rel = "stylesheet";
                link.type = "text/css";
                link.href = cssDirectoryPath + file;
                document.head.appendChild(link);
            });
        })
        .catch(error => console.error('Error loading CSS files:', error));
}

// Chiamare le funzioni al caricamento della pagina
window.onload = function () {
    loadCSSFilesAndAddLinksToHead();
    loadHTMLFilesInOrder();
};
