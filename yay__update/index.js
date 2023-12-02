import { be_ } from 'ctx-core/be'
import { run } from 'ctx-core/function'
import { ssh_url_ } from '../ssh_url/index.js'
import { yay__install } from '../yay__install/index.js'
import { ssh } from 'zx'
export const yay__update = be_(ctx=>run(async ()=>{
	await yay__install(ctx)
	// language=sh
	await ssh(ssh_url_(ctx))`yay --noconfirm`
}))
