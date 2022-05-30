# Econverse Components

Econverse Components is a collection of components that can be used to create/extend others VTEX apps.

## Usage

To use this app, you must import it as peer dependency in the `manifest.json` file.

```diff
"peerDependencies": {
+ "econverse.components": "2.x"
}
```

Then, you can start adding components to your store theme app.

## Styles API

The Econverse Components collection provides some CSS classes as an API for style customization.

1. Add the `styles`builder to your `manifest.json`:
```diff
"`builders`": {
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


