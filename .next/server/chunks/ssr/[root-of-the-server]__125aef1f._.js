module.exports = {

"[externals]/fs [external] (fs, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("fs", () => require("fs"));

module.exports = mod;
}}),
"[project]/src/lib/custom-tools.json (json)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v(JSON.parse("[{\"id\":\"3d-forge-designer\",\"name\":\"3DForge Designer\",\"layout\":[{\"id\":\"tab-main\",\"name\":\"Main\",\"panels\":[{\"id\":\"panel-3d-scene\",\"title\":\"3D Scene Editor\",\"type\":\"editor\",\"content\":\"\",\"purpose\":\"This panel provides the primary interface for 3D model creation, manipulation, and scene composition. Users can add, modify, and arrange 3D objects, apply textures, and set up lighting for rendering. AI can suggest modeling operations, material presets, or scene optimizations.\"},{\"id\":\"panel-model-asset\",\"title\":\"Model Asset\",\"type\":\"3d\",\"content\":\"dragon.obj\",\"purpose\":\"A 3D model asset to be used in the scene.\"}]},{\"id\":\"tab-1764360604291\",\"name\":\"3D Objects\",\"panels\":[{\"id\":\"panel-1764360604291\",\"title\":\"New Editor\",\"type\":\"editor\",\"content\":\"\",\"purpose\":\"A new editor panel.\"}]}],\"icon\":\"Component\"}]"));}}),
"[project]/src/lib/tools-data.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "defaultToolIds": (()=>defaultToolIds),
    "defaultTools": (()=>defaultTools),
    "getIcon": (()=>getIcon),
    "isValidIcon": (()=>isValidIcon),
    "tools": (()=>tools)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/book-open.js [app-rsc] (ecmascript) <export default as BookOpen>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-text.js [app-rsc] (ecmascript) <export default as FileText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$hammer$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Hammer$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/hammer.js [app-rsc] (ecmascript) <export default as Hammer>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$paintbrush$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Paintbrush$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/paintbrush.js [app-rsc] (ecmascript) <export default as Paintbrush>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$square$2d$pen$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__PenSquare$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/square-pen.js [app-rsc] (ecmascript) <export default as PenSquare>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$component$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Component$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/component.js [app-rsc] (ecmascript) <export default as Component>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$lucide$2d$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/lucide-react.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$custom$2d$tools$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/src/lib/custom-tools.json (json)");
;
;
;
function isValidIcon(key) {
    if (!key) return false;
    return key in __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$lucide$2d$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__;
}
const getIcon = (name)=>{
    if (isValidIcon(name)) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$lucide$2d$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[name];
    }
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$component$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Component$3e$__["Component"];
};
const defaultTools = [
    {
        id: 'story-maker',
        name: 'StoryMaker',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__["BookOpen"],
        layout: [
            {
                id: 'story-tab-1',
                name: 'Outline',
                icon: 'BookCopy',
                panels: [
                    {
                        id: 'story-p1',
                        title: 'Main Plot',
                        type: 'editor',
                        icon: 'FileText',
                        content: 'A young hero discovers a hidden power and must embark on a journey to save their world from an ancient evil. They face numerous trials, make new allies, and confront their deepest fears.',
                        purpose: 'novel plot outline'
                    },
                    {
                        id: 'story-p2',
                        title: 'Characters',
                        type: 'editor',
                        icon: 'Users',
                        content: '- Elara: The protagonist, brave and resourceful.\\n- Kael: A wise old mentor with a mysterious past.\\n- Lord Malakor: The antagonist, seeking to plunge the world into darkness.',
                        purpose: 'character development'
                    },
                    {
                        id: 'story-p3',
                        title: 'Mood Board',
                        type: 'media',
                        icon: 'Image',
                        content: '',
                        imageId: 'character-art',
                        purpose: 'visual inspiration for story'
                    }
                ]
            },
            {
                id: 'story-tab-2',
                name: 'Chapters',
                icon: 'Files',
                panels: [
                    {
                        id: 'story-p4',
                        title: 'Chapter 1: The Discovery',
                        type: 'editor',
                        icon: 'FileText',
                        content: 'The story begins in a quiet village where Elara lives a normal life, until a fateful event awakens her dormant abilities.',
                        purpose: 'first chapter draft'
                    }
                ]
            }
        ]
    },
    {
        id: 'script-maker',
        name: 'ScriptMaker',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"],
        layout: [
            {
                id: 'script-tab-1',
                name: 'Scene 1',
                icon: 'Clapperboard',
                panels: [
                    {
                        id: 'script-p1',
                        title: 'Dialogue',
                        type: 'editor',
                        icon: 'MessageSquare',
                        content: 'INT. COFFEE SHOP - DAY\\n\\nANNA (30s), a determined journalist, sips her coffee. LIAM (30s), a nervous informant, slides a folder across the table.\\n\\nLIAM\\n(whispering)\\nEverything you need is in there. Be careful.',
                        purpose: 'screenplay dialogue'
                    },
                    {
                        id: 'script-p2',
                        title: 'Action & Description',
                        type: 'editor',
                        icon: 'Bike',
                        content: 'Sunlight streams through the large window of the bustling coffee shop. The aroma of roasted coffee beans fills the air. Anna\'s eyes dart around, her hand steady as she reaches for the folder.',
                        purpose: 'scene description and action'
                    },
                    {
                        id: 'script-p3',
                        title: 'Location Scout',
                        type: 'media',
                        icon: 'MapPin',
                        content: '',
                        imageId: 'script-location',
                        purpose: 'visual reference for filming location'
                    },
                    {
                        id: 'script-p4',
                        title: 'Soundtrack',
                        type: 'sound',
                        icon: 'Music',
                        content: 'tense_underscore.mp3',
                        purpose: 'background music suggestion'
                    }
                ]
            }
        ]
    },
    {
        id: 'comic-maker',
        name: 'ComicMaker',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$hammer$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Hammer$3e$__["Hammer"],
        layout: [
            {
                id: 'comic-tab-1',
                name: 'Page 1',
                icon: 'BookImage',
                panels: [
                    {
                        id: 'comic-p1',
                        title: 'Script',
                        type: 'editor',
                        icon: 'FileText',
                        content: 'Panel 1: A sprawling futuristic city at night.\\nCaption: Neo-Metropolis, 2099.\\n\\nPanel 2: A shadowy figure leaps between rooftops.\\n\\nPanel 3: Close up on the figure\'s determined face.',
                        purpose: 'comic book script'
                    },
                    {
                        id: 'comic-p2',
                        title: 'Art Style Reference',
                        type: 'media',
                        icon: 'Palette',
                        content: '',
                        imageId: 'comic-panel-style',
                        purpose: 'visual style reference for comic'
                    }
                ]
            }
        ]
    },
    {
        id: 'manga-maker',
        name: 'MangaMaker',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$paintbrush$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Paintbrush$3e$__["Paintbrush"],
        layout: [
            {
                id: 'manga-tab-1',
                name: 'Chapter 1',
                icon: 'BookMarked',
                panels: [
                    {
                        id: 'manga-p1',
                        title: 'Storyboards',
                        type: 'editor',
                        icon: 'LayoutGrid',
                        content: 'Page 1 (Right to Left):\\n- Top Panel: A high school student, Kenji, looks out the window, bored in class.\\n- Middle Panel: A cherry blossom petal drifts past.\\n- Bottom Panel: Kenji\'s eyes widen as he sees a mysterious girl standing under the cherry tree.',
                        purpose: 'manga storyboard layout'
                    },
                    {
                        id: 'manga-p2',
                        title: 'Background Reference',
                        type: 'media',
                        icon: 'Mountain',
                        content: '',
                        imageId: 'manga-background',
                        purpose: 'visual reference for manga backgrounds'
                    },
                    {
                        id: 'manga-p3',
                        title: 'Environment',
                        type: '3d',
                        icon: 'Box',
                        content: 'school_rooftop.obj',
                        purpose: '3D model of a key location'
                    }
                ]
            }
        ]
    },
    {
        id: 'poetry-maker',
        name: 'PoetryMaker',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$square$2d$pen$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__PenSquare$3e$__["PenSquare"],
        layout: [
            {
                id: 'poetry-tab-1',
                name: 'Haiku',
                icon: 'Feather',
                panels: [
                    {
                        id: 'poetry-p1',
                        title: 'Draft',
                        type: 'editor',
                        icon: 'Pen',
                        content: 'Indigo twilight,\\nCreativity takes its flight,\\nNew worlds born in night.',
                        purpose: 'writing a haiku poem'
                    },
                    {
                        id: 'poetry-p2',
                        title: 'Inspiration',
                        type: 'media',
                        icon: 'Image',
                        content: '',
                        imageId: 'poetry-inspiration',
                        purpose: 'visual prompt for poetry'
                    }
                ]
            }
        ]
    }
];
const defaultToolIds = defaultTools.map((t)=>t.id);
// Process custom tools and map string icon names to Lucide components
const customTools = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$custom$2d$tools$2e$json__$28$json$29$__["default"].map((tool)=>{
    const IconComponent = getIcon(tool.icon);
    return {
        ...tool,
        icon: IconComponent
    };
});
const tools = [
    ...defaultTools,
    ...customTools
];
}}),
"[project]/src/app/actions.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/* __next_internal_action_entry_do_not_use__ [{"400fa11fd1f6abaa87ad5b953941701e45eefdf451":"deleteTool","40c808ee704c0885a587cc5fac5ea72d6ee681ccd9":"saveTool","60552135523f2a280c5f48c8d9d72391356cbe9b39":"deleteTab","7073f0bbcfb0dd0632ef6d01f08898e681a46ee881":"addPanel","708f6ff91ce2b9af78008dbedf036eae6d43f2708c":"addTab","70baffb10a76e59d64795e8cf2b70d0304d596bd8e":"deletePanel","782e9318771674b2612187883aa35a0f1b26e216e9":"updatePanelContent","78ddce78b81e2b0ac4630451198272cb3480bfae6c":"updatePanelDetails"},"",""] */ __turbopack_context__.s({
    "addPanel": (()=>addPanel),
    "addTab": (()=>addTab),
    "deletePanel": (()=>deletePanel),
    "deleteTab": (()=>deleteTab),
    "deleteTool": (()=>deleteTool),
    "saveTool": (()=>saveTool),
    "updatePanelContent": (()=>updatePanelContent),
    "updatePanelDetails": (()=>updatePanelDetails)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$app$2d$render$2f$encryption$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/app-render/encryption.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/fs [external] (fs, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/path [external] (path, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/cache.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$tools$2d$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/tools-data.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
;
;
;
;
const customToolsPath = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(process.cwd(), 'src', 'lib', 'custom-tools.json');
async function readCustomTools() {
    try {
        await __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["promises"].access(customToolsPath);
    } catch (error) {
        // If the file doesn't exist, create it with an empty array.
        if (error.code === 'ENOENT') {
            await writeCustomTools([]);
            return [];
        }
        console.error("Error accessing custom tools file:", error);
        throw error;
    }
    try {
        const data = await __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["promises"].readFile(customToolsPath, 'utf-8');
        // If the file is empty, return an empty array.
        if (!data) {
            return [];
        }
        const tools = JSON.parse(data);
        return tools.map((t)=>({
                ...t,
                icon: 'Component'
            }));
    } catch (error) {
        console.error("Error reading or parsing custom tools:", error);
        // If parsing fails, it might be an empty or corrupted file.
        // It's safer to return an empty array and let the next write operation fix it.
        return [];
    }
}
async function writeCustomTools(tools) {
    // We need to store the icon as a string name, not a function.
    const storableTools = tools.map((tool)=>{
        const { icon, ...rest } = tool;
        const iconName = typeof icon === 'string' ? icon : icon?.displayName || 'Component';
        return {
            ...rest,
            icon: iconName
        };
    });
    await __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["promises"].writeFile(customToolsPath, JSON.stringify(storableTools, null, 2));
}
async function saveTool(toolJSON) {
    try {
        const tools = await readCustomTools();
        const newTool = JSON.parse(toolJSON);
        const toolIndex = tools.findIndex((tool)=>tool.id === newTool.id);
        if (toolIndex !== -1) {
            tools[toolIndex] = newTool;
        } else {
            tools.push(newTool);
        }
        await writeCustomTools(tools);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/', 'layout');
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])(`/${newTool.id}`);
        return {
            success: true,
            toolId: newTool.id
        };
    } catch (error) {
        console.error('Failed to save tool:', error);
        return {
            success: false,
            error: 'Failed to save the tool.'
        };
    }
}
async function updatePanelContent(toolId, tabId, panelId, newContent) {
    if (__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$tools$2d$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defaultToolIds"].includes(toolId)) {
        return {
            success: true
        };
    }
    try {
        const tools = await readCustomTools();
        const toolIndex = tools.findIndex((t)=>t.id === toolId);
        if (toolIndex === -1) {
            return {
                success: false,
                error: 'Tool not found.'
            };
        }
        const tabIndex = tools[toolIndex].layout.findIndex((t)=>t.id === tabId);
        if (tabIndex === -1) {
            return {
                success: false,
                error: 'Tab not found.'
            };
        }
        const panelIndex = tools[toolIndex].layout[tabIndex].panels.findIndex((p)=>p.id === panelId);
        if (panelIndex === -1) {
            return {
                success: false,
                error: 'Panel not found.'
            };
        }
        tools[toolIndex].layout[tabIndex].panels[panelIndex].content = newContent;
        await writeCustomTools(tools);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])(`/${toolId}`);
        return {
            success: true
        };
    } catch (error) {
        console.error('Failed to update panel content:', error);
        return {
            success: false,
            error: 'Failed to update panel content.'
        };
    }
}
async function updatePanelDetails(toolId, tabId, panelId, newDetails) {
    if (__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$tools$2d$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defaultToolIds"].includes(toolId)) {
        return {
            success: false,
            error: 'Cannot modify a default tool.'
        };
    }
    try {
        const tools = await readCustomTools();
        const toolIndex = tools.findIndex((t)=>t.id === toolId);
        if (toolIndex === -1) return {
            success: false,
            error: 'Tool not found.'
        };
        const tabIndex = tools[toolIndex].layout.findIndex((t)=>t.id === tabId);
        if (tabIndex === -1) return {
            success: false,
            error: 'Tab not found.'
        };
        const panelIndex = tools[toolIndex].layout[tabIndex].panels.findIndex((p)=>p.id === panelId);
        if (panelIndex === -1) return {
            success: false,
            error: 'Panel not found.'
        };
        // Update only the provided details
        const currentPanel = tools[toolIndex].layout[tabIndex].panels[panelIndex];
        tools[toolIndex].layout[tabIndex].panels[panelIndex] = {
            ...currentPanel,
            ...newDetails
        };
        await writeCustomTools(tools);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])(`/${toolId}`);
        return {
            success: true,
            updatedPanel: tools[toolIndex].layout[tabIndex].panels[panelIndex]
        };
    } catch (error) {
        console.error('Failed to update panel details:', error);
        return {
            success: false,
            error: 'Failed to update panel details.'
        };
    }
}
async function deleteTool(toolId) {
    try {
        // This allows deleting default tools for the session, they will reappear on app restart.
        // Custom tools are permanently deleted.
        if (!__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$tools$2d$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defaultToolIds"].includes(toolId)) {
            let tools = await readCustomTools();
            const initialLength = tools.length;
            tools = tools.filter((t)=>t.id !== toolId);
            if (tools.length < initialLength) {
                await writeCustomTools(tools);
            }
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/', 'layout');
        return {
            success: true
        };
    } catch (error) {
        console.error('Failed to delete tool:', error);
        return {
            success: false,
            error: 'Failed to delete the tool.'
        };
    }
}
async function addTab(toolId, tabName, icon) {
    if (__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$tools$2d$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defaultToolIds"].includes(toolId)) {
        return {
            success: false,
            error: 'Cannot add tabs to a default tool.'
        };
    }
    try {
        const tools = await readCustomTools();
        const toolIndex = tools.findIndex((t)=>t.id === toolId);
        if (toolIndex === -1) {
            return {
                success: false,
                error: 'Tool not found.'
            };
        }
        const newTab = {
            id: `tab-${Date.now()}`,
            name: tabName,
            icon: icon || 'File',
            panels: [
                {
                    id: `panel-${Date.now()}`,
                    title: 'New Editor',
                    type: 'editor',
                    icon: 'FileText',
                    content: '',
                    purpose: 'A new editor panel.'
                }
            ]
        };
        tools[toolIndex].layout.push(newTab);
        await writeCustomTools(tools);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])(`/${toolId}`);
        return {
            success: true,
            newTab
        };
    } catch (error) {
        console.error('Failed to add tab:', error);
        return {
            success: false,
            error: 'Failed to add a new tab.'
        };
    }
}
async function deleteTab(toolId, tabId) {
    if (__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$tools$2d$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defaultToolIds"].includes(toolId)) {
        return {
            success: false,
            error: 'Cannot delete tabs from a default tool.'
        };
    }
    try {
        const tools = await readCustomTools();
        const toolIndex = tools.findIndex((t)=>t.id === toolId);
        if (toolIndex === -1) {
            return {
                success: false,
                error: 'Tool not found.'
            };
        }
        const initialTabCount = tools[toolIndex].layout.length;
        tools[toolIndex].layout = tools[toolIndex].layout.filter((t)=>t.id !== tabId);
        if (tools[toolIndex].layout.length === initialTabCount) {
            return {
                success: false,
                error: 'Tab not found.'
            };
        }
        await writeCustomTools(tools);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])(`/${toolId}`);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/', 'layout');
        return {
            success: true
        };
    } catch (error) {
        console.error('Failed to delete tab:', error);
        return {
            success: false,
            error: 'Failed to delete the tab.'
        };
    }
}
async function addPanel(toolId, tabId, panelData) {
    if (__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$tools$2d$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defaultToolIds"].includes(toolId)) {
        return {
            success: false,
            error: 'Cannot add panels to a default tool.'
        };
    }
    try {
        const tools = await readCustomTools();
        const toolIndex = tools.findIndex((t)=>t.id === toolId);
        if (toolIndex === -1) return {
            success: false,
            error: 'Tool not found.'
        };
        const tabIndex = tools[toolIndex].layout.findIndex((t)=>t.id === tabId);
        if (tabIndex === -1) return {
            success: false,
            error: 'Tab not found.'
        };
        const newPanel = {
            ...panelData,
            id: `panel-${Date.now()}`,
            content: panelData.type === 'media' ? '' : `new_${panelData.type}_content`,
            icon: panelData.icon || 'FileText'
        };
        tools[toolIndex].layout[tabIndex].panels.push(newPanel);
        await writeCustomTools(tools);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])(`/${toolId}`);
        return {
            success: true,
            newPanel
        };
    } catch (error) {
        console.error('Failed to add panel:', error);
        return {
            success: false,
            error: 'Failed to add a new panel.'
        };
    }
}
async function deletePanel(toolId, tabId, panelId) {
    if (__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$tools$2d$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defaultToolIds"].includes(toolId)) {
        return {
            success: false,
            error: 'Cannot delete panels from a default tool.'
        };
    }
    try {
        const tools = await readCustomTools();
        const toolIndex = tools.findIndex((t)=>t.id === toolId);
        if (toolIndex === -1) return {
            success: false,
            error: 'Tool not found.'
        };
        const tabIndex = tools[toolIndex].layout.findIndex((t)=>t.id === tabId);
        if (tabIndex === -1) return {
            success: false,
            error: 'Tab not found.'
        };
        const initialPanelCount = tools[toolIndex].layout[tabIndex].panels.length;
        tools[toolIndex].layout[tabIndex].panels = tools[toolIndex].layout[tabIndex].panels.filter((p)=>p.id !== panelId);
        if (tools[toolIndex].layout[tabIndex].panels.length === initialPanelCount) {
            return {
                success: false,
                error: 'Panel not found.'
            };
        }
        await writeCustomTools(tools);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])(`/${toolId}`);
        return {
            success: true
        };
    } catch (error) {
        console.error('Failed to delete panel:', error);
        return {
            success: false,
            error: 'Failed to delete the panel.'
        };
    }
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    saveTool,
    updatePanelContent,
    updatePanelDetails,
    deleteTool,
    addTab,
    deleteTab,
    addPanel,
    deletePanel
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(saveTool, "40c808ee704c0885a587cc5fac5ea72d6ee681ccd9", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(updatePanelContent, "782e9318771674b2612187883aa35a0f1b26e216e9", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(updatePanelDetails, "78ddce78b81e2b0ac4630451198272cb3480bfae6c", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(deleteTool, "400fa11fd1f6abaa87ad5b953941701e45eefdf451", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(addTab, "708f6ff91ce2b9af78008dbedf036eae6d43f2708c", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(deleteTab, "60552135523f2a280c5f48c8d9d72391356cbe9b39", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(addPanel, "7073f0bbcfb0dd0632ef6d01f08898e681a46ee881", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(deletePanel, "70baffb10a76e59d64795e8cf2b70d0304d596bd8e", null);
}}),
"[externals]/perf_hooks [external] (perf_hooks, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("perf_hooks", () => require("perf_hooks"));

module.exports = mod;
}}),
"[externals]/node:perf_hooks [external] (node:perf_hooks, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("node:perf_hooks", () => require("node:perf_hooks"));

module.exports = mod;
}}),
"[externals]/express [external] (express, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("express", () => require("express"));

module.exports = mod;
}}),
"[externals]/fs/promises [external] (fs/promises, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("fs/promises", () => require("fs/promises"));

module.exports = mod;
}}),
"[externals]/net [external] (net, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("net", () => require("net"));

module.exports = mod;
}}),
"[externals]/crypto [external] (crypto, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}}),
"[externals]/process [external] (process, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("process", () => require("process"));

module.exports = mod;
}}),
"[externals]/buffer [external] (buffer, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("buffer", () => require("buffer"));

module.exports = mod;
}}),
"[externals]/node:crypto [external] (node:crypto, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("node:crypto", () => require("node:crypto"));

module.exports = mod;
}}),
"[externals]/node:async_hooks [external] (node:async_hooks, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("node:async_hooks", () => require("node:async_hooks"));

module.exports = mod;
}}),
"[externals]/async_hooks [external] (async_hooks, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("async_hooks", () => require("async_hooks"));

module.exports = mod;
}}),
"[externals]/events [external] (events, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("events", () => require("events"));

module.exports = mod;
}}),
"[externals]/os [external] (os, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("os", () => require("os"));

module.exports = mod;
}}),
"[externals]/child_process [external] (child_process, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("child_process", () => require("child_process"));

module.exports = mod;
}}),
"[externals]/util [external] (util, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("util", () => require("util"));

module.exports = mod;
}}),
"[externals]/require-in-the-middle [external] (require-in-the-middle, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("require-in-the-middle", () => require("require-in-the-middle"));

module.exports = mod;
}}),
"[externals]/import-in-the-middle [external] (import-in-the-middle, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("import-in-the-middle", () => require("import-in-the-middle"));

module.exports = mod;
}}),
"[externals]/http [external] (http, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("http", () => require("http"));

module.exports = mod;
}}),
"[externals]/https [external] (https, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("https", () => require("https"));

module.exports = mod;
}}),
"[externals]/zlib [external] (zlib, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("zlib", () => require("zlib"));

module.exports = mod;
}}),
"[externals]/stream [external] (stream, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("stream", () => require("stream"));

module.exports = mod;
}}),
"[externals]/tls [external] (tls, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("tls", () => require("tls"));

module.exports = mod;
}}),
"[externals]/http2 [external] (http2, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("http2", () => require("http2"));

module.exports = mod;
}}),
"[externals]/dns [external] (dns, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("dns", () => require("dns"));

module.exports = mod;
}}),
"[externals]/dgram [external] (dgram, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("dgram", () => require("dgram"));

module.exports = mod;
}}),
"[externals]/assert [external] (assert, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("assert", () => require("assert"));

module.exports = mod;
}}),
"[externals]/tty [external] (tty, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("tty", () => require("tty"));

module.exports = mod;
}}),
"[externals]/punycode [external] (punycode, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("punycode", () => require("punycode"));

module.exports = mod;
}}),
"[externals]/querystring [external] (querystring, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("querystring", () => require("querystring"));

module.exports = mod;
}}),
"[externals]/node:events [external] (node:events, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("node:events", () => require("node:events"));

module.exports = mod;
}}),
"[externals]/node:process [external] (node:process, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("node:process", () => require("node:process"));

module.exports = mod;
}}),
"[externals]/node:util [external] (node:util, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("node:util", () => require("node:util"));

module.exports = mod;
}}),
"[project]/src/ai/genkit.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "ai": (()=>ai)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$genkit$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/genkit/lib/index.mjs [app-rsc] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$genkit$2f$lib$2f$genkit$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/genkit/lib/genkit.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$genkit$2d$ai$2f$google$2d$genai$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/@genkit-ai/google-genai/lib/index.mjs [app-rsc] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$genkit$2d$ai$2f$google$2d$genai$2f$lib$2f$googleai$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@genkit-ai/google-genai/lib/googleai/index.js [app-rsc] (ecmascript)");
;
;
const ai = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$genkit$2f$lib$2f$genkit$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["genkit"])({
    plugins: [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$genkit$2d$ai$2f$google$2d$genai$2f$lib$2f$googleai$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["googleAI"])()
    ],
    model: 'googleai/gemini-2.5-flash'
});
}}),
"[project]/src/ai/flows/generate-tool-outline.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/* __next_internal_action_entry_do_not_use__ [{"40421a2d3b9a50a4289a9ccdf9a542ada4c0b764f6":"generateToolOutline"},"",""] */ __turbopack_context__.s({
    "generateToolOutline": (()=>generateToolOutline)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$app$2d$render$2f$encryption$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/app-render/encryption.js [app-rsc] (ecmascript)");
/**
 * @fileOverview A tool outline generator AI agent.
 *
 * - generateToolOutline - A function that handles the tool outline generation process.
 * - GenerateToolOutlineInput - The input type for the generateToolOutline function.
 * - GenerateToolOutlineOutput - The return type for the generateToolOutline function.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ai$2f$genkit$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/ai/genkit.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$genkit$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/genkit/lib/index.mjs [app-rsc] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$genkit$2f$lib$2f$common$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/genkit/lib/common.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
;
;
const GenerateToolOutlineInputSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$genkit$2f$lib$2f$common$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].object({
    topic: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$genkit$2f$lib$2f$common$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].string().describe('The topic for which to generate a tool outline.')
});
const GenerateToolOutlineOutputSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$genkit$2f$lib$2f$common$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].object({
    outline: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$genkit$2f$lib$2f$common$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].string().describe('The generated tool outline in JSON format.')
});
async function generateToolOutline(input) {
    return generateToolOutlineFlow(input);
}
const prompt = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ai$2f$genkit$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ai"].definePrompt({
    name: 'generateToolOutlinePrompt',
    input: {
        schema: GenerateToolOutlineInputSchema
    },
    output: {
        schema: GenerateToolOutlineOutputSchema
    },
    prompt: `You are an AI assistant that generates tool outlines based on a detailed user description.

  Your task is to parse the user's request and create a JSON object representing the tool's structure.

  User Request: {{{topic}}}

  Please generate a detailed tool outline based on the user's request. The outline MUST be a single JSON object adhering to the following structure:
  {
    "id": "a-unique-id-from-the-topic-in-kebab-case",
    "name": "A Tool Name based on the topic",
    "icon": "An appropriate icon name from lucide-react (e.g., 'PenSquare', 'BookOpen', 'Camera'). Do not invent icon names.",
    "layout": [
      {
        "id": "a-unique-tab-id",
        "name": "Tab Name",
        "icon": "An appropriate icon name from lucide-react for the tab (e.g., 'File', 'BookCopy').",
        "panels": [
          {
            "id": "a-unique-panel-id",
            "title": "Panel Title",
            "icon": "An appropriate icon name from lucide-react for the panel (e.g., 'FileText', 'Image').",
            "type": "editor" | "media" | "sound" | "3d",
            "content": "Initial content for the panel. For 'media' panels, leave this empty. For 'sound' or '3d', provide a descriptive filename like 'ambient_music.mp3' or 'character_model.obj'.",
            "purpose": "A brief description of this panel's purpose for AI content suggestions.",
            "imageId": "For 'media' panels only, select an appropriate ID from this list: character-art, scene-mood-board, script-location, comic-panel-style, manga-background, poetry-inspiration. Otherwise, omit this field."
          }
        ]
      }
    ]
  }

  - The 'id' fields must be unique and in kebab-case.
  - ALL 'icon' fields must be a valid name from the lucide-react library. Do not invent icon names.
  - The panel 'type' must be one of 'editor', 'media', 'sound', or '3d'.
  - If the panel type is 'media', you must include the 'imageId' field with a valid value.
  - Generate a complete and valid JSON object.
  `
});
const generateToolOutlineFlow = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ai$2f$genkit$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ai"].defineFlow({
    name: 'generateToolOutlineFlow',
    inputSchema: GenerateToolOutlineInputSchema,
    outputSchema: GenerateToolOutlineOutputSchema
}, async (input)=>{
    const { output } = await prompt(input);
    return output;
});
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    generateToolOutline
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(generateToolOutline, "40421a2d3b9a50a4289a9ccdf9a542ada4c0b764f6", null);
}}),
"[project]/src/ai/flows/suggest-panel-content.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/* __next_internal_action_entry_do_not_use__ [{"40aa060cef9d61d938d4ce1458951624b32ec279ab":"suggestPanelContent"},"",""] */ __turbopack_context__.s({
    "suggestPanelContent": (()=>suggestPanelContent)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$app$2d$render$2f$encryption$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/app-render/encryption.js [app-rsc] (ecmascript)");
/**
 * @fileOverview AI-powered content suggestion for tool panels.
 *
 * This file defines a Genkit flow that suggests relevant content for a panel
 * based on the tool type and existing panel content.
 *
 * @module src/ai/flows/suggest-panel-content
 *
 * @interface SuggestPanelContentInput - The input type for the suggestPanelContent function.
 * @interface SuggestPanelContentOutput - The output type for the suggestPanelContent function.
 *
 * @function suggestPanelContent - A function that suggests content for a given panel.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ai$2f$genkit$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/ai/genkit.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$genkit$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/genkit/lib/index.mjs [app-rsc] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$genkit$2f$lib$2f$common$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/genkit/lib/common.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
;
;
const SuggestPanelContentInputSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$genkit$2f$lib$2f$common$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].object({
    toolType: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$genkit$2f$lib$2f$common$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].string().describe('The type of tool the panel belongs to (e.g., StoryMaker, ScriptMaker).'),
    panelContent: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$genkit$2f$lib$2f$common$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].string().describe('The existing content in the panel.'),
    panelPurpose: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$genkit$2f$lib$2f$common$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].string().describe('The purpose of the panel (e.g., outline, notes, script).')
});
const SuggestPanelContentOutputSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$genkit$2f$lib$2f$common$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].object({
    suggestions: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$genkit$2f$lib$2f$common$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$genkit$2f$lib$2f$common$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].string()).describe('An array of suggested content for the panel.')
});
async function suggestPanelContent(input) {
    return suggestPanelContentFlow(input);
}
const suggestPanelContentPrompt = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ai$2f$genkit$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ai"].definePrompt({
    name: 'suggestPanelContentPrompt',
    input: {
        schema: SuggestPanelContentInputSchema
    },
    output: {
        schema: SuggestPanelContentOutputSchema
    },
    prompt: `You are an AI assistant designed to suggest content for panels within creative tools.

  Based on the tool type, existing panel content, and the panel's purpose, generate relevant and useful suggestions to enhance the panel's functionality.

  Tool Type: {{{toolType}}}
  Panel Content: {{{panelContent}}}
  Panel Purpose: {{{panelPurpose}}}

  Suggestions should be concise and directly applicable to the panel's purpose.
  Provide at least three suggestions.

  Output format: An array of strings where each string is a suggestion.
  Example:
  [\"Add a section on character development\", \"Include a scene with a plot twist\", \"Expand on the dialogue in the second act\"]`
});
const suggestPanelContentFlow = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ai$2f$genkit$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ai"].defineFlow({
    name: 'suggestPanelContentFlow',
    inputSchema: SuggestPanelContentInputSchema,
    outputSchema: SuggestPanelContentOutputSchema
}, async (input)=>{
    const { output } = await suggestPanelContentPrompt(input);
    return output;
});
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    suggestPanelContent
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(suggestPanelContent, "40aa060cef9d61d938d4ce1458951624b32ec279ab", null);
}}),
"[project]/.next-internal/server/app/[toolId]/page/actions.js { ACTIONS_MODULE0 => \"[project]/src/app/actions.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE1 => \"[project]/src/ai/flows/generate-tool-outline.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE2 => \"[project]/src/ai/flows/suggest-panel-content.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/actions.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ai$2f$flows$2f$generate$2d$tool$2d$outline$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/ai/flows/generate-tool-outline.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ai$2f$flows$2f$suggest$2d$panel$2d$content$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/ai/flows/suggest-panel-content.ts [app-rsc] (ecmascript)");
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
}}),
"[project]/.next-internal/server/app/[toolId]/page/actions.js { ACTIONS_MODULE0 => \"[project]/src/app/actions.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE1 => \"[project]/src/ai/flows/generate-tool-outline.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE2 => \"[project]/src/ai/flows/suggest-panel-content.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/actions.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ai$2f$flows$2f$generate$2d$tool$2d$outline$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/ai/flows/generate-tool-outline.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ai$2f$flows$2f$suggest$2d$panel$2d$content$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/ai/flows/suggest-panel-content.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f5b$toolId$5d2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$app$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$src$2f$ai$2f$flows$2f$generate$2d$tool$2d$outline$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE2__$3d3e$__$225b$project$5d2f$src$2f$ai$2f$flows$2f$suggest$2d$panel$2d$content$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/[toolId]/page/actions.js { ACTIONS_MODULE0 => "[project]/src/app/actions.ts [app-rsc] (ecmascript)", ACTIONS_MODULE1 => "[project]/src/ai/flows/generate-tool-outline.ts [app-rsc] (ecmascript)", ACTIONS_MODULE2 => "[project]/src/ai/flows/suggest-panel-content.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
}}),
"[project]/.next-internal/server/app/[toolId]/page/actions.js { ACTIONS_MODULE0 => \"[project]/src/app/actions.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE1 => \"[project]/src/ai/flows/generate-tool-outline.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE2 => \"[project]/src/ai/flows/suggest-panel-content.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <exports>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "400fa11fd1f6abaa87ad5b953941701e45eefdf451": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["deleteTool"]),
    "40421a2d3b9a50a4289a9ccdf9a542ada4c0b764f6": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ai$2f$flows$2f$generate$2d$tool$2d$outline$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["generateToolOutline"]),
    "40aa060cef9d61d938d4ce1458951624b32ec279ab": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ai$2f$flows$2f$suggest$2d$panel$2d$content$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["suggestPanelContent"]),
    "40c808ee704c0885a587cc5fac5ea72d6ee681ccd9": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["saveTool"]),
    "60552135523f2a280c5f48c8d9d72391356cbe9b39": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["deleteTab"]),
    "7073f0bbcfb0dd0632ef6d01f08898e681a46ee881": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addPanel"]),
    "708f6ff91ce2b9af78008dbedf036eae6d43f2708c": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addTab"]),
    "70baffb10a76e59d64795e8cf2b70d0304d596bd8e": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["deletePanel"]),
    "782e9318771674b2612187883aa35a0f1b26e216e9": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["updatePanelContent"]),
    "78ddce78b81e2b0ac4630451198272cb3480bfae6c": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["updatePanelDetails"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/actions.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ai$2f$flows$2f$generate$2d$tool$2d$outline$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/ai/flows/generate-tool-outline.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ai$2f$flows$2f$suggest$2d$panel$2d$content$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/ai/flows/suggest-panel-content.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f5b$toolId$5d2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$app$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$src$2f$ai$2f$flows$2f$generate$2d$tool$2d$outline$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE2__$3d3e$__$225b$project$5d2f$src$2f$ai$2f$flows$2f$suggest$2d$panel$2d$content$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/[toolId]/page/actions.js { ACTIONS_MODULE0 => "[project]/src/app/actions.ts [app-rsc] (ecmascript)", ACTIONS_MODULE1 => "[project]/src/ai/flows/generate-tool-outline.ts [app-rsc] (ecmascript)", ACTIONS_MODULE2 => "[project]/src/ai/flows/suggest-panel-content.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
}}),
"[project]/.next-internal/server/app/[toolId]/page/actions.js { ACTIONS_MODULE0 => \"[project]/src/app/actions.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE1 => \"[project]/src/ai/flows/generate-tool-outline.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE2 => \"[project]/src/ai/flows/suggest-panel-content.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "400fa11fd1f6abaa87ad5b953941701e45eefdf451": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f5b$toolId$5d2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$app$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$src$2f$ai$2f$flows$2f$generate$2d$tool$2d$outline$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE2__$3d3e$__$225b$project$5d2f$src$2f$ai$2f$flows$2f$suggest$2d$panel$2d$content$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["400fa11fd1f6abaa87ad5b953941701e45eefdf451"]),
    "40421a2d3b9a50a4289a9ccdf9a542ada4c0b764f6": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f5b$toolId$5d2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$app$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$src$2f$ai$2f$flows$2f$generate$2d$tool$2d$outline$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE2__$3d3e$__$225b$project$5d2f$src$2f$ai$2f$flows$2f$suggest$2d$panel$2d$content$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["40421a2d3b9a50a4289a9ccdf9a542ada4c0b764f6"]),
    "40aa060cef9d61d938d4ce1458951624b32ec279ab": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f5b$toolId$5d2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$app$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$src$2f$ai$2f$flows$2f$generate$2d$tool$2d$outline$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE2__$3d3e$__$225b$project$5d2f$src$2f$ai$2f$flows$2f$suggest$2d$panel$2d$content$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["40aa060cef9d61d938d4ce1458951624b32ec279ab"]),
    "40c808ee704c0885a587cc5fac5ea72d6ee681ccd9": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f5b$toolId$5d2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$app$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$src$2f$ai$2f$flows$2f$generate$2d$tool$2d$outline$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE2__$3d3e$__$225b$project$5d2f$src$2f$ai$2f$flows$2f$suggest$2d$panel$2d$content$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["40c808ee704c0885a587cc5fac5ea72d6ee681ccd9"]),
    "60552135523f2a280c5f48c8d9d72391356cbe9b39": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f5b$toolId$5d2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$app$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$src$2f$ai$2f$flows$2f$generate$2d$tool$2d$outline$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE2__$3d3e$__$225b$project$5d2f$src$2f$ai$2f$flows$2f$suggest$2d$panel$2d$content$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["60552135523f2a280c5f48c8d9d72391356cbe9b39"]),
    "7073f0bbcfb0dd0632ef6d01f08898e681a46ee881": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f5b$toolId$5d2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$app$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$src$2f$ai$2f$flows$2f$generate$2d$tool$2d$outline$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE2__$3d3e$__$225b$project$5d2f$src$2f$ai$2f$flows$2f$suggest$2d$panel$2d$content$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["7073f0bbcfb0dd0632ef6d01f08898e681a46ee881"]),
    "708f6ff91ce2b9af78008dbedf036eae6d43f2708c": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f5b$toolId$5d2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$app$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$src$2f$ai$2f$flows$2f$generate$2d$tool$2d$outline$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE2__$3d3e$__$225b$project$5d2f$src$2f$ai$2f$flows$2f$suggest$2d$panel$2d$content$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["708f6ff91ce2b9af78008dbedf036eae6d43f2708c"]),
    "70baffb10a76e59d64795e8cf2b70d0304d596bd8e": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f5b$toolId$5d2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$app$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$src$2f$ai$2f$flows$2f$generate$2d$tool$2d$outline$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE2__$3d3e$__$225b$project$5d2f$src$2f$ai$2f$flows$2f$suggest$2d$panel$2d$content$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["70baffb10a76e59d64795e8cf2b70d0304d596bd8e"]),
    "782e9318771674b2612187883aa35a0f1b26e216e9": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f5b$toolId$5d2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$app$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$src$2f$ai$2f$flows$2f$generate$2d$tool$2d$outline$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE2__$3d3e$__$225b$project$5d2f$src$2f$ai$2f$flows$2f$suggest$2d$panel$2d$content$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["782e9318771674b2612187883aa35a0f1b26e216e9"]),
    "78ddce78b81e2b0ac4630451198272cb3480bfae6c": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f5b$toolId$5d2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$app$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$src$2f$ai$2f$flows$2f$generate$2d$tool$2d$outline$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE2__$3d3e$__$225b$project$5d2f$src$2f$ai$2f$flows$2f$suggest$2d$panel$2d$content$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["78ddce78b81e2b0ac4630451198272cb3480bfae6c"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f5b$toolId$5d2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$app$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$src$2f$ai$2f$flows$2f$generate$2d$tool$2d$outline$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE2__$3d3e$__$225b$project$5d2f$src$2f$ai$2f$flows$2f$suggest$2d$panel$2d$content$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/[toolId]/page/actions.js { ACTIONS_MODULE0 => "[project]/src/app/actions.ts [app-rsc] (ecmascript)", ACTIONS_MODULE1 => "[project]/src/ai/flows/generate-tool-outline.ts [app-rsc] (ecmascript)", ACTIONS_MODULE2 => "[project]/src/ai/flows/suggest-panel-content.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <module evaluation>');
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f5b$toolId$5d2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$app$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$src$2f$ai$2f$flows$2f$generate$2d$tool$2d$outline$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE2__$3d3e$__$225b$project$5d2f$src$2f$ai$2f$flows$2f$suggest$2d$panel$2d$content$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/[toolId]/page/actions.js { ACTIONS_MODULE0 => "[project]/src/app/actions.ts [app-rsc] (ecmascript)", ACTIONS_MODULE1 => "[project]/src/ai/flows/generate-tool-outline.ts [app-rsc] (ecmascript)", ACTIONS_MODULE2 => "[project]/src/ai/flows/suggest-panel-content.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <exports>');
}}),
"[project]/src/app/favicon.ico.mjs { IMAGE => \"[project]/src/app/favicon.ico (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript, Next.js server component)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/favicon.ico.mjs { IMAGE => \"[project]/src/app/favicon.ico (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript)"));
}}),
"[project]/src/app/layout.tsx [app-rsc] (ecmascript, Next.js server component)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/layout.tsx [app-rsc] (ecmascript)"));
}}),
"[project]/src/app/[toolId]/page.tsx (client reference/proxy) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/src/app/[toolId]/page.tsx <module evaluation> from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/app/[toolId]/page.tsx <module evaluation>", "default");
}}),
"[project]/src/app/[toolId]/page.tsx (client reference/proxy)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/src/app/[toolId]/page.tsx from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/app/[toolId]/page.tsx", "default");
}}),
"[project]/src/app/[toolId]/page.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f5b$toolId$5d2f$page$2e$tsx__$28$client__reference$2f$proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/app/[toolId]/page.tsx (client reference/proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f5b$toolId$5d2f$page$2e$tsx__$28$client__reference$2f$proxy$29$__ = __turbopack_context__.i("[project]/src/app/[toolId]/page.tsx (client reference/proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f5b$toolId$5d2f$page$2e$tsx__$28$client__reference$2f$proxy$29$__);
}}),
"[project]/src/app/[toolId]/page.tsx [app-rsc] (ecmascript, Next.js server component)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/[toolId]/page.tsx [app-rsc] (ecmascript)"));
}}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__125aef1f._.js.map