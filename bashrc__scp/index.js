import { be_ } from 'ctx-core/be'
import { run } from 'ctx-core/function'
import { $ } from 'zx'
import { ssh_url_ } from '../ssh_url/index.js'
export const bashrc__scp = be_(ctx=>run(async ()=>{
	// language=sh
	await $`scp ./fs/home/admin/.bashrc ${ssh_url_(ctx)}:~`
}))
