//   // Add this at the top of the file

// export default ({ env }) => {
//   // Log the AWS environment variables to verify they're being loaded correctly
//   console.log('AWS_ACCESS_KEY_ID:', env('AWS_ACCESS_KEY_ID'));
//   console.log('AWS_ACCESS_SECRET:', env('AWS_ACCESS_SECRET'));
//   console.log('AWS_REGION:', env('AWS_REGION'));
//   console.log('AWS_BUCKET:', env('AWS_BUCKET'));

//   return {
//     upload: {
//       config: {
//         provider: "aws-s3",
//         providerOptions: {
//           accessKeyId: env("AWS_ACCESS_KEY_ID"),
//           secretAccessKey: env("AWS_ACCESS_SECRET"),
//           region: env("AWS_REGION"),
//           params: {
//             ACL: env("AWS_ACL", "public-read"),
//             signedUrlExpires: env("AWS_SIGNED_URL_EXPIRES", 15 * 60),
//             Bucket: env("AWS_BUCKET"),
//           },
//         },
//         actionOptions: {
//           upload: {},
//           uploadStream: {},
//           delete: {},
//         },
//       },
//     },
//   };
// };

type EnvFunction = (key: string, defaultValue?: string | number) => string | number;

module.exports = ({ env }: { env: EnvFunction }) => ({
  upload: {
    config: {
      provider: 'aws-s3',
      providerOptions: {
        accessKeyId: env('AWS_ACCESS_KEY_ID') as string,
        secretAccessKey: env('AWS_ACCESS_SECRET') as string,
        region: env('AWS_REGION') as string,
        params: {
          ACL: env('AWS_ACL', 'public-read') as string,
          signedUrlExpires: env('AWS_SIGNED_URL_EXPIRES', 15 * 60) as number,
          Bucket: env('AWS_BUCKET') as string,
        },
      },
      actionOptions: {
        upload: {},
        uploadStream: {},
        delete: {},
      },
    },
  },
});

