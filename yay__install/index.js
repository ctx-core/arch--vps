import { be_ } from 'ctx-core/be'
import { run } from 'ctx-core/function'
import { ssh } from 'zx'
import { base_devel__install } from '../base_devel__install/index.js'
import { ssh_url_ } from '../ssh_url/index.js'
import { work__mkdir } from '../work__mkdir/index.js'
export const yay__install = be_(ctx=>run(async ()=>{
	await base_devel__install(ctx)
	await work__mkdir(ctx)
	// language=sh
	await ssh(ssh_url_(ctx))`
		cd ~/work
		if [ ! -d yay ]; then
			git clone https://aur.archlinux.org/yay.git
		fi
		cd yay
		makepkg -si --noconfirm
	`
}))
