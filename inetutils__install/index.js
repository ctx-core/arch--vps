import { be_ } from 'ctx-core/be'
import { run } from 'ctx-core/function'
import { ssh } from 'zx'
import { ssh_url_ } from '../ssh_url/index.js'
export const inetutils__install = be_(ctx=>run(async ()=>{
	// telnet
	// language=sh
	await ssh(ssh_url_(ctx))`yay -S inetutils --noconfirm`
}))
