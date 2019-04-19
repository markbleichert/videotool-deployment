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


