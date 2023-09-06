import angular from '@analogjs/astro-angular';
import pandacss from '@pandacss/astro';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    integrations:[
        pandacss(),
        angular({
            vite: {
                inlineStylesExtension: 'scss|sass|less',
                ssr: {
                    noExternal: ['@rx-angular/**'],
                }
            },
        })
    ]
});
