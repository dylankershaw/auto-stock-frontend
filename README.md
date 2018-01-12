# Tagless
An auto-indexing photo site that assign relevant labels to images on upload. In other words, users can upload an image and the app will automatically tag it by using Google Cloud's [Vision API](https://cloud.google.com/vision/).

## Key Technologies, Packages, and Gems
* Front End
	* React
	* Redux
	* react-router
	* semantic-ui-react
	* redux-thunk
	* redux-form
	* Chart.js
* Back End
	* Rails
	* Google Cloud Storage
	* Google Cloud Vision
	* Mini Magick
	* JWT


## Core Features
* Base64 image encoding (front-end) and decoding (back-end)
* Automatic AI-based label assignment of images
* User authentication and cookie storage through JSON Web Tokens (JWT)
	* Logs users in on page load if they have a valid token in their localStorage
* Automatic backup of every image via Google Cloud Storage
* Users can upload images from their computer or by entering a url
* Dynamic handling of image downloads allows for multiple file types

## Demo
