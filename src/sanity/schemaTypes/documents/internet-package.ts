import { defineType, defineField, defineArrayMember } from "sanity";
import { PackageIcon } from "@sanity/icons";

export const internetPackage = defineType({
  name: "internetPackage",
  title: "Internet Package",
  type: "document",
  icon: PackageIcon,
  fields: [
    defineField({
      name: "name",
      title: "Package Name",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: [
          { title: "Home", value: "home" },
          { title: "Enterprise", value: "enterprise" },
        ],
        layout: "radio",
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "speed",
      title: "Speed",
      type: "string",
      description: 'e.g. "100 Mbps"',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "price",
      title: "Monthly Price (BDT)",
      type: "number",
      validation: (rule) => rule.required().positive(),
    }),
    defineField({
      name: "features",
      title: "Features",
      type: "array",
      of: [defineArrayMember({ type: "string" })],
      validation: (rule) => rule.min(1).error("Add at least one feature"),
    }),
    defineField({
      name: "isPopular",
      title: "Highlight as Popular?",
      type: "boolean",
      initialValue: false,
    }),
    defineField({
      name: "order",
      title: "Display Order",
      type: "number",
      description: "Lower numbers appear first",
    }),
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "category",
      speed: "speed",
    },
    prepare({ title, subtitle, speed }) {
      return {
        title,
        subtitle: `${subtitle?.toUpperCase()} — ${speed}`,
      };
    },
  },
  orderings: [
    {
      title: "Display Order",
      name: "orderAsc",
      by: [{ field: "order", direction: "asc" }],
    },
  ],
});
