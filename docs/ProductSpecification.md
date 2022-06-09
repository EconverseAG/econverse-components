# Product Specification

The `e-product-specification` block renders a specification given a name.

## Configuration

1. If you haven't installed `econverse.components` in your store yet, [read usage instructions](./README.md#usage) before proceding.
2. Add the `e-product-specification` to any template of your choice.
3. Then, declare the `e-product-specification` block using the props stated in the Props table. For example:
```jsonc
"e-product-specification": {
  "props": {
    "specificationName": "Cor"
  }
}
```

### Props

| Prop name           | Type     | Description                               | Default Value |
|---------------------|----------|-------------------------------------------|---------------|
| `specificationName` | `string` | Name of the specification to be rendered. | -             |             |

## Customization

To apply CSS customizations in this and other blocks, follow the [Using CSS handles for store customization](https://developers.vtex.com/vtex-developer-docs/docs/vtex-io-documentation-using-css-handles-for-store-customization) guide.

| CSS Handles        |
|--------------------|
| `e-productSpecification` |