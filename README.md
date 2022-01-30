# Miniflare Slash-in-KV Issue

`npm i && npm start`

## Why?

kvPersist writes disk by filename matching 1:1 with the entry key, keys with `/` included will write out a directory structure.

This means creating key like `foo/bar` creates a file `.mf/kv/TEST_NAMESPACE/foo/bar`, then also creating a key like `foo` will find `.mf/kv/TEST_NAMESPACE/foo` to already be a directory, and Node.js throws `EISDIR: illegal operation on a directory`.
