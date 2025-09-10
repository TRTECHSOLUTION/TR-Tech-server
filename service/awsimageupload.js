const multer = require('multer');
const multerS3 = require('multer-s3');
const { S3Client } = require('@aws-sdk/client-s3');

const s3 = new S3Client({
  region: process.env.AWS_DEFAULT_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  },
});


const createUpload = (folderName) => {
  return multer({
    storage: multerS3({
      s3,
      bucket: process.env.AWS_BUCKET,
      metadata: (req, file, cb) => {
        cb(null, { fieldName: file.fieldname });
      },
      key: (req, file, cb) => {
        const fileName = new Date().toISOString() + '-' + file.originalname;
        const key = `${folderName}/${fileName}`;
        console.log('Generated key:', key);
        cb(null, key);
      },
    }),
  });
};

const uploadProductImages = createUpload('product-images');
const uploadProjectFiles = createUpload('project-files');
const uploadWorkshopFiles = createUpload('workshop-files');

module.exports = { uploadProductImages, uploadProjectFiles,uploadWorkshopFiles };
