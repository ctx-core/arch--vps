import { tempfile_ } from '@ctx-core/tempfile'
import { be_ } from 'ctx-core/be'
import { run } from 'ctx-core/function'
import { be_sig_triple_ } from 'ctx-core/rmemo'
import { createWriteStream } from 'fs'
import { Writable } from 'stream'
import { $ } from 'zx'
import { app_name_ } from '../app_name/index.js'
import { ssh_url_ } from '../ssh_url/index.js'
export const [
	dotenv$_,
	dotenv_,
	dotenv__set
] = be_sig_triple_(()=>({}))
export const dotenv__scp = be_(ctx=>run(async ()=>{
	console.log('dotenv__scp')
	const env = dotenv_(ctx)
	env.NODE_ENV = 'development'
	const dotenv_path = await tempfile_()
	try {
		await new ReadableStream({
			start(controller) {
				/** @type {keyof typeof env} */
				let key
				for (key in env) {
					controller.enqueue(`${key}=${env[key]}\n`)
				}
				controller.close()
			}
		}).pipeTo(Writable.toWeb(createWriteStream(dotenv_path)))
		// language=sh
		await $`scp ${dotenv_path} ${ssh_url_(ctx)}:~/work/${app_name_(ctx)}/.env`
	} finally {
		// language=sh
		await $`rm -f ${dotenv_path}`
	}
}))
