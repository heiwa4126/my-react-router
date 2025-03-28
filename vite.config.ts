import react from "@vitejs/plugin-react";
import { type ConfigEnv, type UserConfig, defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig(({ command }: ConfigEnv) => {
	const cfg: UserConfig = {
		plugins: [react()],
		build: {
			minify: "esbuild",
			rollupOptions: {
				output: {
					manualChunks: {
						v: ["react", "react-dom", "react-router"],
					},
				},
			},
		},
	};

	if (command === "build") {
		// when `vite build`
		cfg.esbuild = {
			drop: ["console", "debugger"], // https://esbuild.github.io/api/#drop
		};
	}

	return cfg;
});
