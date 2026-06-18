export interface Page {
    header: {
        title: string;
        description: string;
        dataType: string;
    },
    content: string;
    url: string;
}

export interface Module {
    index: Page;
    children: Array<Module | Page>;
}

export const docs = import.meta.glob(
    "../docs/**/*.mdx",
    {
        query: "?raw",
        import: "default",
        eager: true
    }
) as Record<string, string>;

export function parseMarkdown(path: string): { header: { title: string; description: string; dataType: string }; sections: string[] } {
    let filePath = `../${path}.mdx`;
    if (path.endsWith("/")) {
        filePath = filePath.replace("/.mdx", "/index.mdx");
    }

    console.log("Parsing Markdown for file path:", filePath);

    const content = docs[filePath];

    const headerContent = content.split("---").slice(1, 2)[0];
    const headerLines = headerContent.split("\n").filter(line => line.trim() !== "");
    const header = {
        title: headerLines.find(line => line.startsWith("title:"))?.replace("title:", "").trim() || "",
        description: headerLines.find(line => line.startsWith("description:"))?.replace("description:", "").trim() || "",
        dataType: headerLines.find(line => line.startsWith("dataType:"))?.replace("dataType:", "").trim() || "",
    };

    const sections = content.split("\n---\n").slice(1);
    
    return {
        header: header,
        sections: sections
    }
}

export function getAllPages(): Module {
    const tree: Module = {} as Module;

    const paths = Object.keys(docs).map(key => key.replace("../docs/", "").replace(".mdx", "").split("/"));

    for (const pathParts of paths) {
        let currentNode: Module = tree;

        for (let i = 0; i < pathParts.length; i++) {
            const part = pathParts[i];
            const isLastPart = i === pathParts.length - 1;
            const isModuleIndex = part === "index";

            if (isModuleIndex) {
                const pageContent = docs[`../docs/${pathParts.slice(0, i + 1).join("/")}.mdx`];
                const headerSections = pageContent.split("---").slice(1, 2)[0].split("\n").filter(line => line.trim() !== "");
                const page: Page = {
                    header: {
                        title: headerSections.find(line => line.startsWith("title:"))?.replace("title:", "").trim() || "",
                        description: headerSections.find(line => line.startsWith("description:"))?.replace("description:", "").trim() || "",
                        dataType: headerSections.find(line => line.startsWith("dataType:"))?.replace("dataType:", "").trim() || "",
                    },
                    content: pageContent.replace(/---[\s\S]*?---/, "").trim(),
                    url: `/docs/${pathParts.slice(0, i + 1).join("/")}/`.replace("/index/", "/").replace("/index", "/"),
                };
                currentNode.index = page;
            } else if (isLastPart) {
                const pageContent = docs[`../docs/${pathParts.join("/")}.mdx`];
                const headerSections = pageContent.split("---").slice(1, 2)[0].split("\n").filter(line => line.trim() !== "");
                const page: Page = {
                    header: {
                        title: headerSections.find(line => line.startsWith("title:"))?.replace("title:", "").trim() || "",
                        description: headerSections.find(line => line.startsWith("description:"))?.replace("description:", "").trim() || "",
                        dataType: headerSections.find(line => line.startsWith("dataType:"))?.replace("dataType:", "").trim() || "",
                    },
                    content: pageContent.replace(/---[\s\S]*?---/, "").trim(),
                    url: `/docs/${pathParts.join("/")}`,
                };
                if (!currentNode.children) {
                    currentNode.children = [];
                }
                currentNode.children.push(page);
            } else {
                let childNode = currentNode.children?.find(child => "index" in child && child.index.header.title.toLowerCase() === part) as Module | undefined;
                if (!childNode) {
                    childNode = { index: { header: { title: part, description: "", dataType: "" }, content: "", url: "" }, children: [] };
                    if (!currentNode.children) {
                        currentNode.children = [];
                    }
                    currentNode.children.push(childNode);
                }
                currentNode = childNode;
            }
        }
    }

    console.log("Constructed Module Tree:", tree);

    return tree;
}