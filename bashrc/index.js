import { tempfile_path_ } from '@ctx-core/tempfile'
import { be_ } from 'ctx-core/be'
import { run } from 'ctx-core/function'
import { be_sig_triple_ } from 'ctx-core/rmemo'
import { readFile, writeFile } from 'fs/promises'
import { dirname } from 'path'
import { ssh } from 'zx'
import { ssh_url_ } from '../ssh_url/index.js'
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
		const tempfile = await tempfile_path_()
		await writeFile(tempfile, bashrc__content)
		// language=sh
		await ssh(ssh_url_(ctx))`scp ${tempfile} ${ssh_url_(ctx)}:~/sshd_config`
	}
}))
