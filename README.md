# jquery.antipasto

## !!! Under heavy development. Not ready for use. !!!

## Use Case

Over time, you've accumulated JavaScript events (some synchronous, some asynchronous) that compete for control over the same element (or elements) on a page. The resultant code has become unmanageable and edge-case bugs abound...

Untangle the spaghetti with jquery.antipasto!  A simple, configuration-driven framework to manage JavaScript event propagation priority.


## Simple Examples

- You have a comment form that attempts to pull a user's identity from numerous social networks, but you want certain networks to trump others based on the user's geography...
- You have multiple "recommended content" engines and you want to show recommendations based on the engine with the best data for the current user
- You use competing real-time identity providers to improve UX on a product registration form, but you've found that one vendor provides more accurate data for certain fields than the other...

## Data Sources

String identifiers, used in config and passed to element listeners.

## Initialization

During initialization, jquery.antipasto ...

- parses your configuration object.
- finds all child elements with `data-antipasto` attributes and matches them up.

```
/**
 * Initialize antipasto on a root element.
 * @param {object}
 */
$(element).antipasto(configObject);
```

## Child Elements

Elements should be identified with a `data-antipasto` attribute.

```
<input data-antipasto="email" ...>
```

## Element Listeners

```
$.antipasto.addListener('email', function (data) {});
```

