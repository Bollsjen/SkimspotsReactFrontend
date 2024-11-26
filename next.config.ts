import path from "path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack(config) {
    config.module.rules.push({
      test: /\.less$/,
      use: [
        "style-loader",
        "css-loader",
        {
          loader: "less-loader",
          options: {
            lessOptions: {
              modifyVars: {}, // Use external file for variables
              javascriptEnabled: true,
            },
          },
        },
      ],
      include: path.resolve(__dirname),
    });

    return config;
  },
};

export default nextConfig;
