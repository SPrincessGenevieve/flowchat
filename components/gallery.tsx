"use client";

import React from "react";
import { ThreeDMarquee } from "./ui/3d-marquee";

export default function Gallery() {
  const images = [
    "https://res.cloudinary.com/dqgkvrmve/image/upload/v1772198927/flask-black-dashboard-intro_ammixg.webp",
    "https://res.cloudinary.com/dqgkvrmve/image/upload/v1772198929/62d5bbd6d01ba2d84d85e91f_Screen_Shot_2021-10-07_at_12.36_1_njnas5.webp",
    "https://res.cloudinary.com/dqgkvrmve/image/upload/v1772198929/material-dashboard-dark_vbhusc.webp",
    "https://res.cloudinary.com/dqgkvrmve/image/upload/v1772198929/navy_rainforest_site_xyuqyj.webp",
    "https://res.cloudinary.com/dqgkvrmve/image/upload/v1772198929/647e57ac5d1c5f916a48ba71_1-dark-mode-dashboard-webflow-template-1.5x_udpqjx.webp",
    "https://res.cloudinary.com/dqgkvrmve/image/upload/v1772198927/dark_theme_db_v0sutz.webp",
    "https://res.cloudinary.com/dqgkvrmve/image/upload/v1772198928/1_e-GmVMG8J06nBrdkW-Npdg_fmu3hk.webp",
    "https://res.cloudinary.com/dqgkvrmve/image/upload/v1772198928/0e527894016125.5e74805477d6f_uq6s7t.webp",
    "https://res.cloudinary.com/dqgkvrmve/image/upload/v1772198928/gl_dashboard_excel_brown_bvs2en.webp",
    "https://res.cloudinary.com/dqgkvrmve/image/upload/v1772198927/S0W69JPG30CRNPE1712330806_fpha6f.webp",
    "https://res.cloudinary.com/dqgkvrmve/image/upload/v1772198926/Power-BI-Dark-Dashboard-2-2_b4aocp.webp",
    "https://res.cloudinary.com/dqgkvrmve/image/upload/v1772198926/56403aa6ca4ad452ba723343489a8ca0_kj9aef.webp",
    "https://res.cloudinary.com/dqgkvrmve/image/upload/v1772198927/flask-black-dashboard-intro_ammixg.webp",
    "https://res.cloudinary.com/dqgkvrmve/image/upload/v1772198929/62d5bbd6d01ba2d84d85e91f_Screen_Shot_2021-10-07_at_12.36_1_njnas5.webp",
    "https://res.cloudinary.com/dqgkvrmve/image/upload/v1772198929/material-dashboard-dark_vbhusc.webp",
    "https://res.cloudinary.com/dqgkvrmve/image/upload/v1772198929/navy_rainforest_site_xyuqyj.webp",
    "https://res.cloudinary.com/dqgkvrmve/image/upload/v1772198929/647e57ac5d1c5f916a48ba71_1-dark-mode-dashboard-webflow-template-1.5x_udpqjx.webp",
    "https://res.cloudinary.com/dqgkvrmve/image/upload/v1772198927/dark_theme_db_v0sutz.webp",
    "https://res.cloudinary.com/dqgkvrmve/image/upload/v1772198928/1_e-GmVMG8J06nBrdkW-Npdg_fmu3hk.webp",
    "https://res.cloudinary.com/dqgkvrmve/image/upload/v1772198928/0e527894016125.5e74805477d6f_uq6s7t.webp",
    "https://res.cloudinary.com/dqgkvrmve/image/upload/v1772198928/gl_dashboard_excel_brown_bvs2en.webp",
    "https://res.cloudinary.com/dqgkvrmve/image/upload/v1772198927/S0W69JPG30CRNPE1712330806_fpha6f.webp",
    "https://res.cloudinary.com/dqgkvrmve/image/upload/v1772198926/Power-BI-Dark-Dashboard-2-2_b4aocp.webp",
    "https://res.cloudinary.com/dqgkvrmve/image/upload/v1772198926/56403aa6ca4ad452ba723343489a8ca0_kj9aef.webp",
    "https://res.cloudinary.com/dqgkvrmve/image/upload/v1772198927/flask-black-dashboard-intro_ammixg.webp",
    "https://res.cloudinary.com/dqgkvrmve/image/upload/v1772198929/62d5bbd6d01ba2d84d85e91f_Screen_Shot_2021-10-07_at_12.36_1_njnas5.webp",
    "https://res.cloudinary.com/dqgkvrmve/image/upload/v1772198929/material-dashboard-dark_vbhusc.webp",
    "https://res.cloudinary.com/dqgkvrmve/image/upload/v1772198929/navy_rainforest_site_xyuqyj.webp",
    "https://res.cloudinary.com/dqgkvrmve/image/upload/v1772198929/647e57ac5d1c5f916a48ba71_1-dark-mode-dashboard-webflow-template-1.5x_udpqjx.webp",
    "https://res.cloudinary.com/dqgkvrmve/image/upload/v1772198927/dark_theme_db_v0sutz.webp",
    "https://res.cloudinary.com/dqgkvrmve/image/upload/v1772198928/1_e-GmVMG8J06nBrdkW-Npdg_fmu3hk.webp",
    "https://res.cloudinary.com/dqgkvrmve/image/upload/v1772198928/0e527894016125.5e74805477d6f_uq6s7t.webp",
    "https://res.cloudinary.com/dqgkvrmve/image/upload/v1772198928/gl_dashboard_excel_brown_bvs2en.webp",
    "https://res.cloudinary.com/dqgkvrmve/image/upload/v1772198927/S0W69JPG30CRNPE1712330806_fpha6f.webp",
    "https://res.cloudinary.com/dqgkvrmve/image/upload/v1772198926/Power-BI-Dark-Dashboard-2-2_b4aocp.webp",
    "https://res.cloudinary.com/dqgkvrmve/image/upload/v1772198926/56403aa6ca4ad452ba723343489a8ca0_kj9aef.webp",
  ];
  return <ThreeDMarquee images={images} />;
}
