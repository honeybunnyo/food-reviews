// app/api/upload/route.js

import aws from 'aws-sdk';
import formidable from 'formidable-serverless';

export const config = {
  api: {
    bodyParser: false,
  },
};

const s3 = new aws.S3({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.S3_REGION,
});

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end('Method not allowed');

  const form = new formidable.IncomingForm();

  form.parse(req, async (err, fields, files) => {
    const { username, password } = fields;

    if (
      username !== process.env.USERNAME ||
      password !== process.env.PASSWORD
    ) {
      return res.status(403).json({ message: 'Invalid credentials' });
    }

    const file = files.file;

    const fileContent = require('fs').readFileSync(file.filepath);

    const params = {
      Bucket: process.env.S3_BUCKET_NAME,
      Key: `uploads/${Date.now()}-${file.originalFilename}`,
      Body: fileContent,
      ContentType: file.mimetype,
    };

    try {
      const data = await s3.upload(params).promise();
      return res.status(200).json({ message: 'Success', url: data.Location });
    } catch (uploadErr) {
      console.error(uploadErr);
      return res.status(500).json({ message: 'Upload failed' });
    }
  });
}