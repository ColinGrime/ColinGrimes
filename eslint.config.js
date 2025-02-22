import js from "@eslint/js";
import ts from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import importPlugin from "eslint-plugin-import";
import prettier from "eslint-plugin-prettier";
import react from "eslint-plugin-react";
import unicorn from "eslint-plugin-unicorn";

export default [
    js.configs.recommended,
    react.configs.flat.recommended,
    react.configs.flat["jsx-runtime"],
    unicorn.configs.recommended,
    {
        languageOptions: {
            parser: tsParser,
            sourceType: "module",
            ecmaVersion: "latest",
            parserOptions: {
                ecmaFeatures: { jsx: true },
            },
            globals: {
                window: "readonly",
                document: "readonly",
            },
        },
        plugins: {
            ts,
            react,
            prettier,
            import: importPlugin,
        },
        rules: {
            "react/react-in-jsx-scope": "off",
            "prettier/prettier": "error",
            // "import/order": [
            //     "error",
            //     {
            //         groups: ["builtin", "external", "internal", "parent", "sibling", "index"],
            //         "newlines-between": "always",
            //         alphabetize: { order: "asc", caseInsensitive: true },
            //     },
            // ],
        },
    },
];
