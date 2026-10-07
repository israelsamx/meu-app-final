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

- Keep Home and both collections as separate TanStack routes, sharing one image-screen component so carousel behavior stays identical.
- Use Embla for manual single-slide swiping; never enable autoplay or image zoom.
- Define app styling and button variants through the global semantic design system to keep touch targets and safe-area spacing consistent.
- Bundle original artwork from src/assets/images by the eight named slots using Vite URL imports; keep fallback UI when files are absent so uploads never require layout or carousel changes.
