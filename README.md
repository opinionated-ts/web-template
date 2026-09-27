# @opinionated-ts/web-template

An experimental TypeScript project template for web development, built on top of [`@opinionated-ts/template`](https://github.com/opinionated-ts/template).

It provides the same tooling foundation as the base template, with an additional web-specific structure and set of defaults.

> [!WARNING]
>
> This template is currently experimental and under active development.
>
> The underlying TypeScript tooling foundation is established, but the web-specific approach and implementation are still being explored and have not yet been fully validated. As a result, the web-specific structure and defaults may change as development progresses.
>
> It is not ready for general use or production projects.

## When to use this template?

Use this template when exploring or developing web projects that benefit from the Opinionated TS tooling foundation.

It provides:

- A web-focused starting point built on [`@opinionated-ts/template`](https://github.com/opinionated-ts/template)
- Opinionated defaults for performance, code quality, and developer experience
- A modern Bun-first development environment
- Consistent tooling across Opinionated TS web projects

The web-specific layer is experimental and may evolve significantly as the approach is validated.

## Getting started

For development and experimentation, clone the repository directly:

```bash
git clone https://github.com/opinionated-ts/web-template.git my-project

cd my-project

rm -rf .git
git init
```

### Install dependencies

```bash
bun install
```

### Install git hooks

```bash
bun hooks:install
```

### Configure package metadata

Update `package.json` for your project and repository:

```json
{
  "name": "your-project-name",
  "repository": {
    "type": "git",
    "url": "git+https://github.com/your-username/your-repo.git"
  }
}
```

At minimum, update:

- `name` — your package name
- `repository.url` — your repository URL

## What's included

### TypeScript tooling foundation

The web template inherits the tooling, conventions, and project foundation provided by [`@opinionated-ts/template`](https://github.com/opinionated-ts/template).

### Web project foundation

On top of the base template, it adds the structure and defaults currently being explored for web development.

The web-specific parts are experimental and subject to change as the approach is validated.

## Related projects

- [`@opinionated-ts/template`](https://github.com/opinionated-ts/template) — base TypeScript project template
- [`@opinionated-ts/config`](https://github.com/opinionated-ts/config) — shared tooling configuration used across Opinionated TS projects
