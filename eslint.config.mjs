// eslint.config.js  
import { defineConfig } from 'eslint-define-config';  

export default defineConfig([  
    {  
        languageOptions: {  
            parser: '@babel/eslint-parser',  
            parserOptions: {  
                ecmaVersion: 2021,  
                sourceType: 'module',  
            },  
        },  
        rules: {  
            'semi': ['error', 'always'], // Require semicolons  
            'no-unused-vars': ['warn', { argsIgnorePattern: '^_', varsIgnorePattern: '^_' }], // Warn for unused variables  
        },  
        files: ['*.js'], // Apply this configuration to JavaScript files  
    },  
    // You can add additional configurations for other file types below if needed  
    {  
        files: ['*.ts'], // Example for TypeScript files  
        languageOptions: {  
            parser: '@typescript-eslint/parser', // Specify for TypeScript if needed  
        },  
        rules: {  
            'no-unused-vars': ['off'],
            'semi':  ['error', 'always'],// Example: Turn off unused vars for TypeScript  
        },  
    },  
]);