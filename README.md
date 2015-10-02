matrix-react-console
====================

A simple Matrix client built on top of matrix-react-skin

Building
========

You can build the source and start an testing / development HTTP server using::

	`npm start`

Wait a few seconds for the javascript bundle to be built, and then open
http://localhost:8080/ in your web browser.

This will also watch all of the source files and rebuild when changes are
made.

To make a production build of the app::

	`npm run build`

You can then copy the 'app' directory to your web server.
