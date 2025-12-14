(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/ui/product-card.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ProductLink",
    ()=>ProductLink,
    "getProductLinkImageProps",
    ()=>getProductLinkImageProps
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$link$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/link.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function getProductLinkImageProps(imageUrl, productName) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getImageProps"])({
        width: 48,
        height: 48,
        quality: 65,
        src: imageUrl,
        alt: `A small picture of ${productName}`
    });
}
function ProductLink(props) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(24);
    if ($[0] !== "a6588863be16084b788a02f7d8b5b97ea83b01f9f62f0f660351b2f6793dbf2d") {
        for(let $i = 0; $i < 24; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "a6588863be16084b788a02f7d8b5b97ea83b01f9f62f0f660351b2f6793dbf2d";
    }
    const { category_slug, subcategory_slug, product, imageUrl } = props;
    const t0 = imageUrl ?? "/placeholder.svg?height=64&width=64";
    const t1 = `A small picture of ${product.name}`;
    let t2;
    if ($[1] !== t0 || $[2] !== t1) {
        t2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getImageProps"])({
            height: 256,
            quality: 80,
            width: 256,
            src: t0,
            alt: t1
        });
        $[1] = t0;
        $[2] = t1;
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    const prefetchProps = t2;
    let t3;
    if ($[4] !== prefetchProps.props) {
        t3 = ()=>{
            ;
            try {
                const iprops = prefetchProps.props;
                const img = new Image();
                img.fetchPriority = "low";
                img.decoding = "async";
                if (iprops.sizes) {
                    img.sizes = iprops.sizes;
                }
                if (iprops.srcSet) {
                    img.srcset = iprops.srcSet;
                }
                if (iprops.src) {
                    img.src = iprops.src;
                }
            } catch (t4) {
                const e = t4;
                console.error("failed to preload", prefetchProps.props.src, e);
            }
        };
        $[4] = prefetchProps.props;
        $[5] = t3;
    } else {
        t3 = $[5];
    }
    let t4;
    if ($[6] !== prefetchProps) {
        t4 = [
            prefetchProps
        ];
        $[6] = prefetchProps;
        $[7] = t4;
    } else {
        t4 = $[7];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t3, t4);
    const t5 = `/products/${category_slug}/${subcategory_slug}/${product.slug}`;
    const t6 = imageUrl ?? "/placeholder.svg?height=48&width=48";
    const t7 = `A small picture of ${product.name}`;
    let t8;
    if ($[8] !== props.loading || $[9] !== t6 || $[10] !== t7) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "py-2",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                loading: props.loading,
                decoding: "sync",
                src: t6,
                alt: t7,
                width: 48,
                height: 48,
                quality: 65,
                className: "h-auto w-12 flex-shrink-0 object-cover"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/product-card.tsx",
                lineNumber: 92,
                columnNumber: 32
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/ui/product-card.tsx",
            lineNumber: 92,
            columnNumber: 10
        }, this);
        $[8] = props.loading;
        $[9] = t6;
        $[10] = t7;
        $[11] = t8;
    } else {
        t8 = $[11];
    }
    let t9;
    if ($[12] === Symbol.for("react.memo_cache_sentinel")) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "px-2"
        }, void 0, false, {
            fileName: "[project]/src/components/ui/product-card.tsx",
            lineNumber: 102,
            columnNumber: 10
        }, this);
        $[12] = t9;
    } else {
        t9 = $[12];
    }
    let t10;
    if ($[13] !== product.name) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-sm font-medium text-gray-700 group-hover:underline",
            children: product.name
        }, void 0, false, {
            fileName: "[project]/src/components/ui/product-card.tsx",
            lineNumber: 109,
            columnNumber: 11
        }, this);
        $[13] = product.name;
        $[14] = t10;
    } else {
        t10 = $[14];
    }
    let t11;
    if ($[15] !== product.description) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "overflow-hidden text-xs",
            children: product.description
        }, void 0, false, {
            fileName: "[project]/src/components/ui/product-card.tsx",
            lineNumber: 117,
            columnNumber: 11
        }, this);
        $[15] = product.description;
        $[16] = t11;
    } else {
        t11 = $[16];
    }
    let t12;
    if ($[17] !== t10 || $[18] !== t11) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "h-26 flex flex-grow flex-col items-start py-2",
            children: [
                t10,
                t11
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ui/product-card.tsx",
            lineNumber: 125,
            columnNumber: 11
        }, this);
        $[17] = t10;
        $[18] = t11;
        $[19] = t12;
    } else {
        t12 = $[19];
    }
    let t13;
    if ($[20] !== t12 || $[21] !== t5 || $[22] !== t8) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$link$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Link"], {
            prefetch: true,
            className: "group flex h-[130px] w-full flex-row border px-4 py-2 hover:bg-gray-100 sm:w-[250px]",
            href: t5,
            children: [
                t8,
                t9,
                t12
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ui/product-card.tsx",
            lineNumber: 134,
            columnNumber: 11
        }, this);
        $[20] = t12;
        $[21] = t5;
        $[22] = t8;
        $[23] = t13;
    } else {
        t13 = $[23];
    }
    return t13;
}
_s(ProductLink, "OD7bBpZva5O2jO+Puf00hKivP7c=");
_c = ProductLink;
var _c;
__turbopack_context__.k.register(_c, "ProductLink");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_components_ui_product-card_tsx_2cee44ae._.js.map