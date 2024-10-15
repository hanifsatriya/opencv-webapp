import PhotoBooth from "@/assets/image/photobooth.webp";
import { Button, Slider, Typography } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

declare global {
  interface Window {
    cv: any; // Global OpenCV object
  }
}

export const Landing = () => {
  const [image, setImage] = useState<HTMLImageElement | null>(null);
  const [brightness, setBrightness] = useState<number>(0);
  const [contrast, setContrast] = useState<number>(1);
  const [isProcessing, setIsProcessing] = useState<boolean>(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (image) {
      setIsProcessing(true); // Set to true while image is being processed
      adjustImage().then(() => {
        setIsProcessing(false); // Set to false once processing is complete
      });
    }
  }, [image, brightness, contrast]);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function (e: ProgressEvent<FileReader>) {
      const img = new Image();
      img.onload = () => setImage(img);
      if (e.target) {
        img.src = e.target.result as string;
      }
    };
    reader.readAsDataURL(file);
  };

  const adjustImage = async () => {
    if (!image || !canvasRef.current || !window.cv) return;

    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    if (!context) return;

    const canvasWidth = 400;
    const canvasHeight = 300;

    canvas.width = canvasWidth;
    canvas.height = canvasHeight;

    const aspectRatio = image.width / image.height;
    let drawWidth = canvasWidth;
    let drawHeight = canvasHeight;

    if (aspectRatio > 1) {
      drawHeight = canvasWidth / aspectRatio;
    } else {
      drawWidth = canvasHeight * aspectRatio;
    }

    const src = window.cv.imread(image);
    const dst = new window.cv.Mat();
    const alpha = contrast;
    const beta = brightness;

    src.convertTo(dst, -1, alpha, beta);
    window.cv.imshow(canvas, dst);

    src.delete();
    dst.delete();
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-5">
      <Typography variant="h4" gutterBottom>
        Image Adjustment with OpenCV.js{" "}
        {image && (
          <span
            onClick={() => setImage(null)}
            className="text-[14px] text-blue-500 cursor-pointer"
          >
            Reset Image
          </span>
        )}
      </Typography>

      <input
        type="file"
        ref={fileInputRef}
        style={{ display: "none" }}
        onChange={handleImageUpload}
      />

      {!image ? (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Button
            variant="contained"
            onClick={triggerFileInput}
            sx={{
              px: "40px",
              py: "15px",
              borderRadius: "12px",
              marginTop: "10px",
              fontSize: "18px",
            }}
          >
            Upload Image
          </Button>
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{
            opacity: isProcessing ? 0 : 1,
            scale: isProcessing ? 0.8 : 1,
          }}
          transition={{ duration: 0.5, delay: isProcessing ? 0.2 : 0 }}
          className="mt-5 w-full flex flex-col items-center"
        >
          <div className="mb-5 w-full max-w-md">
            <Typography gutterBottom>Brightness: {brightness}</Typography>
            <Slider
              min={-100}
              max={100}
              value={brightness}
              onChange={(e, value) => setBrightness(value as number)}
            />
          </div>
          <div className="mb-5 w-full max-w-md">
            <Typography gutterBottom>Contrast: {contrast}</Typography>
            <Slider
              min={0}
              max={3}
              step={0.1}
              value={contrast}
              onChange={(e, value) => setContrast(value as number)}
            />
          </div>

          <div className="relative">
            <canvas
              ref={canvasRef}
              className="border border-gray-300 rounded-lg shadow-lg w-[400px] h-[300px] max-w-full" // Fixed width and height, responsive with Tailwind
            ></canvas>
          </div>
        </motion.div>
      )}
    </div>
  );
};
