# Shipping Simulator

The Econverse Components' shipping simulator features four components and a context provider to give flexibility for any layout you want. Check [Related Components](#related-components) section for more information.

## Configuration

1. If you haven't installed `econverse.components` in your store yet, [read usage instructions](./README.md#usage) before proceding.
2. Add the `e-shipping-simulator-provider` to any template of your choice.
3. Then, declare the `e-shipping-simulator-provider` block using the `e-shipping-simulator-form` as child. For example:
```jsonc
"e-shipping-simulator-provider": {
  "children": ["e-shipping-simulator-form"]
}
```
4. Now, declare the `e-shipping-simulator-form` block and feel free to fill it the way you want, using the previously listed components. For the following example, we will be featuring a simple rich text as label, a "Don't know my postal code" link and put the form fielsd (input and submit) next to each other using `flex-layout`:
```jsonc
"e-shipping-simulator-provider": {
  "children": ["e-shipping-simulator-form"]
},
"e-shipping-simulator-form": {
  "children": [
    "rich-text#shipping-simulator-label",
    "flex-layout.row#shipping-simulator-fields",
    "e-shipping-simulator-error-message",
    "link#dont-know-my-cep",
    "e-shipping-simulator-results"
  ]
},
"rich-text#shipping-simulator-label": {
  "props": {
    "blockClass": "shipping-simulator-label",
    "text": "Calcular frete"
  }
},
"flex-layout.row#shipping-simulator-fields": {
  "children": ["e-shipping-simulator-input", "e-shipping-simulator-submit"],
  "props": {
    "blockClass": "shipping-simulator-container"
  }
},
"e-shipping-simulator-submit": {
  "props": {
    "message": "calcular",
    "disableWhileInvalid": true
  }
},
"link#dont-know-my-cep": {
  "props": {
    "label": "Não sei meu CEP",
    "href": "https://buscacepinter.correios.com.br/app/endereco/index.php?t",
    "target": "_blank",
    "blockClass": "dont-know-my-cep"
  }
},
"e-shipping-simulator-results": {
  "props": {
    "readOnly": true
  }
}
```

## Related Components

- [`shipping-simulator-provider`]()
- [`shipping-simulator-form`]()
- [`shipping-simulator-input`]()
- [`shipping-simulator-submit`]()
- [`shipping-simulator-error-message`]()

