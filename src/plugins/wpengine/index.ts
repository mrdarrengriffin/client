import type { Plugin } from "vue";

import BackupButton from "./components/BackupButton.vue";
import { useSharedStore } from "@/stores/shared";

const icon = '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 109 109"><path d="M36.683 108.096h34.729v-26.42l-8.307-8.308H44.988l-8.3 8.306-.005 26.422ZM81.673 36.684l-8.309 8.309v18.115l8.309 8.306h26.418v-34.73H81.673ZM71.414 0H36.683v26.424l8.306 8.306h18.115l8.308-8.306L71.414 0ZM108.09 108.096v-26.42l-8.3-8.309H73.366v34.728l34.724.001ZM8.306.001 0 8.31v26.419h34.729V.001H8.306ZM73.366 0v26.424l8.309 8.306h26.415V0H73.366ZM54.048 59.023a4.975 4.975 0 1 1 0-9.95 4.975 4.975 0 0 1 0 9.95ZM34.73 36.684H.001v34.73h26.421l8.308-8.306V36.684ZM34.73 81.673l-8.308-8.308H.001v34.73h26.421l8.308-8.3V81.673Z" fill="currentColor"/></svg>';
const wpenginePlugin: Plugin = {
    install(app) {       
        app.component("BackupButton", BackupButton);

        const sharedStore = useSharedStore();

        // Remove d-none from the "Integrations" divider
        sharedStore.sidebars.contextual.settings.items.forEach((item) => {
            if (item.divider === "Integrations") {
                item.class = "";
            }
        });

        // Add WPEngine to the sidebar
        sharedStore.sidebars.contextual.settings.items.push({
            label: "WP Engine",
            name: "account-wp-engine",
            iconSvg: icon,
        });
    }
};

export default wpenginePlugin;