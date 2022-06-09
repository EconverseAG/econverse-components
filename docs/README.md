# Econverse Components

Econverse Components is a collection of components that can be used to create/extend other VTEX apps.

## Usage

**IMPORTANT:** The store must have the latest version of Econverse Edition App `econverse.edition-store` installed. If it is not, [open a ticket](https://help.vtex.com/pt/support) requesting the installation.

To use this app, you need to import it as a dependency in the `manifest.json` file.

```diff
"dependencies": {
+ "econverse.components": "3.x"
}
```

Then, you can start adding components to your store theme app.

⚠️ *If you are using it in a React app, don't forget to run `vtex setup --typings` in your project to install the correct TypeScript types exported by this app.*

## Styles API

The Econverse Components collection provides some CSS classes as an API for style customization.

1. Add the `styles` builder to your `manifest.json`:
```diff
"builders": {
+ "styles": "2.x"
}
```

2. Create a file called `econverse.components.css` inside the `styles/css` folder. Add your custom styles:
```css
.shippingSimulatorForm {
  margin-top: 10px;
}
```

## Components

For more information, check the documentation of all components of the Econverse Components collection.

- [Checkout Button](./CheckoutButton)
- [Iframe](./Iframe)
- [Product Specification](./ProductSpecification)
- [Shipping Simulator](./ShippingSimulator)
- [Toggle Layout](./ToggleLayout)


