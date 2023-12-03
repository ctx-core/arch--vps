import { be_ } from 'ctx-core/be'
import { run } from 'ctx-core/function'
import { ssh } from 'zx'
import { ssh_url_ } from '../ssh_url/index.js'
export const openssh__install = be_(ctx=>run(async ()=>{
	await ssh(ssh_url_(ctx))`sudo pacman -S openssh`
}))
