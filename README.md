# MSquare Healthcare Javascript Interview Exercise
This readme defines a development scenario for a fictional app, which is intended to asses your ability to implement a feature based on predefined requirements.

## Scenario
We want to make a fun little app for our young patients which lets them look up pictures of Pokémon.
We made the technical decision not to use Javascript's native HTTP client `fetch()`.
Instead, we would like to implement the third-party [Axios](https://www.npmjs.com/package/axios) HTTP client.

## Prerequisites
In order to proceed with this exercise, you will need [Node.js](https://nodejs.org/) and [NPM](https://www.npmjs.com/) installed.
This repo provides a boilerplate template which you will use for your solution.

## Getting Started
The first thing you'll want to do is clone the repository.
Once you have the repo cloned into your dev environment, run `npm i` to install the project dependencies.

This project includes a development server courtesy of the [Parcel](https://parceljs.org/) bundler.
If you are unfamiliar with a development server, it's a tool which allows you to rapidly develop in various languages while automatically updating the output in your browser.

In a terminal execute `npm run dev` in the project directory which will start the development server.
In your browser, you can navigate to `http://localhost:1234` to see the app.
As you make changes to the code, the app will update in the browser in realtime.

## Exercise Instructions
A user should be able to enter the name of a Pokémon into the search field and get back that Pokémon's image.
As it so happens, there is a [free API](https://pokeapi.co/) which provides all sorts of information about Pokémon, including their pictures!

`app/app.js` is a simple React app with a search UI already implemented.
Don't worry, you don't need to know react to complete this exercise.
Update this react app with logic for your search implementation.

When you are finished, upload your result to a new repository on GitHub.
We should be able to checkout your repo, run `npm i`, then run the app to see your solution.

## Hints
* The [PokeAPI](https://pokeapi.co/) docs define the structure of the response you should expect back when making a request. The particular property we want to grab from the response is `sprites.front_default` - this is a URL for picture of the Pokémon that was searched.
* Remember we can't use Fetch, we need to use the [Axios library](https://www.npmjs.com/package/axios) (you'll need to install this from NPM, then import it into app.js).
* There are some comments in the code to guide you.
* See the example results section below for an idea of the output you should expect with a working solution.
* Remember you are sharing this with other developers, so make sure any dependencies you install are tracked in `package.json`.

## Example Results
Searching for "Pikachu".
![Pikachu](/documentation/pikachu.png)

Searching for "Bulbasaur".
![Bulbasaur](/documentation/bulbasaur.png)

Searching for "Scooby Doo" (that's not a pokémon).
![Error](/documentation/error.png)

## Extra Credit
This is not a requirement, but if you feel motivated to add some styles to make the search look prettier, feel free to do so!
There's an `app.css` file already linked to `app.js`, you can add your styles here.
