import { be_ } from 'ctx-core/be'
import { be_memo_pair_ } from 'ctx-core/rmemo'
import { run } from 'ctx-core/run'
import { ssh } from 'zx'
import { ssh_url_ } from '../ssh_url/index.js'
import { ssh_user_ } from '../ssh_user/index.js'
export const [
	work_path$_,
	work_path_,
] = be_memo_pair_(ctx=>`/home/${ssh_user_(ctx)}/work`)
export const work__mkdir = be_(ctx=>run(async ()=>{
	console.log('work__mkdir')
	// language=sh
	await ssh(ssh_url_(ctx))`mkdir -p ${work_path_(ctx)}`
}))
