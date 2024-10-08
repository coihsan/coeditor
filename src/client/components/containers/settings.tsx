import { LabelText } from '@/lib/label-text';
import { Separator } from '../ui/separator';
import { ScrollArea } from '../ui/scroll-area';
import { Button } from '../ui/button';
import { useAppDispatch } from '@/lib/redux/hooks';
import { setToggleEditor } from '@/lib/redux/slice/app';

const Settings = () => {
    const dispatch = useAppDispatch()


    return (
        <aside className='py-4 border rounded-2xl mx-2 bg-zinc-100 dark:bg-white/5 h-full'>
            <div className="flex items-center justify-between mb-2 px-4 pb-4">
                <span className="text-xl font-bold">{LabelText.SETTINGS}</span>
            </div>

            <Separator orientation='horizontal' />
            <ScrollArea className='px-2'>
                <div className='p-4'>
                    <div className='flex justify-between items-center'>
                        Toolbar
                        <div className='flex items-center gap-2'>
                            <Button variant={'ghost'} onClick={() => dispatch(setToggleEditor(true))}>Default</Button>
                            <Button variant={'ghost'} onClick={() => dispatch(setToggleEditor(false))}>Bubble</Button>
                        </div>
                    </div>
                    <Separator className='my-4' />
                </div>
            </ScrollArea>
        </aside>
    )
}

export default Settings;