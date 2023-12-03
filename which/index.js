import { be_ } from 'ctx-core/be'
import { run } from 'ctx-core/function'
import { ssh } from 'zx'
import { ssh_url_ } from '../ssh_url/index.js'
export const which__install = be_(ctx=>run(async ()=>{
	console.log('which__install')
	// language=sh
	await ssh(ssh_url_(ctx))`sudo pacman -S which --noconfirm`
}))
