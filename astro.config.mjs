import { defineConfig } from 'astro/config';
import pandacss from '@pandacss/astro'
import angular from '@analogjs/astro-angular';

// https://astro.build/config
export default defineConfig({
    integrations:[
        pandacss(),
        angular({
            // vite: {
            //     inlineStylesExtension: 'scss|sass|less',
            //     ssr: {
            //         noExternal: ['@rx-angular/**'],
            //     }
            // },
        })
    ]
});
