import { be_ } from 'ctx-core/be'
import { run } from 'ctx-core/function'
import { be_sig_triple_ } from 'ctx-core/rmemo'
import { readFile } from 'fs/promises'
import { dirname } from 'path'
import { $, ssh } from 'zx'
import { ssh_url_ } from '../ssh_url/index.js'
import { ssh_user_ } from '../ssh_user/index.js'
export const [
	bashrc__content$_,
	bashrc__content_,
	bashrc__content__set,
] = be_sig_triple_(()=>undefined)
export const bashrc__upload = be_(ctx=>run(async ()=>{
	console.log('bashrc__scp')
	const dir = dirname(new URL(import.meta.url).pathname)
	const bashrc__content =
		bashrc__content_(ctx)
		?? await readFile(`${dir}/../fs/home/admin/.bashrc`).then(buf=>buf.toString())
	if (typeof bashrc__content === 'string') {
		// language=sh
		await $`scp ${dir}/../fs/home/admin/.bashrc ${ssh_url_(ctx)}:~`
		await ssh(ssh_url_(ctx))` > /home/${ssh_user_(ctx)}/.bashrc
			sudo cat<<-EOF
${bashrc__content}
			EOF
		`
	}
}))
