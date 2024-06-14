import { Rule } from "sanity";

export const post = {
  name: "post",
  title: "Post",
  type: "document",

  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule: Rule) => Rule.required().error("Required"),
    },
    {
        name: "icon",
        title: "Icon",
        type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title" },
      validation: (Rule: Rule) => Rule.required().error("Required"),

    },
    {
      name: "publishdate",
      tile: "Publish Date",
      type: "datetime",
      initialValue: () => new Date().toISOString(),
    },
    {
      name: "metaDescription",
      title: "Meta Description",
      type: "string",
      validation: (Rule: Rule) => Rule.required().error("Required"),
      
    },
    {
      name: "tags",
      title: "Tags",
      type: "array",
      of: [{ type: "reference", to: [{ type: "tag" }] }],
    },
    {
      name: "body",
      title: "Body",
      type: "array",
      of: [
        { type: "block" },
        
      ],
    },
  ],
};
