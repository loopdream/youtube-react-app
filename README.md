# A Universal  (Isomorphic / SSR) React App (WIP)
>
A simple app that consumes data from [this YouTube API  JSON FEED ](https://www.googleapis.com/youtube/v3/playlistItems?part=snippet,contentDetails,status&maxResults=10&playlistId=PLSi28iDfECJPJYFA4wjlF5KUucFvc0qbQ&key=AIzaSyCuv_16onZRx3qHDStC-FUp__A6si-fStw)  and then displays the results, which in this instance is a list of videos that belong to a playlist. Clicking on a video should then show a detail page of that video and its meta data. All pages should be handled by React, use modern  tooling, and be server side rendered (SSR).

###  Requisites
* The app should be built using responsive techniques to behave well on a variety of devices
* Look and feel is up to you
* Layout should match the provided wireframes
* Supports the following browser matrix
  * Chrome (2 versions back)
  * Firefox (2 versions back)
  * Safari (2 versions back)
  * IE11+
* Must be built using valid, accessible HTML, CSS and JavaScript
* Must be built as an Isomorphic (Universal) React application
* The app must be highly optimised
* Use a build tool e.g. Webpack, Gulp to manage bundling of assets
* Ensure all components are correctly tested
* Work to be hosted on your GIT repository of choice (github, bitbucket etc.)
* A running version of the test should be made available online (e.g. github pages, heroku etc.)

[See the app in action on Heroku](https://beyond-youtube-react-app.herokuapp.com/video/X0qwQqwKLlM)

### Prerequisites
>Global dependencies or any other tools

The easiest way to install global dependancies on OSX is to install [install Homebrew](https://brew.sh/) 

*Note: Homebrew requires Xcode Command Line tools!* 


Install Node JS and NPM 

```sh
brew install node
```

## Getting Started

Before getting started make sure you have satisfied all the [Prerequisites](#prerequisites) below.


Export the codebase into your local environment and 

```shell
git clone git@github.com:loopdream/youtube-react-app.git
```


### Installing



Say what the step will be

```
Give the example
```

And repeat

```
until finished
```

End with an example of getting some data out of the system or using it for a little demo

## Running the tests

Explain how to run the automated tests for this system

### Break down into end to end tests

Explain what these tests test and why

```
Give an example
```

### And coding style tests

Explain what these tests test and why

```
Give an example
```

## Deployment

Add additional notes about how to deploy this on a live system

## Built With

* [Dropwizard](http://www.dropwizard.io/1.0.2/docs/) - The web framework used
* [Maven](https://maven.apache.org/) - Dependency Management
* [ROME](https://rometools.github.io/rome/) - Used to generate RSS Feeds

 