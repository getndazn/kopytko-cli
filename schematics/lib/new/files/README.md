## Description

[Kopytko framework](https://github.com/getndazn/kopytko-framework) boilerplate application.

## Installation

```bash
$ npm install
```

## Scripts
The applicattion contains the following scripts:
- `npm run build` - builds the app
- `npm run start` - builds and deploys the app to the device
- `npm run test` - builds, deplys the app and run test on the device
- `npm run package` - builds, deploys the app to the device and finally signs and download the package

## Configration
You can change predefined configuration inside `.env` file:

```
ROKU_IP=
ROKU_DEV_USER=
ROKU_DEV_PASSWORD=

ROKU_DEV_ID=
ROKU_DEV_SIGNING_PASSWORD=
```
If you want to extend exisiting configuration please see instructions [here](https://github.com/getndazn/kopytko-packager#configuration).
