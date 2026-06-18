import Article from "./components/article";
import Layout from "./layout/layout";
import Button from "./components/buttons";
import Input from "./components/inputs/inputs";

import { parseMarkdown, getAllPages, type Module, type Page } from "./parse";

import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import CodeSnippet from "./components/codesnippet";

const components = {
    h1: ({ children }: { children?: React.ReactNode }) => (
        <h2>{children}</h2>
    ),
    h2: ({ children }: { children?: React.ReactNode }) => (
        <h3>{children}</h3>
    ),
    h3: ({ children }: { children?: React.ReactNode }) => (
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
  const pathname = useLocation().pathname;
  
  if (location === "/") {
    location = "/docs/index";
  } else {
    location = location.substring(1);
  }

  console.log(location);

  const allPages = getAllPages();

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
            {
              allPages.index && (
                <Layout.SidebarListItem key="index" isIndex={true} isActive={pathname === allPages.index.url}>
                  <Link to={allPages.index.url}>{allPages.index.header.title}</Link>
                </Layout.SidebarListItem>
              )
            }
            {
              allPages.children && allPages.children.map((child, index : number) => {
                return (child as Module).index ? (
                  <Layout.SidebarSection key={index} title={(child as Module).index.header.title}>
                    <Layout.SidebarListItem isIndex={true} key={`${index}-index`} isActive={pathname === (child as Module).index.url}>
                      <Link to={(child as Module).index.url}>{(child as Module).index.header.title}</Link>
                    </Layout.SidebarListItem>
                    {(child as Module).children && (child as Module).children.map((page, pageIndex : number) => (
                      <Layout.SidebarListItem key={`${index}-${pageIndex}`} isActive={pathname === (page as Page).url}>
                        <Link to={(page as Page).url}>{(page as Page).header.title}</Link>
                      </Layout.SidebarListItem>
                    ))}
                  </Layout.SidebarSection>
                ) : null;
              })
            }
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
              <Article.Metadata>{parseMarkdown(location).header.dataType}</Article.Metadata>
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
