# VivanceData brand kit

One identity across the site, GitHub, email and LinkedIn. Everything here is
rendered from `profile/assets/source/`, so a change is made once:

```sh
# from a checkout that has Playwright installed (the site repo does)
node ../.github/profile/assets/source/render.mjs
```

The site's design system is `DESIGN.md` in
[`vivancedata`](https://github.com/Vivancedata/vivancedata) (the `nightshift`
world of `@vivancedata/ui`). This file covers only what leaves the site.

## The mark

A V lit in the site's dot matrix, resolving to one green dot.

| Cut | File | Use |
|---|---|---|
| Full: the whole 5x5 matrix | `profile/assets/avatar.png`, `linkedin-logo.png` | Avatars and anything shown at 48px or larger |
| Small: the nine lit dots, enlarged | `profile/assets/icon-small.png` | Favicons, nav lockups, email. The full matrix turns to noise below about 40px |

Both are drawn by `source/mark.js`. The mark sits on the night sheet
(`hsl(60 8% 5%)`); on paper it is ink with the darker green. Do not recolour
the green dot, add a container shape, or set the wordmark in anything but
Instrument Serif.

## Colour and type

| Role | Dark (canonical) | Light |
|---|---|---|
| Sheet | `hsl(60 8% 5%)` `#0e0e0c` | `hsl(44 24% 96%)` `#f7f4ee` |
| Ink | `hsl(38 18% 91%)` | `hsl(48 12% 9%)` `#1a1810` |
| Evidence green | `hsl(152 42% 58%)` | `hsl(152 52% 24%)` |
| Hairline | `hsl(55 7% 14%)` | `hsl(42 16% 86%)` `#e3ded3` |

Instrument Serif for the human voice, Geist for prose, Geist Mono for anything
a machine wrote down. Where webfonts cannot load (email): Georgia, Helvetica,
Menlo.

## Assets

| File | Size | Where it goes |
|---|---|---|
| `avatar.png` | 512 | GitHub organisation avatar |
| `linkedin-logo.png` | 800 | LinkedIn page logo |
| `linkedin-cover.png` | 2256 x 382 | LinkedIn page cover (1128 x 191 at 2x) |
| `banner-org.png` | 2560 x 1280 | Organisation profile, and the site's Open Graph image |
| `banner-{vivancedata,ui,crm,learn}.png` | 2560 x 1280 | Each repository's social preview |
| `email-signature.html` | | Open in a browser, select all, copy, paste into the mail client |

## Voice

First person, singular: "I build", never "we". Name: **VivanceData**, capital V
and D. One conversion verb: "Book a call". No client names, testimonials,
metrics or "proven" anything until a named client has agreed to the wording in
writing.

## LinkedIn company page

| Field | Value |
|---|---|
| Name | VivanceData |
| Public URL | `linkedin.com/company/vivancedata` |
| Website | `https://www.vivancedata.com` |
| Industry | IT Services and IT Consulting |
| Size | 0-1 employees |
| Type | Self-employed (use Privately held if the business is an LLC) |
| Button | Visit website, to `https://www.vivancedata.com/contact` |

**Tagline**

> After-hours calls answered and booked. Paperwork read instead of re-keyed. Built and run by one person.

**About**

> Someone has to answer the phone and key in the paperwork. It does not have to be a person on your payroll.
>
> I'm Lorenzo Scaturchio, and VivanceData is my one-person practice. I build small, specific AI systems for construction, HVAC and trades, logistics and manufacturing businesses: the after-hours call that gets picked up, written down and booked instead of going to voicemail; the delivery slip or submittal that gets read instead of typed twice; the field note that gets attached to the right job.
>
> How it works:
> - One workflow at a time, proved on your own documents before you pay for a build.
> - It runs beside the way you do it now before it replaces anything.
> - I stay on to keep it running, because automations drift when the systems around them change. The monthly cost is published next to the setup fee.
> - The person who scopes the job builds it and answers afterwards. No hand-off.
>
> Three demos run on sample data at vivancedata.com. Open one and try it.
>
> Book a call: vivancedata.com/contact

**Specialties**

AI for contractors, After-hours call answering, Document automation,
Construction paperwork, HVAC dispatch, Proof of delivery, Workflow automation
