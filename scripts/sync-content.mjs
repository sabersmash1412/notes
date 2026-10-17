import { cp, mkdir, readdir, rm, writeFile } from "node:fs/promises"
import path from "node:path"
import { fileURLToPath } from "node:url"

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..")
const content = path.join(root, "content")
await rm(content, { recursive: true, force: true })
await mkdir(content, { recursive: true })

for (const name of ["SWE.md", "OOP-Java.md"]) {
  await cp(path.join(root, name), path.join(content, name))
}
await cp(path.join(root, "docs/networking"), path.join(content, "networking"), { recursive: true })
await writeFile(path.join(content, "index.md"), `---
title: BR9 Notes
description: Concise course notes for quick revision.
---

# BR9 Notes

- [[SWE|Software Engineering]]
- [[OOP-Java|Object-Oriented Programming and Java]]
- [[networking/networks-summary|Computer Networks]]
- [[networking/the-osi-model|The OSI Model]]
`)

const entries = await readdir(content)
console.log(`Prepared ${entries.length} top-level note entries for Quartz.`)
