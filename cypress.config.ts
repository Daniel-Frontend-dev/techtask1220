import { defineConfig } from 'cypress';

export default defineConfig({
    e2e: {
        specPattern: 'tests/e2e/**/*.spec.ts',
        baseUrl: 'https://techtask1220.vercel.app/', // Adjust based on your app's URL
    },
});
