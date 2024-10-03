import './App.css'
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable"
import Sidebar from './components/sidebar/sidebar'
import {isMobile} from 'react-device-detect';
import { ThemeProvider } from './providers/theme-provider'
import MobileNotice from './components/global/mobile-notice'
import NoteEditor from './components/editor/note-editor';
import NoteList from './components/containers/notelist';

function App() {

  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      {isMobile ? (
        <MobileNotice />
      ) : (
        <div className='w-screen h-screen flex p-2'>
          <Sidebar />
        <ResizablePanelGroup
          direction="horizontal"
        >
          <ResizablePanel defaultSize={25}>
            <NoteList />
          </ResizablePanel>
          <ResizableHandle withHandle className='bg-transparant' />
          <ResizablePanel defaultSize={75}>
            <div className="flex h-full items-center justify-center">
             <NoteEditor />
            </div>
          </ResizablePanel>
        </ResizablePanelGroup>
      </div>
      )}
    </ThemeProvider>
  )
}

export default App
