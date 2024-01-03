import { be_ } from 'ctx-core/be'
import { run } from 'ctx-core/run'
import { ssh } from 'zx'
import { ssh_url_ } from '../ssh_url/index.js'
export const lsof__install = be_(ctx=>run(async ()=>{
	console.log('lsof__install')
	// language=sh
	await ssh(ssh_url_(ctx))`sudo pacman -S lsof --noconfirm`
}))
