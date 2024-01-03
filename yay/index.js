import { be_ } from 'ctx-core/be'
import { run } from 'ctx-core/run'
import { ssh } from 'zx'
import { base_devel__install } from '../base_devel/index.js'
import { ssh_url_ } from '../ssh_url/index.js'
import { work__mkdir, work_path_ } from '../work/index.js'
export const yay__install = be_(ctx=>run(async ()=>{
	console.log('yay__install')
	await base_devel__install(ctx)
	await work__mkdir(ctx)
	// language=sh
	await ssh(ssh_url_(ctx))`
		cd ${work_path_(ctx)}
		if [ ! -d yay ]; then
			git clone https://aur.archlinux.org/yay.git
			cd yay
			makepkg -si --noconfirm
		fi
	`
}))
export const yay__update = be_(ctx=>run(async ()=>{
	console.log('yay__update')
	await yay__install(ctx)
	// language=sh
	await ssh(ssh_url_(ctx))`yay --noconfirm`
}))
