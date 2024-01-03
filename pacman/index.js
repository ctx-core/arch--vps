import { be_ } from 'ctx-core/be'
import { run } from 'ctx-core/run'
import { ssh } from 'zx'
import { ssh_url_ } from '../ssh_url/index.js'
export const pacman__rm_lck = be_(ctx=>run(async ()=>{
	console.log('pacman__rm_lck')
	// language=sh
	await ssh(ssh_url_(ctx))`sudo rm -f /var/lib/pacman/db.lck`
}))
