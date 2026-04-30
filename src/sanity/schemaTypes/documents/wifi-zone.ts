import { defineType, defineField } from "sanity";
import { PinIcon } from "@sanity/icons";

export const wifiZone = defineType({
  name: "wifiZone",
  title: "Wi-Fi Zone",
  type: "document",
  icon: PinIcon,
  fields: [
    defineField({
      name: "zoneName",
      title: "Zone Name",
      type: "string",
      description: 'e.g. "GEC Circle", "Agrabad"',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "address",
      title: "Address",
      type: "text",
      rows: 2,
    }),
    defineField({
      name: "status",
      title: "Status",
      type: "string",
      options: {
        list: [
          { title: "Active", value: "active" },
          { title: "Maintenance", value: "maintenance" },
        ],
        layout: "radio",
      },
      initialValue: "active",
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: {
      title: "zoneName",
      subtitle: "status",
    },
    prepare({ title, subtitle }) {
      return {
        title,
        subtitle: subtitle === "active" ? "🟢 Active" : "🟡 Maintenance",
      };
    },
  },
});
