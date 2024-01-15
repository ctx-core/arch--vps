import { be_ } from 'ctx-core/be'
import { file_exists__waitfor } from 'ctx-core/fs'
import { be_sig_triple_ } from 'ctx-core/rmemo'
import { run } from 'ctx-core/run'
import { tempfile_path_ } from 'ctx-core/tempfile'
import { readFile, unlink, writeFile } from 'node:fs/promises'
import { dirname } from 'node:path'
import { $ } from 'zx'
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
		const tempfile_path = await tempfile_path_()
		await writeFile(tempfile_path, bashrc__content)
		await file_exists__waitfor(tempfile_path)
		try {
			// language=sh
			await $`scp ${tempfile_path} ${ssh_url_(ctx)}:/home/${ssh_user_(ctx)}/.bashrc`
		} finally {
			await unlink(tempfile_path)
		}
	}
}))
