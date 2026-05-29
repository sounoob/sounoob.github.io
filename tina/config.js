import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "master";

export default defineConfig({
  branch,
  
  // Get this from tina.io
  clientId: process.env.TINA_CLIENT_ID,
  
  // Get this from tina.io
  token: process.env.TINA_TOKEN,

  search: {
    tina: {
      indexerToken: process.env.TINA_SEARCH_TOKEN,
    },
  },

  build: {
    outputFolder: "admin",
    publicFolder: "",
  },
  
  media: {
    tina: {
      mediaRoot: "assets/uploads",
      publicFolder: "",
    },
  },
  
  // See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/schema/
  schema: {
    collections: [
      {
        name: "post",
        label: "Posts",
        path: "_posts",
        format: "md",
        ui: {
          filename: {
            readonly: false,
            slugify: values => {
              const date = new Date();
              const day = ("0" + date.getDate()).slice(-2);
              const month = ("0" + (date.getMonth() + 1)).slice(-2);
              const year = date.getFullYear();
              
              let slug = `${year}-${month}-${day}-${(values?.title || "").toLowerCase().replace(/[^a-z0-9]/g, '-').replace(/-+/g, '-')}`;
              return slug;
            },
          },
        },
        fields: [
          {
            type: "string",
            name: "title",
            label: "Título",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "layout",
            label: "Layout",
            ui: {
              component: "hidden",
            },
          },
          {
            type: "datetime",
            name: "date",
            label: "Data",
            required: true,
          },
          {
            type: "string",
            name: "categories",
            label: "Categorias",
            list: true,
          },
          {
            type: "string",
            name: "tags",
            label: "Tags",
            list: true,
          },
          {
            type: "string",
            name: "author",
            label: "Autor",
          },
          {
            type: "image",
            name: "image",
            label: "Imagem de Capa",
          },
          {
            type: "rich-text",
            name: "body",
            label: "Corpo do Post",
            isBody: true,
          },
        ],
      },
    ],
  },
});
