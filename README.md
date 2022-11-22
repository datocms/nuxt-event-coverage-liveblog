This is a [Nuxt](https://nuxt.com/) project demonstrating the use of DatoCMS [Real-time Updates API](https://www.datocms.com/docs/real-time-updates-api).

## Final result

Demo here: [https://nuxt-event-coverage-liveblog.vercel.app/](https://nuxt-event-coverage-liveblog.vercel.app/)

![Screenshot](https://raw.githubusercontent.com/datocms/nuxt-event-coverage-liveblog/master/screenshot.gif)

## Deploy this demo project for free!

Click this button to test and deploy this demo project to [Vercel](https://vercel.com/), along with a fully configured DatoCMS project and a Github repo:

[![Deploy with DatoCMS](https://dashboard.datocms.com/deploy/button.svg)](https://dashboard.datocms.com/deploy?repo=datocms/nuxt-event-coverage-liveblog)

## Learn More

To learn more about how to integrate DatoCMS with your Nuxt project, take a look at the following resources:

- [DatoCMS + Nuxt Integration Guide](https://www.datocms.com/docs/nuxt)
- [How to use DatoCMS Real-time updates API with Nuxt](https://www.datocms.com/docs/nuxt/real-time-updates)
- [vue-datocms](https://github.com/datocms/vue-datocms) — A set of Vue components and composables that help you integrate DatoCMS with any Vue project

## Starting the development server

First, create a `.env.local` and put a `NUXT_ENV_DATOCMS_API_TOKEN` env variable containing the API token of your DatoCMS project:

```bash
echo NUXT_ENV_DATOCMS_API_TOKEN=<YOUR_API_TOKEN> > .env.local
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app.vue`. The page auto-updates as you edit the file.
