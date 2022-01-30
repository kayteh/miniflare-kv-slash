import { Miniflare } from "miniflare";

const mf = new Miniflare({
    kvNamespaces: ["TEST_NAMESPACE"],
    kvPersist: true,
    script: `addEventListener("fetch", () => new Response(null));`,
});

const ns = await mf.getKVNamespace("TEST_NAMESPACE");
await ns.put("foo/bar", "baz");
await ns.put("foo", "bar");