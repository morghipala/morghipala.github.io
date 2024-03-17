function loadHTMLFilesInOrder() {

    var htmlDirectoryPath = "blocks/";

    fetch("order.json")
        .then(response => response.json())
        .then(data => {
            var order = data.order;

            function loadFile(fileName) {
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
                    })
                    .catch(error => console.error('Error loading HTML file:', error));
            }

            order.forEach(function (fileName) {
                loadFile(fileName);
            });

            fetch(htmlDirectoryPath)
                .then(response => response.text())
                .then(data => {

                    var parser = new DOMParser();
                    var xmlDoc = parser.parseFromString(data, "text/html");

                    var links = xmlDoc.getElementsByTagName("a");
                    var htmlFiles = [];
                    for (var i = 0; i < links.length; i++) {
                        var href = links[i].getAttribute("href");

                        if (href.endsWith(".html") && !order.includes(href.slice(0, -5))) { 
                            htmlFiles.push(href);
                        }
                    }

                    htmlFiles.forEach(function (file) {
                        loadFile(file.slice(0, -5)); 
                    });
                });
        })
        .catch(error => console.error('Error loading order.json:', error));
}

function loadCSSFiles() {

    var cssDirectoryPath = "css/";

    fetch(cssDirectoryPath)
        .then(response => response.text())
        .then(data => {

            var parser = new DOMParser();
            var xmlDoc = parser.parseFromString(data, "text/html");

            var links = xmlDoc.getElementsByTagName("a");
            var cssFiles = [];
            for (var i = 0; i < links.length; i++) {
                var href = links[i].getAttribute("href");

                if (href.endsWith(".css")) {
                    cssFiles.push(href);
                }
            }

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

window.onload = function () {
    loadCSSFiles();
    loadHTMLFilesInOrder();
};