import { LabelText } from '@/lib/label-text';
import { Separator } from '../ui/separator';
import { ScrollArea } from '../ui/scroll-area';

const Settings = () => {

    return (
        <aside className='py-4 border rounded-2xl mx-2 bg-zinc-100 dark:bg-white/5 h-full'>
            <div className="flex items-center justify-between mb-2 px-4 pb-4">
                <span className="text-xl font-bold">{LabelText.SETTINGS}</span>
            </div>

            <Separator orientation='horizontal' />
            <ScrollArea className='px-2'>
                {/* content */}
            </ScrollArea>
        </aside>
    )
}

export default Settings;