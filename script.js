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
            function loadHTMLFile(fileName) {
                var fullFileName = fileName + ".html"; // Aggiungi l'estensione .html
                return fetch(htmlDirectoryPath + fullFileName)
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
            var loadPromises = order.map(loadHTMLFile);
            Promise.all(loadPromises)
                .then(() => {
                    console.log("Tutti i file HTML sono stati caricati nell'ordine definito.");
                });
        })
        .catch(error => console.error('Error loading order.json:', error));
}
// Chiamare le funzioni al caricamento della pagina
window.onload = function () {
    loadHTMLFilesInOrder();
};

function grid(){
if (window.matchMedia("(min-width: 600px)").matches) {
    let magicGrid = new MagicGrid({
        container: "#thumbnails",
        static: false,
        items: 11,
        gutter: 15,
        maxColumns: 3,
        useTransform: true,
        animate: false,
    });

    magicGrid.listen();
} 
}

setInterval(grid, 250)