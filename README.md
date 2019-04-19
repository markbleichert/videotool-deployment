# Videotool deployment bundle

The repository contains all artifact needed for deploying the videotool to a statics server.
The videotool is made up out of data and images contained by refeence inside the data file.
The package also contains tnl-publish which will take care of the actual packing and publishing
from within a Jenkins build.

## steps

- npm install
- add to (rabo)git
- create Jenkins pipeline
- run jenkins build

At this point all artifact will be deployed to Maven inside the namespace specified in package.json groupId.
Use picoma to get the zip file (containing the resource) to the static server.

Make sure picoma static resource is versioned and will result in following url:
https://www.mycompany.nl/static/appls/videotool/0.0.21/images/myimage.png

The image url inside the data file will be relative like '/images/myimage.png'.
The QA Runtime will rewrite the url to the environment specific url.

## example
Tridion should include following to HTML page:

```html
    <script src="https://www.mycompany.nl/static/appls/videotool/0.0.21/config.js"></script>
    <script src="https://www.mycompany.nl/static/appls/videotool/0.0.21/qa-renderer.min.js"></script>
    <script>
        window.addEventListener('load', function() {
            window.qa.start(window.qaData, 'qa-container', { baseUrl: '/static/appls/videotool/0.0.21/' });
        });
    </script>

    ...
    <body>
    ...
      <section id="qa-module" class="qa-module"></section>
    ...
    </body>
```


