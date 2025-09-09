
// module.exports = ({ env }) => ({
//   upload: {
//     config: {
//       provider: 'cloudinary',
//       providerOptions: {
//         cloud_name: env('CLOUDINARY_NAME'),
//         api_key: env('CLOUDINARY_KEY'),
//         api_secret: env('CLOUDINARY_SECRET'),
//       },
//       actionOptions: {
//         upload: {},
//         delete: {},
//       },
//     },
//   },
// });


module.exports = ({ env }) => ({
  upload: {
    config: {
      provider: 'cloudinary',
      providerOptions: {
        cloud_name: env('CLOUDINARY_NAME'),
        api_key: env('CLOUDINARY_KEY'),
        api_secret: env('CLOUDINARY_SECRET'),
      },
      actionOptions: {
        upload: {
          folder: 'strapi-uploads',
          // جرّب الأول auto (بتدي WebP/AVIF لو المتصفح بيدعم)
          // transformation: [{ fetch_format: 'auto', quality: 'auto' }],
          transformation: [{ fetch_format: 'jpg', quality: 'auto' }]
          // ولو لقيت الصور لسه avif جوه Strapi admin، غيّر السطر لفورمات jpg
          // transformation: [{ fetch_format: 'jpg' }],
        },
        delete: {},
      },
    },
  },
});
