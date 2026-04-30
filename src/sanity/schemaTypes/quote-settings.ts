import { defineField, defineType } from 'sanity';
import { DocumentTextIcon } from '@sanity/icons';

export const quoteSettingsType = defineType({
  name: 'quoteSettings',
  title: 'Quote PDF Settings',
  type: 'document',
  icon: DocumentTextIcon,
  fields: [
    defineField({
      name: 'companyName',
      title: 'Company Name',
      type: 'string',
      initialValue: 'Chittagong Online Limited (COL)',
    }),
    defineField({
      name: 'companyAddress',
      title: 'Company Address',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'supportEmail',
      title: 'Support Email',
      type: 'string',
    }),
    defineField({
      name: 'termsAndConditions',
      title: 'Terms and Conditions',
      description: 'The fine print that will appear at the bottom of the generated PDF quote.',
      type: 'text',
      rows: 6,
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Quote PDF Settings',
      };
    },
  },
});
