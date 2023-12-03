import { be_ } from 'ctx-core/be'
import { run } from 'ctx-core/function'
import { dirname } from 'path'
import { $, ssh } from 'zx'
import { ssh_url_ } from '../ssh_url/index.js'
export const sshd_config__scp = be_(ctx=>run(async ()=>{
	console.log('sshd_config__scp')
	const dir = dirname(new URL(import.meta.url).pathname)
	// language=sh
	await $`scp ${dir}/../fs/etc/ssh/sshd_config ${ssh_url_(ctx)}:~/sshd_config`
	// language=sh
	await ssh(ssh_url_(ctx))`sudo mv ~/sshd_config /etc/ssh/sshd_config`
}))
