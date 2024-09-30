import './App.css'
import Editor from './components/editor/editor'
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable"
import Sidebar from './components/sidebar/sidebar'
import {isMobile} from 'react-device-detect';
import { ThemeProvider } from './providers/theme-provider'
import MobileNotice from './components/global/mobile-notice'
import SidebarOptions from './components/containers/sidebar-options';
function App() {

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      {isMobile ? (
        <MobileNotice />
      ) : (
        <div className='w-screen h-screen flex'>
          <Sidebar />
        <ResizablePanelGroup
          direction="horizontal"
        >
          <ResizablePanel defaultSize={25}>
            <SidebarOptions />
          </ResizablePanel>
          <ResizableHandle withHandle />
          <ResizablePanel defaultSize={75}>
            <div className="flex h-full items-center justify-center">
              <Editor />
            </div>
          </ResizablePanel>
        </ResizablePanelGroup>
      </div>
      )}
    </ThemeProvider>
  )
}

export default App
