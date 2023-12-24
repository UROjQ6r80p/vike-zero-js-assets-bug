1. pnpm install
2. pnpm run prod in `vike-app` folder

Assets from **vike pack** (CSS, images) are not applied correctly when `onRenderClient` is an empty function (needed if we want to achieve fully zero JS without React chunk).

Dev mode:
![image](https://github.com/vikejs/vike/assets/90694123/6417d438-bdd5-4403-bdcf-f5422eecbb69)

After build:
![image](https://github.com/vikejs/vike/assets/90694123/2edf4e1d-97e4-4b9b-af83-f79c3be371e7)
