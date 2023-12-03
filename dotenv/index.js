import { file_exists__waitfor } from '@ctx-core/fs'
import { tempfile_path_ } from '@ctx-core/tempfile'
import { be_ } from 'ctx-core/be'
import { run } from 'ctx-core/function'
import { be_sig_triple_ } from 'ctx-core/rmemo'
import { unlink, writeFile } from 'fs/promises'
import { $ } from 'zx'
import { app_name_ } from '../app_name/index.js'
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
	const tempfile_path = await tempfile_path_()
	await writeFile(tempfile_path, dotenv__content)
	await file_exists__waitfor(tempfile_path)
	try {
		// language=sh
		await $`scp ${tempfile_path} ${ssh_url_(ctx)}:/home/${ssh_url_(ctx)}/work/${app_name_(ctx)}/.env`
	} finally {
		await unlink(tempfile_path)
	}
}))
