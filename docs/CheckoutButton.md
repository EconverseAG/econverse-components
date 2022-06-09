# Checkout Button

The `e-checkout-button` block is a button that redirects users to checkout page when clicked.

## Configuration

1. Import the `econverse.components` app to your theme's peer dependencies in the `manifest.json`
```diff
"peerDependencies": {
+ "econverse.components": "3.x"
}
```

2. Add the `e-checkout-button` block into a store template of your choice. In the example, it will be added to the minicart:
```diff
"minicart.v2": {
  "children": [
+   "e-checkout-button"
  ]
},
```

3. Then, declare the `e-checkout-button` block using the props stated in the Props table. For example:
```jsonc
"minicart.v2": {
  "children": [
    "e-checkout-button"
  ]
},
"e-checkout-button": {
  "props": {
    "message": "Finalizar compra"
  }
}
```

### Props

| Prop name                  | Type     | Description                              | Default Value        |
|----------------------------|----------|------------------------------------------|----------------------|
| `message`                  | `string` | The button text.                         | `'Finalizar compra'` |
| `finishShoppingButtonLink` | `string` | Sets a custom redirection link on click. | -                    |

## Customization

To apply CSS customizations in this and other blocks, follow the [Using CSS handles for store customization](https://developers.vtex.com/vtex-developer-docs/docs/vtex-io-documentation-using-css-handles-for-store-customization) guide.

| CSS Handles        |
|--------------------|
| `e-checkoutButton` |