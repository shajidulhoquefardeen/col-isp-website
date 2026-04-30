import { defineType, defineField, defineArrayMember } from "sanity";
import { CommentIcon } from "@sanity/icons";

export const testimonial = defineType({
  name: "testimonial",
  title: "Testimonial",
  type: "document",
  icon: CommentIcon,
  fields: [
    defineField({
      name: "customerName",
      title: "Customer Name",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "designation",
      title: "Designation",
      type: "string",
      description: 'e.g. "CEO, TechCorp" or "Resident, Khulshi"',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "image",
      title: "Customer Photo",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "reviewText",
      title: "Review Text",
      type: "text",
      rows: 4,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "displayPage",
      title: "Display On",
      type: "array",
      of: [defineArrayMember({ type: "string" })],
      options: {
        list: [
          { title: "Landing Page", value: "landing" },
          { title: "Home / For Family", value: "home" },
          { title: "Enterprise", value: "enterprise" },
        ],
      },
      description: "Select which page(s) this testimonial appears on",
      validation: (rule) =>
        rule.min(1).error("Select at least one page to display on"),
    }),
  ],
  preview: {
    select: {
      title: "customerName",
      subtitle: "designation",
      media: "image",
    },
  },
});
