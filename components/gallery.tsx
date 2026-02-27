"use client";

import React from "react";
import { ThreeDMarquee } from "./ui/3d-marquee";

export default function Gallery() {
  const images = [
    "https://cdn.dribbble.com/userupload/41984310/file/original-ba35543c42260c5be54d12b9e99f5039.gif",
    "https://raw.githubusercontent.com/creativetimofficial/public-assets/master/material-dashboard-dark-pro/material-dashboard-dark.gif",
    "https://www.admin-dashboards.com/content/images/2021/11/flask-black-dashboard-intro.gif",
    "https://mir-s3-cdn-cf.behance.net/project_modules/hd/0e527894016125.5e74805477d6f.gif",
    "https://miro.medium.com/v2/resize:fit:1400/1*kFPbvmxZjLtYPCdhFPzauw.gif",
    "https://cdn.dribbble.com/userupload/31886792/file/original-4551f4d00e1455eb443c787c46f05a01.jpg",
    "https://cdn.prod.website-files.com/5efb0b7816032fd33ce6059c/62d5bbd6d01ba2d84d85e91f_Screen%20Shot%202021-10-07%20at%2012.36%20(1).png",
    "https://cdn.prod.website-files.com/5e8e816d43060db856099187/647e57ac5d1c5f916a48ba71_1-dark-mode-dashboard-webflow-template-1.5x.png",
    "https://d13ot9o61jdzpp.cloudfront.net/images/dark_theme_db.gif",
    "https://cdn.prod.website-files.com/5e8e816d43060db856099187/647e57ac5d1c5f916a48ba71_1-dark-mode-dashboard-webflow-template-1.5x.png",
    "https://docs.appian.com/suite/help/26.1/images/navy_rainforest_site.png",
    "https://i.pinimg.com/originals/56/40/3a/56403aa6ca4ad452ba723343489a8ca0.jpg",
    "https://multipurposethemes.com/wp-content/uploads/2022/12/Power-BI-Dark-Dashboard-2-2.jpg",
    "https://d1fa9n6k2ql7on.cloudfront.net/S0W69JPG30CRNPE1712330806.png",
    "https://img.freepik.com/free-vector/pink-user-dashboard-interface_53876-115882.jpg",
    "https://cdn.dribbble.com/userupload/42053123/file/original-920e005c244eece90f90b2fca2ac81d9.png?resize=400x0",
    "https://www.infocaptor.com/img/gl_dashboard_excel_brown.png",
    "https://cdn-images-1.medium.com/max/1024/1*e-GmVMG8J06nBrdkW-Npdg.png",
    "https://cdn.dribbble.com/userupload/41984310/file/original-ba35543c42260c5be54d12b9e99f5039.gif",
    "https://raw.githubusercontent.com/creativetimofficial/public-assets/master/material-dashboard-dark-pro/material-dashboard-dark.gif",
    "https://www.admin-dashboards.com/content/images/2021/11/flask-black-dashboard-intro.gif",
    "https://mir-s3-cdn-cf.behance.net/project_modules/hd/0e527894016125.5e74805477d6f.gif",
    "https://miro.medium.com/v2/resize:fit:1400/1*kFPbvmxZjLtYPCdhFPzauw.gif",
    "https://cdn.dribbble.com/userupload/31886792/file/original-4551f4d00e1455eb443c787c46f05a01.jpg",
    "https://cdn.prod.website-files.com/5efb0b7816032fd33ce6059c/62d5bbd6d01ba2d84d85e91f_Screen%20Shot%202021-10-07%20at%2012.36%20(1).png",
    "https://cdn.prod.website-files.com/5e8e816d43060db856099187/647e57ac5d1c5f916a48ba71_1-dark-mode-dashboard-webflow-template-1.5x.png",
    "https://d13ot9o61jdzpp.cloudfront.net/images/dark_theme_db.gif",
    "https://cdn.prod.website-files.com/5e8e816d43060db856099187/647e57ac5d1c5f916a48ba71_1-dark-mode-dashboard-webflow-template-1.5x.png",
    "https://docs.appian.com/suite/help/26.1/images/navy_rainforest_site.png",
    "https://i.pinimg.com/originals/56/40/3a/56403aa6ca4ad452ba723343489a8ca0.jpg",
    "https://multipurposethemes.com/wp-content/uploads/2022/12/Power-BI-Dark-Dashboard-2-2.jpg",
    "https://d1fa9n6k2ql7on.cloudfront.net/S0W69JPG30CRNPE1712330806.png",
    "https://img.freepik.com/free-vector/pink-user-dashboard-interface_53876-115882.jpg",
    "https://cdn.dribbble.com/userupload/42053123/file/original-920e005c244eece90f90b2fca2ac81d9.png?resize=400x0",
    "https://www.infocaptor.com/img/gl_dashboard_excel_brown.png",
    "https://cdn-images-1.medium.com/max/1024/1*e-GmVMG8J06nBrdkW-Npdg.png",
  ];
  return <ThreeDMarquee images={images} />;
}
