# fcdallas-css

fcdallas-css is a [Naut](https://github.com/Axel--/Naut-for-reddit)-based css theme for [/r/fcdallas](http://www.reddit.com/r/fcdallas).

It's free to use and any subreddit can use and edit it. Visit [/r/Naut](http://www.reddit.com/r/Naut) to preview the theme.

## Installation

Install Node.js and npm if you don't already have them.

```sh
$ apt-get install nodejs npm
```

Next, install dependencies.

```sh
$ npm install
```

## Usage

After making any changes, simply execute the command `npm run minify`. The will concatenate and minify the Naut library and the customizations for the FC Dallas subreddit.

## TODO

- [ ] Scrape upcoming fixtures
- [ ] Scrape results
- [ ] Scrape injuries
- [ ] Update subreddit with [PRAW](https://github.com/praw-dev/praw)
