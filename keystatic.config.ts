
import { collection, config, fields } from '@keystatic/core';

export default config({
  storage: {
    kind: 'local',
  },
  collections: {
    menu: collection({
      label: 'Menu',
      slugField: 'title',
      path: 'content/menu/*',
      format: { data: 'json' },
      schema: {
        title: fields.slug({ name: { label: 'Name' } }),
        price: fields.text({ label: 'Price' }),
        description: fields.text({ label: 'Description', multiline: true }),
        category: fields.select({
          label: 'Category',
          options: [
            { label: 'Starters', value: 'starters' },
            { label: 'Mains', value: 'mains' },
            { label: 'Drinks', value: 'drinks' },
          ],
          defaultValue: 'mains',
        }),
        image: fields.image({
          label: 'Image',
          directory: 'public/images/menu',
          publicPath: '/images/menu/',
        }),
      },
    }),
    team: collection({
      label: 'Team',
      slugField: 'name',
      path: 'content/team/*',
      format: { contentField: 'bio' },
      schema: {
        name: fields.text({ label: 'Name' }),
        role: fields.text({ label: 'Role' }),
        image: fields.image({
          label: 'Photo',
          directory: 'public/images/team',
          publicPath: '/images/team/',
        }),
        bio: fields.document({
            label: 'Bio',
            formatting: true,
            dividers: true,
            links: true,
            images: true,
        }),
      },
    }),
  },
});
