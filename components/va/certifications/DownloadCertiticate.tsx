"use client";

import { Button } from "@/components/ui/button";
import { IconDownload } from "@tabler/icons-react";
import { useRef } from "react";

export default function DownloadCertificate() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const downloadCertificate = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const image = new Image();
    image.src = "/certificate-template.png";

    image.onload = () => {
      canvas.width = image.width;
      canvas.height = image.height;

      ctx.drawImage(image, 0, 0);

      ctx.textAlign = "center";
      ctx.fillStyle = "#000";

      // FULL NAME
      const name = "PRINCESS GENEVIEVE GABULE SAGRADO";
      const nameY = 335;

      ctx.font = "38px 'Times New Roman'";
      ctx.fillText(name, canvas.width / 2, nameY);

      // LINE UNDER NAME
      const lineWidth = 800;
      const lineY = nameY + 10;

      ctx.strokeStyle = "#C5A25F";
      ctx.lineWidth = 2;

      ctx.beginPath();
      ctx.moveTo(canvas.width / 2 - lineWidth / 2, lineY);
      ctx.lineTo(canvas.width / 2 + lineWidth / 2, lineY);
      ctx.stroke();

      // CERT ID
      ctx.font = "16px 'Times New Roman'";
      ctx.fillText("1234-5678ABC", canvas.width / 1.238, 560);

      // DATE
      const date = new Date().toLocaleDateString();
      ctx.fillText(date, canvas.width / 5.2, 560);

      // DOWNLOAD
      const link = document.createElement("a");
      link.download = "certificate.png";
      link.href = canvas.toDataURL("image/png");
      link.click();
    };
  };

  return (
    <div>
      <canvas ref={canvasRef} style={{ display: "none" }} />

      <Button onClick={downloadCertificate}>
        <IconDownload />
        Download Certificate
      </Button>
    </div>
  );
}
