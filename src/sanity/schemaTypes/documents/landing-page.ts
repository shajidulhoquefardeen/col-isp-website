import { defineType, defineField } from 'sanity'
import { HomeIcon } from '@sanity/icons'

export const landingPage = defineType({
  name: 'landingPage',
  title: 'Landing Page Settings',
  type: 'document',
  icon: HomeIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      initialValue: 'Global Landing Page Settings',
      readOnly: true,
      description: 'Used to identify this document.'
    }),
    defineField({
      name: 'heroImages',
      title: 'Hero Carousel Images',
      type: 'array',
      of: [
        {
          type: 'image',
          options: {
            hotspot: true,
          },
          fields: [
            {
              name: 'alt',
              type: 'string',
              title: 'Alternative Text',
            },
            {
              name: 'caption',
              type: 'string',
              title: 'Caption Overlay',
            }
          ]
        },
      ],
      description: 'Upload images for the main homepage carousel slider.'
    }),
  ],
})
