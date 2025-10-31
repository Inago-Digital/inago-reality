import "tsx/esm"
import { renderToStaticMarkup } from "react-dom/server"

export default function (eleventyConfig) {
  eleventyConfig.addExtension(["11ty.jsx", "11ty.ts", "11ty.tsx"], {
    key: "11ty.js",
    compile: function () {
      return async function (data) {
        let content = await this.defaultRenderer(data)
        return renderToStaticMarkup(content)
      }
    },
  })
  eleventyConfig.addPassthroughCopy({ "src/assets/": "assets/" })
  eleventyConfig.addPassthroughCopy({ CNAME: "CNAME" })
  eleventyConfig.ignores.add("src/components/**")
  eleventyConfig.ignores.add("src/utils/**")
  return { dir: { input: "src", output: "_site" } }
}
