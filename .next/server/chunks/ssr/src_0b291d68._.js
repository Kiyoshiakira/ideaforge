module.exports = {

"[project]/src/components/ui/tabs.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Tabs": (()=>Tabs),
    "TabsContent": (()=>TabsContent),
    "TabsList": (()=>TabsList),
    "TabsTrigger": (()=>TabsTrigger)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tabs$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-tabs/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
const Tabs = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tabs$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Root"];
const TabsList = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tabs$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["List"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/tabs.tsx",
        lineNumber: 14,
        columnNumber: 3
    }, this));
TabsList.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tabs$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["List"].displayName;
const TabsTrigger = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tabs$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Trigger"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/tabs.tsx",
        lineNumber: 29,
        columnNumber: 3
    }, this));
TabsTrigger.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tabs$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Trigger"].displayName;
const TabsContent = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tabs$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Content"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/tabs.tsx",
        lineNumber: 44,
        columnNumber: 3
    }, this));
TabsContent.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tabs$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Content"].displayName;
;
}}),
"[project]/src/lib/placeholder-images.json (json)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v(JSON.parse("{\"placeholderImages\":[{\"id\":\"character-art\",\"description\":\"Concept art for a fantasy character\",\"imageUrl\":\"https://images.unsplash.com/photo-1760578360105-dd9da4bc74c2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw3fHxmYW50YXN5JTIwY2hhcmFjdGVyfGVufDB8fHx8MTc2NDMzMTgzN3ww&ixlib=rb-4.1.0&q=80&w=1080\",\"imageHint\":\"fantasy character\"},{\"id\":\"scene-mood-board\",\"description\":\"Mood board for a dramatic scene\",\"imageUrl\":\"https://images.unsplash.com/photo-1677916042994-a3de83648e90?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw0fHxkcmFtYXRpYyUyMHNjZW5lfGVufDB8fHx8MTc2NDM1MDkxMXww&ixlib=rb-4.1.0&q=80&w=1080\",\"imageHint\":\"dramatic scene\"},{\"id\":\"script-location\",\"description\":\"A potential filming location for a script\",\"imageUrl\":\"https://images.unsplash.com/photo-1636554800356-3ee6ade36589?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxmaWxtJTIwbG9jYXRpb258ZW58MHx8fHwxNzY0MzUwOTExfDA&ixlib=rb-4.1.0&q=80&w=1080\",\"imageHint\":\"film location\"},{\"id\":\"comic-panel-style\",\"description\":\"An example of a comic book art style\",\"imageUrl\":\"https://images.unsplash.com/photo-1728030630554-d89cf14088d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw3fHxjb21pYyUyMGFydHxlbnwwfHx8fDE3NjQzMjcwNDB8MA&ixlib=rb-4.1.0&q=80&w=1080\",\"imageHint\":\"comic art\"},{\"id\":\"manga-background\",\"description\":\"A detailed background for a manga panel\",\"imageUrl\":\"https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxtYW5nYSUyMGJhY2tncm91bmR8ZW58MHx8fHwxNzY0MzUwOTExfDA&ixlib=rb-4.1.0&q=80&w=1080\",\"imageHint\":\"manga background\"},{\"id\":\"poetry-inspiration\",\"description\":\"Visually inspiring image for writing poetry\",\"imageUrl\":\"https://images.unsplash.com/photo-1569531115477-5e9a74a6a8ca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxMHx8YWJzdHJhY3QlMjBuYXR1cmV8ZW58MHx8fHwxNzY0MjU0MjY2fDA&ixlib=rb-4.1.0&q=80&w=1080\",\"imageHint\":\"abstract nature\"}]}"));}}),
"[project]/src/lib/placeholder-images.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "PlaceHolderImages": (()=>PlaceHolderImages)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$placeholder$2d$images$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/src/lib/placeholder-images.json (json)");
;
const PlaceHolderImages = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$placeholder$2d$images$2e$json__$28$json$29$__["default"].placeholderImages;
}}),
"[project]/src/ai/flows/data:4fdb42 [app-ssr] (ecmascript) <text/javascript>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/* __next_internal_action_entry_do_not_use__ [{"40aa060cef9d61d938d4ce1458951624b32ec279ab":"suggestPanelContent"},"src/ai/flows/suggest-panel-content.ts",""] */ __turbopack_context__.s({
    "suggestPanelContent": (()=>suggestPanelContent)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-ssr] (ecmascript)");
"use turbopack no side effects";
;
var suggestPanelContent = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createServerReference"])("40aa060cef9d61d938d4ce1458951624b32ec279ab", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findSourceMapURL"], "suggestPanelContent"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vc3VnZ2VzdC1wYW5lbC1jb250ZW50LnRzIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc2VydmVyJztcblxuLyoqXG4gKiBAZmlsZU92ZXJ2aWV3IEFJLXBvd2VyZWQgY29udGVudCBzdWdnZXN0aW9uIGZvciB0b29sIHBhbmVscy5cbiAqXG4gKiBUaGlzIGZpbGUgZGVmaW5lcyBhIEdlbmtpdCBmbG93IHRoYXQgc3VnZ2VzdHMgcmVsZXZhbnQgY29udGVudCBmb3IgYSBwYW5lbFxuICogYmFzZWQgb24gdGhlIHRvb2wgdHlwZSBhbmQgZXhpc3RpbmcgcGFuZWwgY29udGVudC5cbiAqXG4gKiBAbW9kdWxlIHNyYy9haS9mbG93cy9zdWdnZXN0LXBhbmVsLWNvbnRlbnRcbiAqXG4gKiBAaW50ZXJmYWNlIFN1Z2dlc3RQYW5lbENvbnRlbnRJbnB1dCAtIFRoZSBpbnB1dCB0eXBlIGZvciB0aGUgc3VnZ2VzdFBhbmVsQ29udGVudCBmdW5jdGlvbi5cbiAqIEBpbnRlcmZhY2UgU3VnZ2VzdFBhbmVsQ29udGVudE91dHB1dCAtIFRoZSBvdXRwdXQgdHlwZSBmb3IgdGhlIHN1Z2dlc3RQYW5lbENvbnRlbnQgZnVuY3Rpb24uXG4gKlxuICogQGZ1bmN0aW9uIHN1Z2dlc3RQYW5lbENvbnRlbnQgLSBBIGZ1bmN0aW9uIHRoYXQgc3VnZ2VzdHMgY29udGVudCBmb3IgYSBnaXZlbiBwYW5lbC5cbiAqL1xuXG5pbXBvcnQge2FpfSBmcm9tICdAL2FpL2dlbmtpdCc7XG5pbXBvcnQge3p9IGZyb20gJ2dlbmtpdCc7XG5cbmNvbnN0IFN1Z2dlc3RQYW5lbENvbnRlbnRJbnB1dFNjaGVtYSA9IHoub2JqZWN0KHtcbiAgdG9vbFR5cGU6IHouc3RyaW5nKCkuZGVzY3JpYmUoJ1RoZSB0eXBlIG9mIHRvb2wgdGhlIHBhbmVsIGJlbG9uZ3MgdG8gKGUuZy4sIFN0b3J5TWFrZXIsIFNjcmlwdE1ha2VyKS4nKSxcbiAgcGFuZWxDb250ZW50OiB6LnN0cmluZygpLmRlc2NyaWJlKCdUaGUgZXhpc3RpbmcgY29udGVudCBpbiB0aGUgcGFuZWwuJyksXG4gIHBhbmVsUHVycG9zZTogei5zdHJpbmcoKS5kZXNjcmliZSgnVGhlIHB1cnBvc2Ugb2YgdGhlIHBhbmVsIChlLmcuLCBvdXRsaW5lLCBub3Rlcywgc2NyaXB0KS4nKSxcbn0pO1xuXG5leHBvcnQgdHlwZSBTdWdnZXN0UGFuZWxDb250ZW50SW5wdXQgPSB6LmluZmVyPHR5cGVvZiBTdWdnZXN0UGFuZWxDb250ZW50SW5wdXRTY2hlbWE+O1xuXG5jb25zdCBTdWdnZXN0UGFuZWxDb250ZW50T3V0cHV0U2NoZW1hID0gei5vYmplY3Qoe1xuICBzdWdnZXN0aW9uczogei5hcnJheSh6LnN0cmluZygpKS5kZXNjcmliZSgnQW4gYXJyYXkgb2Ygc3VnZ2VzdGVkIGNvbnRlbnQgZm9yIHRoZSBwYW5lbC4nKSxcbn0pO1xuXG5leHBvcnQgdHlwZSBTdWdnZXN0UGFuZWxDb250ZW50T3V0cHV0ID0gei5pbmZlcjx0eXBlb2YgU3VnZ2VzdFBhbmVsQ29udGVudE91dHB1dFNjaGVtYT47XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBzdWdnZXN0UGFuZWxDb250ZW50KGlucHV0OiBTdWdnZXN0UGFuZWxDb250ZW50SW5wdXQpOiBQcm9taXNlPFN1Z2dlc3RQYW5lbENvbnRlbnRPdXRwdXQ+IHtcbiAgcmV0dXJuIHN1Z2dlc3RQYW5lbENvbnRlbnRGbG93KGlucHV0KTtcbn1cblxuY29uc3Qgc3VnZ2VzdFBhbmVsQ29udGVudFByb21wdCA9IGFpLmRlZmluZVByb21wdCh7XG4gIG5hbWU6ICdzdWdnZXN0UGFuZWxDb250ZW50UHJvbXB0JyxcbiAgaW5wdXQ6IHtzY2hlbWE6IFN1Z2dlc3RQYW5lbENvbnRlbnRJbnB1dFNjaGVtYX0sXG4gIG91dHB1dDoge3NjaGVtYTogU3VnZ2VzdFBhbmVsQ29udGVudE91dHB1dFNjaGVtYX0sXG4gIHByb21wdDogYFlvdSBhcmUgYW4gQUkgYXNzaXN0YW50IGRlc2lnbmVkIHRvIHN1Z2dlc3QgY29udGVudCBmb3IgcGFuZWxzIHdpdGhpbiBjcmVhdGl2ZSB0b29scy5cblxuICBCYXNlZCBvbiB0aGUgdG9vbCB0eXBlLCBleGlzdGluZyBwYW5lbCBjb250ZW50LCBhbmQgdGhlIHBhbmVsJ3MgcHVycG9zZSwgZ2VuZXJhdGUgcmVsZXZhbnQgYW5kIHVzZWZ1bCBzdWdnZXN0aW9ucyB0byBlbmhhbmNlIHRoZSBwYW5lbCdzIGZ1bmN0aW9uYWxpdHkuXG5cbiAgVG9vbCBUeXBlOiB7e3t0b29sVHlwZX19fVxuICBQYW5lbCBDb250ZW50OiB7e3twYW5lbENvbnRlbnR9fX1cbiAgUGFuZWwgUHVycG9zZToge3t7cGFuZWxQdXJwb3NlfX19XG5cbiAgU3VnZ2VzdGlvbnMgc2hvdWxkIGJlIGNvbmNpc2UgYW5kIGRpcmVjdGx5IGFwcGxpY2FibGUgdG8gdGhlIHBhbmVsJ3MgcHVycG9zZS5cbiAgUHJvdmlkZSBhdCBsZWFzdCB0aHJlZSBzdWdnZXN0aW9ucy5cblxuICBPdXRwdXQgZm9ybWF0OiBBbiBhcnJheSBvZiBzdHJpbmdzIHdoZXJlIGVhY2ggc3RyaW5nIGlzIGEgc3VnZ2VzdGlvbi5cbiAgRXhhbXBsZTpcbiAgW1xcXCJBZGQgYSBzZWN0aW9uIG9uIGNoYXJhY3RlciBkZXZlbG9wbWVudFxcXCIsIFxcXCJJbmNsdWRlIGEgc2NlbmUgd2l0aCBhIHBsb3QgdHdpc3RcXFwiLCBcXFwiRXhwYW5kIG9uIHRoZSBkaWFsb2d1ZSBpbiB0aGUgc2Vjb25kIGFjdFxcXCJdYCxcbn0pO1xuXG5jb25zdCBzdWdnZXN0UGFuZWxDb250ZW50RmxvdyA9IGFpLmRlZmluZUZsb3coXG4gIHtcbiAgICBuYW1lOiAnc3VnZ2VzdFBhbmVsQ29udGVudEZsb3cnLFxuICAgIGlucHV0U2NoZW1hOiBTdWdnZXN0UGFuZWxDb250ZW50SW5wdXRTY2hlbWEsXG4gICAgb3V0cHV0U2NoZW1hOiBTdWdnZXN0UGFuZWxDb250ZW50T3V0cHV0U2NoZW1hLFxuICB9LFxuICBhc3luYyBpbnB1dCA9PiB7XG4gICAgY29uc3Qge291dHB1dH0gPSBhd2FpdCBzdWdnZXN0UGFuZWxDb250ZW50UHJvbXB0KGlucHV0KTtcbiAgICByZXR1cm4gb3V0cHV0ITtcbiAgfVxuKTtcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoia1RBaUNzQiJ9
}}),
"[project]/src/components/ui/accordion.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Accordion": (()=>Accordion),
    "AccordionContent": (()=>AccordionContent),
    "AccordionItem": (()=>AccordionItem),
    "AccordionTrigger": (()=>AccordionTrigger)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$accordion$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-accordion/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-ssr] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
const Accordion = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$accordion$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Root"];
const AccordionItem = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$accordion$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Item"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("border-b", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/accordion.tsx",
        lineNumber: 15,
        columnNumber: 3
    }, this));
AccordionItem.displayName = "AccordionItem";
const AccordionTrigger = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, children, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$accordion$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Header"], {
        className: "flex",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$accordion$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Trigger"], {
            ref: ref,
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180", className),
            ...props,
            children: [
                children,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                    className: "h-4 w-4 shrink-0 transition-transform duration-200"
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/accordion.tsx",
                    lineNumber: 37,
                    columnNumber: 7
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ui/accordion.tsx",
            lineNumber: 28,
            columnNumber: 5
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/ui/accordion.tsx",
        lineNumber: 27,
        columnNumber: 3
    }, this));
AccordionTrigger.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$accordion$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Trigger"].displayName;
const AccordionContent = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, children, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$accordion$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Content"], {
        ref: ref,
        className: "overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("pb-4 pt-0", className),
            children: children
        }, void 0, false, {
            fileName: "[project]/src/components/ui/accordion.tsx",
            lineNumber: 52,
            columnNumber: 5
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/ui/accordion.tsx",
        lineNumber: 47,
        columnNumber: 3
    }, this));
AccordionContent.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$accordion$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Content"].displayName;
;
}}),
"[project]/src/components/forge/ai-suggestions.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "AISuggestions": (()=>AISuggestions)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ai$2f$flows$2f$data$3a$4fdb42__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/ai/flows/data:4fdb42 [app-ssr] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$accordion$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/accordion.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/skeleton.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lightbulb$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Lightbulb$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/lightbulb.js [app-ssr] (ecmascript) <export default as Lightbulb>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-ssr] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-ssr] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
function AISuggestions({ panelContent, panelPurpose, toolType }) {
    const [isPending, startTransition] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTransition"])();
    const [suggestions, setSuggestions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const handleGenerate = ()=>{
        startTransition(async ()=>{
            setError(null);
            setSuggestions([]);
            try {
                const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ai$2f$flows$2f$data$3a$4fdb42__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["suggestPanelContent"])({
                    panelContent,
                    panelPurpose,
                    toolType
                });
                setSuggestions(result.suggestions);
            } catch (e) {
                console.error(e);
                setError('Failed to generate suggestions. Please try again.');
            }
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$accordion$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Accordion"], {
        type: "single",
        collapsible: true,
        className: "w-full",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$accordion$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AccordionItem"], {
            value: "ai-suggestions",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$accordion$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AccordionTrigger"], {
                    className: "text-sm hover:no-underline",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                                className: "size-4 text-primary"
                            }, void 0, false, {
                                fileName: "[project]/src/components/forge/ai-suggestions.tsx",
                                lineNumber: 53,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "AI Assistance"
                            }, void 0, false, {
                                fileName: "[project]/src/components/forge/ai-suggestions.tsx",
                                lineNumber: 54,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/forge/ai-suggestions.tsx",
                        lineNumber: 52,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/forge/ai-suggestions.tsx",
                    lineNumber: 51,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$accordion$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AccordionContent"], {
                    className: "space-y-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm text-muted-foreground",
                            children: "Generate contextual suggestions based on the panel's content and purpose."
                        }, void 0, false, {
                            fileName: "[project]/src/components/forge/ai-suggestions.tsx",
                            lineNumber: 58,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                            onClick: handleGenerate,
                            disabled: isPending,
                            size: "sm",
                            children: [
                                isPending ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                    className: "mr-2 animate-spin"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/forge/ai-suggestions.tsx",
                                    lineNumber: 64,
                                    columnNumber: 15
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lightbulb$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Lightbulb$3e$__["Lightbulb"], {
                                    className: "mr-2"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/forge/ai-suggestions.tsx",
                                    lineNumber: 66,
                                    columnNumber: 15
                                }, this),
                                "Generate Suggestions"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/forge/ai-suggestions.tsx",
                            lineNumber: 62,
                            columnNumber: 11
                        }, this),
                        isPending && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Skeleton"], {
                                    className: "h-6 w-full"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/forge/ai-suggestions.tsx",
                                    lineNumber: 73,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Skeleton"], {
                                    className: "h-6 w-5/6"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/forge/ai-suggestions.tsx",
                                    lineNumber: 74,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Skeleton"], {
                                    className: "h-6 w-2/3"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/forge/ai-suggestions.tsx",
                                    lineNumber: 75,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/forge/ai-suggestions.tsx",
                            lineNumber: 72,
                            columnNumber: 13
                        }, this),
                        error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm text-destructive",
                            children: error
                        }, void 0, false, {
                            fileName: "[project]/src/components/forge/ai-suggestions.tsx",
                            lineNumber: 79,
                            columnNumber: 21
                        }, this),
                        suggestions.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                            className: "space-y-2 rounded-md border bg-secondary/50 p-4",
                            children: suggestions.map((suggestion, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    className: "flex items-start gap-2 text-sm",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                                            className: "mt-1 size-3 shrink-0 text-primary"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/forge/ai-suggestions.tsx",
                                            lineNumber: 85,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: suggestion
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/forge/ai-suggestions.tsx",
                                            lineNumber: 86,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, index, true, {
                                    fileName: "[project]/src/components/forge/ai-suggestions.tsx",
                                    lineNumber: 84,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/components/forge/ai-suggestions.tsx",
                            lineNumber: 82,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/forge/ai-suggestions.tsx",
                    lineNumber: 57,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/forge/ai-suggestions.tsx",
            lineNumber: 50,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/forge/ai-suggestions.tsx",
        lineNumber: 49,
        columnNumber: 5
    }, this);
}
}}),
"[project]/src/components/ui/card.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Card": (()=>Card),
    "CardContent": (()=>CardContent),
    "CardDescription": (()=>CardDescription),
    "CardFooter": (()=>CardFooter),
    "CardHeader": (()=>CardHeader),
    "CardTitle": (()=>CardTitle)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-ssr] (ecmascript)");
;
;
;
const Card = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("rounded-lg border bg-card text-card-foreground shadow-sm", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 9,
        columnNumber: 3
    }, this));
Card.displayName = "Card";
const CardHeader = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex flex-col space-y-1.5 p-6", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 24,
        columnNumber: 3
    }, this));
CardHeader.displayName = "CardHeader";
const CardTitle = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("text-2xl font-semibold leading-none tracking-tight", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 36,
        columnNumber: 3
    }, this));
CardTitle.displayName = "CardTitle";
const CardDescription = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("text-sm text-muted-foreground", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 51,
        columnNumber: 3
    }, this));
CardDescription.displayName = "CardDescription";
const CardContent = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("p-6 pt-0", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 63,
        columnNumber: 3
    }, this));
CardContent.displayName = "CardContent";
const CardFooter = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex items-center p-6 pt-0", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 71,
        columnNumber: 3
    }, this));
CardFooter.displayName = "CardFooter";
;
}}),
"[project]/src/components/ui/scroll-area.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "ScrollArea": (()=>ScrollArea),
    "ScrollBar": (()=>ScrollBar)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$scroll$2d$area$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-scroll-area/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
const ScrollArea = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, children, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$scroll$2d$area$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Root"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("relative overflow-hidden", className),
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$scroll$2d$area$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Viewport"], {
                className: "h-full w-full rounded-[inherit]",
                children: children
            }, void 0, false, {
                fileName: "[project]/src/components/ui/scroll-area.tsx",
                lineNumber: 17,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ScrollBar, {}, void 0, false, {
                fileName: "[project]/src/components/ui/scroll-area.tsx",
                lineNumber: 20,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$scroll$2d$area$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Corner"], {}, void 0, false, {
                fileName: "[project]/src/components/ui/scroll-area.tsx",
                lineNumber: 21,
                columnNumber: 5
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/scroll-area.tsx",
        lineNumber: 12,
        columnNumber: 3
    }, this));
ScrollArea.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$scroll$2d$area$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Root"].displayName;
const ScrollBar = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, orientation = "vertical", ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$scroll$2d$area$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ScrollAreaScrollbar"], {
        ref: ref,
        orientation: orientation,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex touch-none select-none transition-colors", orientation === "vertical" && "h-full w-2.5 border-l border-l-transparent p-[1px]", orientation === "horizontal" && "h-2.5 flex-col border-t border-t-transparent p-[1px]", className),
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$scroll$2d$area$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ScrollAreaThumb"], {
            className: "relative flex-1 rounded-full bg-border"
        }, void 0, false, {
            fileName: "[project]/src/components/ui/scroll-area.tsx",
            lineNumber: 43,
            columnNumber: 5
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/ui/scroll-area.tsx",
        lineNumber: 30,
        columnNumber: 3
    }, this));
ScrollBar.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$scroll$2d$area$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ScrollAreaScrollbar"].displayName;
;
}}),
"[project]/src/app/data:a6da45 [app-ssr] (ecmascript) <text/javascript>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/* __next_internal_action_entry_do_not_use__ [{"782e9318771674b2612187883aa35a0f1b26e216e9":"updatePanelContent"},"src/app/actions.ts",""] */ __turbopack_context__.s({
    "updatePanelContent": (()=>updatePanelContent)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-ssr] (ecmascript)");
"use turbopack no side effects";
;
var updatePanelContent = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createServerReference"])("782e9318771674b2612187883aa35a0f1b26e216e9", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findSourceMapURL"], "updatePanelContent"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vYWN0aW9ucy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHNlcnZlcic7XG5cbmltcG9ydCB7IHByb21pc2VzIGFzIGZzIH0gZnJvbSAnZnMnO1xuaW1wb3J0IHBhdGggZnJvbSAncGF0aCc7XG5pbXBvcnQgeyByZXZhbGlkYXRlUGF0aCB9IGZyb20gJ25leHQvY2FjaGUnO1xuaW1wb3J0IHR5cGUgeyBUb29sLCBUYWIsIFBhbmVsIH0gZnJvbSAnQC9saWIvdG9vbHMtZGF0YSc7XG5pbXBvcnQgeyBkZWZhdWx0VG9vbElkcyB9IGZyb20gJ0AvbGliL3Rvb2xzLWRhdGEnO1xuXG5jb25zdCBjdXN0b21Ub29sc1BhdGggPSBwYXRoLmpvaW4ocHJvY2Vzcy5jd2QoKSwgJ3NyYycsICdsaWInLCAnY3VzdG9tLXRvb2xzLmpzb24nKTtcblxuYXN5bmMgZnVuY3Rpb24gcmVhZEN1c3RvbVRvb2xzKCk6IFByb21pc2U8VG9vbFtdPiB7XG4gICAgdHJ5IHtcbiAgICAgICAgYXdhaXQgZnMuYWNjZXNzKGN1c3RvbVRvb2xzUGF0aCk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgLy8gSWYgdGhlIGZpbGUgZG9lc24ndCBleGlzdCwgY3JlYXRlIGl0IHdpdGggYW4gZW1wdHkgYXJyYXkuXG4gICAgICAgIGlmICgoZXJyb3IgYXMgTm9kZUpTLkVycm5vRXhjZXB0aW9uKS5jb2RlID09PSAnRU5PRU5UJykge1xuICAgICAgICAgICAgYXdhaXQgd3JpdGVDdXN0b21Ub29scyhbXSk7XG4gICAgICAgICAgICByZXR1cm4gW107XG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGFjY2Vzc2luZyBjdXN0b20gdG9vbHMgZmlsZTpcIiwgZXJyb3IpO1xuICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICB9XG5cbiAgICB0cnkge1xuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgZnMucmVhZEZpbGUoY3VzdG9tVG9vbHNQYXRoLCAndXRmLTgnKTtcbiAgICAgICAgLy8gSWYgdGhlIGZpbGUgaXMgZW1wdHksIHJldHVybiBhbiBlbXB0eSBhcnJheS5cbiAgICAgICAgaWYgKCFkYXRhKSB7XG4gICAgICAgICAgICByZXR1cm4gW107XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgdG9vbHMgPSBKU09OLnBhcnNlKGRhdGEpO1xuICAgICAgICByZXR1cm4gdG9vbHMubWFwKCh0OiBPbWl0PFRvb2wsICdpY29uJz4pID0+ICh7Li4udCwgaWNvbjogJ0NvbXBvbmVudCd9KSk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIHJlYWRpbmcgb3IgcGFyc2luZyBjdXN0b20gdG9vbHM6XCIsIGVycm9yKTtcbiAgICAgICAgLy8gSWYgcGFyc2luZyBmYWlscywgaXQgbWlnaHQgYmUgYW4gZW1wdHkgb3IgY29ycnVwdGVkIGZpbGUuXG4gICAgICAgIC8vIEl0J3Mgc2FmZXIgdG8gcmV0dXJuIGFuIGVtcHR5IGFycmF5IGFuZCBsZXQgdGhlIG5leHQgd3JpdGUgb3BlcmF0aW9uIGZpeCBpdC5cbiAgICAgICAgcmV0dXJuIFtdO1xuICAgIH1cbn1cblxuYXN5bmMgZnVuY3Rpb24gd3JpdGVDdXN0b21Ub29scyh0b29sczogVG9vbFtdKSB7XG4gICAgLy8gV2UgbmVlZCB0byBzdG9yZSB0aGUgaWNvbiBhcyBhIHN0cmluZyBuYW1lLCBub3QgYSBmdW5jdGlvbi5cbiAgICBjb25zdCBzdG9yYWJsZVRvb2xzID0gdG9vbHMubWFwKHRvb2wgPT4ge1xuICAgICAgICBjb25zdCB7IGljb24sIC4uLnJlc3QgfSA9IHRvb2w7XG4gICAgICAgIGNvbnN0IGljb25OYW1lID0gdHlwZW9mIGljb24gPT09ICdzdHJpbmcnID8gaWNvbiA6IChpY29uIGFzIGFueSk/LmRpc3BsYXlOYW1lIHx8ICdDb21wb25lbnQnO1xuICAgICAgICByZXR1cm4geyAuLi5yZXN0LCBpY29uOiBpY29uTmFtZSB9O1xuICAgIH0pO1xuICAgIGF3YWl0IGZzLndyaXRlRmlsZShjdXN0b21Ub29sc1BhdGgsIEpTT04uc3RyaW5naWZ5KHN0b3JhYmxlVG9vbHMsIG51bGwsIDIpKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHNhdmVUb29sKHRvb2xKU09OOiBzdHJpbmcpIHtcbiAgdHJ5IHtcbiAgICBjb25zdCB0b29scyA9IGF3YWl0IHJlYWRDdXN0b21Ub29scygpO1xuICAgIGNvbnN0IG5ld1Rvb2wgPSBKU09OLnBhcnNlKHRvb2xKU09OKTtcblxuICAgIGNvbnN0IHRvb2xJbmRleCA9IHRvb2xzLmZpbmRJbmRleCh0b29sID0+IHRvb2wuaWQgPT09IG5ld1Rvb2wuaWQpO1xuICAgIGlmICh0b29sSW5kZXggIT09IC0xKSB7XG4gICAgICB0b29sc1t0b29sSW5kZXhdID0gbmV3VG9vbDtcbiAgICB9IGVsc2Uge1xuICAgICAgICB0b29scy5wdXNoKG5ld1Rvb2wpO1xuICAgIH1cblxuICAgIGF3YWl0IHdyaXRlQ3VzdG9tVG9vbHModG9vbHMpO1xuICAgIHJldmFsaWRhdGVQYXRoKCcvJywgJ2xheW91dCcpO1xuICAgIHJldmFsaWRhdGVQYXRoKGAvJHtuZXdUb29sLmlkfWApO1xuXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgdG9vbElkOiBuZXdUb29sLmlkIH07XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcignRmFpbGVkIHRvIHNhdmUgdG9vbDonLCBlcnJvcik7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAnRmFpbGVkIHRvIHNhdmUgdGhlIHRvb2wuJyB9O1xuICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVQYW5lbENvbnRlbnQodG9vbElkOiBzdHJpbmcsIHRhYklkOiBzdHJpbmcsIHBhbmVsSWQ6IHN0cmluZywgbmV3Q29udGVudDogc3RyaW5nKSB7XG4gICAgaWYgKGRlZmF1bHRUb29sSWRzLmluY2x1ZGVzKHRvb2xJZCkpIHtcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9O1xuICAgIH1cblxuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHRvb2xzID0gYXdhaXQgcmVhZEN1c3RvbVRvb2xzKCk7XG4gICAgICAgIGNvbnN0IHRvb2xJbmRleCA9IHRvb2xzLmZpbmRJbmRleCh0ID0+IHQuaWQgPT09IHRvb2xJZCk7XG5cbiAgICAgICAgaWYgKHRvb2xJbmRleCA9PT0gLTEpIHtcbiAgICAgICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogJ1Rvb2wgbm90IGZvdW5kLicgfTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHRhYkluZGV4ID0gdG9vbHNbdG9vbEluZGV4XS5sYXlvdXQuZmluZEluZGV4KHQgPT4gdC5pZCA9PT0gdGFiSWQpO1xuICAgICAgICBpZiAodGFiSW5kZXggPT09IC0xKSB7XG4gICAgICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6ICdUYWIgbm90IGZvdW5kLicgfTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHBhbmVsSW5kZXggPSB0b29sc1t0b29sSW5kZXhdLmxheW91dFt0YWJJbmRleF0ucGFuZWxzLmZpbmRJbmRleChwID0+IHAuaWQgPT09IHBhbmVsSWQpO1xuICAgICAgICBpZiAocGFuZWxJbmRleCA9PT0gLTEpIHtcbiAgICAgICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogJ1BhbmVsIG5vdCBmb3VuZC4nIH07XG4gICAgICAgIH1cblxuICAgICAgICB0b29sc1t0b29sSW5kZXhdLmxheW91dFt0YWJJbmRleF0ucGFuZWxzW3BhbmVsSW5kZXhdLmNvbnRlbnQgPSBuZXdDb250ZW50O1xuXG4gICAgICAgIGF3YWl0IHdyaXRlQ3VzdG9tVG9vbHModG9vbHMpO1xuICAgICAgICByZXZhbGlkYXRlUGF0aChgLyR7dG9vbElkfWApO1xuXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdGYWlsZWQgdG8gdXBkYXRlIHBhbmVsIGNvbnRlbnQ6JywgZXJyb3IpO1xuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6ICdGYWlsZWQgdG8gdXBkYXRlIHBhbmVsIGNvbnRlbnQuJyB9O1xuICAgIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZVRvb2wodG9vbElkOiBzdHJpbmcpIHtcbiAgICB0cnkge1xuICAgICAgICBpZiAoZGVmYXVsdFRvb2xJZHMuaW5jbHVkZXModG9vbElkKSkge1xuICAgICAgICAgICAgcmV2YWxpZGF0ZVBhdGgoJy8nLCAnbGF5b3V0Jyk7XG4gICAgICAgICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlIH07XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgdG9vbHMgPSBhd2FpdCByZWFkQ3VzdG9tVG9vbHMoKTtcbiAgICAgICAgY29uc3QgaW5pdGlhbExlbmd0aCA9IHRvb2xzLmxlbmd0aDtcbiAgICAgICAgdG9vbHMgPSB0b29scy5maWx0ZXIodCA9PiB0LmlkICE9PSB0b29sSWQpO1xuXG4gICAgICAgIGlmICh0b29scy5sZW5ndGggPT09IGluaXRpYWxMZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogJ0N1c3RvbSB0b29sIG5vdCBmb3VuZC4nIH07XG4gICAgICAgIH1cblxuICAgICAgICBhd2FpdCB3cml0ZUN1c3RvbVRvb2xzKHRvb2xzKTtcbiAgICAgICAgcmV2YWxpZGF0ZVBhdGgoJy8nLCAnbGF5b3V0Jyk7XG5cbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9O1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0ZhaWxlZCB0byBkZWxldGUgdG9vbDonLCBlcnJvcik7XG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogJ0ZhaWxlZCB0byBkZWxldGUgdGhlIHRvb2wuJyB9O1xuICAgIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGFkZFRhYih0b29sSWQ6IHN0cmluZywgdGFiTmFtZTogc3RyaW5nKSB7XG4gICAgaWYgKGRlZmF1bHRUb29sSWRzLmluY2x1ZGVzKHRvb2xJZCkpIHtcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAnQ2Fubm90IGFkZCB0YWJzIHRvIGEgZGVmYXVsdCB0b29sLicgfTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgdG9vbHMgPSBhd2FpdCByZWFkQ3VzdG9tVG9vbHMoKTtcbiAgICAgICAgY29uc3QgdG9vbEluZGV4ID0gdG9vbHMuZmluZEluZGV4KHQgPT4gdC5pZCA9PT0gdG9vbElkKTtcblxuICAgICAgICBpZiAodG9vbEluZGV4ID09PSAtMSkge1xuICAgICAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAnVG9vbCBub3QgZm91bmQuJyB9O1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgbmV3VGFiOiBUYWIgPSB7XG4gICAgICAgICAgICBpZDogYHRhYi0ke0RhdGUubm93KCl9YCxcbiAgICAgICAgICAgIG5hbWU6IHRhYk5hbWUsXG4gICAgICAgICAgICBwYW5lbHM6IFt7XG4gICAgICAgICAgICAgICAgaWQ6IGBwYW5lbC0ke0RhdGUubm93KCl9YCxcbiAgICAgICAgICAgICAgICB0aXRsZTogJ05ldyBFZGl0b3InLFxuICAgICAgICAgICAgICAgIHR5cGU6ICdlZGl0b3InLFxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICcnLFxuICAgICAgICAgICAgICAgIHB1cnBvc2U6ICdBIG5ldyBlZGl0b3IgcGFuZWwuJ1xuICAgICAgICAgICAgfV1cbiAgICAgICAgfTtcblxuICAgICAgICB0b29sc1t0b29sSW5kZXhdLmxheW91dC5wdXNoKG5ld1RhYik7XG4gICAgICAgIGF3YWl0IHdyaXRlQ3VzdG9tVG9vbHModG9vbHMpO1xuICAgICAgICByZXZhbGlkYXRlUGF0aChgLyR7dG9vbElkfWApO1xuXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIG5ld1RhYiB9O1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0ZhaWxlZCB0byBhZGQgdGFiOicsIGVycm9yKTtcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAnRmFpbGVkIHRvIGFkZCBhIG5ldyB0YWIuJyB9O1xuICAgIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZVRhYih0b29sSWQ6IHN0cmluZywgdGFiSWQ6IHN0cmluZykge1xuICAgICBpZiAoZGVmYXVsdFRvb2xJZHMuaW5jbHVkZXModG9vbElkKSkge1xuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6ICdDYW5ub3QgZGVsZXRlIHRhYnMgZnJvbSBhIGRlZmF1bHQgdG9vbC4nIH07XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHRvb2xzID0gYXdhaXQgcmVhZEN1c3RvbVRvb2xzKCk7XG4gICAgICAgIGNvbnN0IHRvb2xJbmRleCA9IHRvb2xzLmZpbmRJbmRleCh0ID0+IHQuaWQgPT09IHRvb2xJZCk7XG5cbiAgICAgICAgaWYgKHRvb2xJbmRleCA9PT0gLTEpIHtcbiAgICAgICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogJ1Rvb2wgbm90IGZvdW5kLicgfTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGluaXRpYWxUYWJDb3VudCA9IHRvb2xzW3Rvb2xJbmRleF0ubGF5b3V0Lmxlbmd0aDtcbiAgICAgICAgdG9vbHNbdG9vbEluZGV4XS5sYXlvdXQgPSB0b29sc1t0b29sSW5kZXhdLmxheW91dC5maWx0ZXIodCA9PiB0LmlkICE9PSB0YWJJZCk7XG5cbiAgICAgICAgaWYgKHRvb2xzW3Rvb2xJbmRleF0ubGF5b3V0Lmxlbmd0aCA9PT0gaW5pdGlhbFRhYkNvdW50KSB7XG4gICAgICAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAnVGFiIG5vdCBmb3VuZC4nIH07XG4gICAgICAgIH1cblxuICAgICAgICBhd2FpdCB3cml0ZUN1c3RvbVRvb2xzKHRvb2xzKTtcbiAgICAgICAgcmV2YWxpZGF0ZVBhdGgoYC8ke3Rvb2xJZH1gKTtcbiAgICAgICAgcmV2YWxpZGF0ZVBhdGgoJy8nLCAnbGF5b3V0Jyk7XG5cblxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlIH07XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignRmFpbGVkIHRvIGRlbGV0ZSB0YWI6JywgZXJyb3IpO1xuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6ICdGYWlsZWQgdG8gZGVsZXRlIHRoZSB0YWIuJyB9O1xuICAgIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGFkZFBhbmVsKHRvb2xJZDogc3RyaW5nLCB0YWJJZDogc3RyaW5nLCBwYW5lbERhdGE6IE9taXQ8UGFuZWwsICdpZCcgfCAnY29udGVudCc+KSB7XG4gICAgaWYgKGRlZmF1bHRUb29sSWRzLmluY2x1ZGVzKHRvb2xJZCkpIHtcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAnQ2Fubm90IGFkZCBwYW5lbHMgdG8gYSBkZWZhdWx0IHRvb2wuJyB9O1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICBjb25zdCB0b29scyA9IGF3YWl0IHJlYWRDdXN0b21Ub29scygpO1xuICAgICAgICBjb25zdCB0b29sSW5kZXggPSB0b29scy5maW5kSW5kZXgodCA9PiB0LmlkID09PSB0b29sSWQpO1xuICAgICAgICBpZiAodG9vbEluZGV4ID09PSAtMSkgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAnVG9vbCBub3QgZm91bmQuJyB9O1xuXG4gICAgICAgIGNvbnN0IHRhYkluZGV4ID0gdG9vbHNbdG9vbEluZGV4XS5sYXlvdXQuZmluZEluZGV4KHQgPT4gdC5pZCA9PT0gdGFiSWQpO1xuICAgICAgICBpZiAodGFiSW5kZXggPT09IC0xKSByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6ICdUYWIgbm90IGZvdW5kLicgfTtcblxuICAgICAgICBjb25zdCBuZXdQYW5lbDogUGFuZWwgPSB7XG4gICAgICAgICAgICAuLi5wYW5lbERhdGEsXG4gICAgICAgICAgICBpZDogYHBhbmVsLSR7RGF0ZS5ub3coKX1gLFxuICAgICAgICAgICAgY29udGVudDogcGFuZWxEYXRhLnR5cGUgPT09ICdtZWRpYScgPyAnJyA6IGBuZXdfJHtwYW5lbERhdGEudHlwZX1fY29udGVudGAsXG4gICAgICAgIH07XG5cbiAgICAgICAgdG9vbHNbdG9vbEluZGV4XS5sYXlvdXRbdGFiSW5kZXhdLnBhbmVscy5wdXNoKG5ld1BhbmVsKTtcbiAgICAgICAgYXdhaXQgd3JpdGVDdXN0b21Ub29scyh0b29scyk7XG4gICAgICAgIHJldmFsaWRhdGVQYXRoKGAvJHt0b29sSWR9YCk7XG5cbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgbmV3UGFuZWwgfTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdGYWlsZWQgdG8gYWRkIHBhbmVsOicsIGVycm9yKTtcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAnRmFpbGVkIHRvIGFkZCBhIG5ldyBwYW5lbC4nIH07XG4gICAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlUGFuZWwodG9vbElkOiBzdHJpbmcsIHRhYklkOiBzdHJpbmcsIHBhbmVsSWQ6IHN0cmluZykge1xuICAgIGlmIChkZWZhdWx0VG9vbElkcy5pbmNsdWRlcyh0b29sSWQpKSB7XG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogJ0Nhbm5vdCBkZWxldGUgcGFuZWxzIGZyb20gYSBkZWZhdWx0IHRvb2wuJyB9O1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICBjb25zdCB0b29scyA9IGF3YWl0IHJlYWRDdXN0b21Ub29scygpO1xuICAgICAgICBjb25zdCB0b29sSW5kZXggPSB0b29scy5maW5kSW5kZXgodCA9PiB0LmlkID09PSB0b29sSWQpO1xuICAgICAgICBpZiAodG9vbEluZGV4ID09PSAtMSkgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAnVG9vbCBub3QgZm91bmQuJyB9O1xuXG4gICAgICAgIGNvbnN0IHRhYkluZGV4ID0gdG9vbHNbdG9vbEluZGV4XS5sYXlvdXQuZmluZEluZGV4KHQgPT4gdC5pZCA9PT0gdGFiSWQpO1xuICAgICAgICBpZiAodGFiSW5kZXggPT09IC0xKSByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6ICdUYWIgbm90IGZvdW5kLicgfTtcblxuICAgICAgICBjb25zdCBpbml0aWFsUGFuZWxDb3VudCA9IHRvb2xzW3Rvb2xJbmRleF0ubGF5b3V0W3RhYkluZGV4XS5wYW5lbHMubGVuZ3RoO1xuICAgICAgICB0b29sc1t0b29sSW5kZXhdLmxheW91dFt0YWJJbmRleF0ucGFuZWxzID0gdG9vbHNbdG9vbEluZGV4XS5sYXlvdXRbdGFiSW5kZXhdLnBhbmVscy5maWx0ZXIocCA9PiBwLmlkICE9PSBwYW5lbElkKTtcblxuICAgICAgICBpZiAodG9vbHNbdG9vbEluZGV4XS5sYXlvdXRbdGFiSW5kZXhdLnBhbmVscy5sZW5ndGggPT09IGluaXRpYWxQYW5lbENvdW50KSB7XG4gICAgICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6ICdQYW5lbCBub3QgZm91bmQuJyB9O1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBhd2FpdCB3cml0ZUN1c3RvbVRvb2xzKHRvb2xzKTtcbiAgICAgICAgcmV2YWxpZGF0ZVBhdGgoYC8ke3Rvb2xJZH1gKTtcblxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlIH07XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignRmFpbGVkIHRvIGRlbGV0ZSBwYW5lbDonLCBlcnJvcik7XG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogJ0ZhaWxlZCB0byBkZWxldGUgdGhlIHBhbmVsLicgfTtcbiAgICB9XG59XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjhSQXdFc0IifQ==
}}),
"[project]/src/app/data:f78cec [app-ssr] (ecmascript) <text/javascript>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/* __next_internal_action_entry_do_not_use__ [{"70baffb10a76e59d64795e8cf2b70d0304d596bd8e":"deletePanel"},"src/app/actions.ts",""] */ __turbopack_context__.s({
    "deletePanel": (()=>deletePanel)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-ssr] (ecmascript)");
"use turbopack no side effects";
;
var deletePanel = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createServerReference"])("70baffb10a76e59d64795e8cf2b70d0304d596bd8e", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findSourceMapURL"], "deletePanel"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vYWN0aW9ucy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHNlcnZlcic7XG5cbmltcG9ydCB7IHByb21pc2VzIGFzIGZzIH0gZnJvbSAnZnMnO1xuaW1wb3J0IHBhdGggZnJvbSAncGF0aCc7XG5pbXBvcnQgeyByZXZhbGlkYXRlUGF0aCB9IGZyb20gJ25leHQvY2FjaGUnO1xuaW1wb3J0IHR5cGUgeyBUb29sLCBUYWIsIFBhbmVsIH0gZnJvbSAnQC9saWIvdG9vbHMtZGF0YSc7XG5pbXBvcnQgeyBkZWZhdWx0VG9vbElkcyB9IGZyb20gJ0AvbGliL3Rvb2xzLWRhdGEnO1xuXG5jb25zdCBjdXN0b21Ub29sc1BhdGggPSBwYXRoLmpvaW4ocHJvY2Vzcy5jd2QoKSwgJ3NyYycsICdsaWInLCAnY3VzdG9tLXRvb2xzLmpzb24nKTtcblxuYXN5bmMgZnVuY3Rpb24gcmVhZEN1c3RvbVRvb2xzKCk6IFByb21pc2U8VG9vbFtdPiB7XG4gICAgdHJ5IHtcbiAgICAgICAgYXdhaXQgZnMuYWNjZXNzKGN1c3RvbVRvb2xzUGF0aCk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgLy8gSWYgdGhlIGZpbGUgZG9lc24ndCBleGlzdCwgY3JlYXRlIGl0IHdpdGggYW4gZW1wdHkgYXJyYXkuXG4gICAgICAgIGlmICgoZXJyb3IgYXMgTm9kZUpTLkVycm5vRXhjZXB0aW9uKS5jb2RlID09PSAnRU5PRU5UJykge1xuICAgICAgICAgICAgYXdhaXQgd3JpdGVDdXN0b21Ub29scyhbXSk7XG4gICAgICAgICAgICByZXR1cm4gW107XG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGFjY2Vzc2luZyBjdXN0b20gdG9vbHMgZmlsZTpcIiwgZXJyb3IpO1xuICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICB9XG5cbiAgICB0cnkge1xuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgZnMucmVhZEZpbGUoY3VzdG9tVG9vbHNQYXRoLCAndXRmLTgnKTtcbiAgICAgICAgLy8gSWYgdGhlIGZpbGUgaXMgZW1wdHksIHJldHVybiBhbiBlbXB0eSBhcnJheS5cbiAgICAgICAgaWYgKCFkYXRhKSB7XG4gICAgICAgICAgICByZXR1cm4gW107XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgdG9vbHMgPSBKU09OLnBhcnNlKGRhdGEpO1xuICAgICAgICByZXR1cm4gdG9vbHMubWFwKCh0OiBPbWl0PFRvb2wsICdpY29uJz4pID0+ICh7Li4udCwgaWNvbjogJ0NvbXBvbmVudCd9KSk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIHJlYWRpbmcgb3IgcGFyc2luZyBjdXN0b20gdG9vbHM6XCIsIGVycm9yKTtcbiAgICAgICAgLy8gSWYgcGFyc2luZyBmYWlscywgaXQgbWlnaHQgYmUgYW4gZW1wdHkgb3IgY29ycnVwdGVkIGZpbGUuXG4gICAgICAgIC8vIEl0J3Mgc2FmZXIgdG8gcmV0dXJuIGFuIGVtcHR5IGFycmF5IGFuZCBsZXQgdGhlIG5leHQgd3JpdGUgb3BlcmF0aW9uIGZpeCBpdC5cbiAgICAgICAgcmV0dXJuIFtdO1xuICAgIH1cbn1cblxuYXN5bmMgZnVuY3Rpb24gd3JpdGVDdXN0b21Ub29scyh0b29sczogVG9vbFtdKSB7XG4gICAgLy8gV2UgbmVlZCB0byBzdG9yZSB0aGUgaWNvbiBhcyBhIHN0cmluZyBuYW1lLCBub3QgYSBmdW5jdGlvbi5cbiAgICBjb25zdCBzdG9yYWJsZVRvb2xzID0gdG9vbHMubWFwKHRvb2wgPT4ge1xuICAgICAgICBjb25zdCB7IGljb24sIC4uLnJlc3QgfSA9IHRvb2w7XG4gICAgICAgIGNvbnN0IGljb25OYW1lID0gdHlwZW9mIGljb24gPT09ICdzdHJpbmcnID8gaWNvbiA6IChpY29uIGFzIGFueSk/LmRpc3BsYXlOYW1lIHx8ICdDb21wb25lbnQnO1xuICAgICAgICByZXR1cm4geyAuLi5yZXN0LCBpY29uOiBpY29uTmFtZSB9O1xuICAgIH0pO1xuICAgIGF3YWl0IGZzLndyaXRlRmlsZShjdXN0b21Ub29sc1BhdGgsIEpTT04uc3RyaW5naWZ5KHN0b3JhYmxlVG9vbHMsIG51bGwsIDIpKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHNhdmVUb29sKHRvb2xKU09OOiBzdHJpbmcpIHtcbiAgdHJ5IHtcbiAgICBjb25zdCB0b29scyA9IGF3YWl0IHJlYWRDdXN0b21Ub29scygpO1xuICAgIGNvbnN0IG5ld1Rvb2wgPSBKU09OLnBhcnNlKHRvb2xKU09OKTtcblxuICAgIGNvbnN0IHRvb2xJbmRleCA9IHRvb2xzLmZpbmRJbmRleCh0b29sID0+IHRvb2wuaWQgPT09IG5ld1Rvb2wuaWQpO1xuICAgIGlmICh0b29sSW5kZXggIT09IC0xKSB7XG4gICAgICB0b29sc1t0b29sSW5kZXhdID0gbmV3VG9vbDtcbiAgICB9IGVsc2Uge1xuICAgICAgICB0b29scy5wdXNoKG5ld1Rvb2wpO1xuICAgIH1cblxuICAgIGF3YWl0IHdyaXRlQ3VzdG9tVG9vbHModG9vbHMpO1xuICAgIHJldmFsaWRhdGVQYXRoKCcvJywgJ2xheW91dCcpO1xuICAgIHJldmFsaWRhdGVQYXRoKGAvJHtuZXdUb29sLmlkfWApO1xuXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgdG9vbElkOiBuZXdUb29sLmlkIH07XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcignRmFpbGVkIHRvIHNhdmUgdG9vbDonLCBlcnJvcik7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAnRmFpbGVkIHRvIHNhdmUgdGhlIHRvb2wuJyB9O1xuICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVQYW5lbENvbnRlbnQodG9vbElkOiBzdHJpbmcsIHRhYklkOiBzdHJpbmcsIHBhbmVsSWQ6IHN0cmluZywgbmV3Q29udGVudDogc3RyaW5nKSB7XG4gICAgaWYgKGRlZmF1bHRUb29sSWRzLmluY2x1ZGVzKHRvb2xJZCkpIHtcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9O1xuICAgIH1cblxuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHRvb2xzID0gYXdhaXQgcmVhZEN1c3RvbVRvb2xzKCk7XG4gICAgICAgIGNvbnN0IHRvb2xJbmRleCA9IHRvb2xzLmZpbmRJbmRleCh0ID0+IHQuaWQgPT09IHRvb2xJZCk7XG5cbiAgICAgICAgaWYgKHRvb2xJbmRleCA9PT0gLTEpIHtcbiAgICAgICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogJ1Rvb2wgbm90IGZvdW5kLicgfTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHRhYkluZGV4ID0gdG9vbHNbdG9vbEluZGV4XS5sYXlvdXQuZmluZEluZGV4KHQgPT4gdC5pZCA9PT0gdGFiSWQpO1xuICAgICAgICBpZiAodGFiSW5kZXggPT09IC0xKSB7XG4gICAgICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6ICdUYWIgbm90IGZvdW5kLicgfTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHBhbmVsSW5kZXggPSB0b29sc1t0b29sSW5kZXhdLmxheW91dFt0YWJJbmRleF0ucGFuZWxzLmZpbmRJbmRleChwID0+IHAuaWQgPT09IHBhbmVsSWQpO1xuICAgICAgICBpZiAocGFuZWxJbmRleCA9PT0gLTEpIHtcbiAgICAgICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogJ1BhbmVsIG5vdCBmb3VuZC4nIH07XG4gICAgICAgIH1cblxuICAgICAgICB0b29sc1t0b29sSW5kZXhdLmxheW91dFt0YWJJbmRleF0ucGFuZWxzW3BhbmVsSW5kZXhdLmNvbnRlbnQgPSBuZXdDb250ZW50O1xuXG4gICAgICAgIGF3YWl0IHdyaXRlQ3VzdG9tVG9vbHModG9vbHMpO1xuICAgICAgICByZXZhbGlkYXRlUGF0aChgLyR7dG9vbElkfWApO1xuXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdGYWlsZWQgdG8gdXBkYXRlIHBhbmVsIGNvbnRlbnQ6JywgZXJyb3IpO1xuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6ICdGYWlsZWQgdG8gdXBkYXRlIHBhbmVsIGNvbnRlbnQuJyB9O1xuICAgIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZVRvb2wodG9vbElkOiBzdHJpbmcpIHtcbiAgICB0cnkge1xuICAgICAgICBpZiAoZGVmYXVsdFRvb2xJZHMuaW5jbHVkZXModG9vbElkKSkge1xuICAgICAgICAgICAgcmV2YWxpZGF0ZVBhdGgoJy8nLCAnbGF5b3V0Jyk7XG4gICAgICAgICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlIH07XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgdG9vbHMgPSBhd2FpdCByZWFkQ3VzdG9tVG9vbHMoKTtcbiAgICAgICAgY29uc3QgaW5pdGlhbExlbmd0aCA9IHRvb2xzLmxlbmd0aDtcbiAgICAgICAgdG9vbHMgPSB0b29scy5maWx0ZXIodCA9PiB0LmlkICE9PSB0b29sSWQpO1xuXG4gICAgICAgIGlmICh0b29scy5sZW5ndGggPT09IGluaXRpYWxMZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogJ0N1c3RvbSB0b29sIG5vdCBmb3VuZC4nIH07XG4gICAgICAgIH1cblxuICAgICAgICBhd2FpdCB3cml0ZUN1c3RvbVRvb2xzKHRvb2xzKTtcbiAgICAgICAgcmV2YWxpZGF0ZVBhdGgoJy8nLCAnbGF5b3V0Jyk7XG5cbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9O1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0ZhaWxlZCB0byBkZWxldGUgdG9vbDonLCBlcnJvcik7XG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogJ0ZhaWxlZCB0byBkZWxldGUgdGhlIHRvb2wuJyB9O1xuICAgIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGFkZFRhYih0b29sSWQ6IHN0cmluZywgdGFiTmFtZTogc3RyaW5nKSB7XG4gICAgaWYgKGRlZmF1bHRUb29sSWRzLmluY2x1ZGVzKHRvb2xJZCkpIHtcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAnQ2Fubm90IGFkZCB0YWJzIHRvIGEgZGVmYXVsdCB0b29sLicgfTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgdG9vbHMgPSBhd2FpdCByZWFkQ3VzdG9tVG9vbHMoKTtcbiAgICAgICAgY29uc3QgdG9vbEluZGV4ID0gdG9vbHMuZmluZEluZGV4KHQgPT4gdC5pZCA9PT0gdG9vbElkKTtcblxuICAgICAgICBpZiAodG9vbEluZGV4ID09PSAtMSkge1xuICAgICAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAnVG9vbCBub3QgZm91bmQuJyB9O1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgbmV3VGFiOiBUYWIgPSB7XG4gICAgICAgICAgICBpZDogYHRhYi0ke0RhdGUubm93KCl9YCxcbiAgICAgICAgICAgIG5hbWU6IHRhYk5hbWUsXG4gICAgICAgICAgICBwYW5lbHM6IFt7XG4gICAgICAgICAgICAgICAgaWQ6IGBwYW5lbC0ke0RhdGUubm93KCl9YCxcbiAgICAgICAgICAgICAgICB0aXRsZTogJ05ldyBFZGl0b3InLFxuICAgICAgICAgICAgICAgIHR5cGU6ICdlZGl0b3InLFxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICcnLFxuICAgICAgICAgICAgICAgIHB1cnBvc2U6ICdBIG5ldyBlZGl0b3IgcGFuZWwuJ1xuICAgICAgICAgICAgfV1cbiAgICAgICAgfTtcblxuICAgICAgICB0b29sc1t0b29sSW5kZXhdLmxheW91dC5wdXNoKG5ld1RhYik7XG4gICAgICAgIGF3YWl0IHdyaXRlQ3VzdG9tVG9vbHModG9vbHMpO1xuICAgICAgICByZXZhbGlkYXRlUGF0aChgLyR7dG9vbElkfWApO1xuXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIG5ld1RhYiB9O1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0ZhaWxlZCB0byBhZGQgdGFiOicsIGVycm9yKTtcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAnRmFpbGVkIHRvIGFkZCBhIG5ldyB0YWIuJyB9O1xuICAgIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZVRhYih0b29sSWQ6IHN0cmluZywgdGFiSWQ6IHN0cmluZykge1xuICAgICBpZiAoZGVmYXVsdFRvb2xJZHMuaW5jbHVkZXModG9vbElkKSkge1xuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6ICdDYW5ub3QgZGVsZXRlIHRhYnMgZnJvbSBhIGRlZmF1bHQgdG9vbC4nIH07XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHRvb2xzID0gYXdhaXQgcmVhZEN1c3RvbVRvb2xzKCk7XG4gICAgICAgIGNvbnN0IHRvb2xJbmRleCA9IHRvb2xzLmZpbmRJbmRleCh0ID0+IHQuaWQgPT09IHRvb2xJZCk7XG5cbiAgICAgICAgaWYgKHRvb2xJbmRleCA9PT0gLTEpIHtcbiAgICAgICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogJ1Rvb2wgbm90IGZvdW5kLicgfTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGluaXRpYWxUYWJDb3VudCA9IHRvb2xzW3Rvb2xJbmRleF0ubGF5b3V0Lmxlbmd0aDtcbiAgICAgICAgdG9vbHNbdG9vbEluZGV4XS5sYXlvdXQgPSB0b29sc1t0b29sSW5kZXhdLmxheW91dC5maWx0ZXIodCA9PiB0LmlkICE9PSB0YWJJZCk7XG5cbiAgICAgICAgaWYgKHRvb2xzW3Rvb2xJbmRleF0ubGF5b3V0Lmxlbmd0aCA9PT0gaW5pdGlhbFRhYkNvdW50KSB7XG4gICAgICAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAnVGFiIG5vdCBmb3VuZC4nIH07XG4gICAgICAgIH1cblxuICAgICAgICBhd2FpdCB3cml0ZUN1c3RvbVRvb2xzKHRvb2xzKTtcbiAgICAgICAgcmV2YWxpZGF0ZVBhdGgoYC8ke3Rvb2xJZH1gKTtcbiAgICAgICAgcmV2YWxpZGF0ZVBhdGgoJy8nLCAnbGF5b3V0Jyk7XG5cblxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlIH07XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignRmFpbGVkIHRvIGRlbGV0ZSB0YWI6JywgZXJyb3IpO1xuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6ICdGYWlsZWQgdG8gZGVsZXRlIHRoZSB0YWIuJyB9O1xuICAgIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGFkZFBhbmVsKHRvb2xJZDogc3RyaW5nLCB0YWJJZDogc3RyaW5nLCBwYW5lbERhdGE6IE9taXQ8UGFuZWwsICdpZCcgfCAnY29udGVudCc+KSB7XG4gICAgaWYgKGRlZmF1bHRUb29sSWRzLmluY2x1ZGVzKHRvb2xJZCkpIHtcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAnQ2Fubm90IGFkZCBwYW5lbHMgdG8gYSBkZWZhdWx0IHRvb2wuJyB9O1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICBjb25zdCB0b29scyA9IGF3YWl0IHJlYWRDdXN0b21Ub29scygpO1xuICAgICAgICBjb25zdCB0b29sSW5kZXggPSB0b29scy5maW5kSW5kZXgodCA9PiB0LmlkID09PSB0b29sSWQpO1xuICAgICAgICBpZiAodG9vbEluZGV4ID09PSAtMSkgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAnVG9vbCBub3QgZm91bmQuJyB9O1xuXG4gICAgICAgIGNvbnN0IHRhYkluZGV4ID0gdG9vbHNbdG9vbEluZGV4XS5sYXlvdXQuZmluZEluZGV4KHQgPT4gdC5pZCA9PT0gdGFiSWQpO1xuICAgICAgICBpZiAodGFiSW5kZXggPT09IC0xKSByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6ICdUYWIgbm90IGZvdW5kLicgfTtcblxuICAgICAgICBjb25zdCBuZXdQYW5lbDogUGFuZWwgPSB7XG4gICAgICAgICAgICAuLi5wYW5lbERhdGEsXG4gICAgICAgICAgICBpZDogYHBhbmVsLSR7RGF0ZS5ub3coKX1gLFxuICAgICAgICAgICAgY29udGVudDogcGFuZWxEYXRhLnR5cGUgPT09ICdtZWRpYScgPyAnJyA6IGBuZXdfJHtwYW5lbERhdGEudHlwZX1fY29udGVudGAsXG4gICAgICAgIH07XG5cbiAgICAgICAgdG9vbHNbdG9vbEluZGV4XS5sYXlvdXRbdGFiSW5kZXhdLnBhbmVscy5wdXNoKG5ld1BhbmVsKTtcbiAgICAgICAgYXdhaXQgd3JpdGVDdXN0b21Ub29scyh0b29scyk7XG4gICAgICAgIHJldmFsaWRhdGVQYXRoKGAvJHt0b29sSWR9YCk7XG5cbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgbmV3UGFuZWwgfTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdGYWlsZWQgdG8gYWRkIHBhbmVsOicsIGVycm9yKTtcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAnRmFpbGVkIHRvIGFkZCBhIG5ldyBwYW5lbC4nIH07XG4gICAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlUGFuZWwodG9vbElkOiBzdHJpbmcsIHRhYklkOiBzdHJpbmcsIHBhbmVsSWQ6IHN0cmluZykge1xuICAgIGlmIChkZWZhdWx0VG9vbElkcy5pbmNsdWRlcyh0b29sSWQpKSB7XG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogJ0Nhbm5vdCBkZWxldGUgcGFuZWxzIGZyb20gYSBkZWZhdWx0IHRvb2wuJyB9O1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICBjb25zdCB0b29scyA9IGF3YWl0IHJlYWRDdXN0b21Ub29scygpO1xuICAgICAgICBjb25zdCB0b29sSW5kZXggPSB0b29scy5maW5kSW5kZXgodCA9PiB0LmlkID09PSB0b29sSWQpO1xuICAgICAgICBpZiAodG9vbEluZGV4ID09PSAtMSkgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAnVG9vbCBub3QgZm91bmQuJyB9O1xuXG4gICAgICAgIGNvbnN0IHRhYkluZGV4ID0gdG9vbHNbdG9vbEluZGV4XS5sYXlvdXQuZmluZEluZGV4KHQgPT4gdC5pZCA9PT0gdGFiSWQpO1xuICAgICAgICBpZiAodGFiSW5kZXggPT09IC0xKSByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6ICdUYWIgbm90IGZvdW5kLicgfTtcblxuICAgICAgICBjb25zdCBpbml0aWFsUGFuZWxDb3VudCA9IHRvb2xzW3Rvb2xJbmRleF0ubGF5b3V0W3RhYkluZGV4XS5wYW5lbHMubGVuZ3RoO1xuICAgICAgICB0b29sc1t0b29sSW5kZXhdLmxheW91dFt0YWJJbmRleF0ucGFuZWxzID0gdG9vbHNbdG9vbEluZGV4XS5sYXlvdXRbdGFiSW5kZXhdLnBhbmVscy5maWx0ZXIocCA9PiBwLmlkICE9PSBwYW5lbElkKTtcblxuICAgICAgICBpZiAodG9vbHNbdG9vbEluZGV4XS5sYXlvdXRbdGFiSW5kZXhdLnBhbmVscy5sZW5ndGggPT09IGluaXRpYWxQYW5lbENvdW50KSB7XG4gICAgICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6ICdQYW5lbCBub3QgZm91bmQuJyB9O1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBhd2FpdCB3cml0ZUN1c3RvbVRvb2xzKHRvb2xzKTtcbiAgICAgICAgcmV2YWxpZGF0ZVBhdGgoYC8ke3Rvb2xJZH1gKTtcblxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlIH07XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignRmFpbGVkIHRvIGRlbGV0ZSBwYW5lbDonLCBlcnJvcik7XG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogJ0ZhaWxlZCB0byBkZWxldGUgdGhlIHBhbmVsLicgfTtcbiAgICB9XG59XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6InVSQW1Pc0IifQ==
}}),
"[project]/src/components/forge/delete-panel-dialog.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "DeletePanelDialog": (()=>DeletePanelDialog)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/alert-dialog.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$data$3a$f78cec__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/app/data:f78cec [app-ssr] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/use-toast.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
function DeletePanelDialog({ toolId, tabId, panelId, panelTitle, children }) {
    const [isPending, startTransition] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTransition"])();
    const { toast } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useToast"])();
    const handleConfirmDelete = ()=>{
        startTransition(async ()=>{
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$data$3a$f78cec__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["deletePanel"])(toolId, tabId, panelId);
            if (result.success) {
                toast({
                    title: 'Panel Deleted',
                    description: `The panel "${panelTitle}" has been removed.`
                });
            } else {
                toast({
                    variant: 'destructive',
                    title: 'Error',
                    description: result.error || 'Failed to delete the panel.'
                });
            }
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AlertDialog"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AlertDialogTrigger"], {
                asChild: true,
                children: children
            }, void 0, false, {
                fileName: "[project]/src/components/forge/delete-panel-dialog.tsx",
                lineNumber: 56,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AlertDialogContent"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AlertDialogHeader"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AlertDialogTitle"], {
                                children: "Are you absolutely sure?"
                            }, void 0, false, {
                                fileName: "[project]/src/components/forge/delete-panel-dialog.tsx",
                                lineNumber: 59,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AlertDialogDescription"], {
                                children: [
                                    'This action cannot be undone. This will permanently delete the "',
                                    panelTitle,
                                    '" panel.'
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/forge/delete-panel-dialog.tsx",
                                lineNumber: 60,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/forge/delete-panel-dialog.tsx",
                        lineNumber: 58,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AlertDialogFooter"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AlertDialogCancel"], {
                                children: "Cancel"
                            }, void 0, false, {
                                fileName: "[project]/src/components/forge/delete-panel-dialog.tsx",
                                lineNumber: 66,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AlertDialogAction"], {
                                onClick: handleConfirmDelete,
                                disabled: isPending,
                                children: isPending ? 'Deleting...' : 'Continue'
                            }, void 0, false, {
                                fileName: "[project]/src/components/forge/delete-panel-dialog.tsx",
                                lineNumber: 67,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/forge/delete-panel-dialog.tsx",
                        lineNumber: 65,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/forge/delete-panel-dialog.tsx",
                lineNumber: 57,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/forge/delete-panel-dialog.tsx",
        lineNumber: 55,
        columnNumber: 5
    }, this);
}
}}),
"[project]/src/components/forge/panel.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "ForgePanel": (()=>ForgePanel)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$placeholder$2d$images$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/placeholder-images.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$tools$2d$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/tools-data.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$forge$2f$ai$2d$suggestions$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/forge/ai-suggestions.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/card.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$scroll$2d$area$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/scroll-area.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$textarea$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/textarea.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$box$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/box.js [app-ssr] (ecmascript) <export default as Box>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$music$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Music$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/music.js [app-ssr] (ecmascript) <export default as Music>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$data$3a$a6da45__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/app/data:a6da45 [app-ssr] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/use-toast.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$forge$2f$delete$2d$panel$2d$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/forge/delete-panel-dialog.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
;
;
;
;
;
function ForgePanel({ panel, toolId, tabId, toolType }) {
    const [content, setContent] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(panel.content);
    const [isPending, startTransition] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTransition"])();
    const { toast } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useToast"])();
    const isDefaultTool = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$tools$2d$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defaultToolIds"].includes(toolId);
    // Ensure client state is updated if server data changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setContent(panel.content);
    }, [
        panel.content
    ]);
    const handleSave = ()=>{
        // Only save if content has changed and the tool is a custom one
        if (content === panel.content || isDefaultTool) {
            return;
        }
        startTransition(async ()=>{
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$data$3a$a6da45__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["updatePanelContent"])(toolId, tabId, panel.id, content);
            if (result.success) {
                toast({
                    title: 'Content Saved!',
                    description: `Your changes to "${panel.title}" have been saved.`
                });
            } else {
                toast({
                    variant: 'destructive',
                    title: 'Error',
                    description: result.error || 'Failed to save content.'
                });
                // Revert optimistic update on failure
                setContent(panel.content);
            }
        });
    };
    const renderContent = ()=>{
        switch(panel.type){
            case 'editor':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$scroll$2d$area$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ScrollArea"], {
                    className: "h-64",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$textarea$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Textarea"], {
                        value: content,
                        onChange: (e)=>setContent(e.target.value),
                        onBlur: handleSave,
                        disabled: isPending,
                        className: "h-full min-h-64 w-full resize-none border-0 p-1 focus-visible:ring-0",
                        "aria-label": panel.title,
                        readOnly: isDefaultTool
                    }, void 0, false, {
                        fileName: "[project]/src/components/forge/panel.tsx",
                        lineNumber: 72,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/forge/panel.tsx",
                    lineNumber: 71,
                    columnNumber: 11
                }, this);
            case 'media':
                const image = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$placeholder$2d$images$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PlaceHolderImages"].find((img)=>img.id === panel.imageId);
                if (!image) {
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex h-64 items-center justify-center rounded-md bg-muted text-muted-foreground",
                        children: "Image not found"
                    }, void 0, false, {
                        fileName: "[project]/src/components/forge/panel.tsx",
                        lineNumber: 87,
                        columnNumber: 13
                    }, this);
                }
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative h-64 w-full overflow-hidden rounded-md",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        src: image.imageUrl,
                        alt: image.description,
                        fill: true,
                        className: "object-cover",
                        "data-ai-hint": image.imageHint
                    }, void 0, false, {
                        fileName: "[project]/src/components/forge/panel.tsx",
                        lineNumber: 94,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/forge/panel.tsx",
                    lineNumber: 93,
                    columnNumber: 11
                }, this);
            case 'sound':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex h-64 flex-col items-center justify-center gap-4 rounded-md bg-muted text-muted-foreground",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$music$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Music$3e$__["Music"], {
                            className: "size-16"
                        }, void 0, false, {
                            fileName: "[project]/src/components/forge/panel.tsx",
                            lineNumber: 106,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "font-mono text-sm",
                            children: panel.content
                        }, void 0, false, {
                            fileName: "[project]/src/components/forge/panel.tsx",
                            lineNumber: 107,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/forge/panel.tsx",
                    lineNumber: 105,
                    columnNumber: 11
                }, this);
            case '3d':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex h-64 flex-col items-center justify-center gap-4 rounded-md bg-muted text-muted-foreground",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$box$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                            className: "size-16"
                        }, void 0, false, {
                            fileName: "[project]/src/components/forge/panel.tsx",
                            lineNumber: 113,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "font-mono text-sm",
                            children: panel.content
                        }, void 0, false, {
                            fileName: "[project]/src/components/forge/panel.tsx",
                            lineNumber: 114,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/forge/panel.tsx",
                    lineNumber: 112,
                    columnNumber: 11
                }, this);
            default:
                return null;
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
        className: "flex h-full flex-col relative group/panel",
        children: [
            !isDefaultTool && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$forge$2f$delete$2d$panel$2d$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DeletePanelDialog"], {
                toolId: toolId,
                tabId: tabId,
                panelId: panel.id,
                panelTitle: panel.title,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    className: "absolute top-2 right-2 z-10 hidden h-5 w-5 items-center justify-center rounded-full bg-destructive text-destructive-foreground opacity-80 transition-opacity hover:opacity-100 group-hover/panel:flex",
                    children: "×"
                }, void 0, false, {
                    fileName: "[project]/src/components/forge/panel.tsx",
                    lineNumber: 131,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/forge/panel.tsx",
                lineNumber: 125,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardHeader"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardTitle"], {
                        children: panel.title
                    }, void 0, false, {
                        fileName: "[project]/src/components/forge/panel.tsx",
                        lineNumber: 137,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardDescription"], {
                        children: panel.purpose
                    }, void 0, false, {
                        fileName: "[project]/src/components/forge/panel.tsx",
                        lineNumber: 138,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/forge/panel.tsx",
                lineNumber: 136,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardContent"], {
                className: "flex-grow",
                children: renderContent()
            }, void 0, false, {
                fileName: "[project]/src/components/forge/panel.tsx",
                lineNumber: 140,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardFooter"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$forge$2f$ai$2d$suggestions$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AISuggestions"], {
                    panelContent: content,
                    panelPurpose: panel.purpose,
                    toolType: toolType
                }, void 0, false, {
                    fileName: "[project]/src/components/forge/panel.tsx",
                    lineNumber: 142,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/forge/panel.tsx",
                lineNumber: 141,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/forge/panel.tsx",
        lineNumber: 123,
        columnNumber: 5
    }, this);
}
}}),
"[project]/src/app/data:42a851 [app-ssr] (ecmascript) <text/javascript>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/* __next_internal_action_entry_do_not_use__ [{"608f6ff91ce2b9af78008dbedf036eae6d43f2708c":"addTab"},"src/app/actions.ts",""] */ __turbopack_context__.s({
    "addTab": (()=>addTab)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-ssr] (ecmascript)");
"use turbopack no side effects";
;
var addTab = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createServerReference"])("608f6ff91ce2b9af78008dbedf036eae6d43f2708c", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findSourceMapURL"], "addTab"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vYWN0aW9ucy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHNlcnZlcic7XG5cbmltcG9ydCB7IHByb21pc2VzIGFzIGZzIH0gZnJvbSAnZnMnO1xuaW1wb3J0IHBhdGggZnJvbSAncGF0aCc7XG5pbXBvcnQgeyByZXZhbGlkYXRlUGF0aCB9IGZyb20gJ25leHQvY2FjaGUnO1xuaW1wb3J0IHR5cGUgeyBUb29sLCBUYWIsIFBhbmVsIH0gZnJvbSAnQC9saWIvdG9vbHMtZGF0YSc7XG5pbXBvcnQgeyBkZWZhdWx0VG9vbElkcyB9IGZyb20gJ0AvbGliL3Rvb2xzLWRhdGEnO1xuXG5jb25zdCBjdXN0b21Ub29sc1BhdGggPSBwYXRoLmpvaW4ocHJvY2Vzcy5jd2QoKSwgJ3NyYycsICdsaWInLCAnY3VzdG9tLXRvb2xzLmpzb24nKTtcblxuYXN5bmMgZnVuY3Rpb24gcmVhZEN1c3RvbVRvb2xzKCk6IFByb21pc2U8VG9vbFtdPiB7XG4gICAgdHJ5IHtcbiAgICAgICAgYXdhaXQgZnMuYWNjZXNzKGN1c3RvbVRvb2xzUGF0aCk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgLy8gSWYgdGhlIGZpbGUgZG9lc24ndCBleGlzdCwgY3JlYXRlIGl0IHdpdGggYW4gZW1wdHkgYXJyYXkuXG4gICAgICAgIGlmICgoZXJyb3IgYXMgTm9kZUpTLkVycm5vRXhjZXB0aW9uKS5jb2RlID09PSAnRU5PRU5UJykge1xuICAgICAgICAgICAgYXdhaXQgd3JpdGVDdXN0b21Ub29scyhbXSk7XG4gICAgICAgICAgICByZXR1cm4gW107XG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGFjY2Vzc2luZyBjdXN0b20gdG9vbHMgZmlsZTpcIiwgZXJyb3IpO1xuICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICB9XG5cbiAgICB0cnkge1xuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgZnMucmVhZEZpbGUoY3VzdG9tVG9vbHNQYXRoLCAndXRmLTgnKTtcbiAgICAgICAgLy8gSWYgdGhlIGZpbGUgaXMgZW1wdHksIHJldHVybiBhbiBlbXB0eSBhcnJheS5cbiAgICAgICAgaWYgKCFkYXRhKSB7XG4gICAgICAgICAgICByZXR1cm4gW107XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgdG9vbHMgPSBKU09OLnBhcnNlKGRhdGEpO1xuICAgICAgICByZXR1cm4gdG9vbHMubWFwKCh0OiBPbWl0PFRvb2wsICdpY29uJz4pID0+ICh7Li4udCwgaWNvbjogJ0NvbXBvbmVudCd9KSk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIHJlYWRpbmcgb3IgcGFyc2luZyBjdXN0b20gdG9vbHM6XCIsIGVycm9yKTtcbiAgICAgICAgLy8gSWYgcGFyc2luZyBmYWlscywgaXQgbWlnaHQgYmUgYW4gZW1wdHkgb3IgY29ycnVwdGVkIGZpbGUuXG4gICAgICAgIC8vIEl0J3Mgc2FmZXIgdG8gcmV0dXJuIGFuIGVtcHR5IGFycmF5IGFuZCBsZXQgdGhlIG5leHQgd3JpdGUgb3BlcmF0aW9uIGZpeCBpdC5cbiAgICAgICAgcmV0dXJuIFtdO1xuICAgIH1cbn1cblxuYXN5bmMgZnVuY3Rpb24gd3JpdGVDdXN0b21Ub29scyh0b29sczogVG9vbFtdKSB7XG4gICAgLy8gV2UgbmVlZCB0byBzdG9yZSB0aGUgaWNvbiBhcyBhIHN0cmluZyBuYW1lLCBub3QgYSBmdW5jdGlvbi5cbiAgICBjb25zdCBzdG9yYWJsZVRvb2xzID0gdG9vbHMubWFwKHRvb2wgPT4ge1xuICAgICAgICBjb25zdCB7IGljb24sIC4uLnJlc3QgfSA9IHRvb2w7XG4gICAgICAgIGNvbnN0IGljb25OYW1lID0gdHlwZW9mIGljb24gPT09ICdzdHJpbmcnID8gaWNvbiA6IChpY29uIGFzIGFueSk/LmRpc3BsYXlOYW1lIHx8ICdDb21wb25lbnQnO1xuICAgICAgICByZXR1cm4geyAuLi5yZXN0LCBpY29uOiBpY29uTmFtZSB9O1xuICAgIH0pO1xuICAgIGF3YWl0IGZzLndyaXRlRmlsZShjdXN0b21Ub29sc1BhdGgsIEpTT04uc3RyaW5naWZ5KHN0b3JhYmxlVG9vbHMsIG51bGwsIDIpKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHNhdmVUb29sKHRvb2xKU09OOiBzdHJpbmcpIHtcbiAgdHJ5IHtcbiAgICBjb25zdCB0b29scyA9IGF3YWl0IHJlYWRDdXN0b21Ub29scygpO1xuICAgIGNvbnN0IG5ld1Rvb2wgPSBKU09OLnBhcnNlKHRvb2xKU09OKTtcblxuICAgIGNvbnN0IHRvb2xJbmRleCA9IHRvb2xzLmZpbmRJbmRleCh0b29sID0+IHRvb2wuaWQgPT09IG5ld1Rvb2wuaWQpO1xuICAgIGlmICh0b29sSW5kZXggIT09IC0xKSB7XG4gICAgICB0b29sc1t0b29sSW5kZXhdID0gbmV3VG9vbDtcbiAgICB9IGVsc2Uge1xuICAgICAgICB0b29scy5wdXNoKG5ld1Rvb2wpO1xuICAgIH1cblxuICAgIGF3YWl0IHdyaXRlQ3VzdG9tVG9vbHModG9vbHMpO1xuICAgIHJldmFsaWRhdGVQYXRoKCcvJywgJ2xheW91dCcpO1xuICAgIHJldmFsaWRhdGVQYXRoKGAvJHtuZXdUb29sLmlkfWApO1xuXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgdG9vbElkOiBuZXdUb29sLmlkIH07XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcignRmFpbGVkIHRvIHNhdmUgdG9vbDonLCBlcnJvcik7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAnRmFpbGVkIHRvIHNhdmUgdGhlIHRvb2wuJyB9O1xuICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVQYW5lbENvbnRlbnQodG9vbElkOiBzdHJpbmcsIHRhYklkOiBzdHJpbmcsIHBhbmVsSWQ6IHN0cmluZywgbmV3Q29udGVudDogc3RyaW5nKSB7XG4gICAgaWYgKGRlZmF1bHRUb29sSWRzLmluY2x1ZGVzKHRvb2xJZCkpIHtcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9O1xuICAgIH1cblxuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHRvb2xzID0gYXdhaXQgcmVhZEN1c3RvbVRvb2xzKCk7XG4gICAgICAgIGNvbnN0IHRvb2xJbmRleCA9IHRvb2xzLmZpbmRJbmRleCh0ID0+IHQuaWQgPT09IHRvb2xJZCk7XG5cbiAgICAgICAgaWYgKHRvb2xJbmRleCA9PT0gLTEpIHtcbiAgICAgICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogJ1Rvb2wgbm90IGZvdW5kLicgfTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHRhYkluZGV4ID0gdG9vbHNbdG9vbEluZGV4XS5sYXlvdXQuZmluZEluZGV4KHQgPT4gdC5pZCA9PT0gdGFiSWQpO1xuICAgICAgICBpZiAodGFiSW5kZXggPT09IC0xKSB7XG4gICAgICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6ICdUYWIgbm90IGZvdW5kLicgfTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHBhbmVsSW5kZXggPSB0b29sc1t0b29sSW5kZXhdLmxheW91dFt0YWJJbmRleF0ucGFuZWxzLmZpbmRJbmRleChwID0+IHAuaWQgPT09IHBhbmVsSWQpO1xuICAgICAgICBpZiAocGFuZWxJbmRleCA9PT0gLTEpIHtcbiAgICAgICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogJ1BhbmVsIG5vdCBmb3VuZC4nIH07XG4gICAgICAgIH1cblxuICAgICAgICB0b29sc1t0b29sSW5kZXhdLmxheW91dFt0YWJJbmRleF0ucGFuZWxzW3BhbmVsSW5kZXhdLmNvbnRlbnQgPSBuZXdDb250ZW50O1xuXG4gICAgICAgIGF3YWl0IHdyaXRlQ3VzdG9tVG9vbHModG9vbHMpO1xuICAgICAgICByZXZhbGlkYXRlUGF0aChgLyR7dG9vbElkfWApO1xuXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdGYWlsZWQgdG8gdXBkYXRlIHBhbmVsIGNvbnRlbnQ6JywgZXJyb3IpO1xuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6ICdGYWlsZWQgdG8gdXBkYXRlIHBhbmVsIGNvbnRlbnQuJyB9O1xuICAgIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZVRvb2wodG9vbElkOiBzdHJpbmcpIHtcbiAgICB0cnkge1xuICAgICAgICBpZiAoZGVmYXVsdFRvb2xJZHMuaW5jbHVkZXModG9vbElkKSkge1xuICAgICAgICAgICAgcmV2YWxpZGF0ZVBhdGgoJy8nLCAnbGF5b3V0Jyk7XG4gICAgICAgICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlIH07XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgdG9vbHMgPSBhd2FpdCByZWFkQ3VzdG9tVG9vbHMoKTtcbiAgICAgICAgY29uc3QgaW5pdGlhbExlbmd0aCA9IHRvb2xzLmxlbmd0aDtcbiAgICAgICAgdG9vbHMgPSB0b29scy5maWx0ZXIodCA9PiB0LmlkICE9PSB0b29sSWQpO1xuXG4gICAgICAgIGlmICh0b29scy5sZW5ndGggPT09IGluaXRpYWxMZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogJ0N1c3RvbSB0b29sIG5vdCBmb3VuZC4nIH07XG4gICAgICAgIH1cblxuICAgICAgICBhd2FpdCB3cml0ZUN1c3RvbVRvb2xzKHRvb2xzKTtcbiAgICAgICAgcmV2YWxpZGF0ZVBhdGgoJy8nLCAnbGF5b3V0Jyk7XG5cbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9O1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0ZhaWxlZCB0byBkZWxldGUgdG9vbDonLCBlcnJvcik7XG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogJ0ZhaWxlZCB0byBkZWxldGUgdGhlIHRvb2wuJyB9O1xuICAgIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGFkZFRhYih0b29sSWQ6IHN0cmluZywgdGFiTmFtZTogc3RyaW5nKSB7XG4gICAgaWYgKGRlZmF1bHRUb29sSWRzLmluY2x1ZGVzKHRvb2xJZCkpIHtcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAnQ2Fubm90IGFkZCB0YWJzIHRvIGEgZGVmYXVsdCB0b29sLicgfTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgdG9vbHMgPSBhd2FpdCByZWFkQ3VzdG9tVG9vbHMoKTtcbiAgICAgICAgY29uc3QgdG9vbEluZGV4ID0gdG9vbHMuZmluZEluZGV4KHQgPT4gdC5pZCA9PT0gdG9vbElkKTtcblxuICAgICAgICBpZiAodG9vbEluZGV4ID09PSAtMSkge1xuICAgICAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAnVG9vbCBub3QgZm91bmQuJyB9O1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgbmV3VGFiOiBUYWIgPSB7XG4gICAgICAgICAgICBpZDogYHRhYi0ke0RhdGUubm93KCl9YCxcbiAgICAgICAgICAgIG5hbWU6IHRhYk5hbWUsXG4gICAgICAgICAgICBwYW5lbHM6IFt7XG4gICAgICAgICAgICAgICAgaWQ6IGBwYW5lbC0ke0RhdGUubm93KCl9YCxcbiAgICAgICAgICAgICAgICB0aXRsZTogJ05ldyBFZGl0b3InLFxuICAgICAgICAgICAgICAgIHR5cGU6ICdlZGl0b3InLFxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICcnLFxuICAgICAgICAgICAgICAgIHB1cnBvc2U6ICdBIG5ldyBlZGl0b3IgcGFuZWwuJ1xuICAgICAgICAgICAgfV1cbiAgICAgICAgfTtcblxuICAgICAgICB0b29sc1t0b29sSW5kZXhdLmxheW91dC5wdXNoKG5ld1RhYik7XG4gICAgICAgIGF3YWl0IHdyaXRlQ3VzdG9tVG9vbHModG9vbHMpO1xuICAgICAgICByZXZhbGlkYXRlUGF0aChgLyR7dG9vbElkfWApO1xuXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIG5ld1RhYiB9O1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0ZhaWxlZCB0byBhZGQgdGFiOicsIGVycm9yKTtcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAnRmFpbGVkIHRvIGFkZCBhIG5ldyB0YWIuJyB9O1xuICAgIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZVRhYih0b29sSWQ6IHN0cmluZywgdGFiSWQ6IHN0cmluZykge1xuICAgICBpZiAoZGVmYXVsdFRvb2xJZHMuaW5jbHVkZXModG9vbElkKSkge1xuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6ICdDYW5ub3QgZGVsZXRlIHRhYnMgZnJvbSBhIGRlZmF1bHQgdG9vbC4nIH07XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHRvb2xzID0gYXdhaXQgcmVhZEN1c3RvbVRvb2xzKCk7XG4gICAgICAgIGNvbnN0IHRvb2xJbmRleCA9IHRvb2xzLmZpbmRJbmRleCh0ID0+IHQuaWQgPT09IHRvb2xJZCk7XG5cbiAgICAgICAgaWYgKHRvb2xJbmRleCA9PT0gLTEpIHtcbiAgICAgICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogJ1Rvb2wgbm90IGZvdW5kLicgfTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGluaXRpYWxUYWJDb3VudCA9IHRvb2xzW3Rvb2xJbmRleF0ubGF5b3V0Lmxlbmd0aDtcbiAgICAgICAgdG9vbHNbdG9vbEluZGV4XS5sYXlvdXQgPSB0b29sc1t0b29sSW5kZXhdLmxheW91dC5maWx0ZXIodCA9PiB0LmlkICE9PSB0YWJJZCk7XG5cbiAgICAgICAgaWYgKHRvb2xzW3Rvb2xJbmRleF0ubGF5b3V0Lmxlbmd0aCA9PT0gaW5pdGlhbFRhYkNvdW50KSB7XG4gICAgICAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAnVGFiIG5vdCBmb3VuZC4nIH07XG4gICAgICAgIH1cblxuICAgICAgICBhd2FpdCB3cml0ZUN1c3RvbVRvb2xzKHRvb2xzKTtcbiAgICAgICAgcmV2YWxpZGF0ZVBhdGgoYC8ke3Rvb2xJZH1gKTtcbiAgICAgICAgcmV2YWxpZGF0ZVBhdGgoJy8nLCAnbGF5b3V0Jyk7XG5cblxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlIH07XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignRmFpbGVkIHRvIGRlbGV0ZSB0YWI6JywgZXJyb3IpO1xuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6ICdGYWlsZWQgdG8gZGVsZXRlIHRoZSB0YWIuJyB9O1xuICAgIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGFkZFBhbmVsKHRvb2xJZDogc3RyaW5nLCB0YWJJZDogc3RyaW5nLCBwYW5lbERhdGE6IE9taXQ8UGFuZWwsICdpZCcgfCAnY29udGVudCc+KSB7XG4gICAgaWYgKGRlZmF1bHRUb29sSWRzLmluY2x1ZGVzKHRvb2xJZCkpIHtcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAnQ2Fubm90IGFkZCBwYW5lbHMgdG8gYSBkZWZhdWx0IHRvb2wuJyB9O1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICBjb25zdCB0b29scyA9IGF3YWl0IHJlYWRDdXN0b21Ub29scygpO1xuICAgICAgICBjb25zdCB0b29sSW5kZXggPSB0b29scy5maW5kSW5kZXgodCA9PiB0LmlkID09PSB0b29sSWQpO1xuICAgICAgICBpZiAodG9vbEluZGV4ID09PSAtMSkgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAnVG9vbCBub3QgZm91bmQuJyB9O1xuXG4gICAgICAgIGNvbnN0IHRhYkluZGV4ID0gdG9vbHNbdG9vbEluZGV4XS5sYXlvdXQuZmluZEluZGV4KHQgPT4gdC5pZCA9PT0gdGFiSWQpO1xuICAgICAgICBpZiAodGFiSW5kZXggPT09IC0xKSByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6ICdUYWIgbm90IGZvdW5kLicgfTtcblxuICAgICAgICBjb25zdCBuZXdQYW5lbDogUGFuZWwgPSB7XG4gICAgICAgICAgICAuLi5wYW5lbERhdGEsXG4gICAgICAgICAgICBpZDogYHBhbmVsLSR7RGF0ZS5ub3coKX1gLFxuICAgICAgICAgICAgY29udGVudDogcGFuZWxEYXRhLnR5cGUgPT09ICdtZWRpYScgPyAnJyA6IGBuZXdfJHtwYW5lbERhdGEudHlwZX1fY29udGVudGAsXG4gICAgICAgIH07XG5cbiAgICAgICAgdG9vbHNbdG9vbEluZGV4XS5sYXlvdXRbdGFiSW5kZXhdLnBhbmVscy5wdXNoKG5ld1BhbmVsKTtcbiAgICAgICAgYXdhaXQgd3JpdGVDdXN0b21Ub29scyh0b29scyk7XG4gICAgICAgIHJldmFsaWRhdGVQYXRoKGAvJHt0b29sSWR9YCk7XG5cbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgbmV3UGFuZWwgfTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdGYWlsZWQgdG8gYWRkIHBhbmVsOicsIGVycm9yKTtcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAnRmFpbGVkIHRvIGFkZCBhIG5ldyBwYW5lbC4nIH07XG4gICAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlUGFuZWwodG9vbElkOiBzdHJpbmcsIHRhYklkOiBzdHJpbmcsIHBhbmVsSWQ6IHN0cmluZykge1xuICAgIGlmIChkZWZhdWx0VG9vbElkcy5pbmNsdWRlcyh0b29sSWQpKSB7XG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogJ0Nhbm5vdCBkZWxldGUgcGFuZWxzIGZyb20gYSBkZWZhdWx0IHRvb2wuJyB9O1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICBjb25zdCB0b29scyA9IGF3YWl0IHJlYWRDdXN0b21Ub29scygpO1xuICAgICAgICBjb25zdCB0b29sSW5kZXggPSB0b29scy5maW5kSW5kZXgodCA9PiB0LmlkID09PSB0b29sSWQpO1xuICAgICAgICBpZiAodG9vbEluZGV4ID09PSAtMSkgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAnVG9vbCBub3QgZm91bmQuJyB9O1xuXG4gICAgICAgIGNvbnN0IHRhYkluZGV4ID0gdG9vbHNbdG9vbEluZGV4XS5sYXlvdXQuZmluZEluZGV4KHQgPT4gdC5pZCA9PT0gdGFiSWQpO1xuICAgICAgICBpZiAodGFiSW5kZXggPT09IC0xKSByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6ICdUYWIgbm90IGZvdW5kLicgfTtcblxuICAgICAgICBjb25zdCBpbml0aWFsUGFuZWxDb3VudCA9IHRvb2xzW3Rvb2xJbmRleF0ubGF5b3V0W3RhYkluZGV4XS5wYW5lbHMubGVuZ3RoO1xuICAgICAgICB0b29sc1t0b29sSW5kZXhdLmxheW91dFt0YWJJbmRleF0ucGFuZWxzID0gdG9vbHNbdG9vbEluZGV4XS5sYXlvdXRbdGFiSW5kZXhdLnBhbmVscy5maWx0ZXIocCA9PiBwLmlkICE9PSBwYW5lbElkKTtcblxuICAgICAgICBpZiAodG9vbHNbdG9vbEluZGV4XS5sYXlvdXRbdGFiSW5kZXhdLnBhbmVscy5sZW5ndGggPT09IGluaXRpYWxQYW5lbENvdW50KSB7XG4gICAgICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6ICdQYW5lbCBub3QgZm91bmQuJyB9O1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBhd2FpdCB3cml0ZUN1c3RvbVRvb2xzKHRvb2xzKTtcbiAgICAgICAgcmV2YWxpZGF0ZVBhdGgoYC8ke3Rvb2xJZH1gKTtcblxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlIH07XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignRmFpbGVkIHRvIGRlbGV0ZSBwYW5lbDonLCBlcnJvcik7XG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogJ0ZhaWxlZCB0byBkZWxldGUgdGhlIHBhbmVsLicgfTtcbiAgICB9XG59XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6ImtSQW9Jc0IifQ==
}}),
"[project]/src/components/forge/add-tab-dialog.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "AddTabDialog": (()=>AddTabDialog)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/plus.js [app-ssr] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/dialog.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/form.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/input.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-hook-form/dist/index.esm.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hookform$2f$resolvers$2f$zod$2f$dist$2f$zod$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@hookform/resolvers/zod/dist/zod.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zod/lib/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/use-toast.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-ssr] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$data$3a$42a851__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/app/data:42a851 [app-ssr] (ecmascript) <text/javascript>");
'use client';
;
;
;
;
;
;
;
;
;
;
;
;
;
const AddTabSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["z"].object({
    tabName: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["z"].string().min(1, 'Tab name is required.')
});
function AddTabDialog({ toolId }) {
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isPending, startTransition] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTransition"])();
    const { toast } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useToast"])();
    const form = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useForm"])({
        resolver: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hookform$2f$resolvers$2f$zod$2f$dist$2f$zod$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["zodResolver"])(AddTabSchema),
        defaultValues: {
            tabName: ''
        }
    });
    const onSubmit = async (values)=>{
        startTransition(async ()=>{
            try {
                const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$data$3a$42a851__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["addTab"])(toolId, values.tabName);
                if (result.success) {
                    toast({
                        title: 'Tab Created!',
                        description: `The tab "${values.tabName}" has been added.`
                    });
                    setOpen(false);
                    form.reset();
                } else {
                    throw new Error(result.error);
                }
            } catch (error) {
                console.error('Failed to create new tab:', error);
                toast({
                    variant: 'destructive',
                    title: 'Error',
                    description: error instanceof Error ? error.message : 'Failed to create new tab. Please try again.'
                });
            }
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Dialog"], {
        open: open,
        onOpenChange: setOpen,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogTrigger"], {
                asChild: true,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                    variant: "outline",
                    size: "icon",
                    className: "h-8 w-8 shrink-0",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                            className: "h-4 w-4"
                        }, void 0, false, {
                            fileName: "[project]/src/components/forge/add-tab-dialog.tsx",
                            lineNumber: 87,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "sr-only",
                            children: "Add Tab"
                        }, void 0, false, {
                            fileName: "[project]/src/components/forge/add-tab-dialog.tsx",
                            lineNumber: 88,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/forge/add-tab-dialog.tsx",
                    lineNumber: 86,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/forge/add-tab-dialog.tsx",
                lineNumber: 85,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogContent"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogHeader"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogTitle"], {
                                children: "Add a New Tab"
                            }, void 0, false, {
                                fileName: "[project]/src/components/forge/add-tab-dialog.tsx",
                                lineNumber: 93,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogDescription"], {
                                children: "Enter a name for your new tab. A new tab will be created with a default editor panel."
                            }, void 0, false, {
                                fileName: "[project]/src/components/forge/add-tab-dialog.tsx",
                                lineNumber: 94,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/forge/add-tab-dialog.tsx",
                        lineNumber: 92,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Form"], {
                        ...form,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                            onSubmit: form.handleSubmit(onSubmit),
                            className: "space-y-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FormField"], {
                                    control: form.control,
                                    name: "tabName",
                                    render: ({ field })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FormItem"], {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FormLabel"], {
                                                    children: "Tab Name"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/forge/add-tab-dialog.tsx",
                                                    lineNumber: 105,
                                                    columnNumber: 19
                                                }, void 0),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FormControl"], {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                                        placeholder: "e.g., 'Chapter 2'",
                                                        ...field
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/forge/add-tab-dialog.tsx",
                                                        lineNumber: 107,
                                                        columnNumber: 21
                                                    }, void 0)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/forge/add-tab-dialog.tsx",
                                                    lineNumber: 106,
                                                    columnNumber: 19
                                                }, void 0),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FormMessage"], {}, void 0, false, {
                                                    fileName: "[project]/src/components/forge/add-tab-dialog.tsx",
                                                    lineNumber: 109,
                                                    columnNumber: 19
                                                }, void 0)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/forge/add-tab-dialog.tsx",
                                            lineNumber: 104,
                                            columnNumber: 17
                                        }, void 0)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/forge/add-tab-dialog.tsx",
                                    lineNumber: 100,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogFooter"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogClose"], {
                                            asChild: true,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                                variant: "ghost",
                                                children: "Cancel"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/forge/add-tab-dialog.tsx",
                                                lineNumber: 115,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/forge/add-tab-dialog.tsx",
                                            lineNumber: 114,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                            type: "submit",
                                            disabled: isPending,
                                            children: [
                                                isPending && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                                    className: "mr-2 animate-spin"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/forge/add-tab-dialog.tsx",
                                                    lineNumber: 118,
                                                    columnNumber: 31
                                                }, this),
                                                "Add Tab"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/forge/add-tab-dialog.tsx",
                                            lineNumber: 117,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/forge/add-tab-dialog.tsx",
                                    lineNumber: 113,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/forge/add-tab-dialog.tsx",
                            lineNumber: 99,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/forge/add-tab-dialog.tsx",
                        lineNumber: 98,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/forge/add-tab-dialog.tsx",
                lineNumber: 91,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/forge/add-tab-dialog.tsx",
        lineNumber: 84,
        columnNumber: 5
    }, this);
}
}}),
"[project]/src/app/data:7a0c92 [app-ssr] (ecmascript) <text/javascript>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/* __next_internal_action_entry_do_not_use__ [{"60552135523f2a280c5f48c8d9d72391356cbe9b39":"deleteTab"},"src/app/actions.ts",""] */ __turbopack_context__.s({
    "deleteTab": (()=>deleteTab)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-ssr] (ecmascript)");
"use turbopack no side effects";
;
var deleteTab = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createServerReference"])("60552135523f2a280c5f48c8d9d72391356cbe9b39", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findSourceMapURL"], "deleteTab"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vYWN0aW9ucy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHNlcnZlcic7XG5cbmltcG9ydCB7IHByb21pc2VzIGFzIGZzIH0gZnJvbSAnZnMnO1xuaW1wb3J0IHBhdGggZnJvbSAncGF0aCc7XG5pbXBvcnQgeyByZXZhbGlkYXRlUGF0aCB9IGZyb20gJ25leHQvY2FjaGUnO1xuaW1wb3J0IHR5cGUgeyBUb29sLCBUYWIsIFBhbmVsIH0gZnJvbSAnQC9saWIvdG9vbHMtZGF0YSc7XG5pbXBvcnQgeyBkZWZhdWx0VG9vbElkcyB9IGZyb20gJ0AvbGliL3Rvb2xzLWRhdGEnO1xuXG5jb25zdCBjdXN0b21Ub29sc1BhdGggPSBwYXRoLmpvaW4ocHJvY2Vzcy5jd2QoKSwgJ3NyYycsICdsaWInLCAnY3VzdG9tLXRvb2xzLmpzb24nKTtcblxuYXN5bmMgZnVuY3Rpb24gcmVhZEN1c3RvbVRvb2xzKCk6IFByb21pc2U8VG9vbFtdPiB7XG4gICAgdHJ5IHtcbiAgICAgICAgYXdhaXQgZnMuYWNjZXNzKGN1c3RvbVRvb2xzUGF0aCk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgLy8gSWYgdGhlIGZpbGUgZG9lc24ndCBleGlzdCwgY3JlYXRlIGl0IHdpdGggYW4gZW1wdHkgYXJyYXkuXG4gICAgICAgIGlmICgoZXJyb3IgYXMgTm9kZUpTLkVycm5vRXhjZXB0aW9uKS5jb2RlID09PSAnRU5PRU5UJykge1xuICAgICAgICAgICAgYXdhaXQgd3JpdGVDdXN0b21Ub29scyhbXSk7XG4gICAgICAgICAgICByZXR1cm4gW107XG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGFjY2Vzc2luZyBjdXN0b20gdG9vbHMgZmlsZTpcIiwgZXJyb3IpO1xuICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICB9XG5cbiAgICB0cnkge1xuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgZnMucmVhZEZpbGUoY3VzdG9tVG9vbHNQYXRoLCAndXRmLTgnKTtcbiAgICAgICAgLy8gSWYgdGhlIGZpbGUgaXMgZW1wdHksIHJldHVybiBhbiBlbXB0eSBhcnJheS5cbiAgICAgICAgaWYgKCFkYXRhKSB7XG4gICAgICAgICAgICByZXR1cm4gW107XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgdG9vbHMgPSBKU09OLnBhcnNlKGRhdGEpO1xuICAgICAgICByZXR1cm4gdG9vbHMubWFwKCh0OiBPbWl0PFRvb2wsICdpY29uJz4pID0+ICh7Li4udCwgaWNvbjogJ0NvbXBvbmVudCd9KSk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIHJlYWRpbmcgb3IgcGFyc2luZyBjdXN0b20gdG9vbHM6XCIsIGVycm9yKTtcbiAgICAgICAgLy8gSWYgcGFyc2luZyBmYWlscywgaXQgbWlnaHQgYmUgYW4gZW1wdHkgb3IgY29ycnVwdGVkIGZpbGUuXG4gICAgICAgIC8vIEl0J3Mgc2FmZXIgdG8gcmV0dXJuIGFuIGVtcHR5IGFycmF5IGFuZCBsZXQgdGhlIG5leHQgd3JpdGUgb3BlcmF0aW9uIGZpeCBpdC5cbiAgICAgICAgcmV0dXJuIFtdO1xuICAgIH1cbn1cblxuYXN5bmMgZnVuY3Rpb24gd3JpdGVDdXN0b21Ub29scyh0b29sczogVG9vbFtdKSB7XG4gICAgLy8gV2UgbmVlZCB0byBzdG9yZSB0aGUgaWNvbiBhcyBhIHN0cmluZyBuYW1lLCBub3QgYSBmdW5jdGlvbi5cbiAgICBjb25zdCBzdG9yYWJsZVRvb2xzID0gdG9vbHMubWFwKHRvb2wgPT4ge1xuICAgICAgICBjb25zdCB7IGljb24sIC4uLnJlc3QgfSA9IHRvb2w7XG4gICAgICAgIGNvbnN0IGljb25OYW1lID0gdHlwZW9mIGljb24gPT09ICdzdHJpbmcnID8gaWNvbiA6IChpY29uIGFzIGFueSk/LmRpc3BsYXlOYW1lIHx8ICdDb21wb25lbnQnO1xuICAgICAgICByZXR1cm4geyAuLi5yZXN0LCBpY29uOiBpY29uTmFtZSB9O1xuICAgIH0pO1xuICAgIGF3YWl0IGZzLndyaXRlRmlsZShjdXN0b21Ub29sc1BhdGgsIEpTT04uc3RyaW5naWZ5KHN0b3JhYmxlVG9vbHMsIG51bGwsIDIpKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHNhdmVUb29sKHRvb2xKU09OOiBzdHJpbmcpIHtcbiAgdHJ5IHtcbiAgICBjb25zdCB0b29scyA9IGF3YWl0IHJlYWRDdXN0b21Ub29scygpO1xuICAgIGNvbnN0IG5ld1Rvb2wgPSBKU09OLnBhcnNlKHRvb2xKU09OKTtcblxuICAgIGNvbnN0IHRvb2xJbmRleCA9IHRvb2xzLmZpbmRJbmRleCh0b29sID0+IHRvb2wuaWQgPT09IG5ld1Rvb2wuaWQpO1xuICAgIGlmICh0b29sSW5kZXggIT09IC0xKSB7XG4gICAgICB0b29sc1t0b29sSW5kZXhdID0gbmV3VG9vbDtcbiAgICB9IGVsc2Uge1xuICAgICAgICB0b29scy5wdXNoKG5ld1Rvb2wpO1xuICAgIH1cblxuICAgIGF3YWl0IHdyaXRlQ3VzdG9tVG9vbHModG9vbHMpO1xuICAgIHJldmFsaWRhdGVQYXRoKCcvJywgJ2xheW91dCcpO1xuICAgIHJldmFsaWRhdGVQYXRoKGAvJHtuZXdUb29sLmlkfWApO1xuXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgdG9vbElkOiBuZXdUb29sLmlkIH07XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcignRmFpbGVkIHRvIHNhdmUgdG9vbDonLCBlcnJvcik7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAnRmFpbGVkIHRvIHNhdmUgdGhlIHRvb2wuJyB9O1xuICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVQYW5lbENvbnRlbnQodG9vbElkOiBzdHJpbmcsIHRhYklkOiBzdHJpbmcsIHBhbmVsSWQ6IHN0cmluZywgbmV3Q29udGVudDogc3RyaW5nKSB7XG4gICAgaWYgKGRlZmF1bHRUb29sSWRzLmluY2x1ZGVzKHRvb2xJZCkpIHtcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9O1xuICAgIH1cblxuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHRvb2xzID0gYXdhaXQgcmVhZEN1c3RvbVRvb2xzKCk7XG4gICAgICAgIGNvbnN0IHRvb2xJbmRleCA9IHRvb2xzLmZpbmRJbmRleCh0ID0+IHQuaWQgPT09IHRvb2xJZCk7XG5cbiAgICAgICAgaWYgKHRvb2xJbmRleCA9PT0gLTEpIHtcbiAgICAgICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogJ1Rvb2wgbm90IGZvdW5kLicgfTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHRhYkluZGV4ID0gdG9vbHNbdG9vbEluZGV4XS5sYXlvdXQuZmluZEluZGV4KHQgPT4gdC5pZCA9PT0gdGFiSWQpO1xuICAgICAgICBpZiAodGFiSW5kZXggPT09IC0xKSB7XG4gICAgICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6ICdUYWIgbm90IGZvdW5kLicgfTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHBhbmVsSW5kZXggPSB0b29sc1t0b29sSW5kZXhdLmxheW91dFt0YWJJbmRleF0ucGFuZWxzLmZpbmRJbmRleChwID0+IHAuaWQgPT09IHBhbmVsSWQpO1xuICAgICAgICBpZiAocGFuZWxJbmRleCA9PT0gLTEpIHtcbiAgICAgICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogJ1BhbmVsIG5vdCBmb3VuZC4nIH07XG4gICAgICAgIH1cblxuICAgICAgICB0b29sc1t0b29sSW5kZXhdLmxheW91dFt0YWJJbmRleF0ucGFuZWxzW3BhbmVsSW5kZXhdLmNvbnRlbnQgPSBuZXdDb250ZW50O1xuXG4gICAgICAgIGF3YWl0IHdyaXRlQ3VzdG9tVG9vbHModG9vbHMpO1xuICAgICAgICByZXZhbGlkYXRlUGF0aChgLyR7dG9vbElkfWApO1xuXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdGYWlsZWQgdG8gdXBkYXRlIHBhbmVsIGNvbnRlbnQ6JywgZXJyb3IpO1xuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6ICdGYWlsZWQgdG8gdXBkYXRlIHBhbmVsIGNvbnRlbnQuJyB9O1xuICAgIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZVRvb2wodG9vbElkOiBzdHJpbmcpIHtcbiAgICB0cnkge1xuICAgICAgICBpZiAoZGVmYXVsdFRvb2xJZHMuaW5jbHVkZXModG9vbElkKSkge1xuICAgICAgICAgICAgcmV2YWxpZGF0ZVBhdGgoJy8nLCAnbGF5b3V0Jyk7XG4gICAgICAgICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlIH07XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgdG9vbHMgPSBhd2FpdCByZWFkQ3VzdG9tVG9vbHMoKTtcbiAgICAgICAgY29uc3QgaW5pdGlhbExlbmd0aCA9IHRvb2xzLmxlbmd0aDtcbiAgICAgICAgdG9vbHMgPSB0b29scy5maWx0ZXIodCA9PiB0LmlkICE9PSB0b29sSWQpO1xuXG4gICAgICAgIGlmICh0b29scy5sZW5ndGggPT09IGluaXRpYWxMZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogJ0N1c3RvbSB0b29sIG5vdCBmb3VuZC4nIH07XG4gICAgICAgIH1cblxuICAgICAgICBhd2FpdCB3cml0ZUN1c3RvbVRvb2xzKHRvb2xzKTtcbiAgICAgICAgcmV2YWxpZGF0ZVBhdGgoJy8nLCAnbGF5b3V0Jyk7XG5cbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9O1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0ZhaWxlZCB0byBkZWxldGUgdG9vbDonLCBlcnJvcik7XG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogJ0ZhaWxlZCB0byBkZWxldGUgdGhlIHRvb2wuJyB9O1xuICAgIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGFkZFRhYih0b29sSWQ6IHN0cmluZywgdGFiTmFtZTogc3RyaW5nKSB7XG4gICAgaWYgKGRlZmF1bHRUb29sSWRzLmluY2x1ZGVzKHRvb2xJZCkpIHtcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAnQ2Fubm90IGFkZCB0YWJzIHRvIGEgZGVmYXVsdCB0b29sLicgfTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgdG9vbHMgPSBhd2FpdCByZWFkQ3VzdG9tVG9vbHMoKTtcbiAgICAgICAgY29uc3QgdG9vbEluZGV4ID0gdG9vbHMuZmluZEluZGV4KHQgPT4gdC5pZCA9PT0gdG9vbElkKTtcblxuICAgICAgICBpZiAodG9vbEluZGV4ID09PSAtMSkge1xuICAgICAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAnVG9vbCBub3QgZm91bmQuJyB9O1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgbmV3VGFiOiBUYWIgPSB7XG4gICAgICAgICAgICBpZDogYHRhYi0ke0RhdGUubm93KCl9YCxcbiAgICAgICAgICAgIG5hbWU6IHRhYk5hbWUsXG4gICAgICAgICAgICBwYW5lbHM6IFt7XG4gICAgICAgICAgICAgICAgaWQ6IGBwYW5lbC0ke0RhdGUubm93KCl9YCxcbiAgICAgICAgICAgICAgICB0aXRsZTogJ05ldyBFZGl0b3InLFxuICAgICAgICAgICAgICAgIHR5cGU6ICdlZGl0b3InLFxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICcnLFxuICAgICAgICAgICAgICAgIHB1cnBvc2U6ICdBIG5ldyBlZGl0b3IgcGFuZWwuJ1xuICAgICAgICAgICAgfV1cbiAgICAgICAgfTtcblxuICAgICAgICB0b29sc1t0b29sSW5kZXhdLmxheW91dC5wdXNoKG5ld1RhYik7XG4gICAgICAgIGF3YWl0IHdyaXRlQ3VzdG9tVG9vbHModG9vbHMpO1xuICAgICAgICByZXZhbGlkYXRlUGF0aChgLyR7dG9vbElkfWApO1xuXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIG5ld1RhYiB9O1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0ZhaWxlZCB0byBhZGQgdGFiOicsIGVycm9yKTtcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAnRmFpbGVkIHRvIGFkZCBhIG5ldyB0YWIuJyB9O1xuICAgIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZVRhYih0b29sSWQ6IHN0cmluZywgdGFiSWQ6IHN0cmluZykge1xuICAgICBpZiAoZGVmYXVsdFRvb2xJZHMuaW5jbHVkZXModG9vbElkKSkge1xuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6ICdDYW5ub3QgZGVsZXRlIHRhYnMgZnJvbSBhIGRlZmF1bHQgdG9vbC4nIH07XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHRvb2xzID0gYXdhaXQgcmVhZEN1c3RvbVRvb2xzKCk7XG4gICAgICAgIGNvbnN0IHRvb2xJbmRleCA9IHRvb2xzLmZpbmRJbmRleCh0ID0+IHQuaWQgPT09IHRvb2xJZCk7XG5cbiAgICAgICAgaWYgKHRvb2xJbmRleCA9PT0gLTEpIHtcbiAgICAgICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogJ1Rvb2wgbm90IGZvdW5kLicgfTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGluaXRpYWxUYWJDb3VudCA9IHRvb2xzW3Rvb2xJbmRleF0ubGF5b3V0Lmxlbmd0aDtcbiAgICAgICAgdG9vbHNbdG9vbEluZGV4XS5sYXlvdXQgPSB0b29sc1t0b29sSW5kZXhdLmxheW91dC5maWx0ZXIodCA9PiB0LmlkICE9PSB0YWJJZCk7XG5cbiAgICAgICAgaWYgKHRvb2xzW3Rvb2xJbmRleF0ubGF5b3V0Lmxlbmd0aCA9PT0gaW5pdGlhbFRhYkNvdW50KSB7XG4gICAgICAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAnVGFiIG5vdCBmb3VuZC4nIH07XG4gICAgICAgIH1cblxuICAgICAgICBhd2FpdCB3cml0ZUN1c3RvbVRvb2xzKHRvb2xzKTtcbiAgICAgICAgcmV2YWxpZGF0ZVBhdGgoYC8ke3Rvb2xJZH1gKTtcbiAgICAgICAgcmV2YWxpZGF0ZVBhdGgoJy8nLCAnbGF5b3V0Jyk7XG5cblxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlIH07XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignRmFpbGVkIHRvIGRlbGV0ZSB0YWI6JywgZXJyb3IpO1xuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6ICdGYWlsZWQgdG8gZGVsZXRlIHRoZSB0YWIuJyB9O1xuICAgIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGFkZFBhbmVsKHRvb2xJZDogc3RyaW5nLCB0YWJJZDogc3RyaW5nLCBwYW5lbERhdGE6IE9taXQ8UGFuZWwsICdpZCcgfCAnY29udGVudCc+KSB7XG4gICAgaWYgKGRlZmF1bHRUb29sSWRzLmluY2x1ZGVzKHRvb2xJZCkpIHtcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAnQ2Fubm90IGFkZCBwYW5lbHMgdG8gYSBkZWZhdWx0IHRvb2wuJyB9O1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICBjb25zdCB0b29scyA9IGF3YWl0IHJlYWRDdXN0b21Ub29scygpO1xuICAgICAgICBjb25zdCB0b29sSW5kZXggPSB0b29scy5maW5kSW5kZXgodCA9PiB0LmlkID09PSB0b29sSWQpO1xuICAgICAgICBpZiAodG9vbEluZGV4ID09PSAtMSkgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAnVG9vbCBub3QgZm91bmQuJyB9O1xuXG4gICAgICAgIGNvbnN0IHRhYkluZGV4ID0gdG9vbHNbdG9vbEluZGV4XS5sYXlvdXQuZmluZEluZGV4KHQgPT4gdC5pZCA9PT0gdGFiSWQpO1xuICAgICAgICBpZiAodGFiSW5kZXggPT09IC0xKSByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6ICdUYWIgbm90IGZvdW5kLicgfTtcblxuICAgICAgICBjb25zdCBuZXdQYW5lbDogUGFuZWwgPSB7XG4gICAgICAgICAgICAuLi5wYW5lbERhdGEsXG4gICAgICAgICAgICBpZDogYHBhbmVsLSR7RGF0ZS5ub3coKX1gLFxuICAgICAgICAgICAgY29udGVudDogcGFuZWxEYXRhLnR5cGUgPT09ICdtZWRpYScgPyAnJyA6IGBuZXdfJHtwYW5lbERhdGEudHlwZX1fY29udGVudGAsXG4gICAgICAgIH07XG5cbiAgICAgICAgdG9vbHNbdG9vbEluZGV4XS5sYXlvdXRbdGFiSW5kZXhdLnBhbmVscy5wdXNoKG5ld1BhbmVsKTtcbiAgICAgICAgYXdhaXQgd3JpdGVDdXN0b21Ub29scyh0b29scyk7XG4gICAgICAgIHJldmFsaWRhdGVQYXRoKGAvJHt0b29sSWR9YCk7XG5cbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgbmV3UGFuZWwgfTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdGYWlsZWQgdG8gYWRkIHBhbmVsOicsIGVycm9yKTtcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAnRmFpbGVkIHRvIGFkZCBhIG5ldyBwYW5lbC4nIH07XG4gICAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlUGFuZWwodG9vbElkOiBzdHJpbmcsIHRhYklkOiBzdHJpbmcsIHBhbmVsSWQ6IHN0cmluZykge1xuICAgIGlmIChkZWZhdWx0VG9vbElkcy5pbmNsdWRlcyh0b29sSWQpKSB7XG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogJ0Nhbm5vdCBkZWxldGUgcGFuZWxzIGZyb20gYSBkZWZhdWx0IHRvb2wuJyB9O1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICBjb25zdCB0b29scyA9IGF3YWl0IHJlYWRDdXN0b21Ub29scygpO1xuICAgICAgICBjb25zdCB0b29sSW5kZXggPSB0b29scy5maW5kSW5kZXgodCA9PiB0LmlkID09PSB0b29sSWQpO1xuICAgICAgICBpZiAodG9vbEluZGV4ID09PSAtMSkgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAnVG9vbCBub3QgZm91bmQuJyB9O1xuXG4gICAgICAgIGNvbnN0IHRhYkluZGV4ID0gdG9vbHNbdG9vbEluZGV4XS5sYXlvdXQuZmluZEluZGV4KHQgPT4gdC5pZCA9PT0gdGFiSWQpO1xuICAgICAgICBpZiAodGFiSW5kZXggPT09IC0xKSByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6ICdUYWIgbm90IGZvdW5kLicgfTtcblxuICAgICAgICBjb25zdCBpbml0aWFsUGFuZWxDb3VudCA9IHRvb2xzW3Rvb2xJbmRleF0ubGF5b3V0W3RhYkluZGV4XS5wYW5lbHMubGVuZ3RoO1xuICAgICAgICB0b29sc1t0b29sSW5kZXhdLmxheW91dFt0YWJJbmRleF0ucGFuZWxzID0gdG9vbHNbdG9vbEluZGV4XS5sYXlvdXRbdGFiSW5kZXhdLnBhbmVscy5maWx0ZXIocCA9PiBwLmlkICE9PSBwYW5lbElkKTtcblxuICAgICAgICBpZiAodG9vbHNbdG9vbEluZGV4XS5sYXlvdXRbdGFiSW5kZXhdLnBhbmVscy5sZW5ndGggPT09IGluaXRpYWxQYW5lbENvdW50KSB7XG4gICAgICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6ICdQYW5lbCBub3QgZm91bmQuJyB9O1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBhd2FpdCB3cml0ZUN1c3RvbVRvb2xzKHRvb2xzKTtcbiAgICAgICAgcmV2YWxpZGF0ZVBhdGgoYC8ke3Rvb2xJZH1gKTtcblxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlIH07XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignRmFpbGVkIHRvIGRlbGV0ZSBwYW5lbDonLCBlcnJvcik7XG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogJ0ZhaWxlZCB0byBkZWxldGUgdGhlIHBhbmVsLicgfTtcbiAgICB9XG59XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6InFSQXVLc0IifQ==
}}),
"[project]/src/components/forge/delete-tab-dialog.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "DeleteTabDialog": (()=>DeleteTabDialog)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/alert-dialog.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$data$3a$7a0c92__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/app/data:7a0c92 [app-ssr] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/use-toast.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
function DeleteTabDialog({ toolId, tabId, tabName, children }) {
    const [isPending, startTransition] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTransition"])();
    const { toast } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useToast"])();
    const handleConfirmDelete = ()=>{
        startTransition(async ()=>{
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$data$3a$7a0c92__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["deleteTab"])(toolId, tabId);
            if (result.success) {
                toast({
                    title: 'Tab Deleted',
                    description: `The tab "${tabName}" has been removed.`
                });
            } else {
                toast({
                    variant: 'destructive',
                    title: 'Error',
                    description: result.error || 'Failed to delete the tab.'
                });
            }
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AlertDialog"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AlertDialogTrigger"], {
                asChild: true,
                children: children
            }, void 0, false, {
                fileName: "[project]/src/components/forge/delete-tab-dialog.tsx",
                lineNumber: 54,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AlertDialogContent"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AlertDialogHeader"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AlertDialogTitle"], {
                                children: "Are you absolutely sure?"
                            }, void 0, false, {
                                fileName: "[project]/src/components/forge/delete-tab-dialog.tsx",
                                lineNumber: 57,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AlertDialogDescription"], {
                                children: [
                                    'This action cannot be undone. This will permanently delete the "',
                                    tabName,
                                    '" tab and all of its panels.'
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/forge/delete-tab-dialog.tsx",
                                lineNumber: 58,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/forge/delete-tab-dialog.tsx",
                        lineNumber: 56,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AlertDialogFooter"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AlertDialogCancel"], {
                                children: "Cancel"
                            }, void 0, false, {
                                fileName: "[project]/src/components/forge/delete-tab-dialog.tsx",
                                lineNumber: 64,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AlertDialogAction"], {
                                onClick: handleConfirmDelete,
                                disabled: isPending,
                                children: isPending ? 'Deleting...' : 'Continue'
                            }, void 0, false, {
                                fileName: "[project]/src/components/forge/delete-tab-dialog.tsx",
                                lineNumber: 65,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/forge/delete-tab-dialog.tsx",
                        lineNumber: 63,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/forge/delete-tab-dialog.tsx",
                lineNumber: 55,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/forge/delete-tab-dialog.tsx",
        lineNumber: 53,
        columnNumber: 5
    }, this);
}
}}),
"[project]/src/components/ui/select.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Select": (()=>Select),
    "SelectContent": (()=>SelectContent),
    "SelectGroup": (()=>SelectGroup),
    "SelectItem": (()=>SelectItem),
    "SelectLabel": (()=>SelectLabel),
    "SelectScrollDownButton": (()=>SelectScrollDownButton),
    "SelectScrollUpButton": (()=>SelectScrollUpButton),
    "SelectSeparator": (()=>SelectSeparator),
    "SelectTrigger": (()=>SelectTrigger),
    "SelectValue": (()=>SelectValue)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-select/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-ssr] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-ssr] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronUp$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-up.js [app-ssr] (ecmascript) <export default as ChevronUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
const Select = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Root"];
const SelectGroup = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Group"];
const SelectValue = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Value"];
const SelectTrigger = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, children, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Trigger"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1", className),
        ...props,
        children: [
            children,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Icon"], {
                asChild: true,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                    className: "h-4 w-4 opacity-50"
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/select.tsx",
                    lineNumber: 29,
                    columnNumber: 7
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/ui/select.tsx",
                lineNumber: 28,
                columnNumber: 5
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/select.tsx",
        lineNumber: 19,
        columnNumber: 3
    }, this));
SelectTrigger.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Trigger"].displayName;
const SelectScrollUpButton = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ScrollUpButton"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex cursor-default items-center justify-center py-1", className),
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronUp$3e$__["ChevronUp"], {
            className: "h-4 w-4"
        }, void 0, false, {
            fileName: "[project]/src/components/ui/select.tsx",
            lineNumber: 47,
            columnNumber: 5
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/ui/select.tsx",
        lineNumber: 39,
        columnNumber: 3
    }, this));
SelectScrollUpButton.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ScrollUpButton"].displayName;
const SelectScrollDownButton = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ScrollDownButton"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex cursor-default items-center justify-center py-1", className),
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
            className: "h-4 w-4"
        }, void 0, false, {
            fileName: "[project]/src/components/ui/select.tsx",
            lineNumber: 64,
            columnNumber: 5
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/ui/select.tsx",
        lineNumber: 56,
        columnNumber: 3
    }, this));
SelectScrollDownButton.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ScrollDownButton"].displayName;
const SelectContent = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, children, position = "popper", ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Portal"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Content"], {
            ref: ref,
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", position === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1", className),
            position: position,
            ...props,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SelectScrollUpButton, {}, void 0, false, {
                    fileName: "[project]/src/components/ui/select.tsx",
                    lineNumber: 86,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Viewport"], {
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("p-1", position === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"),
                    children: children
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/select.tsx",
                    lineNumber: 87,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SelectScrollDownButton, {}, void 0, false, {
                    fileName: "[project]/src/components/ui/select.tsx",
                    lineNumber: 96,
                    columnNumber: 7
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ui/select.tsx",
            lineNumber: 75,
            columnNumber: 5
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/ui/select.tsx",
        lineNumber: 74,
        columnNumber: 3
    }, this));
SelectContent.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Content"].displayName;
const SelectLabel = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("py-1.5 pl-8 pr-2 text-sm font-semibold", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/select.tsx",
        lineNumber: 106,
        columnNumber: 3
    }, this));
SelectLabel.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"].displayName;
const SelectItem = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, children, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Item"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", className),
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ItemIndicator"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                        className: "h-4 w-4"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/select.tsx",
                        lineNumber: 128,
                        columnNumber: 9
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/select.tsx",
                    lineNumber: 127,
                    columnNumber: 7
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/ui/select.tsx",
                lineNumber: 126,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ItemText"], {
                children: children
            }, void 0, false, {
                fileName: "[project]/src/components/ui/select.tsx",
                lineNumber: 132,
                columnNumber: 5
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/select.tsx",
        lineNumber: 118,
        columnNumber: 3
    }, this));
SelectItem.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Item"].displayName;
const SelectSeparator = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Separator"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("-mx-1 my-1 h-px bg-muted", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/select.tsx",
        lineNumber: 141,
        columnNumber: 3
    }, this));
SelectSeparator.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Separator"].displayName;
;
}}),
"[project]/src/app/data:c68601 [app-ssr] (ecmascript) <text/javascript>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/* __next_internal_action_entry_do_not_use__ [{"7073f0bbcfb0dd0632ef6d01f08898e681a46ee881":"addPanel"},"src/app/actions.ts",""] */ __turbopack_context__.s({
    "addPanel": (()=>addPanel)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-ssr] (ecmascript)");
"use turbopack no side effects";
;
var addPanel = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createServerReference"])("7073f0bbcfb0dd0632ef6d01f08898e681a46ee881", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findSourceMapURL"], "addPanel"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vYWN0aW9ucy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHNlcnZlcic7XG5cbmltcG9ydCB7IHByb21pc2VzIGFzIGZzIH0gZnJvbSAnZnMnO1xuaW1wb3J0IHBhdGggZnJvbSAncGF0aCc7XG5pbXBvcnQgeyByZXZhbGlkYXRlUGF0aCB9IGZyb20gJ25leHQvY2FjaGUnO1xuaW1wb3J0IHR5cGUgeyBUb29sLCBUYWIsIFBhbmVsIH0gZnJvbSAnQC9saWIvdG9vbHMtZGF0YSc7XG5pbXBvcnQgeyBkZWZhdWx0VG9vbElkcyB9IGZyb20gJ0AvbGliL3Rvb2xzLWRhdGEnO1xuXG5jb25zdCBjdXN0b21Ub29sc1BhdGggPSBwYXRoLmpvaW4ocHJvY2Vzcy5jd2QoKSwgJ3NyYycsICdsaWInLCAnY3VzdG9tLXRvb2xzLmpzb24nKTtcblxuYXN5bmMgZnVuY3Rpb24gcmVhZEN1c3RvbVRvb2xzKCk6IFByb21pc2U8VG9vbFtdPiB7XG4gICAgdHJ5IHtcbiAgICAgICAgYXdhaXQgZnMuYWNjZXNzKGN1c3RvbVRvb2xzUGF0aCk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgLy8gSWYgdGhlIGZpbGUgZG9lc24ndCBleGlzdCwgY3JlYXRlIGl0IHdpdGggYW4gZW1wdHkgYXJyYXkuXG4gICAgICAgIGlmICgoZXJyb3IgYXMgTm9kZUpTLkVycm5vRXhjZXB0aW9uKS5jb2RlID09PSAnRU5PRU5UJykge1xuICAgICAgICAgICAgYXdhaXQgd3JpdGVDdXN0b21Ub29scyhbXSk7XG4gICAgICAgICAgICByZXR1cm4gW107XG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGFjY2Vzc2luZyBjdXN0b20gdG9vbHMgZmlsZTpcIiwgZXJyb3IpO1xuICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICB9XG5cbiAgICB0cnkge1xuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgZnMucmVhZEZpbGUoY3VzdG9tVG9vbHNQYXRoLCAndXRmLTgnKTtcbiAgICAgICAgLy8gSWYgdGhlIGZpbGUgaXMgZW1wdHksIHJldHVybiBhbiBlbXB0eSBhcnJheS5cbiAgICAgICAgaWYgKCFkYXRhKSB7XG4gICAgICAgICAgICByZXR1cm4gW107XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgdG9vbHMgPSBKU09OLnBhcnNlKGRhdGEpO1xuICAgICAgICByZXR1cm4gdG9vbHMubWFwKCh0OiBPbWl0PFRvb2wsICdpY29uJz4pID0+ICh7Li4udCwgaWNvbjogJ0NvbXBvbmVudCd9KSk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIHJlYWRpbmcgb3IgcGFyc2luZyBjdXN0b20gdG9vbHM6XCIsIGVycm9yKTtcbiAgICAgICAgLy8gSWYgcGFyc2luZyBmYWlscywgaXQgbWlnaHQgYmUgYW4gZW1wdHkgb3IgY29ycnVwdGVkIGZpbGUuXG4gICAgICAgIC8vIEl0J3Mgc2FmZXIgdG8gcmV0dXJuIGFuIGVtcHR5IGFycmF5IGFuZCBsZXQgdGhlIG5leHQgd3JpdGUgb3BlcmF0aW9uIGZpeCBpdC5cbiAgICAgICAgcmV0dXJuIFtdO1xuICAgIH1cbn1cblxuYXN5bmMgZnVuY3Rpb24gd3JpdGVDdXN0b21Ub29scyh0b29sczogVG9vbFtdKSB7XG4gICAgLy8gV2UgbmVlZCB0byBzdG9yZSB0aGUgaWNvbiBhcyBhIHN0cmluZyBuYW1lLCBub3QgYSBmdW5jdGlvbi5cbiAgICBjb25zdCBzdG9yYWJsZVRvb2xzID0gdG9vbHMubWFwKHRvb2wgPT4ge1xuICAgICAgICBjb25zdCB7IGljb24sIC4uLnJlc3QgfSA9IHRvb2w7XG4gICAgICAgIGNvbnN0IGljb25OYW1lID0gdHlwZW9mIGljb24gPT09ICdzdHJpbmcnID8gaWNvbiA6IChpY29uIGFzIGFueSk/LmRpc3BsYXlOYW1lIHx8ICdDb21wb25lbnQnO1xuICAgICAgICByZXR1cm4geyAuLi5yZXN0LCBpY29uOiBpY29uTmFtZSB9O1xuICAgIH0pO1xuICAgIGF3YWl0IGZzLndyaXRlRmlsZShjdXN0b21Ub29sc1BhdGgsIEpTT04uc3RyaW5naWZ5KHN0b3JhYmxlVG9vbHMsIG51bGwsIDIpKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHNhdmVUb29sKHRvb2xKU09OOiBzdHJpbmcpIHtcbiAgdHJ5IHtcbiAgICBjb25zdCB0b29scyA9IGF3YWl0IHJlYWRDdXN0b21Ub29scygpO1xuICAgIGNvbnN0IG5ld1Rvb2wgPSBKU09OLnBhcnNlKHRvb2xKU09OKTtcblxuICAgIGNvbnN0IHRvb2xJbmRleCA9IHRvb2xzLmZpbmRJbmRleCh0b29sID0+IHRvb2wuaWQgPT09IG5ld1Rvb2wuaWQpO1xuICAgIGlmICh0b29sSW5kZXggIT09IC0xKSB7XG4gICAgICB0b29sc1t0b29sSW5kZXhdID0gbmV3VG9vbDtcbiAgICB9IGVsc2Uge1xuICAgICAgICB0b29scy5wdXNoKG5ld1Rvb2wpO1xuICAgIH1cblxuICAgIGF3YWl0IHdyaXRlQ3VzdG9tVG9vbHModG9vbHMpO1xuICAgIHJldmFsaWRhdGVQYXRoKCcvJywgJ2xheW91dCcpO1xuICAgIHJldmFsaWRhdGVQYXRoKGAvJHtuZXdUb29sLmlkfWApO1xuXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgdG9vbElkOiBuZXdUb29sLmlkIH07XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcignRmFpbGVkIHRvIHNhdmUgdG9vbDonLCBlcnJvcik7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAnRmFpbGVkIHRvIHNhdmUgdGhlIHRvb2wuJyB9O1xuICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVQYW5lbENvbnRlbnQodG9vbElkOiBzdHJpbmcsIHRhYklkOiBzdHJpbmcsIHBhbmVsSWQ6IHN0cmluZywgbmV3Q29udGVudDogc3RyaW5nKSB7XG4gICAgaWYgKGRlZmF1bHRUb29sSWRzLmluY2x1ZGVzKHRvb2xJZCkpIHtcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9O1xuICAgIH1cblxuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHRvb2xzID0gYXdhaXQgcmVhZEN1c3RvbVRvb2xzKCk7XG4gICAgICAgIGNvbnN0IHRvb2xJbmRleCA9IHRvb2xzLmZpbmRJbmRleCh0ID0+IHQuaWQgPT09IHRvb2xJZCk7XG5cbiAgICAgICAgaWYgKHRvb2xJbmRleCA9PT0gLTEpIHtcbiAgICAgICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogJ1Rvb2wgbm90IGZvdW5kLicgfTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHRhYkluZGV4ID0gdG9vbHNbdG9vbEluZGV4XS5sYXlvdXQuZmluZEluZGV4KHQgPT4gdC5pZCA9PT0gdGFiSWQpO1xuICAgICAgICBpZiAodGFiSW5kZXggPT09IC0xKSB7XG4gICAgICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6ICdUYWIgbm90IGZvdW5kLicgfTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHBhbmVsSW5kZXggPSB0b29sc1t0b29sSW5kZXhdLmxheW91dFt0YWJJbmRleF0ucGFuZWxzLmZpbmRJbmRleChwID0+IHAuaWQgPT09IHBhbmVsSWQpO1xuICAgICAgICBpZiAocGFuZWxJbmRleCA9PT0gLTEpIHtcbiAgICAgICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogJ1BhbmVsIG5vdCBmb3VuZC4nIH07XG4gICAgICAgIH1cblxuICAgICAgICB0b29sc1t0b29sSW5kZXhdLmxheW91dFt0YWJJbmRleF0ucGFuZWxzW3BhbmVsSW5kZXhdLmNvbnRlbnQgPSBuZXdDb250ZW50O1xuXG4gICAgICAgIGF3YWl0IHdyaXRlQ3VzdG9tVG9vbHModG9vbHMpO1xuICAgICAgICByZXZhbGlkYXRlUGF0aChgLyR7dG9vbElkfWApO1xuXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdGYWlsZWQgdG8gdXBkYXRlIHBhbmVsIGNvbnRlbnQ6JywgZXJyb3IpO1xuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6ICdGYWlsZWQgdG8gdXBkYXRlIHBhbmVsIGNvbnRlbnQuJyB9O1xuICAgIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZVRvb2wodG9vbElkOiBzdHJpbmcpIHtcbiAgICB0cnkge1xuICAgICAgICBpZiAoZGVmYXVsdFRvb2xJZHMuaW5jbHVkZXModG9vbElkKSkge1xuICAgICAgICAgICAgcmV2YWxpZGF0ZVBhdGgoJy8nLCAnbGF5b3V0Jyk7XG4gICAgICAgICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlIH07XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgdG9vbHMgPSBhd2FpdCByZWFkQ3VzdG9tVG9vbHMoKTtcbiAgICAgICAgY29uc3QgaW5pdGlhbExlbmd0aCA9IHRvb2xzLmxlbmd0aDtcbiAgICAgICAgdG9vbHMgPSB0b29scy5maWx0ZXIodCA9PiB0LmlkICE9PSB0b29sSWQpO1xuXG4gICAgICAgIGlmICh0b29scy5sZW5ndGggPT09IGluaXRpYWxMZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogJ0N1c3RvbSB0b29sIG5vdCBmb3VuZC4nIH07XG4gICAgICAgIH1cblxuICAgICAgICBhd2FpdCB3cml0ZUN1c3RvbVRvb2xzKHRvb2xzKTtcbiAgICAgICAgcmV2YWxpZGF0ZVBhdGgoJy8nLCAnbGF5b3V0Jyk7XG5cbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9O1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0ZhaWxlZCB0byBkZWxldGUgdG9vbDonLCBlcnJvcik7XG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogJ0ZhaWxlZCB0byBkZWxldGUgdGhlIHRvb2wuJyB9O1xuICAgIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGFkZFRhYih0b29sSWQ6IHN0cmluZywgdGFiTmFtZTogc3RyaW5nKSB7XG4gICAgaWYgKGRlZmF1bHRUb29sSWRzLmluY2x1ZGVzKHRvb2xJZCkpIHtcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAnQ2Fubm90IGFkZCB0YWJzIHRvIGEgZGVmYXVsdCB0b29sLicgfTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgdG9vbHMgPSBhd2FpdCByZWFkQ3VzdG9tVG9vbHMoKTtcbiAgICAgICAgY29uc3QgdG9vbEluZGV4ID0gdG9vbHMuZmluZEluZGV4KHQgPT4gdC5pZCA9PT0gdG9vbElkKTtcblxuICAgICAgICBpZiAodG9vbEluZGV4ID09PSAtMSkge1xuICAgICAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAnVG9vbCBub3QgZm91bmQuJyB9O1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgbmV3VGFiOiBUYWIgPSB7XG4gICAgICAgICAgICBpZDogYHRhYi0ke0RhdGUubm93KCl9YCxcbiAgICAgICAgICAgIG5hbWU6IHRhYk5hbWUsXG4gICAgICAgICAgICBwYW5lbHM6IFt7XG4gICAgICAgICAgICAgICAgaWQ6IGBwYW5lbC0ke0RhdGUubm93KCl9YCxcbiAgICAgICAgICAgICAgICB0aXRsZTogJ05ldyBFZGl0b3InLFxuICAgICAgICAgICAgICAgIHR5cGU6ICdlZGl0b3InLFxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICcnLFxuICAgICAgICAgICAgICAgIHB1cnBvc2U6ICdBIG5ldyBlZGl0b3IgcGFuZWwuJ1xuICAgICAgICAgICAgfV1cbiAgICAgICAgfTtcblxuICAgICAgICB0b29sc1t0b29sSW5kZXhdLmxheW91dC5wdXNoKG5ld1RhYik7XG4gICAgICAgIGF3YWl0IHdyaXRlQ3VzdG9tVG9vbHModG9vbHMpO1xuICAgICAgICByZXZhbGlkYXRlUGF0aChgLyR7dG9vbElkfWApO1xuXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIG5ld1RhYiB9O1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0ZhaWxlZCB0byBhZGQgdGFiOicsIGVycm9yKTtcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAnRmFpbGVkIHRvIGFkZCBhIG5ldyB0YWIuJyB9O1xuICAgIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZVRhYih0b29sSWQ6IHN0cmluZywgdGFiSWQ6IHN0cmluZykge1xuICAgICBpZiAoZGVmYXVsdFRvb2xJZHMuaW5jbHVkZXModG9vbElkKSkge1xuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6ICdDYW5ub3QgZGVsZXRlIHRhYnMgZnJvbSBhIGRlZmF1bHQgdG9vbC4nIH07XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHRvb2xzID0gYXdhaXQgcmVhZEN1c3RvbVRvb2xzKCk7XG4gICAgICAgIGNvbnN0IHRvb2xJbmRleCA9IHRvb2xzLmZpbmRJbmRleCh0ID0+IHQuaWQgPT09IHRvb2xJZCk7XG5cbiAgICAgICAgaWYgKHRvb2xJbmRleCA9PT0gLTEpIHtcbiAgICAgICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogJ1Rvb2wgbm90IGZvdW5kLicgfTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGluaXRpYWxUYWJDb3VudCA9IHRvb2xzW3Rvb2xJbmRleF0ubGF5b3V0Lmxlbmd0aDtcbiAgICAgICAgdG9vbHNbdG9vbEluZGV4XS5sYXlvdXQgPSB0b29sc1t0b29sSW5kZXhdLmxheW91dC5maWx0ZXIodCA9PiB0LmlkICE9PSB0YWJJZCk7XG5cbiAgICAgICAgaWYgKHRvb2xzW3Rvb2xJbmRleF0ubGF5b3V0Lmxlbmd0aCA9PT0gaW5pdGlhbFRhYkNvdW50KSB7XG4gICAgICAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAnVGFiIG5vdCBmb3VuZC4nIH07XG4gICAgICAgIH1cblxuICAgICAgICBhd2FpdCB3cml0ZUN1c3RvbVRvb2xzKHRvb2xzKTtcbiAgICAgICAgcmV2YWxpZGF0ZVBhdGgoYC8ke3Rvb2xJZH1gKTtcbiAgICAgICAgcmV2YWxpZGF0ZVBhdGgoJy8nLCAnbGF5b3V0Jyk7XG5cblxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlIH07XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignRmFpbGVkIHRvIGRlbGV0ZSB0YWI6JywgZXJyb3IpO1xuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6ICdGYWlsZWQgdG8gZGVsZXRlIHRoZSB0YWIuJyB9O1xuICAgIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGFkZFBhbmVsKHRvb2xJZDogc3RyaW5nLCB0YWJJZDogc3RyaW5nLCBwYW5lbERhdGE6IE9taXQ8UGFuZWwsICdpZCcgfCAnY29udGVudCc+KSB7XG4gICAgaWYgKGRlZmF1bHRUb29sSWRzLmluY2x1ZGVzKHRvb2xJZCkpIHtcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAnQ2Fubm90IGFkZCBwYW5lbHMgdG8gYSBkZWZhdWx0IHRvb2wuJyB9O1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICBjb25zdCB0b29scyA9IGF3YWl0IHJlYWRDdXN0b21Ub29scygpO1xuICAgICAgICBjb25zdCB0b29sSW5kZXggPSB0b29scy5maW5kSW5kZXgodCA9PiB0LmlkID09PSB0b29sSWQpO1xuICAgICAgICBpZiAodG9vbEluZGV4ID09PSAtMSkgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAnVG9vbCBub3QgZm91bmQuJyB9O1xuXG4gICAgICAgIGNvbnN0IHRhYkluZGV4ID0gdG9vbHNbdG9vbEluZGV4XS5sYXlvdXQuZmluZEluZGV4KHQgPT4gdC5pZCA9PT0gdGFiSWQpO1xuICAgICAgICBpZiAodGFiSW5kZXggPT09IC0xKSByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6ICdUYWIgbm90IGZvdW5kLicgfTtcblxuICAgICAgICBjb25zdCBuZXdQYW5lbDogUGFuZWwgPSB7XG4gICAgICAgICAgICAuLi5wYW5lbERhdGEsXG4gICAgICAgICAgICBpZDogYHBhbmVsLSR7RGF0ZS5ub3coKX1gLFxuICAgICAgICAgICAgY29udGVudDogcGFuZWxEYXRhLnR5cGUgPT09ICdtZWRpYScgPyAnJyA6IGBuZXdfJHtwYW5lbERhdGEudHlwZX1fY29udGVudGAsXG4gICAgICAgIH07XG5cbiAgICAgICAgdG9vbHNbdG9vbEluZGV4XS5sYXlvdXRbdGFiSW5kZXhdLnBhbmVscy5wdXNoKG5ld1BhbmVsKTtcbiAgICAgICAgYXdhaXQgd3JpdGVDdXN0b21Ub29scyh0b29scyk7XG4gICAgICAgIHJldmFsaWRhdGVQYXRoKGAvJHt0b29sSWR9YCk7XG5cbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgbmV3UGFuZWwgfTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdGYWlsZWQgdG8gYWRkIHBhbmVsOicsIGVycm9yKTtcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAnRmFpbGVkIHRvIGFkZCBhIG5ldyBwYW5lbC4nIH07XG4gICAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlUGFuZWwodG9vbElkOiBzdHJpbmcsIHRhYklkOiBzdHJpbmcsIHBhbmVsSWQ6IHN0cmluZykge1xuICAgIGlmIChkZWZhdWx0VG9vbElkcy5pbmNsdWRlcyh0b29sSWQpKSB7XG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogJ0Nhbm5vdCBkZWxldGUgcGFuZWxzIGZyb20gYSBkZWZhdWx0IHRvb2wuJyB9O1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICBjb25zdCB0b29scyA9IGF3YWl0IHJlYWRDdXN0b21Ub29scygpO1xuICAgICAgICBjb25zdCB0b29sSW5kZXggPSB0b29scy5maW5kSW5kZXgodCA9PiB0LmlkID09PSB0b29sSWQpO1xuICAgICAgICBpZiAodG9vbEluZGV4ID09PSAtMSkgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAnVG9vbCBub3QgZm91bmQuJyB9O1xuXG4gICAgICAgIGNvbnN0IHRhYkluZGV4ID0gdG9vbHNbdG9vbEluZGV4XS5sYXlvdXQuZmluZEluZGV4KHQgPT4gdC5pZCA9PT0gdGFiSWQpO1xuICAgICAgICBpZiAodGFiSW5kZXggPT09IC0xKSByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6ICdUYWIgbm90IGZvdW5kLicgfTtcblxuICAgICAgICBjb25zdCBpbml0aWFsUGFuZWxDb3VudCA9IHRvb2xzW3Rvb2xJbmRleF0ubGF5b3V0W3RhYkluZGV4XS5wYW5lbHMubGVuZ3RoO1xuICAgICAgICB0b29sc1t0b29sSW5kZXhdLmxheW91dFt0YWJJbmRleF0ucGFuZWxzID0gdG9vbHNbdG9vbEluZGV4XS5sYXlvdXRbdGFiSW5kZXhdLnBhbmVscy5maWx0ZXIocCA9PiBwLmlkICE9PSBwYW5lbElkKTtcblxuICAgICAgICBpZiAodG9vbHNbdG9vbEluZGV4XS5sYXlvdXRbdGFiSW5kZXhdLnBhbmVscy5sZW5ndGggPT09IGluaXRpYWxQYW5lbENvdW50KSB7XG4gICAgICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6ICdQYW5lbCBub3QgZm91bmQuJyB9O1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBhd2FpdCB3cml0ZUN1c3RvbVRvb2xzKHRvb2xzKTtcbiAgICAgICAgcmV2YWxpZGF0ZVBhdGgoYC8ke3Rvb2xJZH1gKTtcblxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlIH07XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignRmFpbGVkIHRvIGRlbGV0ZSBwYW5lbDonLCBlcnJvcik7XG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogJ0ZhaWxlZCB0byBkZWxldGUgdGhlIHBhbmVsLicgfTtcbiAgICB9XG59XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Im9SQXNNc0IifQ==
}}),
"[project]/src/components/forge/add-panel-dialog.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "AddPanelDialog": (()=>AddPanelDialog)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/plus.js [app-ssr] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/dialog.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/form.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/select.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/input.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-hook-form/dist/index.esm.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hookform$2f$resolvers$2f$zod$2f$dist$2f$zod$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@hookform/resolvers/zod/dist/zod.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zod/lib/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/use-toast.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-ssr] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$data$3a$c68601__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/app/data:c68601 [app-ssr] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$placeholder$2d$images$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/placeholder-images.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
const AddPanelSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["z"].object({
    title: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["z"].string().min(1, 'Panel title is required.'),
    type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["z"].enum([
        'editor',
        'media',
        'sound',
        '3d'
    ]),
    purpose: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["z"].string().min(1, 'Panel purpose is required.'),
    imageId: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["z"].string().optional()
});
function AddPanelDialog({ toolId, tabId }) {
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isPending, startTransition] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTransition"])();
    const { toast } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useToast"])();
    const form = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useForm"])({
        resolver: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hookform$2f$resolvers$2f$zod$2f$dist$2f$zod$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["zodResolver"])(AddPanelSchema),
        defaultValues: {
            title: '',
            type: 'editor',
            purpose: '',
            imageId: undefined
        }
    });
    const panelType = form.watch('type');
    const onSubmit = async (values)=>{
        if (values.type === 'media' && !values.imageId) {
            form.setError('imageId', {
                message: 'Please select an image for the media panel.'
            });
            return;
        }
        startTransition(async ()=>{
            try {
                const panelData = {
                    title: values.title,
                    type: values.type,
                    purpose: values.purpose,
                    imageId: values.type === 'media' ? values.imageId : undefined
                };
                const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$data$3a$c68601__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["addPanel"])(toolId, tabId, panelData);
                if (result.success) {
                    toast({
                        title: 'Panel Created!',
                        description: `The panel "${values.title}" has been added.`
                    });
                    setOpen(false);
                    form.reset();
                } else {
                    throw new Error(result.error);
                }
            } catch (error) {
                console.error('Failed to create new panel:', error);
                toast({
                    variant: 'destructive',
                    title: 'Error',
                    description: error instanceof Error ? error.message : 'Failed to create new panel. Please try again.'
                });
            }
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Dialog"], {
        open: open,
        onOpenChange: setOpen,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogTrigger"], {
                asChild: true,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                    variant: "outline",
                    size: "sm",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                            className: "mr-2 h-4 w-4"
                        }, void 0, false, {
                            fileName: "[project]/src/components/forge/add-panel-dialog.tsx",
                            lineNumber: 116,
                            columnNumber: 11
                        }, this),
                        "Add Panel"
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/forge/add-panel-dialog.tsx",
                    lineNumber: 115,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/forge/add-panel-dialog.tsx",
                lineNumber: 114,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogContent"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogHeader"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogTitle"], {
                                children: "Add a New Panel"
                            }, void 0, false, {
                                fileName: "[project]/src/components/forge/add-panel-dialog.tsx",
                                lineNumber: 122,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogDescription"], {
                                children: "Configure the details for your new panel."
                            }, void 0, false, {
                                fileName: "[project]/src/components/forge/add-panel-dialog.tsx",
                                lineNumber: 123,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/forge/add-panel-dialog.tsx",
                        lineNumber: 121,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Form"], {
                        ...form,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                            onSubmit: form.handleSubmit(onSubmit),
                            className: "space-y-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FormField"], {
                                    control: form.control,
                                    name: "title",
                                    render: ({ field })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FormItem"], {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FormLabel"], {
                                                    children: "Panel Title"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/forge/add-panel-dialog.tsx",
                                                    lineNumber: 134,
                                                    columnNumber: 19
                                                }, void 0),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FormControl"], {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                                        placeholder: "e.g., 'Character Backstory'",
                                                        ...field
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/forge/add-panel-dialog.tsx",
                                                        lineNumber: 136,
                                                        columnNumber: 21
                                                    }, void 0)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/forge/add-panel-dialog.tsx",
                                                    lineNumber: 135,
                                                    columnNumber: 19
                                                }, void 0),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FormMessage"], {}, void 0, false, {
                                                    fileName: "[project]/src/components/forge/add-panel-dialog.tsx",
                                                    lineNumber: 138,
                                                    columnNumber: 19
                                                }, void 0)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/forge/add-panel-dialog.tsx",
                                            lineNumber: 133,
                                            columnNumber: 17
                                        }, void 0)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/forge/add-panel-dialog.tsx",
                                    lineNumber: 129,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FormField"], {
                                    control: form.control,
                                    name: "purpose",
                                    render: ({ field })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FormItem"], {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FormLabel"], {
                                                    children: "Panel Purpose"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/forge/add-panel-dialog.tsx",
                                                    lineNumber: 147,
                                                    columnNumber: 19
                                                }, void 0),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FormControl"], {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                                        placeholder: "e.g., 'To flesh out the main character'",
                                                        ...field
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/forge/add-panel-dialog.tsx",
                                                        lineNumber: 149,
                                                        columnNumber: 21
                                                    }, void 0)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/forge/add-panel-dialog.tsx",
                                                    lineNumber: 148,
                                                    columnNumber: 19
                                                }, void 0),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FormMessage"], {}, void 0, false, {
                                                    fileName: "[project]/src/components/forge/add-panel-dialog.tsx",
                                                    lineNumber: 151,
                                                    columnNumber: 19
                                                }, void 0)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/forge/add-panel-dialog.tsx",
                                            lineNumber: 146,
                                            columnNumber: 17
                                        }, void 0)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/forge/add-panel-dialog.tsx",
                                    lineNumber: 142,
                                    columnNumber: 14
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FormField"], {
                                    control: form.control,
                                    name: "type",
                                    render: ({ field })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FormItem"], {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FormLabel"], {
                                                    children: "Panel Type"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/forge/add-panel-dialog.tsx",
                                                    lineNumber: 160,
                                                    columnNumber: 25
                                                }, void 0),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Select"], {
                                                    onValueChange: field.onChange,
                                                    defaultValue: field.value,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FormControl"], {
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectTrigger"], {
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectValue"], {
                                                                    placeholder: "Select a panel type"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/forge/add-panel-dialog.tsx",
                                                                    lineNumber: 164,
                                                                    columnNumber: 33
                                                                }, void 0)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/forge/add-panel-dialog.tsx",
                                                                lineNumber: 163,
                                                                columnNumber: 29
                                                            }, void 0)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/forge/add-panel-dialog.tsx",
                                                            lineNumber: 162,
                                                            columnNumber: 29
                                                        }, void 0),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectContent"], {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                                    value: "editor",
                                                                    children: "Editor"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/forge/add-panel-dialog.tsx",
                                                                    lineNumber: 168,
                                                                    columnNumber: 33
                                                                }, void 0),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                                    value: "media",
                                                                    children: "Media"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/forge/add-panel-dialog.tsx",
                                                                    lineNumber: 169,
                                                                    columnNumber: 33
                                                                }, void 0),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                                    value: "sound",
                                                                    children: "Sound"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/forge/add-panel-dialog.tsx",
                                                                    lineNumber: 170,
                                                                    columnNumber: 33
                                                                }, void 0),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                                    value: "3d",
                                                                    children: "3D"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/forge/add-panel-dialog.tsx",
                                                                    lineNumber: 171,
                                                                    columnNumber: 33
                                                                }, void 0)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/forge/add-panel-dialog.tsx",
                                                            lineNumber: 167,
                                                            columnNumber: 29
                                                        }, void 0)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/forge/add-panel-dialog.tsx",
                                                    lineNumber: 161,
                                                    columnNumber: 25
                                                }, void 0),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FormMessage"], {}, void 0, false, {
                                                    fileName: "[project]/src/components/forge/add-panel-dialog.tsx",
                                                    lineNumber: 174,
                                                    columnNumber: 25
                                                }, void 0)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/forge/add-panel-dialog.tsx",
                                            lineNumber: 159,
                                            columnNumber: 21
                                        }, void 0)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/forge/add-panel-dialog.tsx",
                                    lineNumber: 155,
                                    columnNumber: 13
                                }, this),
                                panelType === 'media' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FormField"], {
                                    control: form.control,
                                    name: "imageId",
                                    render: ({ field })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FormItem"], {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FormLabel"], {
                                                    children: "Placeholder Image"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/forge/add-panel-dialog.tsx",
                                                    lineNumber: 184,
                                                    columnNumber: 21
                                                }, void 0),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Select"], {
                                                    onValueChange: field.onChange,
                                                    defaultValue: field.value,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FormControl"], {
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectTrigger"], {
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectValue"], {
                                                                    placeholder: "Select an image"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/forge/add-panel-dialog.tsx",
                                                                    lineNumber: 188,
                                                                    columnNumber: 27
                                                                }, void 0)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/forge/add-panel-dialog.tsx",
                                                                lineNumber: 187,
                                                                columnNumber: 25
                                                            }, void 0)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/forge/add-panel-dialog.tsx",
                                                            lineNumber: 186,
                                                            columnNumber: 23
                                                        }, void 0),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectContent"], {
                                                            children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$placeholder$2d$images$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PlaceHolderImages"].map((image)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                                    value: image.id,
                                                                    children: image.description
                                                                }, image.id, false, {
                                                                    fileName: "[project]/src/components/forge/add-panel-dialog.tsx",
                                                                    lineNumber: 193,
                                                                    columnNumber: 27
                                                                }, void 0))
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/forge/add-panel-dialog.tsx",
                                                            lineNumber: 191,
                                                            columnNumber: 23
                                                        }, void 0)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/forge/add-panel-dialog.tsx",
                                                    lineNumber: 185,
                                                    columnNumber: 21
                                                }, void 0),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FormMessage"], {}, void 0, false, {
                                                    fileName: "[project]/src/components/forge/add-panel-dialog.tsx",
                                                    lineNumber: 199,
                                                    columnNumber: 21
                                                }, void 0)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/forge/add-panel-dialog.tsx",
                                            lineNumber: 183,
                                            columnNumber: 19
                                        }, void 0)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/forge/add-panel-dialog.tsx",
                                    lineNumber: 179,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogFooter"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogClose"], {
                                            asChild: true,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                                variant: "ghost",
                                                children: "Cancel"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/forge/add-panel-dialog.tsx",
                                                lineNumber: 206,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/forge/add-panel-dialog.tsx",
                                            lineNumber: 205,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                            type: "submit",
                                            disabled: isPending,
                                            children: [
                                                isPending && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                                    className: "mr-2 animate-spin"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/forge/add-panel-dialog.tsx",
                                                    lineNumber: 209,
                                                    columnNumber: 31
                                                }, this),
                                                "Add Panel"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/forge/add-panel-dialog.tsx",
                                            lineNumber: 208,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/forge/add-panel-dialog.tsx",
                                    lineNumber: 204,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/forge/add-panel-dialog.tsx",
                            lineNumber: 128,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/forge/add-panel-dialog.tsx",
                        lineNumber: 127,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/forge/add-panel-dialog.tsx",
                lineNumber: 120,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/forge/add-panel-dialog.tsx",
        lineNumber: 113,
        columnNumber: 5
    }, this);
}
}}),

};

//# sourceMappingURL=src_0b291d68._.js.map