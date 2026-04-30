import { defineType, defineField, defineArrayMember } from "sanity";
import { UsersIcon } from "@sanity/icons";

export const careerJob = defineType({
  name: "careerJob",
  title: "Career / Job Posting",
  type: "document",
  icon: UsersIcon,
  fields: [
    defineField({
      name: "title",
      title: "Job Title",
      type: "string",
      description: 'e.g. "Senior Network Engineer"',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "department",
      title: "Department",
      type: "string",
      description: 'e.g. "Engineering", "Sales"',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "location",
      title: "Location",
      type: "string",
      description: 'e.g. "Chittagong HQ"',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "employmentType",
      title: "Employment Type",
      type: "string",
      options: {
        list: [
          { title: "Full-Time", value: "full-time" },
          { title: "Part-Time", value: "part-time" },
          { title: "Contract", value: "contract" },
          { title: "Internship", value: "internship" },
        ],
        layout: "radio",
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "applyLink",
      title: "Apply Link (External)",
      type: "url",
      description: "Link to LinkedIn, BDJobs, etc.",
      validation: (rule) =>
        rule.uri({
          scheme: ["http", "https"],
        }),
    }),
    defineField({
      name: "applyEmail",
      title: "Apply Email",
      type: "string",
      description: "If applicants should email their CV instead",
      validation: (rule) => rule.email(),
    }),
    defineField({
      name: "description",
      title: "Job Description",
      type: "array",
      of: [
        defineArrayMember({
          type: "block",
          styles: [
            { title: "Normal", value: "normal" },
            { title: "H3", value: "h3" },
            { title: "H4", value: "h4" },
          ],
          marks: {
            decorators: [
              { title: "Bold", value: "strong" },
              { title: "Italic", value: "em" },
            ],
          },
          lists: [
            { title: "Bullet", value: "bullet" },
            { title: "Numbered", value: "number" },
          ],
        }),
      ],
    }),
  ],
  preview: {
    select: {
      title: "title",
      department: "department",
      type: "employmentType",
    },
    prepare({ title, department, type }) {
      return {
        title,
        subtitle: `${department} · ${type}`,
      };
    },
  },
});
