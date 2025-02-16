// app/api/upload/route.js
import { S3 } from 'aws-sdk';

const s3 = new S3({
  region: process.env.AWS_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  },
});

export async function GET(request) {
  // try {
  //   const { image, fileName } = await request.json();

  //   // Remove data URI prefix if it exists (e.g., "data:image/jpeg;base64,")
  //   const base64Data = image.replace(/^data:image\/\w+;base64,/, '');
  //   const buffer = Buffer.from(base64Data, 'base64');

  //   // Set up parameters for S3 upload
  //   const params = {
  //     Bucket: process.env.AWS_S3_BUCKET,
  //     Key: fileName, // Ensure your fileName is unique (you might add a timestamp or UUID)
  //     Body: buffer,
  //     ContentEncoding: 'base64',
  //     ContentType: 'image/jpeg', // adjust if the image is not JPEG; consider deriving from the data URI
  //   };

  //   const uploadResult = await s3.upload(params).promise();

  //   return new Response(JSON.stringify({ imageUrl: uploadResult.Location }), {
  //     status: 200,
  //     headers: { 'Content-Type': 'application/json' },
  //   });
  // } catch (error) {
  //   console.error('S3 Upload Error:', error);
  //   return new Response(
  //     JSON.stringify({ error: 'Error uploading image' }),
  //     { status: 500, headers: { 'Content-Type': 'application/json' } }
  //   );
  // }
  console.log('UPLOAD API CALLED');
  return Response.json('HELLO')
}
