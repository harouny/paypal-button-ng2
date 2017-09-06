# PaypalButtonNg2

This project is an example of embedding [paypal-button angular component](https://github.com/paypal/paypal-checkout) in a project generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.3.2.


# AOT is not available

Due to the fact that paypal-button angular component is loaded at runtime via script tag, ahead if time compilation cannot be used to build this project.

# Development

```
ng serve
```

# Build

```
ng build -aot false
```

# Build for production

```
ng build -aot false -prod
```

# Serve production build (for development purposes only)

```
ng serve -aot false -prod
```
