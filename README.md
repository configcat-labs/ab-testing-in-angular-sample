# A/B testing in Angular sample

A companion repo for **How to A/B test your Angular application using Feature Flags and Amplitude.**

## About

This is a fictional hosting website. It is used to demonstrate how to perform an A/B test in Angular.

Here is a screenshot:

<!-- TODO: Update snapshot -->

The green badge over the pro pricing plan can be identified as the new variation/feature to be tested.

## How it works

Clicking on the buy now button on the pro plan card logs an event to Amplitude. The events are then recorded in 
an analysis chart for later comparison to the previous benchmark metrics collected for the control state (a version of the site a yellow badge).

## Build and Run

### Prerequisites

- Node - Version 16.16.0

### Running the app

1. Clone this repository

2. Open a terminal in the root of the cloned repo and install the required npm packages:

```sh
npm install
```
3. Start the app by running:

```sh
npm start
```

## Learn more

Useful links to technical resources.

- [Angular Documentation](https://angular.io/docs) - learn about Angular features and API.

[**ConfigCat**](https://configcat.com) also supports many other frameworks and languages. Check out the full list of supported SDKs [here](https://configcat.com/docs/sdk-reference/overview/)

You can also explore other code samples for various languages, frameworks, and topics here in the [ConfigCat labs](https://github.com/configcat-labs) on GitHub.

Keep up with ConfigCat on [Twitter](https://twitter.com/configcat), [Facebook](https://www.facebook.com/configcat), [LinkedIn](https://www.linkedin.com/company/configcat/), and [GitHub](https://github.com/configcat).

## Author
[Chavez Harris](https://github.com/codedbychavez)

## Contributions
Contributions are welcome!
