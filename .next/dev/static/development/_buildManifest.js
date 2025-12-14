self.__BUILD_MANIFEST = {
  "__rewrites": {
    "afterFiles": [
      {
        "source": "/insights/vitals.js"
      },
      {
        "source": "/insights/events.js"
      },
      {
        "source": "/hfi/events/:slug*"
      },
      {
        "source": "/hfi/vitals"
      }
    ],
    "beforeFiles": [],
    "fallback": []
  },
  "sortedPages": [
    "/_app",
    "/_error"
  ]
};self.__BUILD_MANIFEST_CB && self.__BUILD_MANIFEST_CB()