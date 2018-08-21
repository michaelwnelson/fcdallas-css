fcdallas-css
===============

fcdallas-css is a [Naut](https://github.com/Axel--/Naut-for-reddit)-based css theme for [/r/fcdallas](http://www.reddit.com/r/fcdallas).

It's free to use and any subreddit can use and edit it. Visit [/r/Naut](http://www.reddit.com/r/Naut) to preview the theme.

## Installation
Install Node.js and npm, and gulp if you don't have them.
```sh
$ apt-get install nodejs npm
$ npm install -g gulp
```

Next, install dependencies.
```sh
# install dependencies listed in package.json
$ npm install
```

## Usage
After making any changes, simply execute the command `gulp`. The default method calls `minify` which concatenates and minifies the Naut library and the customizations for the FC Dallas subreddit.

## TODO
- [ ] Scrape upcoming fixtures
- [ ] Scrape results
- [ ] Scrape injuries
- [ ] Update subreddit with [PRAW](https://github.com/praw-dev/praw)

