import esbuild from "esbuild"
import glob from "fast-glob"

await esbuild.build({
	entryPoints: await glob("src/**/*.ts"),
	outdir: "build",
	target: "esnext",
	format: "cjs",
	platform: "node",
	logLevel: "info",
})
