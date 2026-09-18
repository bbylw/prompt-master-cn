## Development

Serve local dev through `portless` so it gets a stable HTTPS URL instead of a raw port:

```
portless
```

This starts `astro dev` and serves it at https://prompt-master-site.localhost. Read the real URL from `portless list` rather than assuming it, and do not hardcode a port — portless injects `--port` and `--host` itself. Run `portless doctor` when routing or HTTPS looks wrong.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)
