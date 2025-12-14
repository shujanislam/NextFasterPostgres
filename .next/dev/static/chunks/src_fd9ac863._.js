(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/lib/utils.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/input.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Input",
    ()=>Input
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
;
;
;
const Input = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c = ({ className, type, ...props }, ref)=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
        type: type,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex h-9 w-full border border-gray-500 bg-transparent px-3 py-1 text-sm outline-none", className),
        ref: ref,
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/input.tsx",
        lineNumber: 12,
        columnNumber: 7
    }, ("TURBOPACK compile-time value", void 0));
});
_c1 = Input;
Input.displayName = "Input";
;
var _c, _c1;
__turbopack_context__.k.register(_c, "Input$React.forwardRef");
__turbopack_context__.k.register(_c1, "Input");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/scroll-area.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ScrollArea",
    ()=>ScrollArea,
    "ScrollBar",
    ()=>ScrollBar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$scroll$2d$area$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-scroll-area/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
"use client";
;
;
;
;
const ScrollArea = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c = ({ className, children, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$scroll$2d$area$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("relative overflow-hidden", className),
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$scroll$2d$area$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Viewport"], {
                className: "h-full w-full rounded-[inherit]",
                children: children
            }, void 0, false, {
                fileName: "[project]/src/components/ui/scroll-area.tsx",
                lineNumber: 17,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ScrollBar, {}, void 0, false, {
                fileName: "[project]/src/components/ui/scroll-area.tsx",
                lineNumber: 20,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$scroll$2d$area$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Corner"], {}, void 0, false, {
                fileName: "[project]/src/components/ui/scroll-area.tsx",
                lineNumber: 21,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/scroll-area.tsx",
        lineNumber: 12,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c1 = ScrollArea;
ScrollArea.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$scroll$2d$area$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"].displayName;
const ScrollBar = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](({ className, orientation = "vertical", ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$scroll$2d$area$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollAreaScrollbar"], {
        ref: ref,
        orientation: orientation,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex touch-none select-none transition-colors", orientation === "vertical" && "h-full w-2.5 border-l border-l-transparent p-[1px]", orientation === "horizontal" && "h-2.5 flex-col border-t border-t-transparent p-[1px]", className),
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$scroll$2d$area$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollAreaThumb"], {
            className: "relative flex-1 rounded-full bg-border"
        }, void 0, false, {
            fileName: "[project]/src/components/ui/scroll-area.tsx",
            lineNumber: 43,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/ui/scroll-area.tsx",
        lineNumber: 30,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c2 = ScrollBar;
ScrollBar.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$scroll$2d$area$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollAreaScrollbar"].displayName;
;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "ScrollArea$React.forwardRef");
__turbopack_context__.k.register(_c1, "ScrollArea");
__turbopack_context__.k.register(_c2, "ScrollBar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/link.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Link",
    ()=>Link
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function sleep(ms) {
    return new Promise((resolve)=>setTimeout(resolve, ms));
}
async function prefetchImages(href) {
    if (!href.startsWith("/") || href.startsWith("/order") || href === "/") {
        return [];
    }
    const url = new URL(href, window.location.href);
    const imageResponse = await fetch(`/api/prefetch-images${url.pathname}`, {
        priority: "low"
    });
    // only throw in dev
    if (!imageResponse.ok && ("TURBOPACK compile-time value", "development") === "development") {
        throw new Error("Failed to prefetch images");
    }
    const { images } = await imageResponse.json();
    return images;
}
const seen = new Set();
const imageCache = new Map();
const Link = _s(({ children, ...props })=>{
    _s();
    const linkRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    let prefetchTimeout = null;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (props.prefetch === false) return;
        const linkElement = linkRef.current;
        if (!linkElement) return;
        const observer = new IntersectionObserver((entries)=>{
            const entry = entries[0];
            if (entry.isIntersecting) {
                prefetchTimeout = setTimeout(async ()=>{
                    router.prefetch(String(props.href));
                    await sleep(0);
                    if (!imageCache.has(String(props.href))) {
                        void prefetchImages(String(props.href)).then((images)=>{
                            imageCache.set(String(props.href), images);
                        }, console.error);
                    }
                    observer.unobserve(entry.target);
                }, 300);
            } else if (prefetchTimeout) {
                clearTimeout(prefetchTimeout);
                prefetchTimeout = null;
            }
        }, {
            rootMargin: "0px",
            threshold: 0.1
        });
        observer.observe(linkElement);
        return ()=>{
            observer.disconnect();
            if (prefetchTimeout) {
                clearTimeout(prefetchTimeout);
            }
        };
    }, [
        props.href,
        props.prefetch
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        ref: linkRef,
        prefetch: false,
        onMouseEnter: ()=>{
            router.prefetch(String(props.href));
            const images = imageCache.get(String(props.href)) || [];
            for (const image of images){
                prefetchImage(image);
            }
        },
        onMouseDown: (e)=>{
            const url = new URL(String(props.href), window.location.href);
            if (url.origin === window.location.origin && e.button === 0 && !e.altKey && !e.ctrlKey && !e.metaKey && !e.shiftKey) {
                e.preventDefault();
                router.push(String(props.href));
            }
        },
        ...props,
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/ui/link.tsx",
        lineNumber: 84,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
}, "FR9L7IL5DhgyPy41iRR0/XVHmk0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
function prefetchImage(image) {
    if (image.loading === "lazy" || seen.has(image.srcset)) {
        return;
    }
    const img = new Image();
    img.decoding = "async";
    img.fetchPriority = "low";
    img.sizes = image.sizes;
    seen.add(image.srcset);
    img.srcset = image.srcset;
    img.src = image.src;
    img.alt = image.alt;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/search-dropdown.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SearchDropdownComponent",
    ()=>SearchDropdownComponent
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/input.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$scroll$2d$area$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/scroll-area.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$link$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/link.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
function SearchDropdownComponent() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(36);
    if ($[0] !== "9b9a9feec50154829a9fd0d54531f5b68c1eb65d03785f32b4967f525008848f") {
        for(let $i = 0; $i < 36; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "9b9a9feec50154829a9fd0d54531f5b68c1eb65d03785f32b4967f525008848f";
    }
    const [searchTerm, setSearchTerm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = [];
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    const [filteredItems, setFilteredItems] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t0);
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [highlightedIndex, setHighlightedIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(-1);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const inputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const dropdownRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    let t1;
    let t2;
    if ($[2] !== searchTerm) {
        t1 = ()=>{
            if (searchTerm.length === 0) {
                setFilteredItems([]);
            } else {
                setIsLoading(true);
                const searchedFor = searchTerm;
                fetch(`/api/search?q=${searchTerm}`).then(async (results)=>{
                    const currentSearchTerm = inputRef.current?.value;
                    if (currentSearchTerm !== searchedFor) {
                        return;
                    }
                    const json = await results.json();
                    setIsLoading(false);
                    setFilteredItems(json);
                });
            }
        };
        t2 = [
            searchTerm,
            inputRef
        ];
        $[2] = searchTerm;
        $[3] = t1;
        $[4] = t2;
    } else {
        t1 = $[3];
        t2 = $[4];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t1, t2);
    const params = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"])();
    let t3;
    if ($[5] !== params.product || $[6] !== params.subcategory) {
        t3 = ()=>{
            if (!params.product) {
                const subcategory = params.subcategory;
                setSearchTerm(typeof subcategory === "string" ? subcategory.replaceAll("-", " ") : "");
            }
        };
        $[5] = params.product;
        $[6] = params.subcategory;
        $[7] = t3;
    } else {
        t3 = $[7];
    }
    let t4;
    if ($[8] !== params) {
        t4 = [
            params
        ];
        $[8] = params;
        $[9] = t4;
    } else {
        t4 = $[9];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t3, t4);
    let t5;
    if ($[10] !== filteredItems || $[11] !== highlightedIndex || $[12] !== router) {
        t5 = (e)=>{
            if (e.key === "ArrowDown") {
                setHighlightedIndex((prevIndex)=>prevIndex < filteredItems.length - 1 ? prevIndex + 1 : 0);
            } else {
                if (e.key === "ArrowUp") {
                    setHighlightedIndex((prevIndex_0)=>prevIndex_0 > 0 ? prevIndex_0 - 1 : filteredItems.length - 1);
                } else {
                    if (e.key === "Enter" && highlightedIndex >= 0) {
                        router.push(filteredItems[highlightedIndex].href);
                        setSearchTerm(filteredItems[highlightedIndex].name);
                        setIsOpen(false);
                        inputRef.current?.blur();
                    }
                }
            }
        };
        $[10] = filteredItems;
        $[11] = highlightedIndex;
        $[12] = router;
        $[13] = t5;
    } else {
        t5 = $[13];
    }
    const handleKeyDown = t5;
    let t6;
    let t7;
    if ($[14] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = ()=>{
            const handleClickOutside = (event)=>{
                if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                    setIsOpen(false);
                    inputRef.current?.blur();
                }
            };
            document.addEventListener("mousedown", handleClickOutside);
            return ()=>{
                document.removeEventListener("mousedown", handleClickOutside);
            };
        };
        t7 = [
            dropdownRef
        ];
        $[14] = t6;
        $[15] = t7;
    } else {
        t6 = $[14];
        t7 = $[15];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t6, t7);
    let t8;
    if ($[16] === Symbol.for("react.memo_cache_sentinel")) {
        t8 = (e_0)=>{
            setSearchTerm(e_0.target.value);
            setIsOpen(e_0.target.value.length > 0);
            setHighlightedIndex(-1);
        };
        $[16] = t8;
    } else {
        t8 = $[16];
    }
    let t9;
    if ($[17] !== handleKeyDown || $[18] !== searchTerm) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
            ref: inputRef,
            autoCapitalize: "off",
            autoCorrect: "off",
            type: "text",
            placeholder: "Search...",
            value: searchTerm,
            onChange: t8,
            onKeyDown: handleKeyDown,
            className: "pr-12 font-sans font-medium sm:w-[300px] md:w-[375px]"
        }, void 0, false, {
            fileName: "[project]/src/components/search-dropdown.tsx",
            lineNumber: 155,
            columnNumber: 10
        }, this);
        $[17] = handleKeyDown;
        $[18] = searchTerm;
        $[19] = t9;
    } else {
        t9 = $[19];
    }
    const t10 = !isOpen;
    let t11;
    if ($[20] !== t10) {
        t11 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("absolute right-7 top-2 h-5 w-5 text-muted-foreground", {
            hidden: t10
        });
        $[20] = t10;
        $[21] = t11;
    } else {
        t11 = $[21];
    }
    let t12;
    if ($[22] === Symbol.for("react.memo_cache_sentinel")) {
        t12 = ()=>{
            setSearchTerm("");
            setIsOpen(false);
        };
        $[22] = t12;
    } else {
        t12 = $[22];
    }
    let t13;
    if ($[23] !== t11) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
            className: t11,
            onClick: t12
        }, void 0, false, {
            fileName: "[project]/src/components/search-dropdown.tsx",
            lineNumber: 185,
            columnNumber: 11
        }, this);
        $[23] = t11;
        $[24] = t13;
    } else {
        t13 = $[24];
    }
    let t14;
    if ($[25] !== t13 || $[26] !== t9) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative",
            children: [
                t9,
                t13
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/search-dropdown.tsx",
            lineNumber: 193,
            columnNumber: 11
        }, this);
        $[25] = t13;
        $[26] = t9;
        $[27] = t14;
    } else {
        t14 = $[27];
    }
    let t15;
    if ($[28] !== filteredItems || $[29] !== highlightedIndex || $[30] !== isLoading || $[31] !== isOpen) {
        t15 = isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute z-10 w-full border border-gray-200 bg-white shadow-lg",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$scroll$2d$area$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollArea"], {
                className: "h-[300px]",
                children: filteredItems.length > 0 ? filteredItems.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$link$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Link"], {
                        href: item.href,
                        prefetch: true,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex cursor-pointer items-center p-2", {
                                "bg-gray-100": index === highlightedIndex
                            }),
                            onMouseEnter: ()=>setHighlightedIndex(index),
                            onClick: ()=>{
                                setSearchTerm(item.name);
                                setIsOpen(false);
                                inputRef.current?.blur();
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    loading: "eager",
                                    decoding: "sync",
                                    src: item.image_url ?? "/placeholder.svg",
                                    alt: "",
                                    className: "h-10 w-10 pr-2",
                                    height: 40,
                                    width: 40,
                                    quality: 65
                                }, void 0, false, {
                                    fileName: "[project]/src/components/search-dropdown.tsx",
                                    lineNumber: 208,
                                    columnNumber: 14
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-sm",
                                    children: item.name
                                }, void 0, false, {
                                    fileName: "[project]/src/components/search-dropdown.tsx",
                                    lineNumber: 208,
                                    columnNumber: 168
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/search-dropdown.tsx",
                            lineNumber: 202,
                            columnNumber: 253
                        }, this)
                    }, item.slug, false, {
                        fileName: "[project]/src/components/search-dropdown.tsx",
                        lineNumber: 202,
                        columnNumber: 198
                    }, this)) : isLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex h-full items-center justify-center",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-gray-500",
                        children: "Loading..."
                    }, void 0, false, {
                        fileName: "[project]/src/components/search-dropdown.tsx",
                        lineNumber: 208,
                        columnNumber: 298
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/search-dropdown.tsx",
                    lineNumber: 208,
                    columnNumber: 241
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex h-full items-center justify-center",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-gray-500",
                        children: "No results found"
                    }, void 0, false, {
                        fileName: "[project]/src/components/search-dropdown.tsx",
                        lineNumber: 208,
                        columnNumber: 415
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/search-dropdown.tsx",
                    lineNumber: 208,
                    columnNumber: 358
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/search-dropdown.tsx",
                lineNumber: 202,
                columnNumber: 101
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/search-dropdown.tsx",
            lineNumber: 202,
            columnNumber: 21
        }, this);
        $[28] = filteredItems;
        $[29] = highlightedIndex;
        $[30] = isLoading;
        $[31] = isOpen;
        $[32] = t15;
    } else {
        t15 = $[32];
    }
    let t16;
    if ($[33] !== t14 || $[34] !== t15) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "font-sans",
            ref: dropdownRef,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative flex-grow",
                children: [
                    t14,
                    t15
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/search-dropdown.tsx",
                lineNumber: 219,
                columnNumber: 56
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/search-dropdown.tsx",
            lineNumber: 219,
            columnNumber: 11
        }, this);
        $[33] = t14;
        $[34] = t15;
        $[35] = t16;
    } else {
        t16 = $[35];
    }
    return t16;
}
_s(SearchDropdownComponent, "DaeVjg6OioWbFxgYaUXfXyA9Fd4=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"]
    ];
});
_c = SearchDropdownComponent;
var _c;
__turbopack_context__.k.register(_c, "SearchDropdownComponent");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/popover.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Popover",
    ()=>Popover,
    "PopoverAnchor",
    ()=>PopoverAnchor,
    "PopoverContent",
    ()=>PopoverContent,
    "PopoverTrigger",
    ()=>PopoverTrigger
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$popover$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-popover/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
"use client";
;
;
;
;
const Popover = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$popover$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"];
const PopoverTrigger = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$popover$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Trigger"];
const PopoverAnchor = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$popover$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Anchor"];
const PopoverContent = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c = ({ className, align = "center", sideOffset = 4, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$popover$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Portal"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$popover$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Content"], {
            ref: ref,
            align: align,
            sideOffset: sideOffset,
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none duration-75 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", className),
            ...props
        }, void 0, false, {
            fileName: "[project]/src/components/ui/popover.tsx",
            lineNumber: 19,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/ui/popover.tsx",
        lineNumber: 18,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c1 = PopoverContent;
PopoverContent.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$popover$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Content"].displayName;
;
var _c, _c1;
__turbopack_context__.k.register(_c, "PopoverContent$React.forwardRef");
__turbopack_context__.k.register(_c1, "PopoverContent");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/(login)/data:3ca171 [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"7fe0236c19040acada56656ef9a2c2fe08c9ebadd8":"signIn"},"src/app/(login)/actions.ts",""] */ __turbopack_context__.s([
    "signIn",
    ()=>signIn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
"use turbopack no side effects";
;
var signIn = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("7fe0236c19040acada56656ef9a2c2fe08c9ebadd8", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "signIn"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vYWN0aW9ucy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzZXJ2ZXJcIjtcblxuaW1wb3J0IHsgeiB9IGZyb20gXCJ6b2RcIjtcbmltcG9ydCB7IGVxIH0gZnJvbSBcImRyaXp6bGUtb3JtXCI7XG5pbXBvcnQgeyBjb29raWVzLCBoZWFkZXJzIH0gZnJvbSBcIm5leHQvaGVhZGVyc1wiO1xuaW1wb3J0IHsgdmFsaWRhdGVkQWN0aW9uIH0gZnJvbSBcIkAvbGliL21pZGRsZXdhcmVcIjtcbmltcG9ydCBwb29sIGZyb20gXCIuLi8uLi9kYi9pbmRleC50c1wiO1xuLy8gaW1wb3J0IHsgTmV3VXNlciwgdXNlcnMgfSBmcm9tIFwiQC9kYi9zY2hlbWFcIjtcbmltcG9ydCB7IGNvbXBhcmVQYXNzd29yZHMsIGhhc2hQYXNzd29yZCwgc2V0U2Vzc2lvbiB9IGZyb20gXCJAL2xpYi9zZXNzaW9uXCI7XG5pbXBvcnQgeyBhdXRoUmF0ZUxpbWl0LCBzaWduVXBSYXRlTGltaXQgfSBmcm9tIFwiQC9saWIvcmF0ZS1saW1pdFwiO1xuXG5jb25zdCBhdXRoU2NoZW1hID0gei5vYmplY3Qoe1xuICB1c2VybmFtZTogei5zdHJpbmcoKS5taW4oMSksXG4gIHBhc3N3b3JkOiB6LnN0cmluZygpLm1pbigxKSxcbn0pO1xuXG5leHBvcnQgY29uc3Qgc2lnblVwID0gdmFsaWRhdGVkQWN0aW9uKGF1dGhTY2hlbWEsIGFzeW5jIChkYXRhKSA9PiB7XG4gIGNvbnN0IHsgdXNlcm5hbWUsIHBhc3N3b3JkIH0gPSBkYXRhO1xuICBjb25zdCBpcCA9IChhd2FpdCBoZWFkZXJzKCkpLmdldChcIngtcmVhbC1pcFwiKSA/PyBcImxvY2FsXCI7XG4gIGNvbnN0IHJsMiA9IGF3YWl0IHNpZ25VcFJhdGVMaW1pdC5saW1pdChpcCk7XG4gIGlmICghcmwyLnN1Y2Nlc3MpIHtcbiAgICByZXR1cm4ge1xuICAgICAgZXJyb3I6IHtcbiAgICAgICAgY29kZTogXCJBVVRIX0VSUk9SXCIsXG4gICAgICAgIG1lc3NhZ2U6IFwiVG9vIG1hbnkgc2lnbnVwcy4gVHJ5IGFnYWluIGxhdGVyXCIsXG4gICAgICB9LFxuICAgIH07XG4gIH1cblxuICBjb25zdCBleGlzdGluZ1VzZXIgPSBhd2FpdCBwb29sLnF1ZXJ5KCdTRUxFQ1QgKiBGUk9NIHVzZXJzIFdIRVJFIHVzZXJuYW1lID0gJDEnLCBbdXNlcm5hbWVdKTtcblxuICBpZiAoZXhpc3RpbmdVc2VyLnJvd3MubGVuZ3RoID4gMCkge1xuICAgIHJldHVybiB7IGVycm9yOiBcIlVzZXJuYW1lIGFscmVhZHkgdGFrZW4uIFBsZWFzZSB0cnkgYWdhaW4uXCIgfTtcbiAgfVxuXG4gIGNvbnN0IHBhc3N3b3JkSGFzaCA9IGF3YWl0IGhhc2hQYXNzd29yZChwYXNzd29yZCk7XG5cbiAgY29uc3QgbmV3VXNlcjogTmV3VXNlciA9IHtcbiAgICB1c2VybmFtZSxcbiAgICBwYXNzd29yZEhhc2gsXG4gIH07XG5cbiAgY29uc3QgY3JlYXRlZFVzZXIgPSBhd2FpdCBwb29sLnF1ZXJ5KCdJTlNFUlQgSU5UTyB1c2Vycyh1c2VybmFtZSwgcGFzc3dvcmRfaGFzaCkgVkFMVUVTKCQxLCAkMikgUkVUVVJOSU5HIConLCBbdXNlcm5hbWUsIHBhc3N3b3JkSGFzaF0pO1xuXG4gIGlmICghY3JlYXRlZFVzZXIpIHtcbiAgICByZXR1cm4geyBlcnJvcjogXCJGYWlsZWQgdG8gY3JlYXRlIHVzZXIuIFBsZWFzZSB0cnkgYWdhaW4uXCIgfTtcbiAgfVxuICBhd2FpdCBzZXRTZXNzaW9uKGNyZWF0ZWRVc2VyLnJvd3NbMF0pO1xufSk7XG5cbmV4cG9ydCBjb25zdCBzaWduSW4gPSB2YWxpZGF0ZWRBY3Rpb24oYXV0aFNjaGVtYSwgYXN5bmMgKGRhdGEpID0+IHtcbiAgY29uc3QgeyB1c2VybmFtZSwgcGFzc3dvcmQgfSA9IGRhdGE7XG4gIGNvbnN0IGlwID0gKGF3YWl0IGhlYWRlcnMoKSkuZ2V0KFwieC1yZWFsLWlwXCIpID8/IFwibG9jYWxcIjtcbiAgY29uc3QgcmwgPSBhd2FpdCBhdXRoUmF0ZUxpbWl0LmxpbWl0KGlwKTtcblxuICBpZiAoIXJsLnN1Y2Nlc3MpIHtcbiAgICByZXR1cm4ge1xuICAgICAgZXJyb3I6IHtcbiAgICAgICAgY29kZTogXCJBVVRIX0VSUk9SXCIsXG4gICAgICAgIG1lc3NhZ2U6IFwiVG9vIG1hbnkgYXR0ZW1wdHMuIFRyeSBhZ2FpbiBsYXRlclwiLFxuICAgICAgfSxcbiAgICB9O1xuICB9XG4gIFxuICBjb25zdCB1c2VyID0gYXdhaXQgcG9vbC5xdWVyeSgnU0VMRUNUICogRlJPTSB1c2VycyBXSEVSRSB1c2VybmFtZSA9ICQxJywgW3VzZXJuYW1lXSk7XG5cbiAgaWYgKHVzZXIucm93cy5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4geyBlcnJvcjogXCJJbnZhbGlkIHVzZXJuYW1lIG9yIHBhc3N3b3JkLiBQbGVhc2UgdHJ5IGFnYWluLlwiIH07XG4gIH1cblxuICBjb25zb2xlLmxvZyh1c2VyLnJvd3NbMF0pO1xuXG4gIGNvbnN0IGZvdW5kVXNlciA9IHVzZXIucm93c1swXTtcblxuICBjb25zdCBpc1Bhc3N3b3JkVmFsaWQgPSBhd2FpdCBjb21wYXJlUGFzc3dvcmRzKFxuICAgIHBhc3N3b3JkLFxuICAgIGZvdW5kVXNlci5wYXNzd29yZF9oYXNoLFxuICApO1xuXG4gIGlmICghaXNQYXNzd29yZFZhbGlkKSB7XG4gICAgcmV0dXJuIHsgZXJyb3I6IFwiSW52YWxpZCB1c2VybmFtZSBvciBwYXNzd29yZC4gUGxlYXNlIHRyeSBhZ2Fpbi5cIiB9O1xuICB9XG4gIGF3YWl0IHNldFNlc3Npb24oZm91bmRVc2VyKTtcbn0pO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gc2lnbk91dCgpIHtcbiAgLy8gY2xlYXIgc2Vzc2lvbiAmIGNhcnRcbiAgY29uc3QgYyA9IGF3YWl0IGNvb2tpZXMoKTtcbiAgYy5nZXRBbGwoKS5mb3JFYWNoKChjb29raWUpID0+IGMuZGVsZXRlKGNvb2tpZS5uYW1lKSk7XG59XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjBSQWtEYSJ9
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/(login)/data:3b6a0e [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"7fcbb051050b63ee338eca26652ccec9995343e580":"signUp"},"src/app/(login)/actions.ts",""] */ __turbopack_context__.s([
    "signUp",
    ()=>signUp
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
"use turbopack no side effects";
;
var signUp = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("7fcbb051050b63ee338eca26652ccec9995343e580", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "signUp"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vYWN0aW9ucy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzZXJ2ZXJcIjtcblxuaW1wb3J0IHsgeiB9IGZyb20gXCJ6b2RcIjtcbmltcG9ydCB7IGVxIH0gZnJvbSBcImRyaXp6bGUtb3JtXCI7XG5pbXBvcnQgeyBjb29raWVzLCBoZWFkZXJzIH0gZnJvbSBcIm5leHQvaGVhZGVyc1wiO1xuaW1wb3J0IHsgdmFsaWRhdGVkQWN0aW9uIH0gZnJvbSBcIkAvbGliL21pZGRsZXdhcmVcIjtcbmltcG9ydCBwb29sIGZyb20gXCIuLi8uLi9kYi9pbmRleC50c1wiO1xuLy8gaW1wb3J0IHsgTmV3VXNlciwgdXNlcnMgfSBmcm9tIFwiQC9kYi9zY2hlbWFcIjtcbmltcG9ydCB7IGNvbXBhcmVQYXNzd29yZHMsIGhhc2hQYXNzd29yZCwgc2V0U2Vzc2lvbiB9IGZyb20gXCJAL2xpYi9zZXNzaW9uXCI7XG5pbXBvcnQgeyBhdXRoUmF0ZUxpbWl0LCBzaWduVXBSYXRlTGltaXQgfSBmcm9tIFwiQC9saWIvcmF0ZS1saW1pdFwiO1xuXG5jb25zdCBhdXRoU2NoZW1hID0gei5vYmplY3Qoe1xuICB1c2VybmFtZTogei5zdHJpbmcoKS5taW4oMSksXG4gIHBhc3N3b3JkOiB6LnN0cmluZygpLm1pbigxKSxcbn0pO1xuXG5leHBvcnQgY29uc3Qgc2lnblVwID0gdmFsaWRhdGVkQWN0aW9uKGF1dGhTY2hlbWEsIGFzeW5jIChkYXRhKSA9PiB7XG4gIGNvbnN0IHsgdXNlcm5hbWUsIHBhc3N3b3JkIH0gPSBkYXRhO1xuICBjb25zdCBpcCA9IChhd2FpdCBoZWFkZXJzKCkpLmdldChcIngtcmVhbC1pcFwiKSA/PyBcImxvY2FsXCI7XG4gIGNvbnN0IHJsMiA9IGF3YWl0IHNpZ25VcFJhdGVMaW1pdC5saW1pdChpcCk7XG4gIGlmICghcmwyLnN1Y2Nlc3MpIHtcbiAgICByZXR1cm4ge1xuICAgICAgZXJyb3I6IHtcbiAgICAgICAgY29kZTogXCJBVVRIX0VSUk9SXCIsXG4gICAgICAgIG1lc3NhZ2U6IFwiVG9vIG1hbnkgc2lnbnVwcy4gVHJ5IGFnYWluIGxhdGVyXCIsXG4gICAgICB9LFxuICAgIH07XG4gIH1cblxuICBjb25zdCBleGlzdGluZ1VzZXIgPSBhd2FpdCBwb29sLnF1ZXJ5KCdTRUxFQ1QgKiBGUk9NIHVzZXJzIFdIRVJFIHVzZXJuYW1lID0gJDEnLCBbdXNlcm5hbWVdKTtcblxuICBpZiAoZXhpc3RpbmdVc2VyLnJvd3MubGVuZ3RoID4gMCkge1xuICAgIHJldHVybiB7IGVycm9yOiBcIlVzZXJuYW1lIGFscmVhZHkgdGFrZW4uIFBsZWFzZSB0cnkgYWdhaW4uXCIgfTtcbiAgfVxuXG4gIGNvbnN0IHBhc3N3b3JkSGFzaCA9IGF3YWl0IGhhc2hQYXNzd29yZChwYXNzd29yZCk7XG5cbiAgY29uc3QgbmV3VXNlcjogTmV3VXNlciA9IHtcbiAgICB1c2VybmFtZSxcbiAgICBwYXNzd29yZEhhc2gsXG4gIH07XG5cbiAgY29uc3QgY3JlYXRlZFVzZXIgPSBhd2FpdCBwb29sLnF1ZXJ5KCdJTlNFUlQgSU5UTyB1c2Vycyh1c2VybmFtZSwgcGFzc3dvcmRfaGFzaCkgVkFMVUVTKCQxLCAkMikgUkVUVVJOSU5HIConLCBbdXNlcm5hbWUsIHBhc3N3b3JkSGFzaF0pO1xuXG4gIGlmICghY3JlYXRlZFVzZXIpIHtcbiAgICByZXR1cm4geyBlcnJvcjogXCJGYWlsZWQgdG8gY3JlYXRlIHVzZXIuIFBsZWFzZSB0cnkgYWdhaW4uXCIgfTtcbiAgfVxuICBhd2FpdCBzZXRTZXNzaW9uKGNyZWF0ZWRVc2VyLnJvd3NbMF0pO1xufSk7XG5cbmV4cG9ydCBjb25zdCBzaWduSW4gPSB2YWxpZGF0ZWRBY3Rpb24oYXV0aFNjaGVtYSwgYXN5bmMgKGRhdGEpID0+IHtcbiAgY29uc3QgeyB1c2VybmFtZSwgcGFzc3dvcmQgfSA9IGRhdGE7XG4gIGNvbnN0IGlwID0gKGF3YWl0IGhlYWRlcnMoKSkuZ2V0KFwieC1yZWFsLWlwXCIpID8/IFwibG9jYWxcIjtcbiAgY29uc3QgcmwgPSBhd2FpdCBhdXRoUmF0ZUxpbWl0LmxpbWl0KGlwKTtcblxuICBpZiAoIXJsLnN1Y2Nlc3MpIHtcbiAgICByZXR1cm4ge1xuICAgICAgZXJyb3I6IHtcbiAgICAgICAgY29kZTogXCJBVVRIX0VSUk9SXCIsXG4gICAgICAgIG1lc3NhZ2U6IFwiVG9vIG1hbnkgYXR0ZW1wdHMuIFRyeSBhZ2FpbiBsYXRlclwiLFxuICAgICAgfSxcbiAgICB9O1xuICB9XG4gIFxuICBjb25zdCB1c2VyID0gYXdhaXQgcG9vbC5xdWVyeSgnU0VMRUNUICogRlJPTSB1c2VycyBXSEVSRSB1c2VybmFtZSA9ICQxJywgW3VzZXJuYW1lXSk7XG5cbiAgaWYgKHVzZXIucm93cy5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4geyBlcnJvcjogXCJJbnZhbGlkIHVzZXJuYW1lIG9yIHBhc3N3b3JkLiBQbGVhc2UgdHJ5IGFnYWluLlwiIH07XG4gIH1cblxuICBjb25zb2xlLmxvZyh1c2VyLnJvd3NbMF0pO1xuXG4gIGNvbnN0IGZvdW5kVXNlciA9IHVzZXIucm93c1swXTtcblxuICBjb25zdCBpc1Bhc3N3b3JkVmFsaWQgPSBhd2FpdCBjb21wYXJlUGFzc3dvcmRzKFxuICAgIHBhc3N3b3JkLFxuICAgIGZvdW5kVXNlci5wYXNzd29yZF9oYXNoLFxuICApO1xuXG4gIGlmICghaXNQYXNzd29yZFZhbGlkKSB7XG4gICAgcmV0dXJuIHsgZXJyb3I6IFwiSW52YWxpZCB1c2VybmFtZSBvciBwYXNzd29yZC4gUGxlYXNlIHRyeSBhZ2Fpbi5cIiB9O1xuICB9XG4gIGF3YWl0IHNldFNlc3Npb24oZm91bmRVc2VyKTtcbn0pO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gc2lnbk91dCgpIHtcbiAgLy8gY2xlYXIgc2Vzc2lvbiAmIGNhcnRcbiAgY29uc3QgYyA9IGF3YWl0IGNvb2tpZXMoKTtcbiAgYy5nZXRBbGwoKS5mb3JFYWNoKChjb29raWUpID0+IGMuZGVsZXRlKGNvb2tpZS5uYW1lKSk7XG59XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjBSQWdCYSJ9
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/button.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button,
    "buttonVariants",
    ()=>buttonVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-slot/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
;
;
;
;
;
const buttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
    variants: {
        variant: {
            default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
            destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
            outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
            secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
            ghost: "hover:bg-accent hover:text-accent-foreground",
            link: "text-primary underline-offset-4 hover:underline"
        },
        size: {
            default: "h-9 px-4 py-2",
            sm: "h-8 rounded-md px-3 text-xs",
            lg: "h-10 rounded-md px-8",
            icon: "h-9 w-9"
        }
    },
    defaultVariants: {
        variant: "default",
        size: "default"
    }
});
const Button = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c = ({ className, variant, size, asChild = false, ...props }, ref)=>{
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slot"] : "button";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(buttonVariants({
            variant,
            size,
            className
        })),
        ref: ref,
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/button.tsx",
        lineNumber: 47,
        columnNumber: 7
    }, ("TURBOPACK compile-time value", void 0));
});
_c1 = Button;
Button.displayName = "Button";
;
var _c, _c1;
__turbopack_context__.k.register(_c, "Button$React.forwardRef");
__turbopack_context__.k.register(_c1, "Button");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/(login)/data:f92800 [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"00a97498f7dcf829ae064eb36ce42ff17088bd2d1e":"signOut"},"src/app/(login)/actions.ts",""] */ __turbopack_context__.s([
    "signOut",
    ()=>signOut
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
"use turbopack no side effects";
;
var signOut = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("00a97498f7dcf829ae064eb36ce42ff17088bd2d1e", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "signOut"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vYWN0aW9ucy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzZXJ2ZXJcIjtcblxuaW1wb3J0IHsgeiB9IGZyb20gXCJ6b2RcIjtcbmltcG9ydCB7IGVxIH0gZnJvbSBcImRyaXp6bGUtb3JtXCI7XG5pbXBvcnQgeyBjb29raWVzLCBoZWFkZXJzIH0gZnJvbSBcIm5leHQvaGVhZGVyc1wiO1xuaW1wb3J0IHsgdmFsaWRhdGVkQWN0aW9uIH0gZnJvbSBcIkAvbGliL21pZGRsZXdhcmVcIjtcbmltcG9ydCBwb29sIGZyb20gXCIuLi8uLi9kYi9pbmRleC50c1wiO1xuLy8gaW1wb3J0IHsgTmV3VXNlciwgdXNlcnMgfSBmcm9tIFwiQC9kYi9zY2hlbWFcIjtcbmltcG9ydCB7IGNvbXBhcmVQYXNzd29yZHMsIGhhc2hQYXNzd29yZCwgc2V0U2Vzc2lvbiB9IGZyb20gXCJAL2xpYi9zZXNzaW9uXCI7XG5pbXBvcnQgeyBhdXRoUmF0ZUxpbWl0LCBzaWduVXBSYXRlTGltaXQgfSBmcm9tIFwiQC9saWIvcmF0ZS1saW1pdFwiO1xuXG5jb25zdCBhdXRoU2NoZW1hID0gei5vYmplY3Qoe1xuICB1c2VybmFtZTogei5zdHJpbmcoKS5taW4oMSksXG4gIHBhc3N3b3JkOiB6LnN0cmluZygpLm1pbigxKSxcbn0pO1xuXG5leHBvcnQgY29uc3Qgc2lnblVwID0gdmFsaWRhdGVkQWN0aW9uKGF1dGhTY2hlbWEsIGFzeW5jIChkYXRhKSA9PiB7XG4gIGNvbnN0IHsgdXNlcm5hbWUsIHBhc3N3b3JkIH0gPSBkYXRhO1xuICBjb25zdCBpcCA9IChhd2FpdCBoZWFkZXJzKCkpLmdldChcIngtcmVhbC1pcFwiKSA/PyBcImxvY2FsXCI7XG4gIGNvbnN0IHJsMiA9IGF3YWl0IHNpZ25VcFJhdGVMaW1pdC5saW1pdChpcCk7XG4gIGlmICghcmwyLnN1Y2Nlc3MpIHtcbiAgICByZXR1cm4ge1xuICAgICAgZXJyb3I6IHtcbiAgICAgICAgY29kZTogXCJBVVRIX0VSUk9SXCIsXG4gICAgICAgIG1lc3NhZ2U6IFwiVG9vIG1hbnkgc2lnbnVwcy4gVHJ5IGFnYWluIGxhdGVyXCIsXG4gICAgICB9LFxuICAgIH07XG4gIH1cblxuICBjb25zdCBleGlzdGluZ1VzZXIgPSBhd2FpdCBwb29sLnF1ZXJ5KCdTRUxFQ1QgKiBGUk9NIHVzZXJzIFdIRVJFIHVzZXJuYW1lID0gJDEnLCBbdXNlcm5hbWVdKTtcblxuICBpZiAoZXhpc3RpbmdVc2VyLnJvd3MubGVuZ3RoID4gMCkge1xuICAgIHJldHVybiB7IGVycm9yOiBcIlVzZXJuYW1lIGFscmVhZHkgdGFrZW4uIFBsZWFzZSB0cnkgYWdhaW4uXCIgfTtcbiAgfVxuXG4gIGNvbnN0IHBhc3N3b3JkSGFzaCA9IGF3YWl0IGhhc2hQYXNzd29yZChwYXNzd29yZCk7XG5cbiAgY29uc3QgbmV3VXNlcjogTmV3VXNlciA9IHtcbiAgICB1c2VybmFtZSxcbiAgICBwYXNzd29yZEhhc2gsXG4gIH07XG5cbiAgY29uc3QgY3JlYXRlZFVzZXIgPSBhd2FpdCBwb29sLnF1ZXJ5KCdJTlNFUlQgSU5UTyB1c2Vycyh1c2VybmFtZSwgcGFzc3dvcmRfaGFzaCkgVkFMVUVTKCQxLCAkMikgUkVUVVJOSU5HIConLCBbdXNlcm5hbWUsIHBhc3N3b3JkSGFzaF0pO1xuXG4gIGlmICghY3JlYXRlZFVzZXIpIHtcbiAgICByZXR1cm4geyBlcnJvcjogXCJGYWlsZWQgdG8gY3JlYXRlIHVzZXIuIFBsZWFzZSB0cnkgYWdhaW4uXCIgfTtcbiAgfVxuICBhd2FpdCBzZXRTZXNzaW9uKGNyZWF0ZWRVc2VyLnJvd3NbMF0pO1xufSk7XG5cbmV4cG9ydCBjb25zdCBzaWduSW4gPSB2YWxpZGF0ZWRBY3Rpb24oYXV0aFNjaGVtYSwgYXN5bmMgKGRhdGEpID0+IHtcbiAgY29uc3QgeyB1c2VybmFtZSwgcGFzc3dvcmQgfSA9IGRhdGE7XG4gIGNvbnN0IGlwID0gKGF3YWl0IGhlYWRlcnMoKSkuZ2V0KFwieC1yZWFsLWlwXCIpID8/IFwibG9jYWxcIjtcbiAgY29uc3QgcmwgPSBhd2FpdCBhdXRoUmF0ZUxpbWl0LmxpbWl0KGlwKTtcblxuICBpZiAoIXJsLnN1Y2Nlc3MpIHtcbiAgICByZXR1cm4ge1xuICAgICAgZXJyb3I6IHtcbiAgICAgICAgY29kZTogXCJBVVRIX0VSUk9SXCIsXG4gICAgICAgIG1lc3NhZ2U6IFwiVG9vIG1hbnkgYXR0ZW1wdHMuIFRyeSBhZ2FpbiBsYXRlclwiLFxuICAgICAgfSxcbiAgICB9O1xuICB9XG4gIFxuICBjb25zdCB1c2VyID0gYXdhaXQgcG9vbC5xdWVyeSgnU0VMRUNUICogRlJPTSB1c2VycyBXSEVSRSB1c2VybmFtZSA9ICQxJywgW3VzZXJuYW1lXSk7XG5cbiAgaWYgKHVzZXIucm93cy5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4geyBlcnJvcjogXCJJbnZhbGlkIHVzZXJuYW1lIG9yIHBhc3N3b3JkLiBQbGVhc2UgdHJ5IGFnYWluLlwiIH07XG4gIH1cblxuICBjb25zb2xlLmxvZyh1c2VyLnJvd3NbMF0pO1xuXG4gIGNvbnN0IGZvdW5kVXNlciA9IHVzZXIucm93c1swXTtcblxuICBjb25zdCBpc1Bhc3N3b3JkVmFsaWQgPSBhd2FpdCBjb21wYXJlUGFzc3dvcmRzKFxuICAgIHBhc3N3b3JkLFxuICAgIGZvdW5kVXNlci5wYXNzd29yZF9oYXNoLFxuICApO1xuXG4gIGlmICghaXNQYXNzd29yZFZhbGlkKSB7XG4gICAgcmV0dXJuIHsgZXJyb3I6IFwiSW52YWxpZCB1c2VybmFtZSBvciBwYXNzd29yZC4gUGxlYXNlIHRyeSBhZ2Fpbi5cIiB9O1xuICB9XG4gIGF3YWl0IHNldFNlc3Npb24oZm91bmRVc2VyKTtcbn0pO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gc2lnbk91dCgpIHtcbiAgLy8gY2xlYXIgc2Vzc2lvbiAmIGNhcnRcbiAgY29uc3QgYyA9IGF3YWl0IGNvb2tpZXMoKTtcbiAgYy5nZXRBbGwoKS5mb3JFYWNoKChjb29raWUpID0+IGMuZGVsZXRlKGNvb2tpZS5uYW1lKSk7XG59XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjJSQXFGc0IifQ==
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/auth.client.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LoginForm",
    ()=>LoginForm,
    "SignInSignUp",
    ()=>SignInSignUp,
    "SignOut",
    ()=>SignOut
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/input.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$popover$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/popover.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$login$292f$data$3a$3ca171__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/app/(login)/data:3ca171 [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$login$292f$data$3a$3b6a0e__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/app/(login)/data:3b6a0e [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$login$292f$data$3a$f92800__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/app/(login)/data:f92800 [app-client] (ecmascript) <text/javascript>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
function LoginForm() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(12);
    if ($[0] !== "af1d13848bb436e5ead5d1f145079e0c19f451e4ea1ef9ffe8ce0297a3c6a14d") {
        for(let $i = 0; $i < 12; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "af1d13848bb436e5ead5d1f145079e0c19f451e4ea1ef9ffe8ce0297a3c6a14d";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = {
            error: ""
        };
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    const [signInState, signInFormAction, signInPending] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useActionState"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$login$292f$data$3a$3ca171__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["signIn"], t0);
    let t1;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = {
            error: ""
        };
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    const [signUpState, signUpFormAction, signUpPending] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useActionState"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$login$292f$data$3a$3b6a0e__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["signUp"], t1);
    const pending = signInPending || signUpPending;
    const state = signInState.error ? signInState : signUpState;
    let t2;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mt-1",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                id: "username",
                name: "username",
                "aria-label": "Username",
                type: "text",
                autoCapitalize: "off",
                autoComplete: "username",
                spellCheck: false,
                required: true,
                maxLength: 50,
                className: "relative block w-full appearance-none rounded-[1px] border px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-orange-500 focus:outline-none focus:ring-orange-500 sm:text-sm",
                placeholder: "Username"
            }, void 0, false, {
                fileName: "[project]/src/app/auth.client.tsx",
                lineNumber: 42,
                columnNumber: 32
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/auth.client.tsx",
            lineNumber: 42,
            columnNumber: 10
        }, this);
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    let t3;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-1",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                    id: "password",
                    name: "password",
                    "aria-label": "Password",
                    type: "password",
                    required: true,
                    maxLength: 100,
                    className: "relative block w-full appearance-none rounded-[1px] border px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-orange-500 focus:outline-none focus:ring-orange-500 sm:text-sm",
                    placeholder: "Password"
                }, void 0, false, {
                    fileName: "[project]/src/app/auth.client.tsx",
                    lineNumber: 49,
                    columnNumber: 37
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/auth.client.tsx",
                lineNumber: 49,
                columnNumber: 15
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/auth.client.tsx",
            lineNumber: 49,
            columnNumber: 10
        }, this);
        $[4] = t3;
    } else {
        t3 = $[4];
    }
    let t4;
    if ($[5] !== pending) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col gap-4",
            children: [
                t2,
                t3,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                    type: "submit",
                    className: "rounded-[1px] bg-accent1 px-4 py-2 text-xs font-semibold text-white shadow-sm hover:bg-accent1 focus:outline-none focus:ring-2 focus:ring-accent1 focus:ring-offset-2",
                    disabled: pending,
                    formAction: signInFormAction,
                    children: "Log in"
                }, void 0, false, {
                    fileName: "[project]/src/app/auth.client.tsx",
                    lineNumber: 56,
                    columnNumber: 55
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                    type: "submit",
                    variant: "ghost",
                    className: "rounded-[2px] border-[1px] border-accent1 bg-white px-4 py-2 text-xs font-semibold text-accent1",
                    disabled: pending,
                    formAction: signUpFormAction,
                    children: "Create login"
                }, void 0, false, {
                    fileName: "[project]/src/app/auth.client.tsx",
                    lineNumber: 56,
                    columnNumber: 323
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/auth.client.tsx",
            lineNumber: 56,
            columnNumber: 10
        }, this);
        $[5] = pending;
        $[6] = t4;
    } else {
        t4 = $[6];
    }
    let t5;
    if ($[7] !== state) {
        t5 = state?.error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-sm text-red-500",
            children: state.error
        }, void 0, false, {
            fileName: "[project]/src/app/auth.client.tsx",
            lineNumber: 64,
            columnNumber: 26
        }, this);
        $[7] = state;
        $[8] = t5;
    } else {
        t5 = $[8];
    }
    let t6;
    if ($[9] !== t4 || $[10] !== t5) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
            className: "flex flex-col space-y-6",
            children: [
                t4,
                t5
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/auth.client.tsx",
            lineNumber: 72,
            columnNumber: 10
        }, this);
        $[9] = t4;
        $[10] = t5;
        $[11] = t6;
    } else {
        t6 = $[11];
    }
    return t6;
}
_s(LoginForm, "c6un0/gnRvpLusYPhhOoAx72CN0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useActionState"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useActionState"]
    ];
});
_c = LoginForm;
function SignInSignUp() {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(3);
    if ($[0] !== "af1d13848bb436e5ead5d1f145079e0c19f451e4ea1ef9ffe8ce0297a3c6a14d") {
        for(let $i = 0; $i < 3; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "af1d13848bb436e5ead5d1f145079e0c19f451e4ea1ef9ffe8ce0297a3c6a14d";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$popover$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PopoverTrigger"], {
            className: "flex flex-row items-center gap-1",
            children: [
                "Log in",
                " ",
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    viewBox: "0 0 10 6",
                    className: "h-[6px] w-[10px]",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polygon", {
                        points: "0,0 5,6 10,0"
                    }, void 0, false, {
                        fileName: "[project]/src/app/auth.client.tsx",
                        lineNumber: 91,
                        columnNumber: 135
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/auth.client.tsx",
                    lineNumber: 91,
                    columnNumber: 82
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/auth.client.tsx",
            lineNumber: 91,
            columnNumber: 10
        }, this);
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    let t1;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$popover$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Popover"], {
            children: [
                t0,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$popover$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PopoverContent"], {
                    className: "px-8 py-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-sm font-semibold text-accent1",
                            children: "Log in"
                        }, void 0, false, {
                            fileName: "[project]/src/app/auth.client.tsx",
                            lineNumber: 98,
                            columnNumber: 61
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(LoginForm, {}, void 0, false, {
                            fileName: "[project]/src/app/auth.client.tsx",
                            lineNumber: 98,
                            columnNumber: 127
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/auth.client.tsx",
                    lineNumber: 98,
                    columnNumber: 23
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/auth.client.tsx",
            lineNumber: 98,
            columnNumber: 10
        }, this);
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    return t1;
}
_c1 = SignInSignUp;
;
function SignOut(props) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(7);
    if ($[0] !== "af1d13848bb436e5ead5d1f145079e0c19f451e4ea1ef9ffe8ce0297a3c6a14d") {
        for(let $i = 0; $i < 7; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "af1d13848bb436e5ead5d1f145079e0c19f451e4ea1ef9ffe8ce0297a3c6a14d";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            viewBox: "0 0 10 6",
            className: "h-[6px] w-[10px]",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polygon", {
                points: "0,0 5,6 10,0"
            }, void 0, false, {
                fileName: "[project]/src/app/auth.client.tsx",
                lineNumber: 116,
                columnNumber: 63
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/auth.client.tsx",
            lineNumber: 116,
            columnNumber: 10
        }, this);
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    let t1;
    if ($[2] !== props.username) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$popover$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PopoverTrigger"], {
            className: "flex flex-row items-center gap-1",
            children: [
                props.username,
                " ",
                t0
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/auth.client.tsx",
            lineNumber: 123,
            columnNumber: 10
        }, this);
        $[2] = props.username;
        $[3] = t1;
    } else {
        t1 = $[3];
    }
    let t2;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$popover$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PopoverContent"], {
            className: "flex w-32 flex-col items-center px-8 py-4",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                    formAction: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$login$292f$data$3a$f92800__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["signOut"],
                    variant: "ghost",
                    className: "rounded-[2px] border-[1px] border-accent1 bg-white px-4 py-2 text-xs font-semibold text-accent1",
                    children: "Sign Out"
                }, void 0, false, {
                    fileName: "[project]/src/app/auth.client.tsx",
                    lineNumber: 131,
                    columnNumber: 86
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/auth.client.tsx",
                lineNumber: 131,
                columnNumber: 80
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/auth.client.tsx",
            lineNumber: 131,
            columnNumber: 10
        }, this);
        $[4] = t2;
    } else {
        t2 = $[4];
    }
    let t3;
    if ($[5] !== t1) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$popover$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Popover"], {
            children: [
                t1,
                t2
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/auth.client.tsx",
            lineNumber: 138,
            columnNumber: 10
        }, this);
        $[5] = t1;
        $[6] = t3;
    } else {
        t3 = $[6];
    }
    return t3;
}
_c2 = SignOut;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "LoginForm");
__turbopack_context__.k.register(_c1, "SignInSignUp");
__turbopack_context__.k.register(_c2, "SignOut");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/welcome-toast.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "WelcomeToast",
    ()=>WelcomeToast
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sonner/dist/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function WelcomeToast() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(2);
    if ($[0] !== "c7c02f4cfd9872e6b625146f3e428fbf0dd54eb977bde0eacceb25a0fb2f651a") {
        for(let $i = 0; $i < 2; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "c7c02f4cfd9872e6b625146f3e428fbf0dd54eb977bde0eacceb25a0fb2f651a";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = [];
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(_temp2, t0);
    return null;
}
_s(WelcomeToast, "OD7bBpZva5O2jO+Puf00hKivP7c=");
_c = WelcomeToast;
function _temp2() {
    if (window.innerHeight < 850) {
        return;
    }
    if (!document.cookie.includes("welcome-toast=3")) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"])("\uD83D\uDE80 Welcome to NextFaster!", {
            id: "welcome-toast",
            duration: Infinity,
            onDismiss: _temp,
            description: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    "This is a highly performant e-commerce template using Next.js. All of the 1M products on this site are AI generated.",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("hr", {
                        className: "my-2"
                    }, void 0, false, {
                        fileName: "[project]/src/app/welcome-toast.tsx",
                        lineNumber: 33,
                        columnNumber: 138
                    }, this),
                    "This demo is to highlight the speed a full-stack Next.js site can achieve.",
                    " ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: "https://github.com/ethanniser/NextFaster",
                        className: "font-semibold text-accent1 hover:underline",
                        target: "_blank",
                        children: "Get the Source"
                    }, void 0, false, {
                        fileName: "[project]/src/app/welcome-toast.tsx",
                        lineNumber: 33,
                        columnNumber: 240
                    }, this),
                    "."
                ]
            }, void 0, true)
        });
    }
}
function _temp() {
    document.cookie = document.cookie + "welcome-toast=3;max-age=31536000";
}
var _c;
__turbopack_context__.k.register(_c, "WelcomeToast");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_fd9ac863._.js.map