const { DateTime } = require("luxon");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("./src/styles");
  eleventyConfig.addWatchTarget("./src/styles/main.css");

  eleventyConfig.addFilter("postDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED);
  });

  eleventyConfig.addCollection("recent_posts", function(collectionApi) {
      return collectionApi.getFilteredByTag("posts").slice(0,2).sort(function(a, b) {
        return b.date - a.date;
      });
    });

  return {
    dir: {
      input: "src",
      output: "_site",
    },
  };
};
