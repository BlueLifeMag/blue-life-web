import type {SchemaTypeDefinition} from "sanity";
import {authorType} from "./author.ts";
import {blockContentType} from "./blockContent.ts";
import {categoryType} from "./category.ts";
import {postType} from "./post.ts";

export const schema: { types: SchemaTypeDefinition[] } = {
	types: [authorType, blockContentType, categoryType, postType],
}