import { file_exists_ } from '@ctx-core/fs'
import { be_ } from 'ctx-core/be'
import { run } from 'ctx-core/function'
import { $, ssh } from 'zx'
import { run_id_ } from '../run_id/index.js'
import { ssh_url_ } from '../ssh_url/index.js'
import { ssh_user_ } from '../ssh_user/index.js'
export const ssh_key__scp = be_(ctx=>run(async ()=>{
	// language=sh
	const id_ed25519 = 'id_ed25519'
	const local_path = `./tmp/.ssh/${id_ed25519}`
	await $`mkdir -p ./tmp/.ssh`
	if (
		!await file_exists_(local_path)
		|| !await file_exists_(`${local_path}.pub`)
	) {
		// language=sh
		await $`ssh-keygen -t ed25519 -C "brian.takita@gmail.com" -N '' -f ${local_path}`
	}
	// language=sh
	await ssh(ssh_url_(ctx))`
			mkdir -p ~/.ssh/.bak
			echo IdentityFile /home/${ssh_user_(ctx)}/.ssh/${id_ed25519} > ~/.ssh/config.new
			function finish() {
				rm -f ~/.ssh/config.new
			}
			trap finish EXIT
			if diff ~/.ssh/config ~/.ssh/config.new; then
				rm ~/.ssh/config.new
			else
				cp -n ~/.ssh/config ~/.ssh/.bak/config.${run_id_(ctx)}
				mv ~/.ssh/config.new ~/.ssh/config
			fi
		`
	// language=sh
	await $`scp ${local_path} ${local_path}.pub ${ssh_url_(ctx)}:~/.ssh`
}))
