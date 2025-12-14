module.exports = [
"[project]/src/components/ui/product-card.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ProductLink",
    ()=>ProductLink,
    "getProductLinkImageProps",
    ()=>getProductLinkImageProps
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$link$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/link.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
function getProductLinkImageProps(imageUrl, productName) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getImageProps"])({
        width: 48,
        height: 48,
        quality: 65,
        src: imageUrl,
        alt: `A small picture of ${productName}`
    });
}
function ProductLink(props) {
    const { category_slug, subcategory_slug, product, imageUrl } = props;
    // prefetch the main image for the product page, if this is too heavy
    // we could only prefetch the first few cards, then prefetch on hover
    const prefetchProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getImageProps"])({
        height: 256,
        quality: 80,
        width: 256,
        src: imageUrl ?? "/placeholder.svg?height=64&width=64",
        alt: `A small picture of ${product.name}`
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        try {
            const iprops = prefetchProps.props;
            const img = new Image();
            // Don't interfer with important requests
            img.fetchPriority = "low";
            // Don't block the main thread with prefetch images
            img.decoding = "async";
            // Order is important here, sizes must be set before srcset, srcset must be set before src
            if (iprops.sizes) img.sizes = iprops.sizes;
            if (iprops.srcSet) img.srcset = iprops.srcSet;
            if (iprops.src) img.src = iprops.src;
        } catch (e) {
            console.error("failed to preload", prefetchProps.props.src, e);
        }
    }, [
        prefetchProps
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$link$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Link"], {
        prefetch: true,
        className: "group flex h-[130px] w-full flex-row border px-4 py-2 hover:bg-gray-100 sm:w-[250px]",
        href: `/products/${category_slug}/${subcategory_slug}/${product.slug}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "py-2",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    loading: props.loading,
                    decoding: "sync",
                    src: imageUrl ?? "/placeholder.svg?height=48&width=48",
                    alt: `A small picture of ${product.name}`,
                    width: 48,
                    height: 48,
                    quality: 65,
                    className: "h-auto w-12 flex-shrink-0 object-cover"
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/product-card.tsx",
                    lineNumber: 62,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/ui/product-card.tsx",
                lineNumber: 61,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "px-2"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/product-card.tsx",
                lineNumber: 73,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "h-26 flex flex-grow flex-col items-start py-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-sm font-medium text-gray-700 group-hover:underline",
                        children: product.name
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/product-card.tsx",
                        lineNumber: 75,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "overflow-hidden text-xs",
                        children: product.description
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/product-card.tsx",
                        lineNumber: 78,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ui/product-card.tsx",
                lineNumber: 74,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/product-card.tsx",
        lineNumber: 56,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/lib/data:ff635e [app-ssr] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"604c7e22144a920f569d17345a2fa9f72aa94ea8ca":"addToCart"},"src/lib/actions.ts",""] */ __turbopack_context__.s([
    "addToCart",
    ()=>addToCart
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-ssr] (ecmascript)");
"use turbopack no side effects";
;
var addToCart = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createServerReference"])("604c7e22144a920f569d17345a2fa9f72aa94ea8ca", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findSourceMapURL"], "addToCart"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vYWN0aW9ucy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzZXJ2ZXJcIjtcblxuaW1wb3J0IHsgZ2V0Q2FydCwgdXBkYXRlQ2FydCB9IGZyb20gXCIuL2NhcnRcIjtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGFkZFRvQ2FydChwcmV2U3RhdGU6IHVua25vd24sIGZvcm1EYXRhOiBGb3JtRGF0YSkge1xuICBjb25zdCBwcmV2Q2FydCA9IGF3YWl0IGdldENhcnQoKTtcbiAgY29uc3QgcHJvZHVjdFNsdWcgPSBmb3JtRGF0YS5nZXQoXCJwcm9kdWN0U2x1Z1wiKTtcbiAgaWYgKHR5cGVvZiBwcm9kdWN0U2x1ZyAhPT0gXCJzdHJpbmdcIikge1xuICAgIHJldHVybjtcbiAgfVxuICBjb25zdCBpdGVtQWxyZWFkeUV4aXN0cyA9IHByZXZDYXJ0LmZpbmQoXG4gICAgKGl0ZW0pID0+IGl0ZW0ucHJvZHVjdFNsdWcgPT09IHByb2R1Y3RTbHVnLFxuICApO1xuICBpZiAoaXRlbUFscmVhZHlFeGlzdHMpIHtcbiAgICBjb25zdCBuZXdRdWFudGl0eSA9IGl0ZW1BbHJlYWR5RXhpc3RzLnF1YW50aXR5ICsgMTtcbiAgICBjb25zdCBuZXdDYXJ0ID0gcHJldkNhcnQubWFwKChpdGVtKSA9PiB7XG4gICAgICBpZiAoaXRlbS5wcm9kdWN0U2x1ZyA9PT0gcHJvZHVjdFNsdWcpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAuLi5pdGVtLFxuICAgICAgICAgIHF1YW50aXR5OiBuZXdRdWFudGl0eSxcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBpdGVtO1xuICAgIH0pO1xuICAgIGF3YWl0IHVwZGF0ZUNhcnQobmV3Q2FydCk7XG4gIH0gZWxzZSB7XG4gICAgY29uc3QgbmV3Q2FydCA9IFtcbiAgICAgIC4uLnByZXZDYXJ0LFxuICAgICAge1xuICAgICAgICBwcm9kdWN0U2x1ZyxcbiAgICAgICAgcXVhbnRpdHk6IDEsXG4gICAgICB9LFxuICAgIF07XG4gICAgYXdhaXQgdXBkYXRlQ2FydChuZXdDYXJ0KTtcbiAgfVxuXG4gIHJldHVybiBcIkl0ZW0gYWRkZWQgdG8gY2FydFwiO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcmVtb3ZlRnJvbUNhcnQoZm9ybURhdGE6IEZvcm1EYXRhKSB7XG4gIGNvbnN0IHByZXZDYXJ0ID0gYXdhaXQgZ2V0Q2FydCgpO1xuICBjb25zdCBwcm9kdWN0U2x1ZyA9IGZvcm1EYXRhLmdldChcInByb2R1Y3RTbHVnXCIpO1xuICBpZiAodHlwZW9mIHByb2R1Y3RTbHVnICE9PSBcInN0cmluZ1wiKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGNvbnN0IGl0ZW1BbHJlYWR5RXhpc3RzID0gcHJldkNhcnQuZmluZChcbiAgICAoaXRlbSkgPT4gaXRlbS5wcm9kdWN0U2x1ZyA9PT0gcHJvZHVjdFNsdWcsXG4gICk7XG4gIGlmICghaXRlbUFscmVhZHlFeGlzdHMpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgY29uc3QgbmV3Q2FydCA9IHByZXZDYXJ0LmZpbHRlcigoaXRlbSkgPT4gaXRlbS5wcm9kdWN0U2x1ZyAhPT0gcHJvZHVjdFNsdWcpO1xuICBhd2FpdCB1cGRhdGVDYXJ0KG5ld0NhcnQpO1xufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJxUkFJc0IifQ==
}),
"[project]/src/components/add-to-cart-form.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AddToCartForm",
    ()=>AddToCartForm
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$3a$ff635e__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/lib/data:ff635e [app-ssr] (ecmascript) <text/javascript>");
"use client";
;
;
;
function AddToCartForm({ productSlug }) {
    const [message, formAction, isPending] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useActionState"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$3a$ff635e__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["addToCart"], null);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
        className: "flex flex-col gap-2",
        action: formAction,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                type: "hidden",
                name: "productSlug",
                value: productSlug
            }, void 0, false, {
                fileName: "[project]/src/components/add-to-cart-form.tsx",
                lineNumber: 9,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "submit",
                className: "max-w-[150px] rounded-[2px] bg-accent1 px-5 py-1 text-sm font-semibold text-white",
                children: "Add to cart"
            }, void 0, false, {
                fileName: "[project]/src/components/add-to-cart-form.tsx",
                lineNumber: 10,
                columnNumber: 7
            }, this),
            isPending && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                children: "Adding to cart..."
            }, void 0, false, {
                fileName: "[project]/src/components/add-to-cart-form.tsx",
                lineNumber: 16,
                columnNumber: 21
            }, this),
            !isPending && message && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                children: message
            }, void 0, false, {
                fileName: "[project]/src/components/add-to-cart-form.tsx",
                lineNumber: 17,
                columnNumber: 33
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/add-to-cart-form.tsx",
        lineNumber: 8,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=src_e6f26497._.js.map