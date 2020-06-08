<p align="center">
  <a href="https://rokketlabs.com/">
    <img alt="babel" src="https://raw.githubusercontent.com/rokket-labs/rokket-react-template/master/public/logo-rokket.png" width="546">
  </a>
</p>

<h3 align="center">Rokket Labs React Template</h3>

[![Netlify Status](https://api.netlify.com/api/v1/badges/658c0a93-e7e8-4dcc-9f9f-0507609e71f8/deploy-status)](https://app.netlify.com/sites/rokket-react-template/deploys)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/rokket-labs/rokket-react-template/blob/master/LICENSE)
[![Last commit](https://img.shields.io/github/last-commit/rokket-labs/rokket-react-template)](https://github.com/rokket-labs/rokket-react-template)
<a href="https://github.com/rokket-labs/rokket-react-template/generate">
<img src="https://img.shields.io/badge/use%20this-template-blue?logo=github">
</a>

---

This template is configured to use Google Cloud Platform as Identity Provider, feel free to modify the code for a AWS Cognito or a custom implementation.
All PR's are welcome :smile: :rocket:.

Preview the [latest version here](https://rokket-react-template.netlify.app/).

## Getting Started

### Install dependencies

```
git clone git@github.com:rokket-labs/rokket-react-template.git
cd your-repo-name
yarn
```

### Enable Identity Platform

1. GCP configuration
   1.1 Enable Identity Platform on your project.

   1.2 Add Email / Password provider and click Save.

   1.3 Enable the provider.

   1.4 Go to `Aplication setup details`and copy the apiKey and authDomain variables.

2. Create a file called `.env`and add the variables from the previous step.

   3.1. REACT_APP_FIREBASE_API_KEY

   3.2. REACT_APP_FIREBASE_AUTH_DOMAIN

3. run your project
