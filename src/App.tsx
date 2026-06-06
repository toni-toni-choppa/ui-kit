import Article from "./components/article";
import Layout from "./layout/layout";
import Button from "./components/buttons";
import Input from "./components/inputs/inputs";

import { parseMarkdown, docs } from "./parse";

import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import CodeSnippet from "./components/codesnippet";

const components = {
    h1: ({ children }: { children?: React.ReactNode }) => (
        <h1>{children}</h1>
    ),
    h2: ({ children }: { children?: React.ReactNode }) => (
        <h2>{children}</h2>
    ),
    h3: ({ children }: { children?: React.ReactNode }) => (
        <h3>{children}</h3>
    ),
    h4: ({ children }: { children?: React.ReactNode }) => (
        <h4>{children}</h4>
    ),
    hr: () => <Article.Divider />,
    code: ({ className, children }: { className?: string, children?: React.ReactNode }) => {
          const match = /language-(\w+)/.exec(className || "");
          const language = match?.[1] ?? "text";

          return (
            <CodeSnippet
              language={language}
              code={String(children).replace(/\n$/, "")}
            />
          );
        },
};

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  let location = useLocation().pathname;
  
  if (location === "/") {
    location = "index";
  } else {
    location = location.substring(1);
  }

  return (
    <>
      <Layout>
        <Layout.Sidebar isOpen={isSidebarOpen}>
          <Button
            icon={<img src="/sidebar.svg" alt="Sidebar" height="16" />}
            onClick={() => {
              setIsSidebarOpen((prev) => !prev);
              console.log(isSidebarOpen);
            }}
            size="small"
            variant="transparent"
          />
          <Input.Text id="search" placeholder="Search" />
          <Layout.SidebarList>
            {Object.keys(docs).map((key) => {
              const path = key.replace("../docs/", "").replace(".mdx", "");
              const title = parseMarkdown(path).header.title;
              return (
                <Layout.SidebarListItem
                  key={path}
                  isActive={location === path}
                >
                  <Link to={`/${path === "index" ? "" : path}`}>{title}</Link>
                </Layout.SidebarListItem>
              );
            })}
          </Layout.SidebarList>
        </Layout.Sidebar>
        <Layout.Content>
          <Layout.Header>
            <Button
              icon={<img src="/sidebar.svg" alt="Sidebar" height="16" />}
              onClick={() => {
                setIsSidebarOpen((prev) => !prev);
                console.log(isSidebarOpen);
              }}
              size="small"
              variant="transparent"
            />
            <Layout.HeaderTitle>{parseMarkdown(location).header.title}</Layout.HeaderTitle>
          </Layout.Header>
          <Article>
            <Article.Header>
              <h2>{parseMarkdown(location).header.title}</h2>
              <Article.Metadata>{parseMarkdown(location).header.description}</Article.Metadata>
            </Article.Header>

            <Article.Divider />

            {
              parseMarkdown(location).sections.map((section, index) => (
                <>
                  <Article.Section key={index}>
                    <ReactMarkdown components={components}>{section}</ReactMarkdown>
                  </Article.Section>

                  <Article.Divider />
                </>
              ))
            }
          </Article>
        </Layout.Content>
      </Layout>
    </>
  );
}

export default App;
