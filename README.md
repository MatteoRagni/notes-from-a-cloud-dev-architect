# Notes from a Cloud-Native AppDev Architect

This repository contains a book-style guide, written in MyST Markdown and built with Sphinx with a particular focus on the Red Hat Cloud‑Native AppDev Architect role.

> This guide is being written with the help of an AI assistant, so you may occasionally spot small quirks or rough edges.

## Writing with MyST

All `.md` files in this repo are written in [MyST Markdown](https://mystmd.org), which extends standard Markdown with Sphinx directives and roles.

---

## Read the book

You’ll need Python 3.9+ (or similar), `pip` and `venv`.

### Install MyST

```bash
python -m venv .venv
source .venv/bin/activate  # on Windows: .venv\Scripts\activate
pip install sphinx mystmd
```

The project has a [`myst.yml`](myst.yml) that allows to directly run a web server to read the content:

```bash
myst start
```

---

## Contributing and License

This project is primarily a personal learning and preparation resource, but feel free to fork it or adapt the structure for your own study notes. If you spot mistakes or have ideas for improving explanations, open an issue or submit a pull request.


> Notes from a Cloud-Native AppDev Architect  © 2025 by Matteo Ragni is licensed under CC BY-NC 4.0. 
>
> To view a copy of this license, visit https://creativecommons.org/licenses/by-nc/4.0/

