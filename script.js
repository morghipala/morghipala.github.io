function loadHTMLFilesInOrder() {

    var htmlDirectoryPath = "blocks/";

    fetch("order.json")
        .then(response => response.json())
        .then(data => {
            var order = data.order;
            var loadedCount = 0; 

            order.forEach(function (fileName) {
                var fullFileName = fileName + ".html"; 
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

                        var div = document.createElement("div");
                        div.innerHTML = data;

                        var thumbnailsDiv = document.getElementById("thumbnails");
                        thumbnailsDiv.appendChild(div);

                        loadedCount++;

                        if (loadedCount === order.length) {
                            console.log("Tutti i file HTML sono stati caricati.");
                        }
                    })
                    .catch(error => console.error('Error loading HTML file:', error));
            });
        })
        .catch(error => console.error('Error loading order.json:', error));
}

function loadCSSFiles() {

    var cssDirectoryPath = "css/";

    fetch("cssfiles.json")
        .then(response => response.json())
        .then(data => {
            var cssFiles = data.files;

            cssFiles.forEach(function (fileName) {
                var fullFileName = fileName + ".css"; 
                var link = document.createElement("link");
                link.rel = "stylesheet";
                link.type = "text/css";
                link.href = cssDirectoryPath + fullFileName;
                document.head.appendChild(link);
            });
        })
        .catch(error => console.error('Error loading cssfiles.json:', error));
}

window.onload = function () {
    loadCSSFiles();
    loadHTMLFilesInOrder();
};