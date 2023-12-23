1. pnpm install
2. pnpm run prod

Assets from pack (CSS, images) are not applied correctly when `onRenderClient` is empty (needed if we want to achieve fully zero JS without React chunk).
