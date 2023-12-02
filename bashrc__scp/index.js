import { be_ } from 'ctx-core/be'
import { run } from 'ctx-core/function'
import { dirname } from 'path'
import { $ } from 'zx'
import { ssh_url_ } from '../ssh_url/index.js'
export const bashrc__scp = be_(ctx=>run(async ()=>{
	const dir = dirname(new URL(import.meta.url).pathname)
	// language=sh
	await $`scp ${dir}/../fs/home/admin/.bashrc ${ssh_url_(ctx)}:~`
}))
