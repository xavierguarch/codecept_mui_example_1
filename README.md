# Create React App example

Original example copied from the Material UI [`create-react-app` example](https://github.com/mui-org/material-ui/examples/create-react-app).

It has been adapted to add [select fields](https://material-ui.com/demos/selects/) to it and test them with [CodeceptJS](https://codecept.io).

## How to use

Download the example [or clone the repo](https://github.com/xavierguarch/codecept_mui_example_1):

Install it and run:

```bash
npm install
npm run start
```

Install CodeceptJS and Selenium Standalone in another shell and run it:

```bash
npm install -g codeceptjs webdriverio
npm install -g selenium-standalone
selenium-standalone install
selenium-standalone start
```

Run tests in yet another shell:

```bash
codeceptjs run --steps
```

## The idea behind the example

[Create React App](https://github.com/facebookincubator/create-react-app) with no build configuration.
