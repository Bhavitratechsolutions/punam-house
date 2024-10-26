import { v2 as cloudinary } from "cloudinary";
import { Readable } from "stream";

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Helper: Convert a buffer to a readable stream
const bufferToStream = (buffer: Buffer) => {
  const stream = new Readable();
  stream.push(buffer);
  stream.push(null);
  return stream;
};

/**
 * Uploads a file to Cloudinary
 * @param {Buffer} buffer - The file buffer to upload.
 * @param {string} folder - The Cloudinary folder to store the file in.
 * @returns {Promise<object>} - The upload result or error.
 */
export const uploadFile = async (buffer: Buffer, folder: string = "uploads") => {
  return new Promise((resolve, reject) => {
    const readableStream = bufferToStream(buffer);

    const uploadStream = cloudinary.uploader.upload_stream(
      { folder },
      (error, result) => {
        if (error) reject(error);
        else resolve(result);
      }
    );

    readableStream.pipe(uploadStream);
  });
};


export async function deleteFileFromCloudinary(publicId: string) {
  try {
    await cloudinary.uploader.destroy(publicId);
  } catch (error) {
    console.error("Failed to delete file from Cloudinary:", error);
  }
}