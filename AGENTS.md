<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Keep product definitions in `src/lib/catalogue.ts` and never fabricate pricing or availability, because the client catalogue was not attached.
- Keep the enquiry cart in `src/lib/cart.tsx` with browser storage, because checkout is via WhatsApp and no account or payment backend was requested.
- Keep site-wide navigation and cart provider in `src/routes/__root.tsx`, because all pages share the same storefront shell.
