///<reference path='../../typings/jquery/jquery.d.ts' />
///<reference path='../../typings/view.and.data/view.and.data.d.ts' />

var urn = '<your document urn>';

$(document).ready(function () {

    var getToken =  function() {
        var xhr = new XMLHttpRequest();

        xhr.open("GET", '/node/typeview/api/token', false);
        xhr.send(null);
        var response = JSON.parse(xhr.responseText);
        return response.access_token;
    }

    function initializeViewer(containerId, documentId, role) {

        var viewerContainer = document.getElementById(containerId);
        var viewer = new Autodesk.Viewing.Private.GuiViewer3D(viewerContainer);

        viewer.start();

        Autodesk.Viewing.Document.load(documentId,
            (document) => {
                var rootItem = document.getRootItem();
                var geometryItems = Autodesk.Viewing.Document.getSubItemsWithProperties(rootItem,
                    { 'type': 'geometry', 'role': role }, true);

                viewer.load(document.getViewablePath(geometryItems[0]));
            },
            (msg) => {
                console.log('Error loading document: ' + msg);
            }
        );
    }

    function initialize() {

        var options = {
            env: 'AutodeskProduction',
            getAccessToken: getToken,
            refreshToken: getToken
        };

        Autodesk.Viewing.Initializer(options, () => {
            initializeViewer('viewer', 'urn:' + urn, '3d');
        });
    }

    initialize();
});

