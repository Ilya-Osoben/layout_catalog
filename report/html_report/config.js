report({
  "testSuite": "BackstopJS",
  "tests": [
    {
      "pair": {
        "reference": "../bitmaps_reference/Entire_document_1024px.png",
        "test": "../bitmaps_test/20221005-142209/Entire_document_1024px.png",
        "selector": "document",
        "fileName": "Entire_document_1024px.png",
        "label": "Entire document",
        "requireSameDimensions": false,
        "misMatchThreshold": 1,
        "url": "http://localhost:3001/index.html",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/catalog/",
        "expect": 0,
        "viewportLabel": "1024px",
        "diff": {
          "isSameDimensions": false,
          "dimensionDifference": {
            "width": 0,
            "height": -23
          },
          "misMatchPercentage": "0.10",
          "analysisTime": 65
        }
      },
      "status": "pass"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/Entire_document_1200px.png",
        "test": "../bitmaps_test/20221005-142209/Entire_document_1200px.png",
        "selector": "document",
        "fileName": "Entire_document_1200px.png",
        "label": "Entire document",
        "requireSameDimensions": false,
        "misMatchThreshold": 1,
        "url": "http://localhost:3001/index.html",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/catalog/",
        "expect": 0,
        "viewportLabel": "1200px",
        "diff": {
          "isSameDimensions": false,
          "dimensionDifference": {
            "width": 0,
            "height": -23
          },
          "misMatchPercentage": "0.09",
          "analysisTime": 99
        }
      },
      "status": "pass"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/Header_tag_1024px.png",
        "test": "../bitmaps_test/20221005-142209/Header_tag_1024px.png",
        "selector": "header",
        "fileName": "Header_tag_1024px.png",
        "label": "Header tag",
        "requireSameDimensions": false,
        "misMatchThreshold": 1,
        "url": "http://localhost:3001/index.html",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/catalog/",
        "expect": 0,
        "viewportLabel": "1024px",
        "diff": {
          "isSameDimensions": true,
          "dimensionDifference": {
            "width": 0,
            "height": 0
          },
          "misMatchPercentage": "0.00",
          "analysisTime": 88
        }
      },
      "status": "pass"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/Header_tag_1200px.png",
        "test": "../bitmaps_test/20221005-142209/Header_tag_1200px.png",
        "selector": "header",
        "fileName": "Header_tag_1200px.png",
        "label": "Header tag",
        "requireSameDimensions": false,
        "misMatchThreshold": 1,
        "url": "http://localhost:3001/index.html",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/catalog/",
        "expect": 0,
        "viewportLabel": "1200px",
        "diff": {
          "isSameDimensions": true,
          "dimensionDifference": {
            "width": 0,
            "height": 0
          },
          "misMatchPercentage": "0.00",
          "analysisTime": 19
        }
      },
      "status": "pass"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/Nav_tag_1024px.png",
        "test": "../bitmaps_test/20221005-142209/Nav_tag_1024px.png",
        "selector": "nav",
        "fileName": "Nav_tag_1024px.png",
        "label": "Nav tag",
        "requireSameDimensions": false,
        "misMatchThreshold": 1,
        "url": "http://localhost:3001/index.html",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/catalog/",
        "expect": 0,
        "viewportLabel": "1024px",
        "diff": {
          "isSameDimensions": false,
          "dimensionDifference": {
            "width": 295,
            "height": -206
          },
          "misMatchPercentage": "22.47",
          "analysisTime": 27
        },
        "diffImage": "../bitmaps_test/20221005-142209/failed_diff_Nav_tag_1024px.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/Nav_tag_1200px.png",
        "test": "../bitmaps_test/20221005-142209/Nav_tag_1200px.png",
        "selector": "nav",
        "fileName": "Nav_tag_1200px.png",
        "label": "Nav tag",
        "requireSameDimensions": false,
        "misMatchThreshold": 1,
        "url": "http://localhost:3001/index.html",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/catalog/",
        "expect": 0,
        "viewportLabel": "1200px",
        "diff": {
          "isSameDimensions": true,
          "dimensionDifference": {
            "width": 0,
            "height": 0
          },
          "misMatchPercentage": "0.00",
          "analysisTime": 195
        }
      },
      "status": "pass"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/Link_with_data-qa_hover_1024px.png",
        "test": "../bitmaps_test/20221005-142209/Link_with_data-qa_hover_1024px.png",
        "selector": "[data-qa=\"nav-hover\"]",
        "fileName": "Link_with_data-qa_hover_1024px.png",
        "label": "Link with data-qa_hover",
        "requireSameDimensions": false,
        "misMatchThreshold": 1,
        "url": "http://localhost:3001/index.html",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/catalog/",
        "expect": 0,
        "viewportLabel": "1024px",
        "diff": {
          "isSameDimensions": true,
          "dimensionDifference": {
            "width": 0,
            "height": 0
          },
          "misMatchPercentage": "0.00",
          "analysisTime": 10
        }
      },
      "status": "pass"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/Link_with_data-qa_hover_1200px.png",
        "test": "../bitmaps_test/20221005-142209/Link_with_data-qa_hover_1200px.png",
        "selector": "[data-qa=\"nav-hover\"]",
        "fileName": "Link_with_data-qa_hover_1200px.png",
        "label": "Link with data-qa_hover",
        "requireSameDimensions": false,
        "misMatchThreshold": 1,
        "url": "http://localhost:3001/index.html",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/catalog/",
        "expect": 0,
        "viewportLabel": "1200px",
        "diff": {
          "isSameDimensions": true,
          "dimensionDifference": {
            "width": 0,
            "height": 0
          },
          "misMatchPercentage": "0.00",
          "analysisTime": 8
        }
      },
      "status": "pass"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/Link_with_class_is-active_1024px.png",
        "test": "../bitmaps_test/20221005-142209/Link_with_class_is-active_1024px.png",
        "selector": "a.is-active",
        "fileName": "Link_with_class_is-active_1024px.png",
        "label": "Link with class_is-active",
        "requireSameDimensions": false,
        "misMatchThreshold": 1,
        "url": "http://localhost:3001/index.html",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/catalog/",
        "expect": 0,
        "viewportLabel": "1024px",
        "diff": {
          "isSameDimensions": true,
          "dimensionDifference": {
            "width": 0,
            "height": 0
          },
          "misMatchPercentage": "0.00",
          "analysisTime": 3
        }
      },
      "status": "pass"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/Link_with_class_is-active_1200px.png",
        "test": "../bitmaps_test/20221005-142209/Link_with_class_is-active_1200px.png",
        "selector": "a.is-active",
        "fileName": "Link_with_class_is-active_1200px.png",
        "label": "Link with class_is-active",
        "requireSameDimensions": false,
        "misMatchThreshold": 1,
        "url": "http://localhost:3001/index.html",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/catalog/",
        "expect": 0,
        "viewportLabel": "1200px",
        "diff": {
          "isSameDimensions": true,
          "dimensionDifference": {
            "width": 0,
            "height": 0
          },
          "misMatchPercentage": "0.00",
          "analysisTime": 5
        }
      },
      "status": "pass"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/Main_tag_1024px.png",
        "test": "../bitmaps_test/20221005-142209/Main_tag_1024px.png",
        "selector": "main",
        "fileName": "Main_tag_1024px.png",
        "label": "Main tag",
        "requireSameDimensions": false,
        "misMatchThreshold": 1,
        "url": "http://localhost:3001/index.html",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/catalog/",
        "expect": 0,
        "viewportLabel": "1024px",
        "diff": {
          "isSameDimensions": false,
          "dimensionDifference": {
            "width": 0,
            "height": -23
          },
          "misMatchPercentage": "0.11",
          "analysisTime": 84
        }
      },
      "status": "pass"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/Main_tag_1200px.png",
        "test": "../bitmaps_test/20221005-142209/Main_tag_1200px.png",
        "selector": "main",
        "fileName": "Main_tag_1200px.png",
        "label": "Main tag",
        "requireSameDimensions": false,
        "misMatchThreshold": 1,
        "url": "http://localhost:3001/index.html",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/catalog/",
        "expect": 0,
        "viewportLabel": "1200px",
        "diff": {
          "isSameDimensions": false,
          "dimensionDifference": {
            "width": 0,
            "height": -23
          },
          "misMatchPercentage": "0.09",
          "analysisTime": 73
        }
      },
      "status": "pass"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/Card_with_data-qa_card_1024px.png",
        "test": "../bitmaps_test/20221005-142209/Card_with_data-qa_card_1024px.png",
        "selector": "[data-qa=\"card\"]",
        "fileName": "Card_with_data-qa_card_1024px.png",
        "label": "Card with data-qa_card",
        "requireSameDimensions": false,
        "misMatchThreshold": 1,
        "url": "http://localhost:3001/index.html",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/catalog/",
        "expect": 0,
        "viewportLabel": "1024px",
        "diff": {
          "isSameDimensions": true,
          "dimensionDifference": {
            "width": 0,
            "height": 0
          },
          "misMatchPercentage": "21.86",
          "analysisTime": 20
        },
        "diffImage": "../bitmaps_test/20221005-142209/failed_diff_Card_with_data-qa_card_1024px.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/Card_with_data-qa_card_1024px.png",
        "test": "../bitmaps_test/20221005-142209/Card_with_data-qa_card_1024px.png",
        "selector": "[data-qa=\"card\"].__n1",
        "fileName": "Card_with_data-qa_card_1024px.png",
        "label": "Card with data-qa_card",
        "requireSameDimensions": false,
        "misMatchThreshold": 1,
        "url": "http://localhost:3001/index.html",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/catalog/",
        "expect": 0,
        "viewportLabel": "1024px",
        "diff": {
          "isSameDimensions": true,
          "dimensionDifference": {
            "width": 0,
            "height": 0
          },
          "misMatchPercentage": "21.86",
          "analysisTime": 225
        },
        "diffImage": "../bitmaps_test/20221005-142209/failed_diff_Card_with_data-qa_card_1024px.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/Card_with_data-qa_card_1024px.png",
        "test": "../bitmaps_test/20221005-142209/Card_with_data-qa_card_1024px.png",
        "selector": "[data-qa=\"card\"].__n2",
        "fileName": "Card_with_data-qa_card_1024px.png",
        "label": "Card with data-qa_card",
        "requireSameDimensions": false,
        "misMatchThreshold": 1,
        "url": "http://localhost:3001/index.html",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/catalog/",
        "expect": 0,
        "viewportLabel": "1024px",
        "diff": {
          "isSameDimensions": true,
          "dimensionDifference": {
            "width": 0,
            "height": 0
          },
          "misMatchPercentage": "21.86",
          "analysisTime": 264
        },
        "diffImage": "../bitmaps_test/20221005-142209/failed_diff_Card_with_data-qa_card_1024px.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/Card_with_data-qa_card_1024px.png",
        "test": "../bitmaps_test/20221005-142209/Card_with_data-qa_card_1024px.png",
        "selector": "[data-qa=\"card\"].__n3",
        "fileName": "Card_with_data-qa_card_1024px.png",
        "label": "Card with data-qa_card",
        "requireSameDimensions": false,
        "misMatchThreshold": 1,
        "url": "http://localhost:3001/index.html",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/catalog/",
        "expect": 0,
        "viewportLabel": "1024px",
        "diff": {
          "isSameDimensions": true,
          "dimensionDifference": {
            "width": 0,
            "height": 0
          },
          "misMatchPercentage": "21.86",
          "analysisTime": 18
        },
        "diffImage": "../bitmaps_test/20221005-142209/failed_diff_Card_with_data-qa_card_1024px.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/Card_with_data-qa_card_1024px.png",
        "test": "../bitmaps_test/20221005-142209/Card_with_data-qa_card_1024px.png",
        "selector": "[data-qa=\"card\"].__n4",
        "fileName": "Card_with_data-qa_card_1024px.png",
        "label": "Card with data-qa_card",
        "requireSameDimensions": false,
        "misMatchThreshold": 1,
        "url": "http://localhost:3001/index.html",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/catalog/",
        "expect": 0,
        "viewportLabel": "1024px",
        "diff": {
          "isSameDimensions": true,
          "dimensionDifference": {
            "width": 0,
            "height": 0
          },
          "misMatchPercentage": "21.86",
          "analysisTime": 318
        },
        "diffImage": "../bitmaps_test/20221005-142209/failed_diff_Card_with_data-qa_card_1024px.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/Card_with_data-qa_card_1024px.png",
        "test": "../bitmaps_test/20221005-142209/Card_with_data-qa_card_1024px.png",
        "selector": "[data-qa=\"card\"].__n5",
        "fileName": "Card_with_data-qa_card_1024px.png",
        "label": "Card with data-qa_card",
        "requireSameDimensions": false,
        "misMatchThreshold": 1,
        "url": "http://localhost:3001/index.html",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/catalog/",
        "expect": 0,
        "viewportLabel": "1024px",
        "diff": {
          "isSameDimensions": true,
          "dimensionDifference": {
            "width": 0,
            "height": 0
          },
          "misMatchPercentage": "21.86",
          "analysisTime": 20
        },
        "diffImage": "../bitmaps_test/20221005-142209/failed_diff_Card_with_data-qa_card_1024px.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/Card_with_data-qa_card_1024px.png",
        "test": "../bitmaps_test/20221005-142209/Card_with_data-qa_card_1024px.png",
        "selector": "[data-qa=\"card\"].__n6",
        "fileName": "Card_with_data-qa_card_1024px.png",
        "label": "Card with data-qa_card",
        "requireSameDimensions": false,
        "misMatchThreshold": 1,
        "url": "http://localhost:3001/index.html",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/catalog/",
        "expect": 0,
        "viewportLabel": "1024px",
        "diff": {
          "isSameDimensions": true,
          "dimensionDifference": {
            "width": 0,
            "height": 0
          },
          "misMatchPercentage": "21.86",
          "analysisTime": 446
        },
        "diffImage": "../bitmaps_test/20221005-142209/failed_diff_Card_with_data-qa_card_1024px.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/Card_with_data-qa_card_1024px.png",
        "test": "../bitmaps_test/20221005-142209/Card_with_data-qa_card_1024px.png",
        "selector": "[data-qa=\"card\"].__n7",
        "fileName": "Card_with_data-qa_card_1024px.png",
        "label": "Card with data-qa_card",
        "requireSameDimensions": false,
        "misMatchThreshold": 1,
        "url": "http://localhost:3001/index.html",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/catalog/",
        "expect": 0,
        "viewportLabel": "1024px",
        "diff": {
          "isSameDimensions": true,
          "dimensionDifference": {
            "width": 0,
            "height": 0
          },
          "misMatchPercentage": "21.86",
          "analysisTime": 19
        },
        "diffImage": "../bitmaps_test/20221005-142209/failed_diff_Card_with_data-qa_card_1024px.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/Card_with_data-qa_card_1200px.png",
        "test": "../bitmaps_test/20221005-142209/Card_with_data-qa_card_1200px.png",
        "selector": "[data-qa=\"card\"]",
        "fileName": "Card_with_data-qa_card_1200px.png",
        "label": "Card with data-qa_card",
        "requireSameDimensions": false,
        "misMatchThreshold": 1,
        "url": "http://localhost:3001/index.html",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/catalog/",
        "expect": 0,
        "viewportLabel": "1200px",
        "diff": {
          "isSameDimensions": true,
          "dimensionDifference": {
            "width": 0,
            "height": 0
          },
          "misMatchPercentage": "0.17",
          "analysisTime": 20
        }
      },
      "status": "pass"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/Card_with_data-qa_card_1200px.png",
        "test": "../bitmaps_test/20221005-142209/Card_with_data-qa_card_1200px.png",
        "selector": "[data-qa=\"card\"].__n1",
        "fileName": "Card_with_data-qa_card_1200px.png",
        "label": "Card with data-qa_card",
        "requireSameDimensions": false,
        "misMatchThreshold": 1,
        "url": "http://localhost:3001/index.html",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/catalog/",
        "expect": 0,
        "viewportLabel": "1200px",
        "diff": {
          "isSameDimensions": true,
          "dimensionDifference": {
            "width": 0,
            "height": 0
          },
          "misMatchPercentage": "0.17",
          "analysisTime": 34
        }
      },
      "status": "pass"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/Card_with_data-qa_card_1200px.png",
        "test": "../bitmaps_test/20221005-142209/Card_with_data-qa_card_1200px.png",
        "selector": "[data-qa=\"card\"].__n2",
        "fileName": "Card_with_data-qa_card_1200px.png",
        "label": "Card with data-qa_card",
        "requireSameDimensions": false,
        "misMatchThreshold": 1,
        "url": "http://localhost:3001/index.html",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/catalog/",
        "expect": 0,
        "viewportLabel": "1200px",
        "diff": {
          "isSameDimensions": true,
          "dimensionDifference": {
            "width": 0,
            "height": 0
          },
          "misMatchPercentage": "0.17",
          "analysisTime": 229
        }
      },
      "status": "pass"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/Card_with_data-qa_card_1200px.png",
        "test": "../bitmaps_test/20221005-142209/Card_with_data-qa_card_1200px.png",
        "selector": "[data-qa=\"card\"].__n3",
        "fileName": "Card_with_data-qa_card_1200px.png",
        "label": "Card with data-qa_card",
        "requireSameDimensions": false,
        "misMatchThreshold": 1,
        "url": "http://localhost:3001/index.html",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/catalog/",
        "expect": 0,
        "viewportLabel": "1200px",
        "diff": {
          "isSameDimensions": true,
          "dimensionDifference": {
            "width": 0,
            "height": 0
          },
          "misMatchPercentage": "0.17",
          "analysisTime": 242
        }
      },
      "status": "pass"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/Card_with_data-qa_card_1200px.png",
        "test": "../bitmaps_test/20221005-142209/Card_with_data-qa_card_1200px.png",
        "selector": "[data-qa=\"card\"].__n4",
        "fileName": "Card_with_data-qa_card_1200px.png",
        "label": "Card with data-qa_card",
        "requireSameDimensions": false,
        "misMatchThreshold": 1,
        "url": "http://localhost:3001/index.html",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/catalog/",
        "expect": 0,
        "viewportLabel": "1200px",
        "diff": {
          "isSameDimensions": true,
          "dimensionDifference": {
            "width": 0,
            "height": 0
          },
          "misMatchPercentage": "0.17",
          "analysisTime": 290
        }
      },
      "status": "pass"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/Card_with_data-qa_card_1200px.png",
        "test": "../bitmaps_test/20221005-142209/Card_with_data-qa_card_1200px.png",
        "selector": "[data-qa=\"card\"].__n5",
        "fileName": "Card_with_data-qa_card_1200px.png",
        "label": "Card with data-qa_card",
        "requireSameDimensions": false,
        "misMatchThreshold": 1,
        "url": "http://localhost:3001/index.html",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/catalog/",
        "expect": 0,
        "viewportLabel": "1200px",
        "diff": {
          "isSameDimensions": true,
          "dimensionDifference": {
            "width": 0,
            "height": 0
          },
          "misMatchPercentage": "0.17",
          "analysisTime": 307
        }
      },
      "status": "pass"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/Card_with_data-qa_card_1200px.png",
        "test": "../bitmaps_test/20221005-142209/Card_with_data-qa_card_1200px.png",
        "selector": "[data-qa=\"card\"].__n6",
        "fileName": "Card_with_data-qa_card_1200px.png",
        "label": "Card with data-qa_card",
        "requireSameDimensions": false,
        "misMatchThreshold": 1,
        "url": "http://localhost:3001/index.html",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/catalog/",
        "expect": 0,
        "viewportLabel": "1200px",
        "diff": {
          "isSameDimensions": true,
          "dimensionDifference": {
            "width": 0,
            "height": 0
          },
          "misMatchPercentage": "0.17",
          "analysisTime": 361
        }
      },
      "status": "pass"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/Card_with_data-qa_card_1200px.png",
        "test": "../bitmaps_test/20221005-142209/Card_with_data-qa_card_1200px.png",
        "selector": "[data-qa=\"card\"].__n7",
        "fileName": "Card_with_data-qa_card_1200px.png",
        "label": "Card with data-qa_card",
        "requireSameDimensions": false,
        "misMatchThreshold": 1,
        "url": "http://localhost:3001/index.html",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/catalog/",
        "expect": 0,
        "viewportLabel": "1200px",
        "diff": {
          "isSameDimensions": true,
          "dimensionDifference": {
            "width": 0,
            "height": 0
          },
          "misMatchPercentage": "0.17",
          "analysisTime": 34
        }
      },
      "status": "pass"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/Card_with_data-qa_card-hover_1024px.png",
        "test": "../bitmaps_test/20221005-142209/Card_with_data-qa_card-hover_1024px.png",
        "selector": "[data-qa=\"card\"]",
        "fileName": "Card_with_data-qa_card-hover_1024px.png",
        "label": "Card with data-qa_card-hover",
        "requireSameDimensions": false,
        "misMatchThreshold": 1,
        "url": "http://localhost:3001/index.html",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/catalog/",
        "expect": 0,
        "viewportLabel": "1024px",
        "diff": {
          "isSameDimensions": true,
          "dimensionDifference": {
            "width": 0,
            "height": 0
          },
          "misMatchPercentage": "7.64",
          "analysisTime": 300
        },
        "diffImage": "../bitmaps_test/20221005-142209/failed_diff_Card_with_data-qa_card-hover_1024px.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/Card_with_data-qa_card-hover_1024px.png",
        "test": "../bitmaps_test/20221005-142209/Card_with_data-qa_card-hover_1024px.png",
        "selector": "[data-qa=\"card\"].__n1",
        "fileName": "Card_with_data-qa_card-hover_1024px.png",
        "label": "Card with data-qa_card-hover",
        "requireSameDimensions": false,
        "misMatchThreshold": 1,
        "url": "http://localhost:3001/index.html",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/catalog/",
        "expect": 0,
        "viewportLabel": "1024px",
        "diff": {
          "isSameDimensions": true,
          "dimensionDifference": {
            "width": 0,
            "height": 0
          },
          "misMatchPercentage": "7.64",
          "analysisTime": 20
        },
        "diffImage": "../bitmaps_test/20221005-142209/failed_diff_Card_with_data-qa_card-hover_1024px.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/Card_with_data-qa_card-hover_1024px.png",
        "test": "../bitmaps_test/20221005-142209/Card_with_data-qa_card-hover_1024px.png",
        "selector": "[data-qa=\"card\"].__n2",
        "fileName": "Card_with_data-qa_card-hover_1024px.png",
        "label": "Card with data-qa_card-hover",
        "requireSameDimensions": false,
        "misMatchThreshold": 1,
        "url": "http://localhost:3001/index.html",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/catalog/",
        "expect": 0,
        "viewportLabel": "1024px",
        "diff": {
          "isSameDimensions": true,
          "dimensionDifference": {
            "width": 0,
            "height": 0
          },
          "misMatchPercentage": "7.64",
          "analysisTime": 183
        },
        "diffImage": "../bitmaps_test/20221005-142209/failed_diff_Card_with_data-qa_card-hover_1024px.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/Card_with_data-qa_card-hover_1024px.png",
        "test": "../bitmaps_test/20221005-142209/Card_with_data-qa_card-hover_1024px.png",
        "selector": "[data-qa=\"card\"].__n3",
        "fileName": "Card_with_data-qa_card-hover_1024px.png",
        "label": "Card with data-qa_card-hover",
        "requireSameDimensions": false,
        "misMatchThreshold": 1,
        "url": "http://localhost:3001/index.html",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/catalog/",
        "expect": 0,
        "viewportLabel": "1024px",
        "diff": {
          "isSameDimensions": true,
          "dimensionDifference": {
            "width": 0,
            "height": 0
          },
          "misMatchPercentage": "7.64",
          "analysisTime": 326
        },
        "diffImage": "../bitmaps_test/20221005-142209/failed_diff_Card_with_data-qa_card-hover_1024px.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/Card_with_data-qa_card-hover_1024px.png",
        "test": "../bitmaps_test/20221005-142209/Card_with_data-qa_card-hover_1024px.png",
        "selector": "[data-qa=\"card\"].__n4",
        "fileName": "Card_with_data-qa_card-hover_1024px.png",
        "label": "Card with data-qa_card-hover",
        "requireSameDimensions": false,
        "misMatchThreshold": 1,
        "url": "http://localhost:3001/index.html",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/catalog/",
        "expect": 0,
        "viewportLabel": "1024px",
        "diff": {
          "isSameDimensions": true,
          "dimensionDifference": {
            "width": 0,
            "height": 0
          },
          "misMatchPercentage": "7.64",
          "analysisTime": 24
        },
        "diffImage": "../bitmaps_test/20221005-142209/failed_diff_Card_with_data-qa_card-hover_1024px.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/Card_with_data-qa_card-hover_1024px.png",
        "test": "../bitmaps_test/20221005-142209/Card_with_data-qa_card-hover_1024px.png",
        "selector": "[data-qa=\"card\"].__n5",
        "fileName": "Card_with_data-qa_card-hover_1024px.png",
        "label": "Card with data-qa_card-hover",
        "requireSameDimensions": false,
        "misMatchThreshold": 1,
        "url": "http://localhost:3001/index.html",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/catalog/",
        "expect": 0,
        "viewportLabel": "1024px",
        "diff": {
          "isSameDimensions": true,
          "dimensionDifference": {
            "width": 0,
            "height": 0
          },
          "misMatchPercentage": "7.64",
          "analysisTime": 25
        },
        "diffImage": "../bitmaps_test/20221005-142209/failed_diff_Card_with_data-qa_card-hover_1024px.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/Card_with_data-qa_card-hover_1024px.png",
        "test": "../bitmaps_test/20221005-142209/Card_with_data-qa_card-hover_1024px.png",
        "selector": "[data-qa=\"card\"].__n6",
        "fileName": "Card_with_data-qa_card-hover_1024px.png",
        "label": "Card with data-qa_card-hover",
        "requireSameDimensions": false,
        "misMatchThreshold": 1,
        "url": "http://localhost:3001/index.html",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/catalog/",
        "expect": 0,
        "viewportLabel": "1024px",
        "diff": {
          "isSameDimensions": true,
          "dimensionDifference": {
            "width": 0,
            "height": 0
          },
          "misMatchPercentage": "7.64",
          "analysisTime": 142
        },
        "diffImage": "../bitmaps_test/20221005-142209/failed_diff_Card_with_data-qa_card-hover_1024px.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/Card_with_data-qa_card-hover_1024px.png",
        "test": "../bitmaps_test/20221005-142209/Card_with_data-qa_card-hover_1024px.png",
        "selector": "[data-qa=\"card\"].__n7",
        "fileName": "Card_with_data-qa_card-hover_1024px.png",
        "label": "Card with data-qa_card-hover",
        "requireSameDimensions": false,
        "misMatchThreshold": 1,
        "url": "http://localhost:3001/index.html",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/catalog/",
        "expect": 0,
        "viewportLabel": "1024px",
        "diff": {
          "isSameDimensions": true,
          "dimensionDifference": {
            "width": 0,
            "height": 0
          },
          "misMatchPercentage": "7.64",
          "analysisTime": 143
        },
        "diffImage": "../bitmaps_test/20221005-142209/failed_diff_Card_with_data-qa_card-hover_1024px.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/Card_with_data-qa_card-hover_1200px.png",
        "test": "../bitmaps_test/20221005-142209/Card_with_data-qa_card-hover_1200px.png",
        "selector": "[data-qa=\"card\"]",
        "fileName": "Card_with_data-qa_card-hover_1200px.png",
        "label": "Card with data-qa_card-hover",
        "requireSameDimensions": false,
        "misMatchThreshold": 1,
        "url": "http://localhost:3001/index.html",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/catalog/",
        "expect": 0,
        "viewportLabel": "1200px",
        "diff": {
          "isSameDimensions": true,
          "dimensionDifference": {
            "width": 0,
            "height": 0
          },
          "misMatchPercentage": "7.64",
          "analysisTime": 493
        },
        "diffImage": "../bitmaps_test/20221005-142209/failed_diff_Card_with_data-qa_card-hover_1200px.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/Card_with_data-qa_card-hover_1200px.png",
        "test": "../bitmaps_test/20221005-142209/Card_with_data-qa_card-hover_1200px.png",
        "selector": "[data-qa=\"card\"].__n1",
        "fileName": "Card_with_data-qa_card-hover_1200px.png",
        "label": "Card with data-qa_card-hover",
        "requireSameDimensions": false,
        "misMatchThreshold": 1,
        "url": "http://localhost:3001/index.html",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/catalog/",
        "expect": 0,
        "viewportLabel": "1200px",
        "diff": {
          "isSameDimensions": true,
          "dimensionDifference": {
            "width": 0,
            "height": 0
          },
          "misMatchPercentage": "7.64",
          "analysisTime": 264
        },
        "diffImage": "../bitmaps_test/20221005-142209/failed_diff_Card_with_data-qa_card-hover_1200px.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/Card_with_data-qa_card-hover_1200px.png",
        "test": "../bitmaps_test/20221005-142209/Card_with_data-qa_card-hover_1200px.png",
        "selector": "[data-qa=\"card\"].__n2",
        "fileName": "Card_with_data-qa_card-hover_1200px.png",
        "label": "Card with data-qa_card-hover",
        "requireSameDimensions": false,
        "misMatchThreshold": 1,
        "url": "http://localhost:3001/index.html",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/catalog/",
        "expect": 0,
        "viewportLabel": "1200px",
        "diff": {
          "isSameDimensions": true,
          "dimensionDifference": {
            "width": 0,
            "height": 0
          },
          "misMatchPercentage": "7.64",
          "analysisTime": 24
        },
        "diffImage": "../bitmaps_test/20221005-142209/failed_diff_Card_with_data-qa_card-hover_1200px.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/Card_with_data-qa_card-hover_1200px.png",
        "test": "../bitmaps_test/20221005-142209/Card_with_data-qa_card-hover_1200px.png",
        "selector": "[data-qa=\"card\"].__n3",
        "fileName": "Card_with_data-qa_card-hover_1200px.png",
        "label": "Card with data-qa_card-hover",
        "requireSameDimensions": false,
        "misMatchThreshold": 1,
        "url": "http://localhost:3001/index.html",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/catalog/",
        "expect": 0,
        "viewportLabel": "1200px",
        "diff": {
          "isSameDimensions": true,
          "dimensionDifference": {
            "width": 0,
            "height": 0
          },
          "misMatchPercentage": "7.64",
          "analysisTime": 125
        },
        "diffImage": "../bitmaps_test/20221005-142209/failed_diff_Card_with_data-qa_card-hover_1200px.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/Card_with_data-qa_card-hover_1200px.png",
        "test": "../bitmaps_test/20221005-142209/Card_with_data-qa_card-hover_1200px.png",
        "selector": "[data-qa=\"card\"].__n4",
        "fileName": "Card_with_data-qa_card-hover_1200px.png",
        "label": "Card with data-qa_card-hover",
        "requireSameDimensions": false,
        "misMatchThreshold": 1,
        "url": "http://localhost:3001/index.html",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/catalog/",
        "expect": 0,
        "viewportLabel": "1200px",
        "diff": {
          "isSameDimensions": true,
          "dimensionDifference": {
            "width": 0,
            "height": 0
          },
          "misMatchPercentage": "7.64",
          "analysisTime": 216
        },
        "diffImage": "../bitmaps_test/20221005-142209/failed_diff_Card_with_data-qa_card-hover_1200px.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/Card_with_data-qa_card-hover_1200px.png",
        "test": "../bitmaps_test/20221005-142209/Card_with_data-qa_card-hover_1200px.png",
        "selector": "[data-qa=\"card\"].__n5",
        "fileName": "Card_with_data-qa_card-hover_1200px.png",
        "label": "Card with data-qa_card-hover",
        "requireSameDimensions": false,
        "misMatchThreshold": 1,
        "url": "http://localhost:3001/index.html",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/catalog/",
        "expect": 0,
        "viewportLabel": "1200px",
        "diff": {
          "isSameDimensions": true,
          "dimensionDifference": {
            "width": 0,
            "height": 0
          },
          "misMatchPercentage": "7.64",
          "analysisTime": 99
        },
        "diffImage": "../bitmaps_test/20221005-142209/failed_diff_Card_with_data-qa_card-hover_1200px.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/Card_with_data-qa_card-hover_1200px.png",
        "test": "../bitmaps_test/20221005-142209/Card_with_data-qa_card-hover_1200px.png",
        "selector": "[data-qa=\"card\"].__n6",
        "fileName": "Card_with_data-qa_card-hover_1200px.png",
        "label": "Card with data-qa_card-hover",
        "requireSameDimensions": false,
        "misMatchThreshold": 1,
        "url": "http://localhost:3001/index.html",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/catalog/",
        "expect": 0,
        "viewportLabel": "1200px",
        "diff": {
          "isSameDimensions": true,
          "dimensionDifference": {
            "width": 0,
            "height": 0
          },
          "misMatchPercentage": "7.64",
          "analysisTime": 196
        },
        "diffImage": "../bitmaps_test/20221005-142209/failed_diff_Card_with_data-qa_card-hover_1200px.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/Card_with_data-qa_card-hover_1200px.png",
        "test": "../bitmaps_test/20221005-142209/Card_with_data-qa_card-hover_1200px.png",
        "selector": "[data-qa=\"card\"].__n7",
        "fileName": "Card_with_data-qa_card-hover_1200px.png",
        "label": "Card with data-qa_card-hover",
        "requireSameDimensions": false,
        "misMatchThreshold": 1,
        "url": "http://localhost:3001/index.html",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/catalog/",
        "expect": 0,
        "viewportLabel": "1200px",
        "diff": {
          "isSameDimensions": true,
          "dimensionDifference": {
            "width": 0,
            "height": 0
          },
          "misMatchPercentage": "7.64",
          "analysisTime": 110
        },
        "diffImage": "../bitmaps_test/20221005-142209/failed_diff_Card_with_data-qa_card-hover_1200px.png"
      },
      "status": "fail"
    }
  ]
});