import { tempfile_ } from '@ctx-core/tempfile'
import { be_ } from 'ctx-core/be'
import { run } from 'ctx-core/function'
import { be_sig_triple_ } from 'ctx-core/rmemo'
import { writeFile } from 'fs/promises'
import { ssh } from 'zx'
import { ssh_url_ } from '../ssh_url/index.js'
export const [
	dotenv$_,
	dotenv_,
	dotenv__set
] = be_sig_triple_(()=>({}))
export const dotenv__upload = be_(ctx=>run(async ()=>{
	console.log('dotenv__upload')
	const env = dotenv_(ctx)
	env.NODE_ENV = 'development'
	const dotenv__content_a = []
	for (let key in env) {
		dotenv__content_a.push(`${key}=${env[key]}`)
	}
	const dotenv__content = dotenv__content_a.join('\n')
	const tempfile = await tempfile_()
	await writeFile(tempfile, dotenv__content)
	// language=sh
	await ssh(ssh_url_(ctx))`scp ${tempfile} ${ssh_url_(ctx)}:~/sshd_config`
}))
