import type {QueryParams} from "sanity";
import {sanityClient} from "sanity:client";

const visualEditingEnabled = import.meta.env.PUBLIC_SANITY_VISUAL_EDITING_TOKEN === "true";
const token = import.meta.env.SANITY_API_READ_TOKEN;

export async function loadQuery<QueryResponse>({
		query,
		params,}: {
	query: string;
	params?: QueryParams;
}) {

	if (visualEditingEnabled && !token) {
		throw new Error("The `SANITY_API_READ_TOKEN` environment variable is not set. This is required for visual editing to work.");
	}

	const perspective = visualEditingEnabled ? "previewDrafts" : "published";

	const { result, resultSourceMap } = await sanityClient.fetch<QueryResponse>(
			query,
			params ?? {},
			{
				filterResponse: false,
				perspective,
				resultSourceMap: visualEditingEnabled ? "withKeyArraySelector": false,
				stega: visualEditingEnabled,
				...(visualEditingEnabled ? { token } : {}),
			},
	);

	return {
		data: result,
		sourceMap: resultSourceMap,
		perspective,
	};
}