<!--datocms-autoinclude-header start--><a href="https://www.datocms.com/"><img src="https://www.datocms.com/images/full_logo.svg" height="60"></a>

👉 [Visit the DatoCMS homepage](https://www.datocms.com) or see [What is DatoCMS?](#what-is-datocms)

---
<!--datocms-autoinclude-header end-->

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

<!--datocms-autoinclude-footer start-->
-----------------
# What is DatoCMS?
<a href="https://www.datocms.com/"><img src="https://www.datocms.com/images/full_logo.svg" height="60"></a>

[DatoCMS](https://www.datocms.com/) is the REST & GraphQL Headless CMS for the modern web.

Trusted by over 25,000 enterprise businesses, agency partners, and individuals across the world, DatoCMS users create online content at scale from a central hub and distribute it via API. We ❤️ our [developers](https://www.datocms.com/team/best-cms-for-developers), [content editors](https://www.datocms.com/team/content-creators) and [marketers](https://www.datocms.com/team/cms-digital-marketing)!

**Quick links:**

- ⚡️ Get started with a [free DatoCMS account](https://dashboard.datocms.com/signup)
- 🔖 Go through the [docs](https://www.datocms.com/docs)
- ⚙️ Get [support from us and the community](https://community.datocms.com/)
- 🆕 Stay up to date on new features and fixes on the [changelog](https://www.datocms.com/product-updates)

**Our featured repos:**
- [datocms/react-datocms](https://github.com/datocms/react-datocms): React helper components for images, Structured Text rendering, and more
- [datocms/js-rest-api-clients](https://github.com/datocms/js-rest-api-clients): Node and browser JavaScript clients for updating and administering your content. For frontend fetches, we recommend using our [GraphQL Content Delivery API](https://www.datocms.com/docs/content-delivery-api) instead.
- [datocms/cli](https://github.com/datocms/cli): Command-line interface that includes our [Contentful importer](https://github.com/datocms/cli/tree/main/packages/cli-plugin-contentful) and [Wordpress importer](https://github.com/datocms/cli/tree/main/packages/cli-plugin-wordpress)
- [datocms/plugins](https://github.com/datocms/plugins): Example plugins we've made that extend the editor/admin dashboard
- [DatoCMS Starters](https://www.datocms.com/marketplace/starters) has examples for various Javascript frontend frameworks

Or see [all our public repos](https://github.com/orgs/datocms/repositories?q=&type=public&language=&sort=stargazers)
<!--datocms-autoinclude-footer end-->
