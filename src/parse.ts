const docs = import.meta.glob(
    "../docs/**/*.mdx",
    {
        query: "?raw",
        import: "default",
        eager: true
    }
) as Record<string, string>;

export default function parseMarkdown(path: string): { header: { title: string; description: string }; sections: string[] } {
    const content = docs[`../docs/${path}.mdx`];
    const sections = content
    .split(/^\s*---\s*$/gm)
    .map(section => section.trim())
    .filter(Boolean);

    return {
        header: {
            title: content.split("\n")[1].substring(7).trim(),
            description: content.split("\n")[2].substring(13).trim()
        },
        sections: sections.slice(1).filter(s => s.trim())
    };
}