import globals from "globals";
import pluginJs from "@eslint/js";
import eslintConfigPrettier from "eslint-config-prettier";

export default [
    pluginJs.configs.recommended,
    eslintConfigPrettier,
    {
        languageOptions: {
            ecmaVersion: 2022,
            sourceType: "module",
            globals: {
                ...globals.browser,
                $: "readonly",
                ActiveEffect: "readonly",
                ActiveEffectConfig: "readonly",
                Actor: "readonly",
                Actors: "readonly",
                ActorSheet: "readonly",
                AudioHelper: "readonly",
                BaseItem: "readonly",
                ChatMessage: "readonly",
                Collection: "readonly",
                ContextMenu: "readonly",
                Dialog: "readonly",
                DocumentSheet: "readonly",
                Folder: "readonly",
                FormDataExtended: "readonly",
                Handlebars: "readonly",
                Hooks: "readonly",
                Item: "readonly",
                Items: "readonly",
                ItemSheet: "readonly",
                Macro: "readonly",
                Macros: "readonly",
                MacroConfig: "readonly",
                MersenneTwister: "readonly",
                Ray: "readonly",
                Roll: "readonly",
                SearchFilter: "readonly",
                SettingsConfig: "readonly",
                SortingHelpers: "readonly",
                TextEditor: "readonly",
                Token: "readonly",
                TokenDocument: "readonly",
                Tour: "readonly",
                CONFIG: "readonly",
                CONST: "readonly",
                foundry: "readonly",
                game: "readonly",
                canvas: "readonly",
                ui: "readonly",
                fromUuid: "readonly",
                fromUuidSync: "readonly",
                renderTemplate: "readonly",
                loadTemplates: "readonly",
                SimpleCalendar: "readonly",
            },
        },
    },
];
