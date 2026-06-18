import layout from "./layout.module.css";

function Container({ children }: { children: React.ReactNode }) {
  return <div className={layout.container}>{children}</div>;
}

function Header({ children }: { children: React.ReactNode }) {
  return <header className={layout.header}>{children}</header>;
}

function HeaderTitle({ children }: { children: React.ReactNode }) {
  return (
    <div className={layout.headerTitle}>
      <small>{children}</small>
    </div>
  );
}

function Sidebar({
  children,
  isOpen,
}: {
  children: React.ReactNode;
  isOpen: boolean;
}) {
  return (
    <aside
      className={`${layout.sidebar} ${isOpen ? layout["sidebar-shown"] : ""}`}
    >
      {children}
    </aside>
  );
}

function SidebarList({ children }: { children: React.ReactNode }) {
  return <ul className={layout.sidebarList}>{children}</ul>;
}

function SidebarSection({ children }: { title: string; children: React.ReactNode }) {
  return (
    <li className={layout.sidebarSection}>
      <ul className={layout.sidebarSectionList}>{children}</ul>
    </li>
  );
}

function SidebarListItem({ isIndex, children, isActive }: { isIndex?: boolean; children: React.ReactNode; isActive?: boolean }) {
  return <li className={`${layout.sidebarListItem} ${isActive ? layout["sidebarListItem-active"] : ""} ${isIndex ? layout["sidebarListItem-index"] : ""}`}>{children}</li>;
}

function Content({ children }: { children: React.ReactNode }) {
  return <main className={layout.content}>{children}</main>;
}

const Layout = Object.assign(Container, {
  Header,
  HeaderTitle,
  Sidebar,
  SidebarList,
  SidebarListItem,
  SidebarSection,
  Content,
});

export default Layout;
