import { LabelText } from '@/lib/label-text';
import DangerAction from '../global/danger-action';
import { Separator } from '../ui/separator';
import { ScrollArea } from '../ui/scroll-area';

const Account = () => {

    return (
        <aside className='py-4 border rounded-2xl mx-2 bg-zinc-100 dark:bg-white/5 h-full'>
            <div className="flex items-center justify-between mb-2 px-4 pb-4">
                <span className="text-xl font-bold">{LabelText.ACCOUNT}</span>
            </div>
            <Separator orientation='horizontal' />
            <ScrollArea className='px-2 h-full'>
               <div className='grid gap-2'>
                    <DangerAction name='Delete all notes' description='Are you sure to want delete all of your notes?' />
                    <DangerAction name='Delete account' description='Are you sure to want delete all of your notes?' />
               </div>
            </ScrollArea>
        </aside>
    )
}

export default Account;