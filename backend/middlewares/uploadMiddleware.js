import multer from "multer";
import path from "path";

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "./documents");
    },
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
        cb(null, uniqueSuffix + path.extname(file.originalname));
    },
});

export const upload = multer({
  storage,
  fileFilter: (req, file, cb) => {
    
    const allowedExtensions = /jpeg|jpg|png|pdf/;
    const allowedMimeTypes = /image\/(jpeg|jpg|png)|application\/pdf/;
    
    const extname = allowedExtensions.test(
      path.extname(file.originalname).toLowerCase()
    );
    const mimetype = allowedMimeTypes.test(file.mimetype);
    
    if (extname && mimetype) {
      cb(null, true);
    } else {
      cb(new Error('Only image files (PNG, JPG, JPEG) and PDF files are allowed'));
    }
  },
  limits: {
    fileSize: 10 * 1024 * 1024, // 10MB limit
  }
});