# Webpack-React

The main purpose of this project was to learn the basics of the `Webpack` and I thinks I achieved that goal.
When I started working on that I didn't know the exact final effect I want to achieve,
but it ended up pretty well and I'm happy with the resoult :joy: :grin:

### What is the effect of the project?
The project is a structured code of a web application written in React.
Webpack processes all files from `src` folder and bundles them into `public` build folder.

The final effect is a browser home page (not finished yet :stuck_out_tongue_winking_eye:).
It contains:
1. Google search bar (which on search takes user to new tab)
2. Links section to instantly jump to a website
3. Usefull section where you can:
    - create Todos lists
    - see incoming birthdays of people you add to the reminder
    - create your own links cluster (f.e. Coding - with usefull links to courses etc.)


### Used technologies and tools
- [x] `Webpack` - modules bundler
- [x] `React` - web front-end engine
- [x] `Babel` - JS compiler
- [x] `scss` - styling
- [X] `post-css` - CSS compiler
- [ ] `typescript` - typed JS syntax

### How to build
1. Clone this repo to local machine or server.
2. run `npm install`
3. run `npm build`
4. Go to `public` folder and run `index.html`

### Scripts
- `start` - Starts webpack server (configuration of that server you can find in `webpack.config.js`)
- `build` - Builds application for **Production** (minified JS, CSS)
- `build-dev` - Build application in **Developer** way, so you can easily inspect result files. 

### Summary
> Webpack is awesome - me, Sep 2021