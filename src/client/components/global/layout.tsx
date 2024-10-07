import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable"
import SidebarMenu from '@/components/sidebar/sidebar-menu'
import NoteList from '@/components/containers/notelist';
import { Helmet, HelmetProvider } from 'react-helmet-async'
import { useSelector } from 'react-redux';
import { RootState } from '@/lib/redux/store';
import { MenuType } from '@/lib/enums';
import Tagslist from '@/components/containers/tagslist';
import Favorites from '@/components/containers/favorites';
import TrashNotes from '@/components/containers/trash';
import Settings from '@/components/containers/settings';

const Layout = ({ children }: { children: React.ReactNode }) => {
  const activeMenu = useSelector((state: RootState) => state.app.activeMenu);

  return (
    <HelmetProvider>
      <Helmet>
        <title>Conotes App</title>
        <meta name="description" content="A web-based notes app for everyone" />
        <link rel="icon" href="/favicon.ico" />
      </Helmet>
        <div className='w-screen h-screen flex p-2'>
          <SidebarMenu />
          <ResizablePanelGroup
            direction="horizontal"
          >
            <ResizablePanel defaultSize={25}>
              {activeMenu === MenuType.NOTES && <NoteList />}
              {activeMenu === MenuType.TAGS && <Tagslist />}
              {activeMenu === MenuType.FAVORITES && <Favorites />}
              {activeMenu === MenuType.TRASH && <TrashNotes />}
              {activeMenu === MenuType.SETTINGS && <Settings />}
            </ResizablePanel>
            <ResizableHandle withHandle className='bg-transparant' />
            <ResizablePanel defaultSize={75}>
              <div className="flex h-full items-center justify-center">
                {children}
              </div>
            </ResizablePanel>
          </ResizablePanelGroup>
        </div>
    </HelmetProvider>
  )
}

export default Layout
