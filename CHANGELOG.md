# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

## [2.0.0] - 29-05-2022

### Added

- [***Possibly* BREAKING CHANGE**] - Added `messages@1.x` builder.
- Added `title` prop to `e-shipping-simulator-input`.
- Added portuguese, english and spanish translations to shipping estimates.

### Changed

- `e-shipping-simulator-submit` disables while simulation is loading.

## [1.6.0] - 29-05-2022

### Added

- Added new **Shipping Simulator** context and components.
  - `e-shipping-simulator-provider` block.
  - `e-shipping-simulator-form` block.
  - `e-shipping-simulator-input` block.
  - `e-shipping-simulator-submit` block.
  - `e-shipping-simulator-results` block.
  - `useShippingSimulator` hook.
  - `TranslatedEstimate` component.

## [1.5.3] - 27-05-2022

### Fixed

- Updated typings.

## [1.5.2] - 24-05-2022

### Added

- [`ProductSpecification`] Added HTML support.

## [1.5.1] - 24-05-2022

### Changed

- [`useProductSpecification`] Fixed render error when no `specificationName` is provided.

## [1.5.0] - 24-05-2022

### Added

- Added block classes ability to all components
- Added new `useOutsideClick` hook.

## [1.4.0] - 22-05-2022

### Added

- Added new `useProductSpecification` hook.
- Added new `e-product-specification` block.
- Added new `useCheckout` hook.

## [1.3.0] - 20-05-2022

### Added

- Added new `e-checkout-button` component.

## [1.2.0] - 19-05-2022

### Added

- Added new **Similar Products** context.
  - `useSimilarProducts` hook.
  - `e-similar-products-provider` block.
- Added new **Buy Together** context.
  - `useBuyTogether` hook.
  - `e-buy-together-provider` block.

### Changed

- Removed `e-tooltip` block.
- Removed `e-accordion` block.

## [1.1.0] - 17-05-2022

- Added new `e-toggle-layout` component.
- Added new `e-iframe` component.

## [1.0.0]

- Initial release.

### Added

- Added new `e-accordion` component.
- Added new `e-tooltip` component.