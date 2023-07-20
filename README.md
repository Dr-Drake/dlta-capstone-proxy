# DLTA Capstone Proxy
This is just a simple reverse proxy server for our ec2 instance that doesn't have a trusted ssl certificate to comfortably accept https request. The purpose of this was to provide a soultion to the "mixed content" error we were getting on the web app hosted on netlify.

## Getting Started
Create a .env file, then add the following:
- TARGET_URL="YOUR_URL_TO_PROXY"

Install the dependencies
```bash
yarn install
#or
npm run install
```

To run the project in dev mode using any of the following commands:

```bash
yarn watch
#or
npm run watch
```

To build the project and run it

```bash
yarn build
yarn start
#or
npm run build
npm run start
```

Then go to http://localhost:3333.

## Stay in touch

- Author - [Ikem Ezechukwu](ikem.ezechukwu@outlook.com)
- LinkedIn - [https://www.linkedin.com/in/ikem-ezechukwu-547261109/](https://www.linkedin.com/in/ikem-ezechukwu-547261109/)